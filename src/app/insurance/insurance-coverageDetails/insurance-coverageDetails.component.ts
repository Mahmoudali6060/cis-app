import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { InsuranceService } from '../shared/insurance.service';
import { TreeNode } from 'primeng/primeng';
import { AccountService } from '../../security/shared/account.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';

@Component({
   
    selector: 'insurance-coverageDetails',
    templateUrl: 'insurance-coverageDetails.component.html'
})

export class InsuranceCoverageDetailsComponent implements OnInit {

    @ViewChild('btnCoverageDetailsModalClose') btnCoverageDetailsModalClose: ElementRef;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    insuranceCompaniesList: any[];
    insurancePoliciesList: any[];
    filteredPoliciesList: any[];
    coverageDetailsList: any[];
    coverageTypes: any[];
    showProgress = false;
    showServices: boolean = true;
    active: boolean = true;
    diagnosisTree: TreeNode[];
    servicesTree: TreeNode[];
    selectedDiagnosis: any[] = [];
    selectedServices: any[] = [];
    diagnoseFilterString: string | undefined;
    serviceFilterString: string | undefined;
    model: any = {};

    policyId: number | undefined;
    isCondition: boolean = false;
    viewCoverageDetails: boolean = false;
    enableCopyCoverageDetails: boolean = false;
    enableSaveCoverageDetails: boolean = false;
    filteredPoliciesListForPopup: any[];
    copyCoverageModel: any = {};
    lstToTranslated: string[] = [];

    translateObjects = new TranslateObjectsPipe(this.storage);

    dymptDiagnose: boolean = false;
    dymptService: boolean = false;
    selectedLang = 'ar';

