import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
@Component({

    selector: 'patient-file',
    templateUrl: 'patient-file.component.html'

})

export class PatientFileComponent implements OnInit {
    model: any = { id: 0, isActive: true };
    patientAttachementId = '';
    showProgress = false;
    @Output() onModelUpdated = new EventEmitter<any>();

    userGroupsWrapper: any = {};
    clinicId = '';
    patientId = '';
    account = "Account";
    basicData = "Basic Data";
    address = "Address";
    insurance = "Insurance Data";
    utilityClass: UtilityClass = new UtilityClass();
    parentType = 'PatientFileType';
    detailsUrl = "PatientReceptionistAttachmentsDetails";

    documentDetailsUrl: string = "patientAttachments";
    fileNameUploadTxt: string = this.translate.instant("File");

    fileNameTxt: string = this.translate.instant("FileName");
    btnUploadText = this.translate.instant("UploadFile");
    fileType: boolean = true;
    showDocumentDetails: boolean = true;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    hasEditPermission: boolean = false;
    hasPatientAttachmentFile: boolean = false;
    hasDefinePatientPolicy: boolean = false;
    selectedPatientId!: string;
    Attachement: any;
    constructor(private patientService: PatientService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService,
        private _route: ActivatedRoute, public translate: TranslateService
        , public accountService: AccountService
    ) {
    }

    ngOnInit(): void {
        //  this.clinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;

        let id = this._route.snapshot.params['id'];
        this.patientId = `${id}`;
        this.selectedPatientId = this.patientId;
        // this.patientId = '2';
        this.model.reachInfo = { id: 0 };
        // in case of update
        if (this.patientId.toString().toLowerCase() != 'new') {
            thisComponent.showProgress = true;
            this.patientService.getPatientById(this.patientId)
                .subscribe(
                    function (response: any) {
                        thisComponent.model = response;
                        if (thisComponent.model.birthDate)
                            thisComponent.model.birthDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.birthDate);
                        thisComponent.showProgress = false;
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }



    updateModel(updatedModel: any) {
        this.model = updatedModel;
        this.patientId = this.model.id;
        this.selectedPatientId = this.model.id;
        //this.patientId = this.model.id;
    }
    isUpdateMode(): boolean {

        if (this.model.id > 0)
            return true;

        return false;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.PatientRegistration && (item.fullControl == true || item.edit == true))
                    this.hasEditPermission = true;

                if (item.permission.key == this.key.AddPatientAttachment && (item.allow == true))
                    this.hasPatientAttachmentFile = true;

                if (item.permission.key == this.key.DefinePatientPolicy && (item.fullControl == true || item.edit == true || item.add == true || item.view == true || item.activate == true))
                    this.hasDefinePatientPolicy = true;
            }
        }

    }
    //raiseModelUpdated(model: any) {
    //    this.onModelUpdated.emit(model);
    //}
}