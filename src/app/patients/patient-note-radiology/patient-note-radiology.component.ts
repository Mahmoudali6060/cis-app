import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
@Component({

    selector: 'patient-note-radiology',
    templateUrl: 'patient-note-radiology.component.html',
})

export class PatientNoteRadiologyComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    showProgress = false;
    departmentRadiologies:any = [];
    noteDiagnosis = [];
    noteRadiologiesList: any[] = [];
    divisionId!: string;
    masterNoteRadiologiesList: any[] = [];

    @Input() noteId!: number;
    @Output() onRadiologiesSaved = new EventEmitter<any>();

    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) {
        this.masterNoteRadiologiesList = [];
    }

    ngOnInit() {

        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getClinicDepartmentRadiologyTestsGroups();
        this.lstToTranslated = ['label', 'labelTranslation'];

    }

    ngOnChanges() {

        if (this.noteId) {
            this.selectedLang = this.storage.retrieve("selectedLanguage");
            this.getNoteDiagnosis();
            this.loadNoteRadiologyList();
        }
    }

    getClinicDepartmentRadiologyTestsGroups() {
        let vm = this;
        //get department services groups
        this.doctorService.getClinicDivisionRadiologyTestsGroups(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentRadiologies = response;
                    vm.translateObjects.transform(vm.departmentRadiologies, '', null, vm.lstToTranslated);
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

    loadNoteRadiologyList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getClinicNoteRadTests(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteRadiologiesList = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }

    SaveNoteRadiologies() {
        let vm = this;
        vm.showProgress = true;
        this.doctorService.createClinicNoteRadTest(this.masterNoteRadiologiesList)
            .subscribe(
                function (response: any) {
                    vm.noteRadiologiesList = response;
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.onRadiologiesSaved.emit();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

}