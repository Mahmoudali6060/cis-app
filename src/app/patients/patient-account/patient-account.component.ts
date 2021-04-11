import { Component, SimpleChanges, OnChanges, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { HijriMonthList, GregorianMonthList } from '../shared/MonthsListType.enum';

import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';


@Component({

    selector: 'patient-account',
    templateUrl: 'patient-account.component.html',
})

export class PatientAccountComponent implements OnInit {
    selectBasicTab: boolean = true;
    numbers!: Number;
    serviceId = 'new';
    patientId!: string;
    @Input() patientAccountToSave: any = { reachInfo: { mobile: "" } };
    @Output() onModelUpdated = new EventEmitter<any>();
    @Input() title: string = '';
    active = true;
    // patientAccountToSave: any = {};
    selectedClinicId: string = "0";
    //patientAccountToSave: any = {};
    patientType: string = "";
    monthValueString!: string;

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    @ViewChild("patientAccountForm") patientAccountForm!: any;
    utilityClass: UtilityClass = new UtilityClass();
    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , private router: Router
        , public storage: LocalStorageService
        , public translate: TranslateService

    ) {

    }

    ngOnInit(): void {

        this.selectedClinicId = this.storage.retrieve("ClinicID");
        if (this.patientAccountToSave.reachInfo == null || this.patientAccountToSave.reachInfo == undefined) {
            let reachInfo: any = {};
            this.patientAccountToSave.reachInfo = reachInfo;
        }

    }


    intializePatientBirthDate(patientAccountToSaveData: any) {
        this.patientAccountToSave.dayValue = patientAccountToSaveData.dayValue;
        this.patientAccountToSave.monthValue = patientAccountToSaveData.monthValue;
        this.patientAccountToSave.yearValue = patientAccountToSaveData.yearValue;
        this.patientAccountToSave.birthDateType = patientAccountToSaveData.birthDateType;

    }
    savePatientAccount(): void {
        let thisComponent = this;
        if (!this.patientAccountToSave.hasOwnProperty('id')
            || this.patientAccountToSave.id.toString().toLowerCase() == 'new'
            || this.patientAccountToSave.id.toString().toLowerCase() == '0') {
            //Update

            this.patientService.createPatientAccount(this.patientAccountToSave)
                .subscribe(
                    function (response: any) {

                        thisComponent.patientAccountToSave = response;
                        thisComponent.raiseModelUpdated(thisComponent.patientAccountToSave);

                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearWithParent();

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error);
                        // thisComponent.clearWithParent();

                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else {

            this.patientService.updatePatientAccount(this.patientAccountToSave)

                .subscribe(
                    function (response: any) {

                        thisComponent.patientAccountToSave = response;
                        thisComponent.patientAccountToSave.birthDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.patientAccountToSave.birthDate);
                        thisComponent.raiseModelUpdated(thisComponent.patientAccountToSave);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');                  //  thisComponent.clearWithParent();//we don't need clear

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error);
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }

        thisComponent.patientService.notifyOther({ option: 'call_child', value: thisComponent.patientAccountToSave });

    }

    clearWithParent() {
        this.patientAccountToSave = {};
        this.patientAccountForm.valid = true;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

    isPatientMale(): boolean {
        return this.patientAccountToSave && this.patientAccountToSave.gender && this.patientAccountToSave.gender.toLowerCase() == 'male';
    }

    isPatientFemale(): boolean {
        return this.patientAccountToSave && this.patientAccountToSave.gender && this.patientAccountToSave.gender.toLowerCase() == 'female';
    }


    private navigateToPackages() {
        //routerLink="/receptionistPatients/1"
        this.router.navigate(['/receptionist/patients', this.selectedClinicId]);
    }
}


















