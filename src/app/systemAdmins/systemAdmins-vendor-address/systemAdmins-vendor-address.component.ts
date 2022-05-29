import {Component, OnInit , OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AdministrationService } from '../../administration/shared/administration.service';
import { SystemAdminService } from '../shared/system-admin.service';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'systemAdmins-vendor-address',
    templateUrl: 'systemAdmins-vendor-address.component.html'
})

export class SystemAdminVendorAddressComponent implements OnInit , OnChanges {

    enableMyAccountBtn: boolean = false;
    @Input() vendorModel: any = {}
    @Output() onModelUpdated = new EventEmitter<any>();
    showProgress: boolean = false;
    constructor(
        private systemAdminService: SystemAdminService,
        private toastr: ToastrService
        , public translate: TranslateService
        ,private storage: LocalStorageService
) { }

    ngOnInit()
    {
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    ngOnChanges(): void {
        if (this.vendorModel.reachInfo == undefined || this.vendorModel.reachInfo == null) {
            this.vendorModel.reachInfo = {};
        }
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        // update
        this.systemAdminService.updateVendor(thisComponent.vendorModel)
            .subscribe(
            function (response:any) {
                thisComponent.vendorModel = response;
                thisComponent.raiseModelUpdated(thisComponent.vendorModel);
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