import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { SystemAdminService } from '../shared/system-admin.service';
@Component({
   
    selector: 'systemAdmins-vendors',
    templateUrl: 'systemAdmins-vendors.component.html'

})

export class SystemAdminVendorsComponent implements OnInit {

    filterString: string | undefined;
    showProgress = false;
    selectVendorsTab: boolean = true;
    errorMessage: string | undefined;
    vendors: any[];
    toPrintDiv: string = "print-section";
    enableMyAccountBtn: boolean = false;
    constructor(public toastr: ToastrService
        , private systemAdminService: SystemAdminService
        , public translate: TranslateService
        , private storage: LocalStorageService


    ) { }

    ngOnInit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.systemAdminService.getVendors()
            .subscribe(vendors => this.vendors = vendors,
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }



    changeActivation(id, event) {
        let thisComponent = this;
        var selectedObject = this.vendors.find(o => o.id == id);
        if (selectedObject != null && selectedObject != undefined) {
            selectedObject.isActive = event.target.checked;

            thisComponent.showProgress = true;
            thisComponent.systemAdminService.updateVendor(selectedObject)
                .subscribe(
                function (response:any) {
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
        }

    }


}