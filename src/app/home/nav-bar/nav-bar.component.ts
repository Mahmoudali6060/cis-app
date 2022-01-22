import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

import { AccountService } from '../../security/shared/account.service';
import { UserTypeEnum } from '../../security/shared/user-type.enum';

import { NotificationService } from '../../shared/shared/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared/shared/shared.service';

@Component({

    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'

})

export class NavBarComponent implements OnInit, OnChanges {

    userRoleEnum: UserTypeEnum = new UserTypeEnum();
    @Input() userRole: string = '';
    @Input() userName: string = '';
    @Input() profileImagePath: string = '';
    accountUrl: string = '';

    showLanguage: boolean = false;
    showLogin: boolean = false;
    showUserName: boolean = false;

    showPatientLinks: boolean = false;
    showBasicData: boolean = false;
    showDoctorLinks: boolean = false;
    showNurseLinks: boolean = false;
    showPurchaseManagerLinks: boolean = false;
    showReceptionistLinks: boolean = false;
    showDoctorInventoryRequests: boolean = false;

    @Input() notifications: any[] = [];
    @Input() unReadNotificationsNo: string = '0';

    userId: string = '';
    userType!: any;
    clinicId!: string;
    lang = 'en';

    public constructor(
        private localStorage: LocalStorageService,
        public accountService: AccountService,
        private router: Router,
        public notificationService: NotificationService,
        public translate: TranslateService,
        private sharedService: SharedService
    ) { }

    ngOnInit(): void {
        this.userId = this.localStorage.retrieve("userId");
        this.userType = this.localStorage.retrieve("userType");
        this.clinicId = this.localStorage.retrieve("clinicId");
        this.lang = this.localStorage.retrieve("selectedlanguage");
    }

    ngOnChanges(changes: SimpleChanges) {

        this.userId = this.localStorage.retrieve("userId");
        this.userType = this.localStorage.retrieve("userType");
        this.clinicId = this.localStorage.retrieve("clinicId");
        if (this.userRole == this.userRoleEnum.GeneralUser) {
            this.showLogin = true;
            this.showUserName = false;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.userName = '';
            this.accountUrl = '';
        }
        if (this.userRole == this.userRoleEnum.Patient) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = true;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.accountUrl = '';
        }
        else if (this.userRole == this.userRoleEnum.Doctor) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = true;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;


