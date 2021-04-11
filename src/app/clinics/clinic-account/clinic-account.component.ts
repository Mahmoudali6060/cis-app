import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { OrganizationService } from '../shared/organization.service'
import { SharedService } from '../../shared/shared/shared.service';
import {AdministrationService} from '../../administration/shared/administration.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserTypeEnum } from '../../security/shared/user-type.enum';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-account',
    templateUrl: './clinic-account.component.html'
})

export class ClinicAccountComponent implements OnInit {
    selectAccountTab: boolean = true;
    clinicModel: any = { id: 0, isActive: true };
    clinicId!: number;
    selectClinicsTab: boolean = true;
    showProgress = false;
    modifierName: string = '';
    startDateString: string = '';
    endDateString: string = '';
    numberOfUsers!: number;
    userType: string = '';
    isClinicAdmin: boolean = false;
    model: any = {};
    active: boolean = true;
    adminType!: UserTypeEnum;
    constructor(private administrationService: AdministrationService,
        private localStorage: LocalStorageService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.clinicId = this._route.snapshot.params['id'];

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.initializeModel();
        this.modifierName = this.localStorage.retrieve("FullUserName");
    }


    initializeModel(): void {
        //Initialize the mode
        this.clinicModel.owner = { id: 0 };
        this.clinicModel.admin = { id: 0 };
        this.clinicModel.owner.reachInfo = { id: 0 };
        this.clinicModel.admin.reachInfo = { id: 0 };
        this.clinicModel.reachInfo = { id: 0 };
        this.clinicModel.currentSubscriptions = { id: 0 };

        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.clinicId && this.clinicId > 0) {
            this.showProgress = true;
            this.administrationService.getClinicById(this.clinicId)
                .subscribe(
                function (response:any) {
                    thisComp.clinicModel = response;
                    if (thisComp.clinicModel.admin != null) {
                        thisComp.adminType = thisComp.clinicModel.admin.userType;
                    } else {
                        thisComp.clinicModel.admin = { id: 0 };
                        thisComp.clinicModel.admin.reachInfo = { id: 0 };
                    }


                    if (thisComp.clinicModel.currentSubscriptions != null) {
                        thisComp.startDateString = thisComp.clinicModel.currentSubscriptions.startDateString;

                        thisComp.endDateString = thisComp.clinicModel.currentSubscriptions.endDateString;
                        thisComp.numberOfUsers = thisComp.clinicModel.currentSubscriptions.numberOfUsers;
                    }

                    //thisComp.showProgress = false;
                },
                function (error:any) { 
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
        }
    }

    imageChanged(response:any) {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined) {
                this.clinicModel.attachmentInfo = null;
                return;
            }
            this.clinicModel.attachmentInfo = attchmentInfo;
            this.clinicModel.attachmentInfo.originalName = response.originalName;
            this.clinicModel.attachmentInfo.keyName = response.keyName;
            this.clinicModel.attachmentInfo.fullPath = response.fullPath;
            this.clinicModel.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.clinicModel.attachmentInfo = null;
        }

    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        thisComponent.clinicModel.modifierName = this.modifierName;
        // update
        if ((this.isPasswordValid() && !this.clinicModel.ownerIsAdmin && this.clinicModel.adminId == null) || this.clinicModel.ownerIsAdmin || (this.clinicModel.adminId > 0 )) {
            this.administrationService.updateClinic(thisComponent.clinicModel)
                .subscribe(
                function (response:any) {
                    thisComponent.clinicModel = response;

                    if (thisComponent.clinicModel.admin != null && thisComponent.clinicModel.admin != undefined)
                        thisComponent.adminType = thisComponent.clinicModel.admin.userType;

                    if (thisComponent.clinicModel.admin == null || thisComponent.clinicModel.admin == undefined)
                        thisComponent.clinicModel.admin = { id: 0 };

                    if (thisComponent.clinicModel.admin.reachInfo == null || thisComponent.clinicModel.admin.reachInfo == undefined)
                        thisComponent.clinicModel.admin.reachInfo = { id: 0 };


                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
        }
        else {
            thisComponent.showProgress = false;
        }

    }
    isPasswordValid(): boolean {
        let valid: boolean = true;

        //if (this.model.owner.password != this.model.ownerPasswordConfirm) {
        //    this.toastr.error('Owner password and confirm password must be the same', '');
        //    let msg = this.translate.instant("MatchedOwnerPasswordAndConfirmPassword");
        //    this.toastr.error(msg, '');
        //    valid = false
        //}
        if (this.clinicModel.adminId == null && !this.clinicModel.ownerIsAdmin) {
            if (this.clinicModel.admin.password != this.clinicModel.adminPasswordConfirm) {
                //this.toastr.error('Admin password and confirm password must be the same', MatchedAdminPasswordAndConfirmPassword'');
                let msg = this.translate.instant("MatchedAdminPasswordAndConfirmPassword");
                this.toastr.error(msg, '');
                valid = false
            }
        }


        return valid;

    }

}