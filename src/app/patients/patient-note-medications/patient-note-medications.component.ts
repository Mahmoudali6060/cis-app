import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';

@Component({

    selector: 'patient-note-medications',
    templateUrl: 'patient-note-medications.component.html',
})

export class PatientNoteMedicationsComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    showProgress = false;
    departmentDrugs = [];
    noteDiagnosis = [];
    noteDrugsList: any[] = [];
    divisionId!: string;
    masterNoteDrugsList: any[] = [];
    drugDosageUnitsList: any[] = [];
    drugFrequenciesList: any[] = [];
    durationUnitsList: any[] = [];

    @Input() noteId!: number;
    @Output() onMedicationSaved = new EventEmitter<any>();

    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) {
        this.masterNoteDrugsList = [];
    }

    ngOnInit() {

        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getClinicDepartmentDrugGroupsForTreeView();
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.getClinicNoteMedicationWrapper();
    }

    ngOnChanges() {

        if (this.noteId) {
            this.selectedLang = this.storage.retrieve("selectedLanguage");
            this.getNoteDiagnosis();
            this.loadnoteDrugsList();
        }
    }

    getClinicNoteMedicationWrapper() {
        let vm = this;
        //get drop down lists initial values
        this.doctorService.getClinicNoteMedicationWrapper(0)
            .subscribe(
                function (response: any) {
                    vm.drugDosageUnitsList = response.drugUnits;
                    vm.drugFrequenciesList = response.drugFrequencies;
                    vm.durationUnitsList = response.durationUnits;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    getClinicDepartmentDrugGroupsForTreeView() {
        let vm = this;
        //get department services groups
        this.doctorService.getClinicDivisionDrugGroupsForTreeView(this.divisionId)
            .subscribe(
                function (response: any) {
                    vm.departmentDrugs = response;
                    vm.translateObjects.transform(vm.departmentDrugs, '', null, vm.lstToTranslated);
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

    loadnoteDrugsList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getClinicNoteMedications(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteDrugsList = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }

    SaveNoteDrugs() {
        let vm = this;

        let msg = this.validateRequiredFields();

        if (msg != '') {
            vm.toastr.error(msg, '');
            return;
        }

        vm.showProgress = true;
        this.doctorService.createClinicNoteMedication(this.masterNoteDrugsList)
            .subscribe(
                function (response: any) {
                    vm.noteDrugsList = response;
                    let msg = vm.translate.instant('SavedSuccessfully');
                    vm.toastr.success(msg, '');
                    vm.onMedicationSaved.emit();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    validateRequiredFields(): string {
        let msg = '';
        for (let obj of this.masterNoteDrugsList) {
            if (obj.isSelected) {
                if (obj.startDate == '' || obj.frequencyId == 0 || obj.relatedDiagnoseId == 0 ||
                    obj.durationUnit == 0 || obj.dosageUnitId == 0 ||
                    obj.startDate == null || obj.frequencyId == null || obj.relatedDiagnoseId == null ||
                    obj.durationUnit == null || obj.dosageUnitId == null)
                    return this.translate.instant('MustFillAllRequiredFields');
                if (obj.dosageQuantity < 0 || obj.duration < 0)
                    return this.translate.instant('NegativeNumberValidation');
            }
        }
        return msg;
    }

}