import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorService } from '../../doctors/shared/doctor.service';
import { SharedService } from '../../shared/shared/shared.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'patient-diagnosis',
    templateUrl: 'patient-diagnosis.component.html',
})

export class PatientDiagnosisComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;
    utilityClass: UtilityClass = new UtilityClass();
    @Input() allowEditing: boolean = true;
    @Input() patientId!: number;
    @Input() clinicNoteId!: number;
    @Input() usedInClinicNoteDiagnosis: boolean = false;
    isDetailsVisible: boolean = false;
    diagnosisList: any[] = [];
    toSaveClinicNodeDiagnose: any;
    lstToTranslated: string[] = [];
    active = true;
    toSaveClinicNoteDiagnose: any = {};

    showProgress = false;

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public localStorage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        let thisComponent = this;
        this.lstToTranslated = ['diagnoseName', 'diagnoseNameTranslation', 'doctorName', 'doctorNameTranslation'];

        this.getClinicNoteDiagnosis();

        if (this.patientId != null && this.patientId > 0) {
            thisComponent.showProgress = true;
            this.doctorService.getPatientSnapshotDiagnosis(thisComponent.patientId)
                .subscribe(
                    function (clinicNoteDiagnosis: any) {
                        thisComponent.diagnosisList = clinicNoteDiagnosis;
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

    getClinicNoteDiagnosis() {
        let thisComponent = this;
        if (this.usedInClinicNoteDiagnosis && this.clinicNoteId && this.clinicNoteId > 0) {
            thisComponent.showProgress = true;
            this.doctorService.getClinicNoteDiagnosis(thisComponent.clinicNoteId)
                .subscribe(
                    function (clinicNoteDiagnosis: any) {
                        thisComponent.diagnosisList = clinicNoteDiagnosis;
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

    ngOnChanges(changes: SimpleChanges) {
        // this.getClinicNoteDiagnosis();
    }

    addNewClinicNoteDiagnose() {
        this.toSaveClinicNoteDiagnose = {};
        this.isDetailsVisible = true;
    }

    showDetails(rowData: any) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.getClinicNoteDiagnoseById(rowData.id)
                .subscribe(
                    function (matchedClinicNoteDiagnose: any) {
                        thisComponent.toSaveClinicNoteDiagnose = matchedClinicNoteDiagnose;
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

    hideDetails(updatedClinicNoteDiagnose: any) {
        if (updatedClinicNoteDiagnose) {

            let thisComponent = this;
            thisComponent.diagnosisList.forEach(clinicNoteDiagnose => {
                if (clinicNoteDiagnose.id == updatedClinicNoteDiagnose.id)
                    thisComponent.diagnosisList.splice(thisComponent.diagnosisList.indexOf(clinicNoteDiagnose), 1);
            });

            this.diagnosisList.push(updatedClinicNoteDiagnose);
        }

        this.isDetailsVisible = false;
    }

    deleteClinicNoteDiagnose(rowData: any) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.deleteClinicNoteDiagnose(rowData.id)
                .subscribe(
                    function (matchedClinicNoteDiagnose: any) {
                        thisComponent.diagnosisList.forEach(clinicNoteDiagnose => {
                            if (clinicNoteDiagnose.id == rowData.id)
                                thisComponent.diagnosisList.splice(thisComponent.diagnosisList.indexOf(clinicNoteDiagnose), 1);
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

    changeCurrentStatus(clinicNoteDiagnoseId: any, event: any) {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.doctorService.changeClinicNoteDiagnoseCurrentStatus({ "id": clinicNoteDiagnoseId, "isCurrent": event.target.checked })
            .subscribe(
                function (matchedClinicNoteDiagnose: any) {
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