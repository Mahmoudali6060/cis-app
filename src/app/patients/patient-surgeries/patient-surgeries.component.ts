import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-surgeries',
    templateUrl: 'patient-surgeries.component.html',
})

export class PatientSurgeriesComponent implements OnInit {
    selectBasicTab: boolean = true;
    utilityClass: UtilityClass = new UtilityClass();
    isDetailsVisible: boolean = false;
    @Input() patientId: number | undefined;
    @Input() patientDOB: Date | undefined;
    @Input() allServices: any[] = [];
    @Input() enable: boolean = true;
    active = true;
    lstToTranslated: string[] = [];
    surgeriesList = [];
    showProgress = false;
    toSaveSurgery: any = {};

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    )
    { }

    ngOnInit(): void {
        this.lstToTranslated = ['surgeryName', 'surgeryNameTranslation'];
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.doctorService.getPatientSnapshotSurgeries(thisComponent.patientId)
            .subscribe(
            function (surgeries) {
                thisComponent.surgeriesList = surgeries;
            },
            function (error:any) { 
                thisComponent.toastr.error( error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

    }

    addNewSurgery() {
        this.toSaveSurgery = {};
        this.isDetailsVisible = true;
    }

    showDetails(rowData) {
        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.getSurgeryById(rowData.id)
                .subscribe(
                function (matchedSurgery) {
                    thisComponent.toSaveSurgery = matchedSurgery;
                    thisComponent.toSaveSurgery.dateTime = thisComponent.utilityClass.getDateTimeFromString(thisComponent.toSaveSurgery.dateTime);
                },
                function (error:any) { 
                    thisComponent.toastr.error( error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
            this.isDetailsVisible = true;
        }
    }

    hideDetails(updatedSurgery) {
        if (updatedSurgery) {

            let thisComponent = this;
            thisComponent.surgeriesList.forEach(surgery => {
                if (surgery.id == updatedSurgery.id)
                    thisComponent.surgeriesList.splice(thisComponent.surgeriesList.indexOf(surgery), 1);
            });

            this.surgeriesList.push(updatedSurgery);
        }

        this.isDetailsVisible = false;
    }

    deleteSurgery(rowData) {

        if (rowData && rowData.id) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.doctorService.deleteSurgery(rowData.id)
                .subscribe(
                function () {
                    thisComponent.surgeriesList.forEach(surgery => {
                        if (surgery.id == rowData.id)
                            thisComponent.surgeriesList.splice(thisComponent.surgeriesList.indexOf(surgery), 1);
                    });
                    let msg = thisComponent.translate.instant("DeletedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error:any) { 
                    thisComponent.toastr.error( error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
        }
    }

}