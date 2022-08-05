import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
@Component({

    selector: 'patient-note-services',
    templateUrl: 'patient-note-services.component.html',
})

export class PatientNoteServicesComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    showProgress = false;
    departmentServices:any = [];
    noteDiagnosis:any = [];
    noteServicesList: any[] = [];
    noteServicePackagesList: any[] = [];
    divisionId!: string;
    masterNoteServicesList: any[] = [];
    masterNoteServicePackagesList: any[] = [];
    departmentServicePackages:any = [];
    rbSelections = [{ value: 1, text: 'Service' }, { value: 2, text: 'ServicePackage' }];
    isService = true;
    selectedAction = 1;
    @Input() noteId!: number;
    @Output() onServicesSaved = new EventEmitter<any>();

    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) {
        this.masterNoteServicesList = [];
        this.masterNoteServicePackagesList = [];
    }

    ngOnInit() {

        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getClinicDepartmentServiceGroupsForTreeView();
        this.getClinicDepartmentServicePackageGroupsForTreeView();
        this.lstToTranslated = ['label', 'labelTranslation'];
    }

    ngOnChanges() {

        if (this.noteId) {
            this.selectedLang = this.storage.retrieve("selectedLanguage");
            this.getNoteDiagnosis();
            this.loadNoteServicesList();
        }
    }

    getClinicDepartmentServiceGroupsForTreeView() {
        let vm = this;
        //get department services groups
        this.doctorService.getClinicDivisionServiceGroupsForTreeView(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentServices = response;
                    vm.translateObjects.transform(vm.departmentServices, '', null, vm.lstToTranslated);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    getClinicDepartmentServicePackageGroupsForTreeView() {
        let vm = this;
        //get department service packages groups
        this.doctorService.getClinicDivisionServicePackageGroupsForTreeView(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentServicePackages = response;
                    vm.translateObjects.transform(vm.departmentServicePackages, '', null, vm.lstToTranslated);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }
    getNoteDiagnosis() {
        let vm = this;
        this.doctorService.getNoteDiagnosis(this.noteId.toString())
            .subscribe(
                function (response: any) {
                    vm.noteDiagnosis = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    loadNoteServicesList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getNoteServicesList(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteServicesList = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }


    SaveNoteServices() {
        let vm = this;
        vm.showProgress = true;
        this.doctorService.createClinicNoteService(this.masterNoteServicesList)
            .subscribe(
                function (response: any) {
                    vm.noteServicesList = response;
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.onServicesSaved.emit();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }


    onSelectionChange(value: any) {
        this.selectedAction = value;

        if (this.selectedAction == 1) {
            this.isService = true;
        }
        else if (this.selectedAction == 2) {
            this.isService = false;
        }
    }
}