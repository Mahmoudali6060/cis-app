import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
import {TranslateService} from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

import { InsuranceService } from '../shared/insurance.service';

@Component({
   
    selector: 'insurance-company',
    templateUrl: 'insurance-company.component.html'
})

export class InsuranceCompanyComponent implements OnInit {
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    insuranceCompaniesList: any[];
    showProgress = false;
    enableViewCompanyDetails = false;
    enableShowCompanyDetails = false;
    enableActivateBtn = false;
    toPrintDiv: string = "print-section";

    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private insuranceService: InsuranceService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {

        this.getAllInsuranceCompanies();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.add == true || item.fullControl))
                    this.enableViewCompanyDetails = true;
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.activate == true || item.fullControl))
                    this.enableActivateBtn = true;
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.edit == true || item.fullControl  ))
                    this.enableShowCompanyDetails = true;
            }
        }
    }
    getAllInsuranceCompanies() {
        this.showProgress = true;
        let thisComponent = this;
        this.insuranceService.getAllInsuranceCompanies()
            .subscribe(
            function (response:any) {
                thisComponent.insuranceCompaniesList = response;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }

    changeActivation(id, event) {

        var selectedObject = this.insuranceCompaniesList.find(o => o.id == id);
        if (selectedObject != null && selectedObject != undefined) {
            selectedObject.isActive = event.target.checked;

            let thisComponent = this;
            this.showProgress = true;
            this.insuranceService.updateInsuranceCompanyActivation(selectedObject)
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