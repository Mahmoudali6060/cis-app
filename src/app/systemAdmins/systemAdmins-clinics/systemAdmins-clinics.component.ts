import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { AdministrationService } from '../../administration/shared/administration.service';
import { UtilityClass } from '../../shared/shared/utility.class';

@Component({

    selector: 'systemAdmins-clinics',
    templateUrl: 'systemAdmins-clinics.component.html'

})

export class SystemAdminClinicsComponent implements OnInit {

    lstToTranslated: string[] = [];
    filterString!: string;
    clinicsList!: any[];
    showProgress = false;
    selectClinicsTab: boolean = true;
    newSubscription: any = {};
    newSubscriptionToSave: any = {};
    selectedClinicId!: any;
    active: boolean = true;
    toPrintDiv: string = "print-section";
    newCredit: any = { id: 0 };
    newCreditToSave: any = { id: 0 };
    utilityClass: UtilityClass = new UtilityClass();
    todayDate: string = '';
    enableMyAccountBtn: boolean = false;
    @ViewChild('btnSubscriptionModalClose') btnSubscriptionModalClose!: ElementRef;
    @ViewChild('btnSmsCreditModalClose') btnSmsCreditModalClose!: ElementRef;

    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private administrationService: AdministrationService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['clinicLevelName', 'ClinicLevelNameTranslation'];

        this.todayDate = this.utilityClass.getUtcDateAsString(new Date());
        this.getAllClinics();
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    getAllClinics() {
        this.showProgress = true;
        let thisComponent = this;
        this.administrationService.getAllClinics()
            .subscribe(
                function (response: any) {
                    thisComponent.clinicsList = response;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    changeActivation(id: any, event: any) {

        var selectedObject = this.clinicsList.find(o => o.id == id);
        if (selectedObject != null && selectedObject != undefined) {
            selectedObject.isActive = event.target.checked;

            let thisComponent = this;
            this.showProgress = true;
            this.administrationService.toggleClinicActivation(id)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
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

    selectClinic(clinicId: any) {
        this.selectedClinicId = clinicId;
    }

    renewSubcscription(): void {

        this.showProgress = true;
        this.newSubscriptionToSave.clinicId = this.selectedClinicId;
        this.newSubscriptionToSave.startDate = this.utilityClass.getUtcDate(this.newSubscription.startDate);
        this.newSubscriptionToSave.endDate = this.utilityClass.getUtcDate(this.newSubscription.endDate);
        this.newSubscriptionToSave.numberOfUsers = this.newSubscription.numberOfUsers;
        //Renew
        let thisComponent = this;
        this.administrationService.renewSubcscription(thisComponent.newSubscriptionToSave)
            .subscribe(
                function (response: any) {
                    //Reset the subscription
                    thisComponent.newSubscription = {};
                    thisComponent.newSubscriptionToSave = {};
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.closeSubscriptionModal();

                    //Refresh clinics
                    thisComponent.getAllClinics();
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });

    }

    closeSubscriptionModal() {
        this.btnSubscriptionModalClose.nativeElement.click();
    }

    addSmsCredit(): void {

        this.showProgress = true;
        // update the model to save
        this.newCreditToSave.clinicId = this.selectedClinicId;
        this.newCreditToSave.credit = this.newCredit.credit;

        //Add
        let thisComponent = this;
        this.administrationService.addSmsCredit(thisComponent.newCreditToSave)
            .subscribe(
                function (response: any) {
                    //Reset the subscription
                    thisComponent.newCredit = { id: 0 };
                    thisComponent.newCreditToSave = { id: 0 };
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');

                    thisComponent.closeSmsCreditModal();
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });

    }

    closeSmsCreditModal() {
        this.btnSmsCreditModalClose.nativeElement.click();
    }


}