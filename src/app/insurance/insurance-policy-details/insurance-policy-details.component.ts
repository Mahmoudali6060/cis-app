import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { AccountService } from '../../security/shared/account.service';
import { InsuranceService } from '../shared/insurance.service';
import { UtilityClass } from '../../shared/shared/utility.class'
import { PatientService } from '../../patients/shared/patient.service';
import { ToastrService } from 'ngx-toastr';
import { Table } from 'primeng/table';

@Component({

    selector: 'insurance-policy-details',
    templateUrl: './insurance-policy-details.component.html'
})

export class InsurancePolicyDetailsComponent implements OnInit, OnChanges {

    @Input() companyId: any;
    @Input() companyName: any;
    @Input() policyId: any;
    @Input() policyPatients!: any[];
    @Output() onPolicyAdded = new EventEmitter<any>();
    @Output() onPolicyUpdated = new EventEmitter<any>();

    @ViewChild('btnOpenPolicyPatientDiv') btnOpenPolicyPatientDiv!: ElementRef;

    utilityClass: UtilityClass = new UtilityClass();

    policyModel: any = { id: 0, isActive: true };
    //policyPatients: any[] = [];

    showProgress = false;
    active = true;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableViewCompanyDetails: boolean = false;
    policyPatientModel: any = { id: 0 };
    showActive: boolean = false;
    showEdit: boolean = false;
    enableSavePolicyBtn: boolean = false;
    setPolicyPatientToDeleteBtn: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = true;
    patientSearchVisible: boolean = false;
    policyPatientFormActive = true;
    enableEditPolicypatient: boolean = false;
    @ViewChild('dt') table!: Table;
    constructor(
        private insuranceService: InsuranceService,
        private patientService: PatientService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService,
        private _route: ActivatedRoute
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if ((item.permission.key == this.key.ThirdPartyPayersAndPolicies) && (item.add == true || item.fullControl == true))
                    this.enableSavePolicyBtn = true;
                if ((item.permission.key == this.key.DefinePatientPolicy) && (item.fullControl == true)) {
                    this.setPolicyPatientToDeleteBtn = true;
                    this.enableEditPolicypatient = true;
                }

                if ((item.permission.key == this.key.DefinePatientPolicy) && (item.edit == true))
                    this.enableEditPolicypatient = true;

            }
        }
    }

    ngOnChanges(): void {
        if (this.policyId != undefined && this.policyId != null) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.insuranceService.getPolicyDetails(this.policyId)
                .subscribe(
                    function (response: any) {
                        thisComponent.updatePolicyModelToView(response);
                        if (response.patients != undefined && response.patients != null)
                            thisComponent.policyPatients = response.patients;
                        else
                            thisComponent.policyPatients = [];
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else {

            this.clear();
            this.policyModel.companyName = this.companyName;
        }
    }

    onSubmit(): void {
        let thisComponent = this;

        // validate values 
        if (this.policyModel.discountPercentage > 100) {
            this.toastr.error(this.translate.instant("MaxPercentageValidation"), '');
            return;
        }
        if (this.policyModel.deductibleAmount > 100) {
            this.toastr.error(this.translate.instant("MaxPercentageValidation"), '');
            return;
        }

        thisComponent.showProgress = true;

        if (this.policyModel.id == 0) {//New

            this.updatePolicyModelToSave();
            this.insuranceService.savePolicy(this.policyModel)
                .subscribe(
                    function (response: any) {

                        thisComponent.updatePolicyModelToView(response);
                        thisComponent.raisePolicyAdded(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else//Update
        {
            this.updatePolicyModelToSave();
            this.insuranceService.updatePolicy(this.policyModel)
                .subscribe(
                    function (response: any) {
                        thisComponent.updatePolicyModelToView(response);
                        thisComponent.raisePolicyUpdated(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clear() {
        this.policyModel = { id: 0, isActive: true };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    updatePolicyModelToSave() {
        this.policyModel.companyId = this.companyId;
        this.policyModel.startDate = this.utilityClass.getUtcDate(this.policyModel.startDate);
        this.policyModel.endDate = this.utilityClass.getUtcDate(this.policyModel.endDate);
    }

    updatePolicyModelToView(response: any) {
        this.policyModel = response;
        this.policyModel.startDate = this.utilityClass.getUtcDateFromString(response.startDate);
        this.policyModel.endDate = this.utilityClass.getUtcDateFromString(response.endDate);
    }

    raisePolicyAdded(model: any) {
        this.onPolicyAdded.emit(model);
    }

    raisePolicyUpdated(model: any) {
        this.onPolicyUpdated.emit(model);
    }

    isUpdateMode() {

        if (this.policyModel != undefined && this.policyModel.id != 0)
            return true;

        return false;
    }

    showDialog() {
        this.patientSearchVisible = true;
    }

    managePatientSelection(selectedPatientMrn: any) {
        this.policyPatientModel.patientMrn = selectedPatientMrn;
        this.patientSearchVisible = false;
    }

    savePolicyPatient() {
        this.showProgress = true;
        let thisComp = this;
        this.patientService.getPatientByClinicMRN(this.policyPatientModel.patientMrn)
            .subscribe(
                function (response: any) {
                    thisComp.createPatientInsurance(response);
                },
                function (error: any) {
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    createPatientInsurance(patient: any) {
        let thisComp = this;
        this.showProgress = true;

        this.policyPatientModel.patientId = patient.id;
        this.policyPatientModel.policyId = this.policyModel.id;
        this.policyPatientModel.companyId = this.policyModel.companyId;
        this.policyPatientModel.startDate = this.utilityClass.getUtcDate(this.policyPatientModel.startDate);
        this.policyPatientModel.endDate = this.utilityClass.getUtcDate(this.policyPatientModel.endDate);

        if (this.policyPatientModel.id == 0) {
            this.patientService.createPatientInsurance(this.policyPatientModel)
                .subscribe(
                    function (response: any) {
                        thisComp.policyPatients.push(response);
                        thisComp.clearPolicyPatient();
                        let msg = thisComp.translate.instant("SavedSuccessfully");
                        thisComp.toastr.success(msg, '');
                    },
                    function (error: any) {
                        thisComp.toastr.error(error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
        else//Update
        {
            this.policyPatientModel.startDate = this.utilityClass.getUtcDate(this.policyPatientModel.startDate);
            this.policyPatientModel.endDate = this.utilityClass.getUtcDate(this.policyPatientModel.endDate);
            this.patientService.updatePatientInsurance(this.policyPatientModel)
                .subscribe(
                    function (response: any) {
                        thisComp.clearPolicyPatient();
                        let msg = thisComp.translate.instant("SavedSuccessfully");
                        thisComp.toastr.success(msg, '');
                    },
                    function (error: any) {
                        thisComp.toastr.error(error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
    }

    clearPolicyPatient() {
        this.policyPatientModel = { id: 0 };
        //this.policyPatientFormActive = false;
        //setTimeout(() => this.policyPatientFormActive = true, 0);
    }

    editPolicyPatient(itemToEdit: any) {
        this.policyPatientModel = itemToEdit;
        this.policyPatientModel.startDate = this.utilityClass.getUtcDateFromString(itemToEdit.startDate);
        this.policyPatientModel.endDate = this.utilityClass.getUtcDateFromString(itemToEdit.endDate);
        let expanded = this.btnOpenPolicyPatientDiv.nativeElement.getAttribute("aria-expanded");
        if (!expanded || expanded == "false")
            this.btnOpenPolicyPatientDiv.nativeElement.click();
    }

    setPolicyPatientToDelete(policyPatientId: any) {

        let msg = this.translate.instant("AreYouSureDelete");
        let result = confirm(msg);
        if (result == true)
            this.deletePolicyPatient(policyPatientId);
    }

    deletePolicyPatient(policyPatientId: any) {
        let thisComp = this;
        this.showProgress = true;

        this.patientService.deletePatientInsurance(policyPatientId)
            .subscribe(
                function (response: any) {
                    thisComp.clearPolicyPatient();
                    thisComp.removePolicyPatientFromList(policyPatientId);
                    let msg = thisComp.translate.instant("DeletedSuccessfully");
                    thisComp.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    removePolicyPatientFromList(policyPatientId: any) {
        var itemToRemove = this.policyPatients.find(p => p.id == policyPatientId);
        var index = this.policyPatients.indexOf(itemToRemove);
        if (index > -1)
            this.policyPatients.splice(index, 1);
    }

}