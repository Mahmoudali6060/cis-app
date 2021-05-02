import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";

import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

import { BaseService } from './base.service';
import { remoteServerUrl } from '../../app.config';
import { UserTypeEnum } from '../../security/shared/user-type.enum';
import { HttpClient } from "@angular/common/http";

/**
 * When SignalR runs it will add functions to the global $ variable
 * that you use to create connections to the hub. However, in this
 * class we won't want to depend on any global variables, so this
 * class provides an abstraction away from using $ directly in here.
 */
export class SignalrWindow extends Window {
    jQuery: any;
}

export enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class ChannelConfig {
    url!:string;
    hubName!:string;
    channel!:string;
}

class ChannelSubject {
    channel!:string;
    subject: Subject<string> = new Subject<string>();
}



/**
 * ChannelService is a wrapper around the functionality that SignalR
 * provides to expose the ideas of channels and events. With this service
 * you can subscribe to specific channels (or groups in signalr speak) and
 * use observables to react to specific events sent out on those channels.
 */
@Injectable()
export class NotificationService extends BaseService {

    webApiURL = remoteServerUrl + 'notification';
    userTypeEnum: UserTypeEnum = new UserTypeEnum();

    /**
     * starting$ is an observable available to know if the signalr
     * connection is ready or not. On a successful connection this
     * stream will emit a value.
     */
    starting$: any;

    /**
     * connectionState$ provides the current state of the underlying
     * connection as an observable stream.
     */
    connectionState$: Observable<ConnectionState>;

    /**
     * error$ provides a stream of any error messages that occur on the
     * SignalR connection
     */
    error$: Observable<string>;

    // These are used to feed the public observables
    private connectionStateSubject = new Subject<ConnectionState>();
    private startingSubject = new Subject<any>();
    private errorSubject = new Subject<any>();

    // These are used to track the internal SignalR state
    //
    private hubConnection: any;
    private hubProxy: any;

    // An internal array to track what channel subscriptions exist
    //
    private subjects = new Array<ChannelSubject>();

