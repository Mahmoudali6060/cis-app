import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { ClinicModulesEnum } from '../../shared/shared/clinic-modules.enum';

@Component({

    selector: 'clinic-tab',
    templateUrl: './clinic-tab.component.html',

})

export class ClinicTabComponent implements OnInit, OnChanges {

    hasID: boolean = false;
    //@Input() clinicId = 'new';

    @Input() isDashboardSelected: boolean = false;
    @Input() isAccountSelected: boolean = false;
    @Input() isAddressSelected: boolean = false;
    @Input() isEMRMasterSelected: boolean = false;
    @Input() isEMRWizardSelected: boolean = false;
    @Input() isFeedbackSelected: boolean = false;
    @Input() isInventorySelected: boolean = false;
    @Input() isPermissionsSelected: boolean = false;
    @Input() isPurchasingSelected: boolean = false;
    @Input() isNewsSelected: boolean = false;
    @Input() isReportsSelected: boolean = false;
    @Input() isSettingsSelected: boolean = false;
    @Input() isStaffSelected: boolean = false;
    @Input() isAppointmentsSelected: boolean = false;
    @Input() isOrgMasterSelected: boolean = false;

    @Input() isDiagnosisSelected: boolean = false;
    @Input() isServicesSelected: boolean = false;
    @Input() isServicePackagesSelected: boolean = false;
    @Input() isDrugsSelected: boolean = false;
    @Input() isLaboratoryTestsSelected: boolean = false;
    @Input() isRadiologyTestsSelected: boolean = false;
    @Input() isProductsSelected: boolean = false;
    @Input() isTemplatesSelected: boolean = false;
    clinicId: string = '';
    showSettingsTabs: boolean = false;
    constructor(private storage: LocalStorageService
        , public accountService: AccountService) { }

    key: ClinicModulesEnum = new ClinicModulesEnum();
    hasPurshasingAndInventory: boolean = false;
    hasCoding: boolean = false;
    hasClinicMaster: boolean = false;
    hasAccessRights: boolean = false;
    hasPatientRegistration: boolean = false;
    hasAppointments: boolean = false;
    hasEMR: boolean = false;
    hasBillingAndInsurance: boolean = false;
    ngOnInit(): void {
        let thisComponent = this;
        thisComponent.clinicId = this.storage.retrieve("ClinicID");
        if (thisComponent.clinicId !== null) {
            //this code is added to return the clinic moduls .
            this.getClinicModules(thisComponent.clinicId);
        }


    }

    ngOnChanges(changes: SimpleChanges) {

        this.clinicId = this.storage.retrieve("ClinicId");
        if (this.clinicId == null)
            this.clinicId = 'new';

        if (this.clinicId == 'new' || this.clinicId == null)
            this.hasID = false;
        else
            this.hasID = true;

        if (this.accountService.modulesWrapper?._isScalar != undefined)
            this.accountService.modulesWrapper.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.modulesWrapper);
    }

    getClinicModules(id: string) {
        //let userPermisions: UserPermissions = new UserPermissions(timeSlotDate);
        let thisComponent = this;
        this.accountService.getClinicModules(id)
            .subscribe(
                function (response: any) {
                    thisComponent.accountService.modulesWrapper = response;
                    if (thisComponent.accountService.modulesWrapperObserver != undefined)
                        thisComponent.accountService.modulesWrapperObserver.next(response);

                    thisComponent.handleUserInterfaceViews(thisComponent.accountService.modulesWrapper);
                },
                function (error: any) {
                    //thisComponent.toastr.error(error.error, '');
                },
                function () { // finally
                    //thisComponent.showProgress = false;
                });
    }

    handleUserInterfaceViews(clinicModulesWrapper: any) {
        if (clinicModulesWrapper) {
            let vm = this;
            for (let item of clinicModulesWrapper.modules) {
                if (item.key == vm.key.PurchasingAndInventory)
                    vm.hasPurshasingAndInventory = true;
                if (item.key == vm.key.PatientRegistration)
                    vm.hasPatientRegistration = true;
                if (item.key == vm.key.EMR)
                    vm.hasEMR = true;

                if (item.key == vm.key.Coding)
                    vm.hasCoding = true;
                if (item.key == vm.key.ClinicMaster)
                    vm.hasClinicMaster = true;
                if (item.key == vm.key.BillingAndInsurance)
                    vm.hasBillingAndInsurance = true;

                if (item.key == vm.key.Appointments)
                    vm.hasAppointments = true;
                if (item.key == vm.key.AccessRights)
                    vm.hasAccessRights = true;
            }
        }

    }
}