            this.accountUrl = '/doctor/appointments';
        }
        else if (this.userRole == this.userRoleEnum.Nurse) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = true;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.accountUrl = '/nurse/appointments/1';
        }
        else if (this.userRole == this.userRoleEnum.SysAdmin) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showBasicData = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.accountUrl = '/systemAdmin/account/' + this.userId;
        }
        else if (this.userRole == this.userRoleEnum.ClinicAdmin) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = true;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = true;

            this.accountUrl = '/clinic/account/' + this.clinicId;
        }
        else if (this.userRole == this.userRoleEnum.Receptionist) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = true;
            this.showDoctorInventoryRequests = false;

            this.accountUrl = '/receptionist/appointments';
        }
        else if (this.userRole == this.userRoleEnum.Cashier) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.accountUrl = '/cashier/claims';
        }
        else if (this.userRole == this.userRoleEnum.InsuranceAdmin) {
            this.showLogin = false;
            this.showUserName = true;
            this.showPatientLinks = false;
            this.showLanguage = true;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;


            this.accountUrl = '/insurance/invoice';
        }
        else {
            this.showLogin = true;
            this.showUserName = false;
            this.showPatientLinks = false;
            this.showLanguage = false;
            this.showBasicData = false;
            this.showDoctorLinks = false;
            this.showNurseLinks = false;
            this.showPurchaseManagerLinks = false;
            this.showReceptionistLinks = false;
            this.showDoctorInventoryRequests = false;

            this.userName = '';
            this.accountUrl = '';
        }

    }

    logOut(): void {

        this.localStorage.clear("AccessToken");
        this.localStorage.clear("UserName");
        this.localStorage.clear("UserType");
        this.localStorage.clear("HasAdminPermission");
        this.localStorage.clear("IsDoctor");
        this.localStorage.clear("IsReceptionist");
        this.localStorage.clear("UserID");
        this.localStorage.clear("AuthenticatedUserId");

        this.accountService.changeLoginStatus(false, '', '', false, '');
        this.sharedService.loadCssToHTMlPage("assets/css/bootstrap.min.css");
        this.sharedService.removeCssFromHTMlPage("assets/css/updatedAce.css");
        //navigate to home URL
        //this.router.navigate(['/home']);
        this.router.navigate(['/layout-login/doctor']);
        //location.reload();
    }

    openNotification(notification: any) {

        //mark notification as read
        this.markMotificationasRead(notification.id)

        if (notification.patientId != '' && notification.patientId != undefined)
            this.router.navigateByUrl('/patient/mrf/' + notification.patientId);

        //else if (notification.relatedVolunteerId != '' && notification.relatedVolunteerId != undefined)
        //    this.router.navigate(['/volunteerProfile', notification.relatedVolunteerId]);
    }

    markMotificationasRead(notificationId: any) {
        let vm = this;

        this.notificationService.markNotificationAsRead(notificationId)
            .subscribe(
                function (response: any) {
                    // get notification by Id from the notifications List
                    //var selectedNotification = vm.notificationsList.find(not => not.id == notificationId);
                    //selectedNotification.isRead = true;
                },
                function (error: any) {
                    //vm.toastr.error('Failed to update Notification - ' + error, '');
                    // vm.showProgress = false;
                },
                function () {
                    // vm.showProgress = false;
                });
    }

    changeLanguage() {

        if (this.accountService.userLoggedIn) {
            this.applyLanguage(true);
        }
        else
            this.applyLanguage(false);

        location.reload();
    }

    applyLanguage(saveOnDB: boolean) {
        let selectedLanguage = this.localStorage.retrieve("selectedLanguage");
        let currentLang = '';

        if (selectedLanguage != null && selectedLanguage != undefined) {
            if (selectedLanguage == 'ar') {
                currentLang = 'en';
                this.adjustUIForEnglish();
            }
            else {
                currentLang = 'ar';
                this.adjustUIForArabic();
            }

            this.translate.setDefaultLang(currentLang);
            this.translate.use(currentLang);
        }
        else {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            window.document.body.style.direction = "ltr";
            this.localStorage.store('selectedLanguage', 'en');
        }

        if (saveOnDB)
            this.updateUserLanguage(currentLang);
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
            //window.document.body.style.direction = "ltr";
            //this.localStorage.store('selectedLanguage', 'en');
            this.adjustUIForEnglish();
        }
    }

    adjustUIForArabic() {
        debugger;

        this.localStorage.store('selectedLanguage', 'ar');

        this.RemoveCssToHTMlPage("assets/css/styles-ltr.css");
        this.RemoveCssToHTMlPage("assets/css/bootstrap-ltr.min.css");

        this.removeStyleSheet('styles-ltr.css');
        this.removeStyleSheet('bootstrap-ltr.min.css');

        this.loadCssToHTMlPage("assets/css/bootstrap-rtl.min.css");
        this.loadCssToHTMlPage("assets/css/styles-rtl.css");

        window.document.body.style.direction = "rtl";
    }

    adjustUIForEnglish() {
        debugger;
        this.localStorage.store('selectedLanguage', 'en');

        // this.RemoveCssToHTMlPage("acss/styles-rtl.css");
        // this.RemoveCssToHTMlPage("css/bootstrap-rtl.min.css");

        this.removeStyleSheet('styles-rtl.css');
        this.removeStyleSheet('bootstrap-rtl.min.css');


        this.loadCssToHTMlPage("assets/css/styles-ltr.css");
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

        if (isLoaded) {
            // remove old one 
            this.removeStyleSheet(url);
        }

        //head.insertBefore(link, style);

        head.appendChild(link);

        //if (isLoaded) return;

        // head.insertBefore(link, style);

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

    removeStyleSheet(stylesheetName: string) {
        var elements = document.querySelectorAll('link[rel=stylesheet]');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].attributes.getNamedItem('href')?.value.includes(stylesheetName)) {
                document.styleSheets[i].disabled = true;
            }
        }
    }

    updateUserLanguage(language: string) {
        let userId = this.localStorage.retrieve("AuthenticatedUserId");
        this.accountService.updateUserLanguage(userId, language)
            .subscribe(
                function (response: any) { },
                function (error: any) { },
                function () { });

    }

}