import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ClinicService} from '../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-address',
    templateUrl: 'clinic-address.component.html'
})

export class ClinicAddressComponent implements OnInit {
    selectAddressTab: boolean = true;
    model: any = {};
    showProgress: boolean = true;
    active: boolean = true;
    clinicId: number = 1;
    userType: string = '';
    isClinicAdmin: boolean = false;
    public constructor(private clinicService: ClinicService,
                       private storage: LocalStorageService,
                       private toastr: ToastrService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.getClinicReachInformation();
    }

    getClinicReachInformation()
    {
        let vm = this;
        vm.showProgress = true;
        let clinicId = this.storage.retrieve("ClinicId");

        if (clinicId == null || clinicId == undefined)
            clinicId = 1;

        this.clinicService.getClinicReachInformation(clinicId)
            .subscribe(
            function (response:any) {
                vm.model = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    onSubmit() {
        let vm = this;
        vm.showProgress = true;
        this.model.clinicId = this.clinicId;
        this.clinicService.saveorUpdateReachInformation(this.model)
            .subscribe(
            function (response:any) {
                vm.model = response;
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

}