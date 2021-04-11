import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from '../../administration/shared/administration.service';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
enum EMRWizard {
    Diagnosis = 1,
    Medication,
    Services,
    LabTests,
    RadiologyTests,
    Templates,
    Remarks
}
@Component({

    selector: 'clinic-EMRWizard',
    templateUrl: './clinic-EMRWizard.component.html'
})

export class ClinicEMRWizardComponent implements OnInit {
    selectEMRWizardTab: boolean = true;
    selectAccountTab: boolean = true;
    clinicModel: any = { id: 0, isActive: true };
    clinicId!: number;
    emrValue!: any;
    concatEmrValue: string = '';
    selectClinicsTab: boolean = true;
    showProgress = false;
    active: boolean = true;
    wizardItems!: EMRWizard;

    constructor(private administrationService: AdministrationService,
        private localStorage: LocalStorageService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
        , public translate: TranslateService) { }


    ngOnInit(): void {
        this.clinicId = this._route.snapshot.params['id'];
        this.initializeModel();

    }

    initializeModel(): void {
        //Initialize the mode
        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.clinicId && this.clinicId > 0) {
            this.showProgress = true;
            this.administrationService.getClinicById(this.clinicId)
                .subscribe(
                    function (response: any) {
                        thisComp.clinicModel = response;
                        thisComp.wizardItems = thisComp.clinicModel.emrWizardList;
                        thisComp.showProgress = false;
                    },
                    function (error: any) {
                        thisComp.toastr.error(error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
    }

    saveEmrWizard(): void {
        let thisComponent = this;
        //thisComponent.emrValue = thisComponent.wizardItems[0];
        //var color: EMRWizard = <EMRWizard>EMRWizard[thisComponent.emrValue];
        thisComponent.GetEmrWizardOrder(thisComponent.wizardItems);
        thisComponent.clinicModel.emrWizardOrder = this.concatEmrValue.substring(0, this.concatEmrValue.length - 1);
        thisComponent.showProgress = true;

        // update
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicModel = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    returnToDefaultOrder(): void {

        let thisComponent = this;
        //thisComponent.GetEmrWizardOrder(thisComponent.wizardItems);
        thisComponent.clinicModel.emrWizardOrder = "1,2,3,4,5,6,7";
        thisComponent.showProgress = true;
        // update
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicModel = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.initializeModel();
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });


    }

    GetEmrWizardOrder(emrWizards: any): void {
        this.concatEmrValue = '';
        for (let emrWizard of emrWizards) {
            this.emrValue = emrWizard;
            var tempValue: any = EMRWizard[this.emrValue];// used to vonvert string into enum integer value
            this.concatEmrValue += tempValue + ',';

        }

    }
}