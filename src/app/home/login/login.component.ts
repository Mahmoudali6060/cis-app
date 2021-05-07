import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service'

import { UserTypeEnum } from '../../security/shared/user-type.enum'
import { ToastrService } from 'ngx-toastr';

import { AccountKit, AuthResponse } from '../login/ng2-account-kit-index';
import { remoteServerUrl } from '../../app.config';

@Component({

    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    model: any = {};

    active = true;
    showProgress = false;
    userTypeEnum: UserTypeEnum = new UserTypeEnum();
    userEmail: string = '';
    serverUrl: string = remoteServerUrl.replace("api/", "");
    constructor(public accountService: AccountService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService,
        private router: Router
        , public translate: TranslateService) { }

    fbLogin(authenticatedUser: any): void {
        var strMobileNumber = '';
        var strMobileCodeNumber = '';
        if (authenticatedUser) {
            strMobileNumber = authenticatedUser.reachInfo?.mobile;
            strMobileCodeNumber = authenticatedUser.reachInfo?.countryCode;
        }
        else {
            let msg = this.translate.instant("ContactInformation");
            this.toastr.error(msg, '');
        }

        let msgAuthorize = this.translate.instant("AuthorizeAdministrationPages");

        // AccountKit.login('PHONE', { countryCode: strMobileCodeNumber, phoneNumber: strMobileNumber }).then(
        //     (response: AuthResponse) => {
        this.generateAccessToken(authenticatedUser);
        //     },
        //     (error: any) => this.toastr.error(msgAuthorize, '')
        // );
    }

    onLogin(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.authenticateUser();
    }



    authenticateUser(): void {
        let thisComp = this;

        this.accountService.authenticateUser(this.model)
            .subscribe(
                function (authenticatedUser: any) {
                    if (authenticatedUser != null) {
                        //System Admin
                        if (authenticatedUser.type == thisComp.userTypeEnum.SysAdmin) {
                            thisComp.fbLogin(authenticatedUser);
                        }
                        else {
                            thisComp.generateAccessToken(authenticatedUser);

                        }
                    }
                },
                function (error: any) {
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                }
            );

    }

    generateAccessToken(authenticatedUser: any): void {
        debugger;
        let thisComponent = this;
        this.accountService.generateAccessToken(this.model)
            .subscribe(
                function (response: any) {

                    thisComponent.localStorage.store("AccessToken", response.access_token);
                    thisComponent.localStorage.store("UserName", authenticatedUser.firstName);
                    thisComponent.localStorage.store("FullUserName", authenticatedUser.name);
                    thisComponent.localStorage.store("UserType", authenticatedUser.type);
                    thisComponent.localStorage.store("HasAdminPermission", authenticatedUser.isSuperAdmin);
                    thisComponent.localStorage.store("IsDoctor", false);
                    thisComponent.localStorage.store("IsReceptionist", false);
                    thisComponent.localStorage.store("UserID", authenticatedUser.id);
                    thisComponent.localStorage.store("ClinicID", authenticatedUser.clinicId);
                    thisComponent.localStorage.store("DivisionID", authenticatedUser.divisionId);
                    thisComponent.localStorage.store("Email", authenticatedUser.email);
                    thisComponent.localStorage.store("selectedLanguage", authenticatedUser.selectedLanguage);
                    thisComponent.localStorage.store("AuthenticatedUserId", authenticatedUser.id);
                    thisComponent.localStorage.store("ProfileImagePath", thisComponent.serverUrl + authenticatedUser.smallImagePath);

                    thisComponent.accountService.changeLoginStatus(true, authenticatedUser.firstName, authenticatedUser.type, authenticatedUser.isSuperAdmin, thisComponent.serverUrl + authenticatedUser.smallImagePath);

                    //thisComponent.displayLoggedInUserLanguage();

                    //Sys Admin
                    if (authenticatedUser.type == thisComponent.userTypeEnum.SysAdmin) {
                        thisComponent.router.navigate(['/systemAdmin/dashboard']);

                    }
                    //Clinic Admin
                    else if (authenticatedUser.isClinicAdmin == true) {
                        thisComponent.router.navigate(['/clinic/dashboard']);
                    }
                    //Receptionist
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.Receptionist) {
                        thisComponent.localStorage.store("IsReceptionist", true);
                        thisComponent.router.navigate(['/receptionist/appointments']);

                    }
                    //Nurse
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.Nurse) {
                        thisComponent.router.navigate(['/doctor/appointments']);
                        //thisComponent.router.navigate(['/doctor/appointments']);//

                    }
                    //Doctor
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.Doctor) {
                        thisComponent.localStorage.store("IsDoctor", true);
                        thisComponent.router.navigate(['/doctor/appointments']);

                    }
                    //Cashier
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.Cashier) {
                        thisComponent.router.navigate(['/cashier/claims']);

                    }
                    //Patient
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.Patient) {
                        thisComponent.router.navigate(['/home']);

                    }
                    //Insurance Specialist
                    else if (authenticatedUser.type == thisComponent.userTypeEnum.InsuranceAdmin) {
                        thisComponent.router.navigate(['/insurance/invoice']);

                    }

                    // location.reload();

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                }
            );
    }

    clear(): void {
        this.model = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    sendPasswordToUserEmail() {
        let thisComp: any = this;

        this.accountService.sendPasswordToUser(this.userEmail)
            .subscribe(
                function (authenticatedUser: any) {
                    let msg = thisComp.translate.instant("YourPasswordSentToYourEmail");
                    thisComp.toastr.success(msg, '');
                    thisComp.userEmail = null;
                },
                function (error: any) {
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                }
            );
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
        this.loadCssToHTMlPage("src/assets/css/bootstrap-rtl.min.css");
        this.loadCssToHTMlPage("src/assets/css/styles-rtl.css");
        window.document.body.style.direction = "rtl";
    }

    adjustUIForEnglish() {
        this.localStorage.store('selectedLanguage', 'en');
        this.RemoveCssToHTMlPage("src/assets/css/bootstrap-rtl.min.css");
        this.RemoveCssToHTMlPage("src/assets/css/styles-rtl.css");
        this.loadCssToHTMlPage("src/assets/css/styles-ltr.css");
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

}



