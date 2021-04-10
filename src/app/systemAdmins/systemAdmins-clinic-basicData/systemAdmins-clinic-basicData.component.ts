import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import {AdministrationService} from '../../administration/shared/administration.service';

@Component({
   
    selector: 'systemAdmins-clinic-basicData',
    templateUrl: 'systemAdmins-clinic-basicData.component.html'
})

export class SystemAdminClinicBasicDataComponent implements OnInit {

    @Input() model: any;
    @Output() onModelUpdated = new EventEmitter<any>();

    showProgress = false;
    active = true;
    clinicLevelsList: any[];
    selectDivisionsTab: boolean = true;
    clinicId: string = '';
    enableMyAccountBtn: boolean = false;

    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService,
        private _route: ActivatedRoute
        , public translate: TranslateService) { }

    ngOnInit(): void {

        this.showProgress = true;

        let thisComponent = this;
        this.administrationService.getAll('Cis.Core.ClinicLevel')
            .subscribe(
            function (response:any) {
                thisComponent.clinicLevelsList = response;

            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        if (this.model.id == 0) {//New
            if (this.isPasswordValid()) {
                this.administrationService.saveClinic(this.model)
                    .subscribe(
                    function (response:any) {

                        thisComponent.model = response;
                        if (thisComponent.model.admin == null || thisComponent.model.admin == undefined)
                            thisComponent.model.admin = { id: 0 };

                        if (thisComponent.model.admin.reachInfo == null || thisComponent.model.admin.reachInfo == undefined)
                            thisComponent.model.admin.reachInfo = { id: 0 };

                        thisComponent.raiseModelUpdated(response:any);
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
        else//Update
        {
            if ((this.isPasswordValid() && !this.model.ownerIsAdmin && this.model.adminId == null) || this.model.ownerIsAdmin || (this.model.adminId > 0)) {
                this.administrationService.updateClinic(this.model)
                    .subscribe(
                    function (response:any) {

                        thisComponent.model = response;
                        if (thisComponent.model.admin == null || thisComponent.model.admin == undefined)
                            thisComponent.model.admin = { id: 0 };

                        if (thisComponent.model.admin.reachInfo == null || thisComponent.model.admin.reachInfo == undefined)
                            thisComponent.model.admin.reachInfo = { id: 0 };

                        thisComponent.raiseModelUpdated(response:any);
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
    }

    isPasswordValid(): boolean {
        let valid: boolean = true;

        if (this.model.ownerId == null) {
            if (this.model.owner.password != this.model.ownerPasswordConfirm) {
                let msg = this.translate.instant("MatchedOwnerPasswordAndConfirmPassword");
                this.toastr.error(msg, '');
                valid = false
            }
        }

        if (this.model.adminId == null && !this.model.ownerIsAdmin) {
            if (this.model.admin.password != this.model.adminPasswordConfirm) {
                let msg = this.translate.instant("MatchedAdminPasswordAndConfirmPassword");
                this.toastr.error(msg, '');
                valid = false
            }
        }


        return valid;

    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

    imageChanged(response:any) {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined) {
                this.model.attachmentInfo = null;
                return;
            }

            this.model.attachmentInfo = attchmentInfo;
            this.model.attachmentInfo.originalName = response.originalName;
            this.model.attachmentInfo.keyName = response.keyName;
            this.model.attachmentInfo.fullPath = response.fullPath;
            this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.model.attachmentInfo = null;
        }

    }
}