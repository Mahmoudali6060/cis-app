
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import 'rxjs/add/operator/share';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

import { BaseService } from '../../shared/shared/base.service';
import { remoteServerUrl } from '../../app.config';
import { UserPermissions } from '../../classes/user-permissions.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService extends BaseService {

    //private headers = new Headers({ 'Content-Type': 'application/json'});
    webApiURL = remoteServerUrl + 'account';
    webApiAdmURL = remoteServerUrl + 'administration';

    public userLoggedIn: boolean = false;
    public loggedInUserName!: string;
    public loggedInUserType!: string;
    public hasAdminPermission: boolean = false;
    public userPermision: any = [];
    public userPermisionsObserver: any;
    public modulesWrapper: any;
    public modulesWrapperObserver: any;
    public profileImagePath: string = '';
    //public userRole: string = '';

    //call this function when login status changes
    public changeLoginStatus(status: boolean, userName: string,
        userType: string, hasAdminPermission: boolean, profileImagePath: string) {
        this.userLoggedIn = status;
        this.loggedInUserName = userName;
        this.loggedInUserType = userType;
        this.hasAdminPermission = hasAdminPermission;
        this.profileImagePath = profileImagePath;
    }


    constructor(private http: HttpClient,
        public localStorage: LocalStorageService, public router: Router) {
        super(localStorage, router);
        // this.userPermision = ((observer: any) =>
        //     this.userPermisionsObserver = observer).share();
        // //modules
        // this.modulesWrapper = new any((observer: any) =>
        //     this.modulesWrapperObserver = observer).share();

    }

    //changeUserRole(role: string): void {
    //    this.userRole = role;
    //}

    register(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/register", body, this.requestOptions) // ...using post request
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    ChangePassword(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/changePassword", body, this.requestOptions)
        //.pipe()
        // //.catch((error: any) => this.handleError(error)); // ...using post request
    }

    generateAccessToken(body: any): any {

        let options: any = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
        var loginData = "grant_type=password&username=" + body.userName + "&password=" + body.password;

        return this.http.post(remoteServerUrl + "token", loginData, options) // ...using post request
        // .pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    authenticateUser(body: any): any {
        return this.http.post(this.webApiURL + "/authenticateUser", body, this.requestOptions) // ...using post request
        // .pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    getOperationalUsers(): any {

        return this.http.get(this.webApiURL + "/getOperationalUsers", this.requestOptions)
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    updateSecurityUser(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/updateSecurityUser`, body, this.requestOptions) // ...using post request
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    deleteOperationalUser(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteOperationalUser/${id}`, this.requestOptions) // ...using delete request
        //.pipe();
        // //.catch((error: any) => this.handleError(error));
    }

    getClinicUserGroupsWrapper(id: string): any {
        return this.http.get(this.webApiURL + "/getClinicUserGroupsWrapper/" + id, this.requestOptions)
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    getSecurityGroupById(id: string): any {
        return this.http.get(`${this.webApiURL}/getSecurityGroupById/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    getSecurityUserById(id: string): any {
        return this.http.get(`${this.webApiURL}/getSecurityUserById/${id}`, this.requestOptions)
        // .pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    saveOrUpdateUserGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/saveOrUpdateUserGroup`, body, this.requestOptions) // ...using post request
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    updateUserPermissions(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/updateUserPermissions`, body, this.requestOptions) // ...using post request
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }


    deleteUserGroup(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteUserGroup/${id}`, this.requestOptions) // ...using delete request
        //.pipe()
        // //.catch((error: any) => this.handleError(error));
    }

    resetPassword(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/resetPassword", body, this.requestOptions)
        //.pipe();
        // //.catch((error: any) => this.handleError(error)); // ...using post request
    }

    resetUserPassword(body: any): any {
        //body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/resetUserPassword`, body, this.requestOptions) // ...using post request
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    updateUserLanguage(id: any, lang: string): any {
        return this.http.get(`${this.webApiURL + "/updateUserLanguage"}/${id}/${lang}`, this.requestOptions)
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }
    //this code is added to get the permission roles of athenticated user
    getRoles(authenticatedId: string): any {
        return this.http.get(`${this.webApiURL + "/getRoles"}/${authenticatedId}`, this.requestOptions) // ...using post request
        // //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }
    getAllCountryCodes(): any {
        return this.http.get(this.webApiAdmURL + "/getAllCountryCodes", this.requestOptions)
        //.pipe();
        // .catch(this.handleError);
    }

    sendPasswordToUser(email: string): any {
        return this.http.get(`${this.webApiURL + "/sendPasswordToUser"}/${email}`, this.requestOptions)
        //.pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

    ///to get clinic modules
    getClinicModules(clinicId: string): any {
        return this.http.get(`${this.webApiURL + "/getClinicModules"}/${clinicId}`, this.requestOptions) // ...using post request
        // .pipe(this.extractData)
        // //.catch((error: any) => this.handleError(error));
    }

}