    constructor(
        @Inject(SignalrWindow) private window: SignalrWindow,
        @Inject("channel.config") private channelConfig: ChannelConfig,
        private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router
    ) {
        // call parent constructor
        //super(localStorage, router);

        super(localStorage, router);

        if (this.window.jQuery === undefined || this.window.jQuery.hubConnection === undefined) {
            throw new Error("The variable 'jQuery' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }

        // Set up our observables
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();

        this.hubConnection = this.window.jQuery.hubConnection();
        this.hubConnection.url = channelConfig.url;
        this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);

        // Define handlers for any errors
        this.hubConnection.error((error: any) => {
            // Push the error on our subject
            this.errorSubject.next(error);
        });

        this.hubProxy.on("onEvent", (channel: string) => {
            //console.log(`onEvent - ${channel} channel`, ev);

            // This method acts like a broker for incoming messages. We
            //  check the interal array of subjects to see if one exists
            //  for the channel this came in on, and then emit the event
            //  on it. Otherwise we ignore the message.
            //
            let channelSub = this.subjects.find((x: ChannelSubject) => {
                return x.channel === channel;
            }) as ChannelSubject;

            // If we found a subject then emit the event on it
            if (channelSub !== undefined) {
                return channelSub.subject.next(channel);
            }
        });
    }

    /**
     * Start the SignalR connection. The starting$ stream will emit an
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    start(): void {
        // Now we only want the connection started once, so we have a special
        //  starting$ observable that clients can subscribe to know know if
        //  if the startup sequence is done.
        //
        // If we just mapped the start() promise to an observable, then any time
        //  a client subscried to it the start sequence would be triggered
        //  again since it's a cold observable.
        //
        this.hubConnection.start()
            .done(() => {
                this.startingSubject.next();
            })
            .fail((error: any) => {
                this.startingSubject.error(error);
            });
    }

    /**
     * Get an observable that will contain the data associated with a specific
     * channel
     * */
    sub(channel: string): Observable<string> {

        // Try to find an observable that we already created for the requested
        //  channel
        let channelSub = this.subjects.find((x: ChannelSubject) => {
            return x.channel === channel;
        }) as ChannelSubject;

        // If we already have one for this event, then just return it
        if (channelSub !== undefined) {
            console.log(`Found existing observable for ${channel} channel`)
            return channelSub.subject.asObservable();
        }

        //
        // If we're here then we don't already have the observable to provide the
        //  caller, so we need to call the server method to join the channel
        //  and then create an observable that the caller can use to received
        //  messages.

        // Now we just create our internal object so we can track this subject
        //  in case someone else wants it too
        channelSub = new ChannelSubject();
        channelSub.channel = channel;
        channelSub.subject = new Subject<string>();
        this.subjects.push(channelSub);

        // Now SignalR is asynchronous, so we need to ensure the connection is
        //  established before we call any server methods. So we'll subscribe to
        //  the starting$ stream since that won't emit a value until the connection
        //  is ready
        //
        this.starting$.subscribe(() => {
            this.hubProxy.invoke("Subscribe", channel)
                .done(() => {
                    console.log(`Successfully subscribed to ${channel} channel`);
                })
                .fail((error: any) => {
                    channelSub.subject.error(error);
                });
        },
            (error: any) => {
                channelSub.subject.error(error);
            });

        return channelSub.subject.asObservable();
    }

    // Not quite sure how to handle this (if at all) since there could be
    //  more than 1 caller subscribed to an observable we created
    //
    // unsubscribe(channel: string): Rx.any {
    //     this.observables = this.observables.filter((x: ChannelObservable) => {
    //         return x.channel === channel;
    //     });
    // }

    /** publish provides a way for calles to emit events on any channel. In a
     * production app the server would ensure that only authorized clients can
     * actually emit the message, but here we're not concerned about that.

    publish(ev: ChannelEvent): void {
        this.hubProxy.invoke("Publish", ev);
    }
    */

    getTopNotifications(): any {
        // get user Type and call appropriate function
        // Just prepend this to the messages string shown in the textarea
        let userType = this.localStorage.retrieve("UserType");

        if (userType == this.userTypeEnum.ClinicAdmin) {
            let clinicID = this.localStorage.retrieve("ClinicId");
            return this.getNotifications("topClinicNotifications", clinicID);
        }
        else if (userType == this.userTypeEnum.Doctor) {
            let doctorID = this.localStorage.retrieve("userid");
            return this.getNotifications("topDoctorNotifications", doctorID);
        }
        else {
            return this.getNotifications("emptyNotification", '');
        }

        //let emptyObject: any = {};
        //let topNotifications: any[] = [];
        //let numberOfUnRead: string = '';
        //emptyObject.topNotifications = topNotifications;
        //emptyObject.numberOfUnRead = numberOfUnRead;

        //return emptyObject;
    }

    getAllNotifications(): any {
        // get user Type and call appropriate function
        let userType = this.localStorage.retrieve("UserType");

        if (userType == this.userTypeEnum.ClinicAdmin) {
            let clinicID = this.localStorage.retrieve("ClinicId");
            return this.getNotifications("allClinicNotifications", clinicID);
        }
        else if (userType == this.userTypeEnum.Doctor) {
            let doctorID = this.localStorage.retrieve("userid");
            return this.getNotifications("allDoctorNotifications", doctorID);
        }
        else {
            return this.getNotifications("emptyNotification", '');
        }
    }

    getNotifications(actionName: string, id: string): any {
        return this.http.get(this.webApiURL + '/' + actionName + (id === '' ? '' : '/' + id), this.requestOptions)
            // .pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    sendNotification(body: any): any {
        return this.http.post(this.webApiURL + "/saveNotification", body, this.requestOptions)
            .pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    markNotificationAsRead(notificationId: string): any {
        // get user Type and call appropriate function
        let body: any = this.prepareNotificationObject(notificationId);

        return this.http.post(this.webApiURL + '/markNotificationasRead', body, this.requestOptions)
            .pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    markAllNotificationAsRead(): any {

        // get user Type and call appropriate function
        let body: any = this.prepareNotificationObject(null);

        return this.http.post(this.webApiURL + '/markAllNotificationasRead', body, this.requestOptions)
            .pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    prepareNotificationObject(notificationId: any): any {
        // get user Type and call appropriate function
        let userType = this.localStorage.retrieve("UserType");
        let objectId;

        if (notificationId == null || notificationId == undefined) {
            if (userType == this.userTypeEnum.ClinicAdmin) {
                objectId = this.localStorage.retrieve("ClinicId");
            }
            else if (userType == this.userTypeEnum.Doctor) {
                objectId = this.localStorage.retrieve("userid");
            }
            else //(userType == this.userTypeEnum.Operational)
            {
                objectId = 0;
            }
        }
        else
            objectId = notificationId;

        let notificationObj: any = {};
        notificationObj.UserType = userType;
        notificationObj.ObjectId = objectId;

        let isAdmin = this.localStorage.retrieve("HasAdminPermission");
        if (isAdmin)
            notificationObj.Email = "";
        else
            notificationObj.Email = this.localStorage.retrieve("Email");

        return notificationObj;
    }

}

