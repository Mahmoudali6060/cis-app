import {Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from 'ng2-webstorage';
import { AdministrationService } from '../../administration/shared/administration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   
    selector: 'systemAdmins-clinic-address',
    templateUrl: 'systemAdmins-clinic-address.component.html'
})

export class SystemAdminClinicAddressComponent implements OnChanges, OnInit {
    enableMyAccountBtn: boolean = false;
    @Input() clinicModel: any = {}
    @Output() onModelUpdated = new EventEmitter<any>();
    showProgress: boolean = false;

    constructor(
        private administrationService: AdministrationService,
        private toastr: ToastrService
        , public translate: TranslateService
        , public storage: LocalStorageService) { }

    ngOnChanges(): void {
        if (this.clinicModel.reachInfo == undefined || this.clinicModel.reachInfo == null) {
            this.clinicModel.reachInfo = {};
        }
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined)
            this.enableMyAccountBtn = true;

    }
    ngOnInit(): void {
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }
    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        // update
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
            function (response:any) {
                thisComponent.clinicModel = response;
                thisComponent.raiseModelUpdated(thisComponent.clinicModel);
                let msg = thisComponent.translate.instant("SavedSuccessfully");
                thisComponent.toastr.success(msg, '');
            },
            function (error:any) { 
               thisComponent.toastr.error(error.error, '');
                thisComponent.showProgress = false;
            },
            function () {
                thisComponent.showProgress = false;
            });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }
}