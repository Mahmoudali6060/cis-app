import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({

    selector: 'clinic-inventory',
    templateUrl: './clinic-inventory.component.html'
})

export class ClinicInventoryComponent implements OnInit {
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , public accountService: AccountService
    ) { }
    selectInventoryTab: boolean = true;
    selectedClinicId!: number;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    enableAddQntTab: boolean = false;
    hasAccessQntPermission: boolean = false;
    hasCodingPermission: boolean = false;
    enableAdjustTab: boolean = false;
    hasAdjustLevelPermission: boolean = false;
    enableAdjustmentHistoryTab: boolean = false;
    enableDoctorRequestsTab: boolean = false;
    getUpdatedProduct: boolean = false;
    updateAfterAdjust: boolean = false;
    @Input() updates: string = '';
    showProgress: boolean = true;
    updateAmount(updates: any) {
        this.updateAfterAdjust = updates;
    }
    updateAmountAfterAdjust(value: any) {
        this.updateAfterAdjust = value;
        this.getUpdatedProduct = value;
    }
    ngOnInit(): void {

        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.PhysicalCount) {
                    if (item.fullControl == true || item.add || item.edit)
                        this.enableSaveBtn = true;// then send its value to add quantity component
                    if (item.fullControl || item.view)
                        this.hasAccessQntPermission = true;
                } else if (item.permission.key == this.key.Coding && (item.view)) {
                    this.hasCodingPermission = true;
                } else if (item.permission.key == this.key.AdjustInventoryLevel && (item.allow)) {
                    this.hasAdjustLevelPermission = true;
                } else if (item.permission.key == this.key.EndorsePhysicalCount && (item.allow)) {
                    this.enableAdjustmentHistoryTab = true;
                } else if (item.permission.key == this.key.TransferTransaction) {
                    if (item.fullControl || item.view)
                        this.enableDoctorRequestsTab = true;
                }


            }
            if (this.hasAccessQntPermission && this.hasCodingPermission)
                this.enableAddQntTab = true;

            if (this.hasCodingPermission && this.hasAdjustLevelPermission)
                this.enableAdjustTab = true;
        }

    }
    updateProductsList(getProduct: any) {
        this.getUpdatedProduct = getProduct;
    }
}