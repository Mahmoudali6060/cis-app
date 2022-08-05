import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
@Component({

    selector: 'patient-note-diagnosis',
    templateUrl: 'patient-note-diagnosis.component.html',
})

export class PatientNoteDiagnosisComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    showProgress = false;
    departmentDiagnosis:any = [];
    //noteDiagnosis = [];
    noteDiagnosisList: any[] = [];
    divisionId!: string;
    masterNoteDiagnosisList: any[] = [];
    diagnosisStatuses: any[] = [];
    @Input() noteId!: number;

    @Output() onDiagnosisSaved = new EventEmitter<any>();

    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) {
        this.masterNoteDiagnosisList = [];
    }

    ngOnInit() {

        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getClinicDepartmentDiagnoseGroupsForTreeView();
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.getPatientNoteDiagnoseWrapper();

    }
    getPatientNoteDiagnoseWrapper() {
        let vm = this;
        //get department services groups
        this.doctorService.getPatientNoteDiagnoseWrapper()
            .subscribe(
                function (response: any) {
                    vm.diagnosisStatuses = response.noteDiagnosisStatuses;
                    //vm.translateObjects.transform(vm.departmentDiagnosis, null, null, vm.lstToTranslated);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });

    }
    ngOnChanges() {

        if (this.noteId) {
            this.selectedLang = this.storage.retrieve("selectedLanguage");
            //this.getNoteDiagnosis();
            this.loadNoteDiagnosisList();
        }
    }

    getClinicDepartmentDiagnoseGroupsForTreeView() {
        let vm = this;
        //get department services groups
        this.doctorService.getClinicDivisionDiagnoseGroupsForTreeView(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentDiagnosis = response;
                    vm.translateObjects.transform(vm.departmentDiagnosis, '', null, vm.lstToTranslated);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    //getNoteDiagnosis()
    //{
    //    let vm = this;
    //    this.doctorService.getNoteDiagnosis(this.noteId.toString())
    //        .subscribe(
    //        function (response:any) {
    //            vm.noteDiagnosis = response;
    //        },
    //        function (error:any) { 
    //            vm.toastr.error('Failed to Load Data - ' + error, '');
    //        },
    //        function () {
    //            vm.showProgress = false;
    //        });
    //}

    loadNoteDiagnosisList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getClinicNoteDiagnosis(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteDiagnosisList = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }

    SaveNoteDiagnosis() {
        let vm = this;
        vm.showProgress = true;
        this.doctorService.createClinicNoteDiagnose(this.masterNoteDiagnosisList)
            .subscribe(
                function (response: any) {
                    vm.noteDiagnosisList = response;
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.onDiagnosisSaved.emit();
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