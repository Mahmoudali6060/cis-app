import { Component, OnInit, ViewChild, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service';
import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';

@Component({

    selector: 'patient-insurance',
    templateUrl: 'patient-insurance.component.html',
})

export class PatientInsuranceComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;
    @Input() patientId: string = '';
    @Input() patientModel: any;
    @Output() onModelUpdated = new EventEmitter<any>();
    lstToTranslated: string[] = [];
    active = true;
    model: any = {};
    hasInsurance: boolean = false;
    insuranceId!: any;
    insurances!: any;
    isTableView: boolean = true;
    insuranceToBeDeleted!: any;
    patientIdValue!: any;
    showProgress = false;
    tst = "test";
    @ViewChild("fileInput") fileInput!: any;
    utilityClass: UtilityClass = new UtilityClass();
    selectedClinicId!: any;
    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , private router: Router
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['companyName', 'companyNameTranslation', 'policyName', 'policyNameTranslation', 'patientName', 'patientNameTranslation'];
        let vm = this;
        this.selectedClinicId = this.storage.retrieve("ClinicID");
        vm.showProgress = true;
        vm.patientIdValue = vm.patientId;
        if (this.patientIdValue.toString().toLowerCase() != 'new') {
            vm.loadPatientInsurances();
        } else {

            vm.showProgress = false;
        }
    }
    ngOnChanges(): void {
        let vm = this;
        vm.patientIdValue = vm.patientModel.id;
        //vm.patientIdValue = vm.patientId;
        if (vm.patientModel.isInsured) {
            vm.hasInsurance = true;
            //vm.tst = "iam";
        } else {
            vm.hasInsurance = false;
        }

    }
    loadPatientInsurances() {
        let vm = this;
        this.patientService.getAllPatientInsurances(vm.patientIdValue).subscribe(
            function (response: any) {
                vm.insurances = response;
                if (vm.patientModel.birthDate)
                    vm.patientModel.birthDate = vm.utilityClass.getUtcDateFromString(vm.patientModel.birthDate);
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    changeActivation(insuranceId: any, event: any) {
        let vm = this;
        vm.showProgress = true;

        this.patientService.togglePatientInsuranceActivation(insuranceId)
            .subscribe(
                function (response: any) {
                    // get company by Id from the companies List
                    //var selectedCompany = vm.companiesList.find(comp => comp.id == id);
                    //selectedCompany.isActive = response;

                    // load all companies
                    vm.loadPatientInsurances();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    editItem(id: string): void {
        //this.isForm = true;
        this.isTableView = false;
        this.insuranceId = id;

    }
    setInsuranceIdValue(id: string) {
        this.isTableView = false;
        this.insuranceId = id;
    }
    onIsTableViewValue(value: boolean): void {
        this.isTableView = value;
        this.loadPatientInsurances();
    }
    selectPatientInsuranceToDelete(id: string) {
        this.insuranceToBeDeleted = id;
    }
    deleteSelectedItem(): void {

        let vm = this;
        if (this.insuranceToBeDeleted == '') {

            let msg = vm.translate.instant("ItemToBeDeleted");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.patientService.deletePatientInsurance(this.insuranceToBeDeleted)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    var selectedObject = vm.insurances.find((o: any) => o.id == vm.insuranceToBeDeleted);
                    var index = vm.insurances.indexOf(selectedObject);
                    if (index > -1)
                        vm.insurances.splice(index, 1);

                    // clear fields
                    //  vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    public navigateToPackages() {
        //routerLink="/receptionistPatients/1"
        this.router.navigate(['/receptionist/patients', this.selectedClinicId]);
    }

    changeInsuranceStatus(patientId: any, event: any) {
        let vm = this;
        vm.showProgress = true;
        if (event.target.checked)
            vm.patientModel.isInsured = true;
        else
            vm.patientModel.isInsured = false;
        this.patientService.updatePatientPersonalData(vm.patientModel)
            .subscribe(
                function (response: any) {
                    vm.patientModel = response;

                    if (vm.model.birthDate)
                        vm.model.birthDate = vm.utilityClass.getUtcDateFromString(vm.model.birthDate);

                    vm.raiseModelUpdated(vm.patientModel);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }
}