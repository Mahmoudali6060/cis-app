import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
@Component({

    selector: 'patient-note-laboratory',
    templateUrl: 'patient-note-laboratory.component.html',
})

export class PatientNoteLaboratoryComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    showProgress = false;
    departmentLaboratories: any = [];
    noteDiagnosis = [];
    noteLaboratoriesList: any[] = [];
    divisionId!: string;
    masterNoteLaboratoriesList: any[] = [];

    @Input() noteId!: number;
    @Output() onLaboratoriesSaved = new EventEmitter<any>();

    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) {
        this.masterNoteLaboratoriesList = [];
    }

    ngOnInit() {

        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getClinicDepartmentLaboratoryTestsGroupsForTreeView();
        this.lstToTranslated = ['label', 'labelTranslation'];

    }

    ngOnChanges() {

        if (this.noteId) {

            this.selectedLang = this.storage.retrieve("selectedLanguage");
            this.getNoteDiagnosis();
            this.loadNoteLaboratoryList();
        }
    }

    getClinicDepartmentLaboratoryTestsGroupsForTreeView() {
        let vm = this;
        //get department services groups
        this.doctorService.getClinicDivisionLaboratoryTestsGroupsForTreeView(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentLaboratories = response;
                    vm.translateObjects.transform(vm.departmentLaboratories, '', null, vm.lstToTranslated);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
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
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    loadNoteLaboratoryList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getClinicNoteLabTests(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteLaboratoriesList = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }

    SaveNoteLaboratories() {
        let vm = this;
        vm.showProgress = true;
        this.doctorService.createClinicNoteLabTest(this.masterNoteLaboratoriesList)
            .subscribe(
                function (response: any) {
                    vm.noteLaboratoriesList = response;
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.onLaboratoriesSaved.emit();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

}