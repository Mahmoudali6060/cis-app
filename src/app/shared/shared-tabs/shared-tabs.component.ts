import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../shared/permission-key.enum';
import { UserTypeEnum } from '../../security/shared/user-type.enum';
import { ClinicModulesEnum } from '../../shared/shared/clinic-modules.enum';
import { Router } from '@angular/router';
@Component({

    selector: 'shared-tabs',
    templateUrl: 'shared-tabs.component.html',

})

export class SharedTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() doctorId = 'new';
    @Input() receptionistId = '1';
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
    hasID: boolean = false;

    userTypeEnum: UserTypeEnum = new UserTypeEnum();

    enableDoctorAppoitmentsLink: boolean = false;
    enableDoctorInventoryRequestsLink: boolean = false;
    enableReceptionistAppointmentsLink: boolean = false;
    enableReceptionistPatientsLink: boolean = false;
    enableReceptionistRequestsLink: boolean = false;
    enableOrganizationStructureLink: boolean = false;
    hasEMRPermission: boolean = false;
    hasAppoitmentScchedulePermission: boolean = false;
    hasOrganizationStructureViewPermission: boolean = false;
    hasMRNPermission: boolean = false;
    hasPatientRegistrationPermission: boolean = false;
    hasTransferTransactionPermission: boolean = false;
    hasInventoryModule: boolean = false;
    hasAccessOrganizationStructure: boolean = false;
    hasAppointmentMasterPermission: boolean = false;
    isDoctor: boolean = false;
    isReceptionist: boolean = false;
    isCashier: boolean = false;
    isNurse: boolean = false;
    enableCodingLinks: boolean = false;
    enableEmrMasterLink: boolean = false;
    enableAppointmentMasterLink: boolean = false;
    enableInventoryManagementLink: boolean = false;
    hasPurshasingModule: boolean = false;
    enablePurchaseManagementLink: boolean = false;
    key: PermissionKeyEnum = new PermissionKeyEnum();

    userPermisions: UserPermissions = new UserPermissions();
    hasClaimDetails: boolean = false;
    hasAccessPolicies: boolean = false;
    hasAccessTransacton: boolean = false;
    hasAccessDefineCoverageDetails: boolean = false;
    hasAccessGenerateInvoices: boolean = false;
    hasAccessInvoice: boolean = false;
    hasCodingDetails: boolean = false;
    enableViewClaimDetails: boolean = false;
    userId: string = '';
    clinicId: string = '';
    //this is added to display or none the link based on modules of clinic
    hasPurshasingAndInventory: boolean = false;
    hasCoding: boolean = false;
    hasClinicMaster: boolean = false;
    hasAccessRights: boolean = false;
    hasPatientRegistration: boolean = false;
    hasAppointments: boolean = false;
    hasEMR: boolean = false;
    hasBillingAndInsurance: boolean = false;
    moduleKey: ClinicModulesEnum = new ClinicModulesEnum();
    constructor(private localStorage: LocalStorageService
        , public accountService: AccountService,
        private router: Router) { }

    ngOnInit(): void {


        let thisComponent = this;
        thisComponent.clinicId = this.localStorage.retrieve("ClinicID");
        let userId = this.localStorage.retrieve("AuthenticatedUserId");
        if (userId !== null) {
            //this code is added to return the permissions roles of the athenticated user
            this.setRoles(userId);
        }
        if (thisComponent.clinicId !== null) {
            //this code is added to return the clinic moduls .
            this.getClinicModules(thisComponent.clinicId);
        }

    }
    setRoles(id: string) {

        //let userPermisions: UserPermissions = new UserPermissions(timeSlotDate);
        let thisComponent = this;
        this.accountService.getRoles(id)
            .subscribe(
                function (response: any) {
                    thisComponent.userPermisions = response;
                    thisComponent.accountService.userPermision = response;

                    if (thisComponent.accountService.userPermisionsObserver != undefined)
                        thisComponent.accountService.userPermisionsObserver.next(response);

                    thisComponent.handleUserInterfaceViews(thisComponent.accountService.userPermision);
                },
                function (error: any) {
                    // thisComponent.toastr.error(error, '');
                },
                function () { // finally
                    //thisComponent.showProgress = false;
                });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.accountService.userPermision || this.accountService.userPermision.length < 1) {
            let userPermision = localStorage.getItem("userPermision")
            this.accountService.userPermision = userPermision ? JSON.parse(userPermision) : null;
        }
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

            if (!this.accountService.modulesWrapper || this.accountService.modulesWrapper.length < 1) {
                let modulesWrapper = localStorage.getItem("modulesWrapper")
                this.accountService.modulesWrapper = modulesWrapper ? JSON.parse(modulesWrapper) : null;
            }

        //this code is added to display links based on modules of clinc
        if (this.accountService.modulesWrapper?._isScalar != undefined)
            this.accountService.modulesWrapper.subscribe((item: any) => this.handleUserInterfaceViewsBasedOnModules(item));
        else
            this.handleUserInterfaceViewsBasedOnModules(this.accountService.modulesWrapper);
    }
    handleUserInterfaceViews(user: any) {
        if (user.type == this.userTypeEnum.Doctor) {
            this.isDoctor = true;
        } else if (user.type == this.userTypeEnum.Receptionist) {
            this.isReceptionist = true;
        } else if (user.type == this.userTypeEnum.Nurse) {
            this.isNurse = true;
        } else if (user.type == this.userTypeEnum.Cashier) {
            this.isCashier = true;
        }
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.EMR && (item.fullControl == true))
                    this.hasEMRPermission = true;
                else if (item.permission.key == this.key.AppointmentSchedule && (item.fullControl == true || item.add == true || item.edit == true || item.view))
                    this.hasAppoitmentScchedulePermission = true;
                else if (item.permission.key == this.key.OrganizationStructure && (item.view == true))
                    this.hasOrganizationStructureViewPermission = true;
                else if (item.permission.key == this.key.MRN && (item.add == true || item.activate == true))
                    this.hasMRNPermission = true;
                else if (item.permission.key == this.key.PatientRegistration && (item.fullControl == true || item.add == true || item.edit == true || item.activate == true))
                    this.hasPatientRegistrationPermission = true;
                else if (item.permission.key == this.key.Coding && (item.view == true || item.fullControl == true || item.add == true || item.edit == true || item.activate == true))
                    this.enableCodingLinks = true;
                else if (item.permission.key == this.key.EMRMaster && (item.view == true || item.fullControl == true || item.add == true || item.edit == true || item.activate == true))
                    this.enableEmrMasterLink = true;
                else if (item.permission.key == this.key.AppointmentMaster && (item.view == true || item.fullControl == true || item.add == true || item.edit == true || item.activate == true))
                    this.hasAppointmentMasterPermission = true;


                //can access org structure
                if (item.permission.key == this.key.OrganizationStructure && (item.view == true || item.fullControl == true || item.add == true || item.edit == true || item.activate == true))
                    this.hasAccessOrganizationStructure = true;

                //inventory module
                if (item.permission.permissionCategory == "Inventory")
                    this.hasInventoryModule = true;

                // doctor internal requests
                if (item.permission.key == this.key.InternalPurchaseRequest)
                    this.enableDoctorInventoryRequestsLink = true;

                //purchasing module
                if (item.permission.permissionCategory == "Purchase")
                    this.hasPurshasingModule = true;

                if (item.permission.key == "ExternalPurchaseRequest")
                    this.enablePurchaseManagementLink = true;

                //Cashier
                if (item.permission.key == this.key.Claim && (item.fullControl == true || item.add == true || item.edit == true || item.activate == true || item.view == true))
                    this.hasClaimDetails = true;

                //Insurance
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.fullControl == true || item.add == true || item.edit == true || item.activate == true || item.view == true))
                    this.hasAccessPolicies = true;
                if ((item.permission.key == this.key.CancelPatientTransaction || item.permission.key == this.key.CancelTransaction || item.permission.key == this.key.ChangeThirdPartyTransactionDate || item.permission.key == this.key.ReleaseTransaction) && (item.allow == true))
                    this.hasAccessTransacton = true;
                if (item.permission.key == this.key.DefineCoverageDetails && (item.fullControl == true || item.add == true || item.edit == true))
                    this.hasAccessDefineCoverageDetails = true;
                if (item.permission.key == this.key.GenerateInvoices && item.allow)
                    this.hasAccessGenerateInvoices = true;
                if ((item.permission.key == this.key.GenerateInvoices || item.permission.key == this.key.ExcludeInvoices || item.permission.key == this.key.IncludeInvoices || item.permission.key == this.key.DeleteInvoices || item.permission.key == this.key.EndorseInvoices) && (item.allow == true))
                    this.hasAccessInvoice = true;

            }
        }


        // if (this.hasEMRPermission && this.hasAppoitmentScchedulePermission)
        //  this.enableDoctorAppoitmentsLink = true;
        if (this.hasAppoitmentScchedulePermission)
            this.enableReceptionistAppointmentsLink = true;
        if (this.hasPatientRegistrationPermission) {
            this.enableReceptionistPatientsLink = true;
            this.enableReceptionistRequestsLink = true;
        }

        if (this.hasAppointmentMasterPermission)
            this.enableAppointmentMasterLink = true;

        //if (this.hasEMRPermission && this.hasPurshasingModule)
        //    this.enableDoctorInventoryRequestsLink = true;

        if (this.hasAccessOrganizationStructure)
            this.enableOrganizationStructureLink = true;

        if (this.hasInventoryModule)
            this.enableInventoryManagementLink = true;

        //if (this.hasPurshasingModule)
        //    this.enablePurchaseManagementLink = true;

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
                    // thisComponent.toastr.error(error, '');
                },
                function () { // finally
                    //thisComponent.showProgress = false;
                });
    }
    handleUserInterfaceViewsBasedOnModules(clinicModulesWrapper: any) {
        let vm = this;
        if (clinicModulesWrapper?.modules) {
            for (let item of clinicModulesWrapper?.modules) {
                if (item.key == vm.moduleKey.PurchasingAndInventory)
                    vm.hasPurshasingAndInventory = true;
                if (item.key == vm.moduleKey.PatientRegistration)
                    vm.hasPatientRegistration = true;
                if (item.key == vm.moduleKey.EMR)
                    vm.hasEMR = true;

                if (item.key == vm.moduleKey.Coding)
                    vm.hasCoding = true;
                if (item.key == vm.moduleKey.ClinicMaster)
                    vm.hasClinicMaster = true;
                if (item.key == vm.moduleKey.BillingAndInsurance)
                    vm.hasBillingAndInsurance = true;

                if (item.key == vm.moduleKey.Appointments)
                    vm.hasAppointments = true;
                if (item.key == vm.moduleKey.AccessRights)
                    vm.hasAccessRights = true;

            }
        }
    }


}