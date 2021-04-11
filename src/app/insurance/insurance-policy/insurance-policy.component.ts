import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { AccountService } from '../../security/shared/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';

import { InsuranceService } from '../shared/insurance.service';

@Component({

    selector: 'insurance-policy',
    templateUrl: './insurance-policy.component.html'
})

export class InsurancePolicyComponent implements OnInit {

    @Input() companyId: any;
    @Input() companyName: any;
    @Input() policiesList: any[] = [];

    @ViewChild('btnDisplayPolicyDetailsPopup') btnDisplayPolicyDetailsPopup!: ElementRef;
    @ViewChild('btnDisplayPolicyCopyPopup') btnDisplayPolicyCopyPopup!: ElementRef;
    @ViewChild('btnClosePolicyCopyPopup') btnClosePolicyCopyPopup!: ElementRef;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableViewCompanyDetails: boolean = false;
    enableCopyPolicyBtn: boolean = false;
    enableUpdatePolicyBtn: boolean = false;
    enableViewPolicyDetailsBtn: boolean = false;
    enableCancelInvioce: boolean = false;
    selectedPolicyId: any;
    showProgress = false;
    active: boolean = true;
    policyCopyModel = { id: 0 };
    selectedPolicyToCopyId: any;
    policyPatients: any[] = [];

    constructor(
        private insuranceService: InsuranceService,
        private translate: TranslateService,
        private toastr: ToastrService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {

                if ((item.permission.key == this.key.ThirdPartyPayersAndPolicies) && (item.add == true || item.fullControl))
                    this.enableCopyPolicyBtn = true;
                if ((item.permission.key == this.key.ThirdPartyPayersAndPolicies) && (item.edit == true || item.fullControl))
                    this.enableUpdatePolicyBtn = true;
                if ((item.permission.key == this.key.ThirdPartyPayersAndPolicies) && (item.view == true || item.fullControl))
                    this.enableViewPolicyDetailsBtn = true;
            }
        }
    }

    handlePolicyAdded(policy: any) {
        this.policiesList.push(policy);
    }

    handlePolicyUpdated(policy: any) {
        let policyTpUpdate = this.policiesList.find(p => p.id == policy.id);
        if (policyTpUpdate != undefined) {
            policyTpUpdate.name = policy.name;
            policyTpUpdate.code = policy.code;
            policyTpUpdate.startDateString = policy.startDateString;
            policyTpUpdate.endDateString = policy.endDateString;
        }


    }

    displayPolicyDetailsPopup(id: any) {
        this.selectedPolicyId = id;

        this.btnDisplayPolicyDetailsPopup.nativeElement.click();
    }

    displayPolicyDetailsPopupForNew() {
        this.selectedPolicyId = undefined;
        this.policyPatients = [];
        let name = this.companyName;

        this.btnDisplayPolicyDetailsPopup.nativeElement.click();
    }

    changeActivation(id: any, event: any) {

        var selectedObject = this.policiesList.find(o => o.id == id);
        if (selectedObject != null && selectedObject != undefined) {
            selectedObject.isActive = event.target.checked;

            let thisComponent = this;
            this.showProgress = true;
            this.insuranceService.updatePolicy(selectedObject)
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

    displayCopyPolicyPopup(id: any) {
        this.selectedPolicyToCopyId = id;
        this.btnDisplayPolicyCopyPopup.nativeElement.click();
    }

    closeCopyPolicyPopup() {
        //Clear
        this.selectedPolicyToCopyId = undefined;
        this.policyCopyModel = { id: 0 };
        //Close
        this.btnClosePolicyCopyPopup.nativeElement.click();
    }

    copyPolicy() {
        let thisComponent = this;
        this.showProgress = true;
        this.policyCopyModel.id = this.selectedPolicyToCopyId;
        this.insuranceService.copyPolicy(this.policyCopyModel)
            .subscribe(
                function (response: any) {
                    thisComponent.policiesList.push(response);
                    let msg = thisComponent.translate.instant("CopiedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.closeCopyPolicyPopup();
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