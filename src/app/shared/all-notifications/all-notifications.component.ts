import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../shared/notification.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'all-notifications',
    templateUrl: 'all-notifications.component.html',
})

export class AllNotificationsComponent implements OnInit {
    filterString: string | undefined;
    showProgress = false;
    active = true;
    model: any = {};
    notificationsList: any[] = [];

    constructor(private notificationService: NotificationService
        , public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
    ) { }

    ngOnInit(): void {
        let vm = this;
        vm.showProgress = true;

        // get All notifications realted to logged in user
        this.notificationService.getAllNotifications()
            .subscribe(
            function (response:any) {
                vm.notificationsList = response;
            },
            function (error:any) { 
                vm.toastr.error( error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    markAsRead(notificationId:any) {
        let vm = this;

        this.notificationService.markNotificationAsRead(notificationId)
            .subscribe(
            function (response:any) {
                // get notification by Id from the notifications List
                var selectedNotification = vm.notificationsList.find(not => not.id == notificationId);
                selectedNotification.isRead = true;
            },
            function (error:any) { 
                vm.toastr.error( error, '');
                // vm.showProgress = false;
            },
            function () {
                // vm.showProgress = false;
            });
    }

    markAllAsRead() {
        let vm = this;

        this.notificationService.markAllNotificationAsRead()
            .subscribe(
            function (response:any) {
                // get notification by Id from the notifications List
                //var selectedNotification = vm.notificationsList.find(not => not.id == notificationId);
                //selectedNotification.isRead = true;
                for (var i = 0; i < vm.notificationsList.length; i++) {
                    if (!vm.notificationsList[i].isRead) {
                        vm.notificationsList[i].isRead = true;
                    }
                }
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {

            });
    }

}