import {Component, OnChanges, OnInit, ViewChild, Input, EventEmitter, Output, SimpleChanges, AfterContentChecked} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';
import {TranslateService} from '@ngx-translate/core';
@Component({
   
    selector: 'patient-personal',
    templateUrl: 'patient-personal.component.html',
})

export class PatientPersonalComponent implements OnInit, AfterContentChecked, OnChanges{
    selectBasicTab: boolean = true;
    @Input() model: any = {};
    @Output() onModelUpdated = new EventEmitter<any>();
    @Input() patientId: string = '';
    @Input() title: string = '';
    active = true;
   // model: any = {};
  
    countries = [];
    regions = [];
    cities = [];
    religions = [];
    nationalities = [];
    maritalStatuses = [];
    idTypes = [];
    bloodGroups = [];
    showProgress = false;
    selectedClinicId;
    @ViewChild("fileInput") fileInput;
    utilityClass: UtilityClass = new UtilityClass();

    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , private router: Router
        , public translate: TranslateService
    )
    { }

    ngOnInit(): void {
       let vm = this;
       
      //  let id = this._route.snapshot.params['id'];
       this.selectedClinicId = this.storage.retrieve("ClinicID");
        vm.showProgress = true;

        this.patientService.getPatientPersonalWrapper()
            .subscribe(
            function (response:any) {
                vm.countries = response.countries;
                //vm.regions = response.regions;
                vm.religions = response.religions;
                vm.nationalities = response.nationalities;
                vm.bloodGroups = response.bloodGroups;
                vm.idTypes = response.idTypes;
                vm.maritalStatuses = response.maritalStatuses;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                vm.showProgress = false;
            });
       
        // get organization in case of update
        //if (this.model.id.toString().toLowerCase() != 'new') {
        //    vm.showProgress = true;
            //this.patientService.getPatientById(this.patientId)
            //    .subscribe(
            //    function (response:any) {
            //        vm.model = response;
            //    },
            //    function (error:any) { 
            //        vm.toastr.error('Failed to get patient with ID'+" - " + error, '');
            //        vm.showProgress = false;
            //    },
            //    function () {
            //        vm.showProgress = false;
            //    });
    //    }
     
    }
    ngOnChanges(): void {

    }
    ngAfterContentChecked(): void {

        let vm = this;
        if (vm != null && vm != undefined && vm.model != null) {
            if (vm.model.birthCountryId != undefined && vm.model.birthCountryId > 0) {
                vm.fillRegions(vm.model.birthCountryId);
            }
            if (vm.model.birthStateId != undefined && vm.model.birthStateId > 0) {
                vm.fillCities(vm.model.birthStateId);
            }
        }
    }
    onSubmit(): void {
        
        let vm = this;
        vm.showProgress = true;


            this.patientService.updatePatientPersonalData(this.model)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                    if (vm.model.birthDate)
                        vm.model.birthDate = vm.utilityClass.getUtcDateFromString(vm.model.birthDate);

                    vm.raiseModelUpdated(vm.model);
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');

                    if (response.imageData != null) {
                        vm.model.imageData = response.imageData;
                        vm.model.imageId = response.imageId;
                    }
                },
                function (error:any) { 
                    //console.log("Error happened" + error)
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
                );
        
    }

    clear(): void {
        this.model = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    deleteOrganization(id): void {
        let vm = this;
        if (id == undefined || isNaN(id)) {
            vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
            return;
        }

   //     vm.showProgress = true;
        //this.organizationService.deleteOrganization(id)
        //    .subscribe(
        //    function (response:any) {
        //        vm.toastr.success('Deleted successfully', '');
        //        vm.clear();

        //        // store selected organization ID
        //        vm.storage.store("OrganizationID", 'new');
        //    },
        //    function (error:any) { 
        //        //console.log("Error happened" + error)
        //        vm.toastr.error('Failed to Delete - ' + error, '');
        //    },
        //    function () {
        //        vm.showProgress = false;
        //    });
    }

    imageChanged(response:any)
    {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined)
            {
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

    fillRegions(id: string) {
        var country = this.countries.find(i => i.id == id);

        if (country != null) {
            this.regions = country.regions;
            this.cities = [];
        }
        else {
            this.regions = [];
            this.cities = [];
        }
    }

    fillCities(id: string) {
        var region = this.regions.find(i => i.id == id);

        if (region != null)
            this.cities = region.cities;
        else
            this.cities = [];
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }
    private navigateToPackages() {
        //routerLink="/receptionistPatients/1"
        this.router.navigate(['/receptionist/patients', this.selectedClinicId]);
    }
}