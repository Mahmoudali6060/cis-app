import {Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterContentChecked} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';

@Component({
   
    selector: 'patient-insurance-details',
    templateUrl: 'patient-insurance-details.component.html',
})

export class PatientInsuranceDetailsComponent implements OnInit, AfterContentChecked {
    selectBasicTab: boolean = true;
    @Input() patientId: string = '';
    @Input() insuranceId: string = '';
    @Input() title: string = '';
    @Output() isTableViewValue: EventEmitter<boolean> = new EventEmitter<boolean>();

    active = true;
    model: any = {};
    isTableView: boolean = true;
    companies = [];
    policies = [];
    insuranceIdvalue;
    utilityClass: UtilityClass = new UtilityClass();

    showProgress = false;
    @ViewChild("fileInput") fileInput;

    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService,
        public translate: TranslateService
    )
    { }

    ngOnInit(): void {
        let vm = this;

        vm.showProgress = true;
        vm.insuranceIdvalue = vm.insuranceId;
        //get all calssifications from DB
        this.patientService.getpatientInsuranceWrapper()
            .subscribe(
            function (response:any) {
                vm.companies = response.companies;
               // vm.policies = response.policies;
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });

        // get organization in case of update
        if (this.insuranceIdvalue.toString().toLowerCase() != 'new') {
            vm.showProgress = true;
            this.patientService.getPatientInsuranceById(this.insuranceIdvalue)
                .subscribe(
                function (response:any) {
                    vm.model = response;

                    if (vm.model.startDate)
                        vm.model.startDate = vm.utilityClass.getUtcDateFromString(vm.model.startDate);
                    if (vm.model.endDate)
                        vm.model.endDate = vm.utilityClass.getUtcDateFromString(vm.model.endDate);
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
    ngAfterContentChecked(): void {

        let vm = this;
        if (vm.model.companyId != undefined && vm.model.companyId > 0) {
            vm.fillPolicies(vm.model.companyId);


            //this.displayMarker();
        }
    }

    fillPolicies(id: string) {
        var company = this.companies.find(i => i.id == id);

        if (company != null) {
            this.policies = company.insurancePolicies;
        }
        else {
            this.policies = [];
        }
    }
    onSubmit(): void {

        let vm = this;
        vm.showProgress = true;
        vm.model.patientId = vm.patientId;
        if (this.model.startDate)
            this.model.startDate = this.utilityClass.getUtcDate(this.model.startDate);
        if (this.model.endDate)
            this.model.endDate = this.utilityClass.getUtcDate(this.model.endDate);

        if (isNaN(vm.insuranceIdvalue) && vm.insuranceIdvalue.toString().toLowerCase() == 'new') {
            // Add new
            this.patientService.createPatientInsurance(this.model)
                //.subscribe(
                //organization => this.model = organization,
                //error => this.errorMessage = <any>error);
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.model = response;
                    vm.model.startDate = vm.utilityClass.getUtcDateFromString(vm.model.startDate);
                    vm.model.endDate = vm.utilityClass.getUtcDateFromString(vm.model.endDate);
                    // store selected organization ID
                    //vm.storage.store("OrganizationID", vm.model.id);
                    //if (response.imageData != null) {
                    //    vm.model.imageData = response.imageData;
                    //    vm.model.imageId = response.imageId;
                    //}
                },
                function (error:any) { 
                    //console.log("Error happened" + error)
                    vm.toastr.error( error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
                );
        }
        else {
            // update
            this.patientService.updatePatientInsurance(this.model)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.model = response;
                    vm.model.startDate = vm.utilityClass.getUtcDateFromString(vm.model.startDate);
                    vm.model.endDate = vm.utilityClass.getUtcDateFromString(vm.model.endDate);

                },
                function (error:any) { 
                    //console.log("Error happened" + error)
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }

    }
    onClick() {
        this.isTableViewValue.emit(this.isTableView);
    }
    /////////////////////////////////////////////////////////////
    clear(): void {
        this.model = {};
        this.active = false;
        this.insuranceIdvalue = 'new';
        setTimeout(() => this.active = true, 0);
    }
    //deleteOrganization(id): void {
    //    let vm = this;
    //    if (id == undefined || isNaN(id)) {
    //        vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
    //        return;
    //    }

    //    vm.showProgress = true;
    //    this.patientService.deleteOrganization(id)
    //        .subscribe(
    //        function (response:any) {
    //            vm.toastr.success('Deleted successfully', '');
    //            vm.clear();

    //            // store selected organization ID
    //            vm.storage.store("OrganizationID", 'new');
    //        },
    //        function (error:any) { 
    //            //console.log("Error happened" + error)
    //            vm.toastr.error('Failed to Delete - ' + error, '');
    //        },
    //        function () {
    //            vm.showProgress = false;
    //        });
    //}

    //imageChanged(response:any)
    //{
    //    let attchmentInfo: any = {};

    //    if (response != null) {

    //        if (response.originalName == undefined)
    //        {
    //            this.model.attachmentInfo = null;
    //            return;
    //        }

    //        this.model.attachmentInfo = attchmentInfo;
    //        this.model.attachmentInfo.originalName = response.originalName;
    //        this.model.attachmentInfo.keyName = response.keyName;
    //        this.model.attachmentInfo.fullPath = response.fullPath;
    //        this.model.attachmentInfo.fileType = response.fileType;
    //    }
    //    else {
    //        this.model.attachmentInfo = null;
    //    }

    //}

}