    allDiagnosis: any[] = [];
    allServices: any[] = [];
    selectedServicesIDs: any[] = [];
    selectedDiagnosisIDs: any[] = [];
    groupType = 'ServiceGroup';
    diagnosisGroup = 'DiagnosisGroup';
    clinicID;

    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private insuranceService: InsuranceService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {
        this.clinicID = this.storage.retrieve("ClinicId");
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.loadCoverageDetailsWrapper();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.DefineCoverageDetails && (item.add == true || item.fullControl))
                    this.viewCoverageDetails = true;
                if (item.permission.key == this.key.DefineCoverageDetails && (item.edit == true || item.fullControl))
                    this.enableCopyCoverageDetails = true;
                if (item.permission.key == this.key.DefineCoverageDetails && (item.edit == true || item.fullControl))
                    this.enableSaveCoverageDetails = true;
            }
        }
    }

    loadCoverageDetailsWrapper() {
        this.showProgress = true;
        let vm = this;
        
        this.insuranceService.getCoverageDetailsWrapper(this.clinicID)
            .subscribe(
            function (response:any) {
                vm.insuranceCompaniesList = response.insuranceCompanies;
                vm.insurancePoliciesList = response.insurancePolicies;
                vm.diagnosisTree = response.diagnosis;
                vm.servicesTree = response.services;
                vm.coverageTypes = response.coverageTypes;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                //vm.showProgress = false;
            },
            function () {
               // vm.showProgress = false;
            });

        this.insuranceService.getAllServices(this.clinicID)
            .subscribe(
            function (response:any) {
                vm.showProgress = true;
                vm.allServices = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });

        this.insuranceService.getAllDiagnosis(this.clinicID)
            .subscribe(
            function (response:any) {
                vm.showProgress = true;
                vm.allDiagnosis = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    fillPolicies(id: string) {
        this.filteredPoliciesList = [];
        this.insurancePoliciesList.forEach(policy => {
            if (policy.companyId == id)
                this.filteredPoliciesList.push(policy);
        });
    }

    fillPoliciesForPopup(id: string) {
        this.filteredPoliciesListForPopup = [];
        this.insurancePoliciesList.forEach(policy => {
            if (policy.companyId == id)
                this.filteredPoliciesListForPopup.push(policy);
        });
    }

    selectPolicy(id: number) {
        this.coverageDetailsList = [];
        this.policyId = 0;

        if (id > 0) {
            // get policy coverage details
            this.policyId = id;
            this.showProgress = true;
            let vm = this;
            this.insuranceService.getPolicyCoverageDetails(id, this.clinicID)
                .subscribe(
                function (response:any) {
                    vm.coverageDetailsList = response;
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    selectCoverageDetails(coverageDetailsId) {

        let vm = this;
        this.model = {};
        vm.selectedServicesIDs = [];
        vm.selectedDiagnosisIDs = [];

       
        this.insuranceService.getCoverageDetailsById(coverageDetailsId)
            .subscribe(
            function (response:any) {
                vm.model = response;
               
                 // select diagnosis
                if (vm.model.diagnosis && vm.model.diagnosis.length > 0) {
                    vm.showServices = false;
                    vm.selectedDiagnosisIDs = [];
                    for (let diagnose of vm.model.diagnosis) {
                        vm.selectedDiagnosisIDs.push(diagnose.id);
                    }
                }

                // select services
                if (vm.model.services && vm.model.services.length > 0) {
                    vm.showServices = true;
                    vm.selectedServicesIDs = [];
                    for (let service of vm.model.services) {
                        vm.selectedServicesIDs.push(service.id);
                    }
                }

                vm.CoverageTypeChanged(vm.model.coverageType);

                if (vm.showServices == true)
                    vm.dymptDiagnose = true;
                else
                    vm.dymptService = true;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });


    }

    onRadioSelectionChanged(selectedType) {
        if (selectedType == 'Services') {
            this.showServices = true;
            this.model.diagnosis = [];
            this.selectedDiagnosis = [];
        }
        else {
            this.showServices = false;
            this.model.services = [];
            this.selectedServices = [];
        }
    }

    saveCoverageDetails() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;

        vm.model.clinicId = vm.clinicID;

        // validate values 
        if (vm.model.discountPercentage > 100)
        {
            vm.toastr.error(vm.translate.instant("MaxPercentageValidation"), '');
            return;
        }
        if (vm.model.deductiblePercentage > 100) {
            vm.toastr.error(vm.translate.instant("MaxPercentageValidation"), '');
            return;
        }

        vm.showProgress = true;

        if (addNew) {
            this.model.id = 0;
            this.model.policyId = this.policyId;
        }


        this.model.servicesIDs = this.selectedServicesIDs;
        this.model.diagnosisIDs = this.selectedDiagnosisIDs;

        //this.extractSelectedDiagnosis();
        //this.extractSelectedServices();

        if (this.model.diagnosisIDs.length == 0 && this.model.servicesIDs.length == 0) {
            vm.toastr.error(vm.translate.instant("SelectDiagnosisorServices"), '');
            vm.showProgress = false;
            return;
        }

        this.insuranceService.saveorUpdateCoverageDetail(vm.model)
            .subscribe(
            function (response:any) {
                if (addNew) {

                    // attach new object to the selected node
                    vm.coverageDetailsList.push(response:any);

                    vm.translateObjects.transform(vm.coverageDetailsList, 'name', 'nameTranslation', null);

                } else { // update

                    var coverage = vm.coverageDetailsList.find(c => c.id == response.id);
                    coverage.diagnosis = [];
                    coverage.diagnosis = response.diagnosis;
                    coverage.services = response.services;
                    coverage.name = response.name;
                    coverage.nameTranslation = response.nameTranslation;
                    coverage.discountPercentage = response.discountPercentage;
                    coverage.maxCoverageAmount = response.maxCoverageAmount;
                    coverage.deductibleAmount = response.deductibleAmount;
                    coverage.deductiblePercentage = response.deductiblePercentage;
                    coverage.specialPrice = response.specialPrice;
                    coverage.needApproval = response.needApproval;
                    coverage.description = response.description;

                    vm.translateObjects.transform(vm.coverageDetailsList, 'name', 'nameTranslation', null);
                }

                vm.clear();
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');
            },
            function (error:any) { 
                vm.clear;
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    clear() {
        this.model = { id: 0 };
        this.active = false;
        this.selectedDiagnosis = [];
        this.selectedServices = [];
        setTimeout(() => this.active = true, 0);
        this.diagnoseFilterString = '';
        this.serviceFilterString = '';
        this.isCondition = false;
        this.initialize();
    }

    CoverageTypeChanged(coverageType) {

        this.isCondition = false;

        if (coverageType == 'ConditionallyCovered')
            this.isCondition = true;
    }

    needApprovalChanged(value: boolean) {
        this.model.needApproval = value;
    }

    getCoverageDetailId(id:any) {
        this.copyCoverageModel.coverageDetailId = id;
    }

    copyCoverageDetail() {
        let vm = this;
        this.insuranceService.copyCoverageDetail(vm.copyCoverageModel)
            .subscribe(
            function (response:any) {
                let msg = vm.translate.instant("CopiedSuccessfully");
                vm.toastr.success(msg, '');
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }


    close() {
        this.clear();
        this.btnCoverageDetailsModalClose.nativeElement.click();
    }

    initialize() {
        this.dymptDiagnose = false;
        this.dymptService = false;
        this.selectedServicesIDs = [];
        this.selectedDiagnosisIDs = [];
    }
}