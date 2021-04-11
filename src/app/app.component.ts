import {Component, ViewContainerRef, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router, ActivatedRoute } from '@angular/router';

import { AccountService } from './security/shared/account.service'
import { NotificationService } from './shared/shared/notification.service';
import {TranslateService} from '@ngx-translate/core';
import {UserPermissions} from './classes/user-permissions.class';
import { UserTypeEnum } from './security/shared/user-type.enum'
@Component({
    selector: 'root-app',
    //template: ` <h1>{{title}}</h1>
    //               <nav>
    //                 <a routerLink="/dashboard">Dashboard</a>
    //                 <a routerLink="/heroes">Heroes</a>
    //               </nav>
    //               <router-outlet></router-outlet>`,
    templateUrl: './app.component.html'

})

export class AppComponent implements OnInit {
    userName: any;
    isAuthenticated: boolean = false;
    showNavDetails: boolean = true;
    userType: any;
    notifications: any[] = [];
    showdDetails: boolean = true;
    noUnReadNotifications: string = '';
    public userPermisions: UserPermissions = new UserPermissions();
    hasPermission: boolean = false;
    private viewContainerRef: ViewContainerRef;
    userTypeEnum: UserTypeEnum = new UserTypeEnum();

    public constructor(viewContainerRef: ViewContainerRef,
        private localStorage: LocalStorageService,
        private router: Router,
        private _route: ActivatedRoute,
        private accountService: AccountService,
        public notificationService: NotificationService,
        public translate: TranslateService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        // get default language from local storage if there is no default set arabic as default
        this.displayLoggedInUserLanguage();
    }

    ngOnInit(): void {
        let thisComponent = this;
        let userName = this.localStorage.retrieve("UserName");
        let userId = this.localStorage.retrieve("AuthenticatedUserId");
        //UserTypes: SysAdmin, Clinic Admin, ...
        let userType = this.localStorage.retrieve("UserType");
        let hasAdminPermission = this.localStorage.retrieve("HasAdminPermission");
        let userEmail = this.localStorage.retrieve("Email");
        let selectedLanguage = this.localStorage.retrieve("selectedLanguage");
        let clinicId = this.localStorage.retrieve("ClinicID");
        let profileImagePath = this.localStorage.retrieve("ProfileImagePath");
        this.notificationService.start();
        this.showHeaderAndFooterForLogedinUser();

        if (userName !== null) {
            this.accountService.changeLoginStatus(true, userName, userType, hasAdminPermission, profileImagePath);
            //Sys Admin
            if (userType == thisComponent.userTypeEnum.SysAdmin) {
                thisComponent.router.navigate(['/systemAdmin/dashboard']);

            }
            //Clinic Admin
            else if (userType == thisComponent.userTypeEnum.ClinicAdmin) {
                thisComponent.router.navigate(['/clinic/dashboard']);
            }
            //Receptionist
            else if (userType == thisComponent.userTypeEnum.Receptionist) {
                thisComponent.router.navigate(['/receptionist/appointments']);

            }
            //Nurse
            else if (userType == thisComponent.userTypeEnum.Nurse) {
                thisComponent.router.navigate(['/nurse/appointments/1']);

            }
            //Doctor
            else if (userType == thisComponent.userTypeEnum.Doctor) {
                thisComponent.router.navigate(['/doctor/appointments']);

            }
            //Cashier
            else if (userType == thisComponent.userTypeEnum.Cashier) {
                thisComponent.router.navigate(['/cashier/claims']);

            }
            //Patient
            else if (userType == thisComponent.userTypeEnum.Patient) {
                thisComponent.router.navigate(['/home']);

            }
            //Insurance Specialist
            else if (userType == thisComponent.userTypeEnum.InsuranceAdmin) {
                thisComponent.router.navigate(['/insurance/invoice']);

            }

            //location.reload();

            //this code is added to return the permissions roles of the athenticated user
            this.setRoles(userId);
            this.getClinicModules(clinicId);

            // Get an observable for events emitted on this channel
            this.notificationService.sub(userEmail).subscribe(
                (success: any) => {
                    this.getTopNotifications();
                },
                (error: any) => {
                    console.warn(error);
                }
            )

            // get notifications for firt run
            if (userEmail != "" && userEmail != undefined)
                this.getTopNotifications();

        }
       
    }
    showHeaderAndFooterForLogedinUser() {

        if (this.accountService.userLoggedIn == true)
            this.showNavDetails = false;
    }
  
    private getTopNotifications(): void {
        // Just prepend this to the messages string shown in the textarea
        let vm = this;
        this.notificationService.getTopNotifications()
            .subscribe(
            function (response:any) {
                if (response) {
                    vm.notifications = response.topNotifications;
                    vm.noUnReadNotifications = response.numberOfUnRead;
                }
            },
            function (error:any) { 
            },
            function () {
            });

        //// Call notification service to reload notification
        //this.notifications.push("notification1");
        //this.notifications.push("notification2");
    }

