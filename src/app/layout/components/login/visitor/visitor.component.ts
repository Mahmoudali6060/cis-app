import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ToastrService } from 'ngx-toastr';
import { remoteServerUrl } from '../../../../app.config';
import { AccountService } from '../../../../security/shared/account.service';
import { UserTypeEnum } from '../../../../security/shared/user-type.enum';

@Component({
  selector: 'visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  visitorForm: FormGroup;
  model: any = {};
  active = true;
  showProgress = false;
  userTypeEnum: UserTypeEnum = new UserTypeEnum();
  userEmail: string = '';
  serverUrl: string = remoteServerUrl.replace("api/", "");

  constructor(private fb: FormBuilder,
    public accountService: AccountService,
    private toastr: ToastrService,
    private localStorage: LocalStorageService,
    private router: Router
    , public translate: TranslateService) {
    this.visitorForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    let thisComp = this;
    this.model.userName = this.visitorForm.controls['Email'].value;
    this.model.password = this.visitorForm.controls['Password'].value;
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

}
