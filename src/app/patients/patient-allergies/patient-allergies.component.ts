﻿import {Component, OnInit, ViewChild, Input, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

import { DoctorService } from '../../doctors/shared/doctor.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-allergies',
    templateUrl: 'patient-allergies.component.html',


})

export class PatientAllergiesComponent implements OnInit {
    selectBasicTab: boolean = true;

    isDetailsVisible: boolean = false;
    @Input() patientId: number | undefined;
    @Input() enable: boolean = true;

    active = true;
    lstToTranslated: string[] = [];
    drugAllergiesList = [];
    toSaveDrugAllergy: any;
    showProgress = false;

    constructor(private doctorService: DoctorService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService,
        public translate: TranslateService
    )
    { }

    ngOnInit(): void {
        let thisComponent = this;
        this.lstToTranslated = ['drugName', 'drugNameTranslation', 'recorderName', 'recorderNameTranslation'];

        thisComponent.showProgress = true;
        this.doctorService.getPatientSnapshotDrugAllergies(thisComponent.patientId)
            .subscribe(
            function (clinicNoteDiagnosis) {
                thisComponent.drugAllergiesList = clinicNoteDiagnosis;
            },
            function (error:any) { 
                thisComponent.toastr.error('' + thisComponent.patientId + ' - ' + error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }
    addNewDrugAllergy() {
        this.toSaveDrugAllergy = {};
        this.isDetailsVisible = true;
    }

    showDetails(rowData) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.getDrugAllergyById(rowData.id)
                .subscribe(
                function (matchedDrugAllergy) {
                    thisComponent.toSaveDrugAllergy = matchedDrugAllergy;
                },
                function (error:any) { 
                    let msg = thisComponent.translate.instant("LoadDrugAllergy");
                    thisComponent.toastr.error(msg + rowData.id + ' - ' + error, '');

                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
            this.isDetailsVisible = true;
        }
    }

    hideDetails(updatedDrugAllergy) {
        if (updatedDrugAllergy) {

            let thisComponent = this;
            thisComponent.drugAllergiesList.forEach(allergy => {
                if (allergy.id == updatedDrugAllergy.id)
                    thisComponent.drugAllergiesList.splice(thisComponent.drugAllergiesList.indexOf(allergy), 1);
            });

            this.drugAllergiesList.push(updatedDrugAllergy);
        }

        this.isDetailsVisible = false;
    }

    deleteDrugAllergy(rowData) {

        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.deleteDrugAllergy(rowData.id)
                .subscribe(
                function (matchedDrugAllergy) {
                    thisComponent.drugAllergiesList.forEach(allergy => {
                        if (allergy.id == rowData.id)
                            thisComponent.drugAllergiesList.splice(thisComponent.drugAllergiesList.indexOf(allergy), 1);
                    });
                    let msg = thisComponent.translate.instant("DeletedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error:any) { 
                    let msg = thisComponent.translate.instant("LoadDrugAllergy");
                    thisComponent.toastr.error(msg + rowData.id + ' - ' + error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
        }
    }

}