    openVolunteerAccount(): void {
        let volunteerId = this.localStorage.retrieve("VolunteerId");

        if (volunteerId == null)
            volunteerId = 'new';

        //navigate to current URL
        this.router.navigate(['/volunteerAccount', volunteerId]);
    }

    logOut(): void {

        this.localStorage.clear("AccessToken");
        this.localStorage.clear("UserName");
        this.localStorage.clear("UserType");
        this.localStorage.clear("ClinicID");
        this.localStorage.clear("userId");
        this.localStorage.clear("profileImagePath");

        //this.localStorage.clear("CompanyId");
        //this.localStorage.clear("PersonId");

        //navigate to current URL
        //this.router.navigate(['/home']);
        this.router.navigate(['/login']);

        location.reload();
    }



    displayLoggedInUserLanguage() {

        let selectedLanguage = this.localStorage.retrieve("selectedLanguage");
        let currentLang = '';

        if (selectedLanguage != null && selectedLanguage != undefined) {
            if (selectedLanguage == 'ar')
                this.adjustUIForArabic();
            else
                this.adjustUIForEnglish();

            this.translate.setDefaultLang(selectedLanguage);
            this.translate.use(selectedLanguage);
        }
        else {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            window.document.body.style.direction = "ltr";
            this.localStorage.store('selectedLanguage', 'en');
        }
    }

    adjustUIForArabic() {
        this.localStorage.store('selectedLanguage', 'ar');
        this.loadCssToHTMlPage("css/bootstrap-rtl.min.css");
        this.loadCssToHTMlPage("css/styles-rtl.css");
        window.document.body.style.direction = "rtl";
    }

    adjustUIForEnglish() {
        this.localStorage.store('selectedLanguage', 'en');
        this.RemoveCssToHTMlPage("css/bootstrap-rtl.min.css");
        this.RemoveCssToHTMlPage("css/styles-rtl.css");
        this.loadCssToHTMlPage("css/styles-ltr.css");
        window.document.body.style.direction = "ltr";
    }

    loadCssToHTMlPage(url: string): void {
        // Create link
        let link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        link.type = 'text/css';

        let head = document.getElementsByTagName('head')[0];
        let links = head.getElementsByTagName('link');
        let style = head.getElementsByTagName('style')[0];

        // Check if the same style sheet has been loaded already.
        let isLoaded = false;
        for (var i = 0; i < links.length; i++) {
            var node = links[i];
            if (node.href.indexOf(link.href) > -1) {
                isLoaded = true;
            }
        }
        if (isLoaded) return;
        head.insertBefore(link, style);
    }

    RemoveCssToHTMlPage(url: string): void {
        // Create link
        let head = document.getElementsByTagName('head')[0];
        let links = head.getElementsByTagName('link');
        let style = head.getElementsByTagName('style')[0];
        // Check if the same style sheet has been loaded already.
        let isLoaded = false;
        for (var i = 0; i < links.length; i++) {
            var node = links[i];
            if (node.href.indexOf(url) > -1) {
                head.removeChild(node);
            }
        }
    }

    updateUserLanguage(language: string) {
        let userId = this.localStorage.retrieve("AuthenticatedUserId");
        this.accountService.updateUserLanguage(userId, language)
            .subscribe(
            function (response:any) { },
            function (error:any) {  },
            function () { });

    }

    setRoles(id: string) {
        //let userPermisions: UserPermissions = new UserPermissions(timeSlotDate);
        let thisComponent = this;
        this.accountService.getRoles(id)
            .subscribe(
            function (response:any) {
                // thisComponent.clinicLevelsList = response;
                //let userPermisions: UserPermissions = new UserPermissions(response:any);
                for (var _i = 0; _i < response.permissions.length; _i++) {
                    if (response.permissions[_i].edit)
                        response.permissions[_i].view = true;
                    else if (response.permissions[_i].activate)
                        response.permissions[_i].view = true;
                    else if (response.permissions[_i].fullControl) {
                        response.permissions[_i].add = true;
                        response.permissions[_i].view = true;
                        response.permissions[_i].edit = true;
                        response.permissions[_i].activate = true;
                    }
                }
                thisComponent.userPermisions = response;
                if (thisComponent.accountService.userPermisionsObserver != undefined)
                    thisComponent.accountService.userPermisionsObserver.next(response);
                thisComponent.accountService.userPermision = response;

            },
            function (error:any) { 
                // thisComponent.toastr.error(error, '');
            },
            function () { // finally
                //thisComponent.showProgress = false;
            });
    }
    getClinicModules(id: string){
        let thisComponent = this;
        this.accountService.getClinicModules(id)
            .subscribe(
            function (response:any) {

                //thisComponent.userPermisions = response;
                if (thisComponent.accountService.modulesWrapperObserver != undefined)
                    thisComponent.accountService.modulesWrapperObserver.next(response);
                thisComponent.accountService.modulesWrapper = response;

            },
            function (error:any) { 
                // thisComponent.toastr.error(error, '');
            },
            function () { // finally
                //thisComponent.showProgress = false;
            });
    }


}