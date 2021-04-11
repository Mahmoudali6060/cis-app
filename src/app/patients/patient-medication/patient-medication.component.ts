import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { DoctorService } from '../../doctors/shared/doctor.service';
import { SharedService } from '../../shared/shared/shared.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
    selector: 'patient-medication',
    templateUrl: 'patient-medication.component.html',
})

export class PatientMedicationComponent implements OnInit {
    selectBasicTab: boolean = true;

    @Input() allowEditing: boolean = true;
    @Input() patientId!: number;
    @Input() clinicNoteId!: number;
    @Input() usedInClinicNoteMedications: boolean = false;
    utilityClass: UtilityClass = new UtilityClass();

    isDetailsVisible: boolean = false;

    active = true;
    toSaveClinicNoteMedication: any = {};

    clinicNoteMedicationList: any[] = [];
    showProgress = false;

    isDoctor: boolean = false;
    previousTab: string = '';
    nextTab: string = '';
    lstToTranslated: string[] = [];
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['drugName', 'drugNameTranslation', 'dosageUnitName', 'dosageUnitNameTranslation', 'frequencyName', 'frequencyNameTranslation', 'relatedDiagnoseName', 'relatedDiagnoseNameTranslation', 'recorderName', 'recorderNameTranslation'];
        this.isDoctor = this.storage.retrieve("IsDoctor");

        if (this.isDoctor) {
            this.previousTab = '/patient/diagnosis/1';
            this.nextTab = '/patient/surgeries/1';
        }
        else {
            this.previousTab = '/patient/vitalSigns/1';
            this.nextTab = '/patient/services/1';
        }

        let thisComponent = this;

        if (this.usedInClinicNoteMedications && this.clinicNoteId && this.clinicNoteId > 0) {
            thisComponent.showProgress = true;
            this.doctorService.getClinicNoteMedications(thisComponent.clinicNoteId)
                .subscribe(
                    function (clinicNoteMedication: any) {
                        thisComponent.clinicNoteMedicationList = clinicNoteMedication;
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
        else if (this.patientId != null && this.patientId > 0) {
            thisComponent.showProgress = true;
            this.doctorService.getPatientSnapshotMedications(thisComponent.patientId)
                .subscribe(
                    function (clinicNoteMedication: any) {
                        thisComponent.clinicNoteMedicationList = clinicNoteMedication;
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }

    addNewClinicNoteMedication() {
        this.toSaveClinicNoteMedication = {};
        this.isDetailsVisible = true;
    }

    showDetails(rowData: any) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.getClinicNoteMedicationById(rowData.id)
                .subscribe(
                    function (matchedClinicNoteMedication: any) {
                        thisComponent.toSaveClinicNoteMedication = matchedClinicNoteMedication;
                        thisComponent.toSaveClinicNoteMedication.startDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.toSaveClinicNoteMedication.startDate);
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
            this.isDetailsVisible = true;
        }
    }

    hideDetails(updatedClinicNoteMedication: any) {
        if (updatedClinicNoteMedication) {

            let thisComponent = this;
            thisComponent.clinicNoteMedicationList.forEach(clinicNoteMedication => {
                if (clinicNoteMedication.id == updatedClinicNoteMedication.id)
                    thisComponent.clinicNoteMedicationList.splice(thisComponent.clinicNoteMedicationList.indexOf(clinicNoteMedication), 1);
            });

            this.clinicNoteMedicationList.push(updatedClinicNoteMedication);
        }

        this.isDetailsVisible = false;
    }

    deleteClinicNotMedication(rowData: any) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.deleteClinicNoteMedication(rowData.id)
                .subscribe(
                    function (matchedClinicNoteMedication: any) {
                        thisComponent.clinicNoteMedicationList.forEach(clinicNoteMedication => {
                            if (clinicNoteMedication.id == rowData.id)
                                thisComponent.clinicNoteMedicationList.splice(thisComponent.clinicNoteMedicationList.indexOf(clinicNoteMedication), 1);
                        });
                        let msg = thisComponent.translate.instant("DeletedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }

    changeCurrentStatus(clinicNoteMedicationId: any, event: any) {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.doctorService.changeClinicNoteMedicationCurrentStatus({ "id": clinicNoteMedicationId, "isCurrent": event.target.checked })
            .subscribe(
                function () {
                    let msg = thisComponent.translate.instant("StatusChanged");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

    }
}