import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AdministrationService } from '../../administration/shared/administration.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({

    selector: 'clinic-settings',
    templateUrl: './clinic-settings.component.html'
})

export class ClinicSettingsComponent {
    selectAccountTab: boolean = true;
    clinicModel: any = { id: 0, isActive: true };
    clinicId: string = '';
    selectClinicsTab: boolean = true;
    showProgress = false;
    active: boolean = true;
    userType: string = '';
    isClinicAdmin: boolean = false;
    selectSettingsTab: any;
    constructor(private administrationService: AdministrationService,
        private localStorage: LocalStorageService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.clinicId = this._route.snapshot.params['id'];

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.initializeModel();
    }

    initializeModel(): void {
        //Initialize the mode
        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.clinicId.toLowerCase() != 'new') {
            this.showProgress = true;
            this.administrationService.getClinicDiscountById(this.clinicId)
                .subscribe(
                    function (response: any) {
                        thisComp.clinicModel = response;
                        thisComp.showProgress = false;
                    },
                    function (error: any) {
                        thisComp.toastr.error(error.error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
    }


    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        // update
        this.administrationService.updateClinicDiscount(thisComponent.clinicModel)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicModel = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

}