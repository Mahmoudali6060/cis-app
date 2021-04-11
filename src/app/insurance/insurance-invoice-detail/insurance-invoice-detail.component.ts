import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../security/shared/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';
import { InsuranceInvoice } from '../../classes/insuranceInvoice.class';
import { InvoiceStatus } from '../../classes/enums.class';
import { Charge } from '../../classes/charge.class';
import { SecurityUser } from '../../classes/securityUser.class';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { InsuranceService } from '../shared/insurance.service';
import { ClaimService } from '../../cashier/shared/claim.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({

    selector: 'insurance-invoice-detail',
    templateUrl: 'insurance-invoice-detail.component.html'
})

export class InsuranceInvoiceDetailComponent {
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableViewCompanyDetails: boolean = false;
    enableCancelInvioce: boolean = false;
    enableEndorseInvoicesBtn: boolean = false;
    selectedInvoiceId!: number;
    filterString!: string;
    showProgress = false;
    active: boolean = true;
    toPrintDiv: string = "print-section";
    selectedInvoice: InsuranceInvoice = new InsuranceInvoice();
    invoiceChargesList!: any;
    isInvoiceCanceled: boolean | undefined;
    utilityClass: UtilityClass = new UtilityClass();
    companyId!: any;

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private activatedRoute: ActivatedRoute
        , private insuranceService: InsuranceService
        , private claimService: ClaimService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        this.selectedInvoiceId = this.activatedRoute.snapshot.params['id'];
        this.getInvoiceDetails();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if ((item.permission.key == this.key.GenerateInvoices || item.permission.key == this.key.ExcludeInvoices || item.permission.key == this.key.IncludeInvoices || item.permission.key == this.key.DeleteInvoices || item.permission.key == this.key.EndorseInvoices) && (item.allow == true))
                    this.enableViewCompanyDetails = true;
                if ((item.permission.key == this.key.ExcludeInvoices) && (item.allow == true))
                    this.enableCancelInvioce = true;
                if ((item.permission.key == this.key.EndorseInvoices) && (item.allow == true))
                    this.enableEndorseInvoicesBtn = true;
            }
        }
    }

    getInvoiceDetails() {
        this.showProgress = true;
        let thisComponent = this;
        this.insuranceService.getInvoiceById(this.selectedInvoiceId)
            .subscribe(
                function (response: any) {
                    thisComponent.selectedInvoice = response;
                    if (thisComponent.selectedInvoice) {
                        thisComponent.companyId = thisComponent.selectedInvoice.companyId;
                        thisComponent.invoiceChargesList = thisComponent.selectedInvoice.charges;
                        thisComponent.isInvoiceCanceled = thisComponent.selectedInvoice?.status?.toString() == "Canceled";
                    }
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    updateAmount(updates: any) {
        if (updates != null || updates != undefined) {
            //Subtract the old value
            this.selectedInvoice.netAmount = this.selectedInvoice.netAmount - updates.oldValue;
            //Add the new value
            this.selectedInvoice.netAmount = this.selectedInvoice.netAmount + updates.newValue;
        }
    }

    confirmInvoiceCancellation() {
        let thisComponent = this;
        let toCancelInvoice: InsuranceInvoice = new InsuranceInvoice();
        let canceledById = this.localStorage.retrieve("UserID");
        let canceledByName = this.localStorage.retrieve("FullUserName");
        let dtNow: Date = new Date();
        toCancelInvoice.id = this.selectedInvoiceId;
        toCancelInvoice.cancellationReason = this.selectedInvoice.cancellationReason;
        toCancelInvoice.canceledById = canceledById;
        toCancelInvoice.cancellationDate = this.utilityClass.getUtcDateTime(dtNow);

        this.showProgress = true;
        this.insuranceService.cancelInvoice(toCancelInvoice)
            .subscribe(
                function (response: any) {
                    thisComponent.selectedInvoice.status = InvoiceStatus.canceled;
                    thisComponent.selectedInvoice.cancellationDateString = thisComponent.utilityClass.getISODateFormat(dtNow);
                    if (thisComponent.selectedInvoice.canceledBy == null)
                        thisComponent.selectedInvoice.canceledBy = new SecurityUser();
                    thisComponent.selectedInvoice.canceledBy.name = canceledByName;
                    thisComponent.isInvoiceCanceled = true;
                    //thisComponent.toastr.success('Claim canceled successfully', '');
                    let msg = thisComponent.translate.instant("InvoiceCanceledSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    endorseInvoice() {
        let thisComponent = this;
        let toEndorseInvoice: InsuranceInvoice = new InsuranceInvoice();
        let canceledById = this.localStorage.retrieve("UserID");
        let canceledByName = this.localStorage.retrieve("FullUserName");
        let dtNow: Date = new Date();
        toEndorseInvoice.id = this.selectedInvoiceId;
        toEndorseInvoice.status = InvoiceStatus.endorsed;
        toEndorseInvoice.lastModifierID = canceledById;
        toEndorseInvoice.lastModifierName = canceledByName;
        toEndorseInvoice.lastModificationDate = this.utilityClass.getUtcDateTime(dtNow);

        this.showProgress = true;
        this.insuranceService.endorseInvoice(toEndorseInvoice)
            .subscribe(
                function (response: any) {
                    thisComponent.selectedInvoice.status = InvoiceStatus.endorsed;
                    let msg = thisComponent.translate.instant("InvoiceEndorsedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

}