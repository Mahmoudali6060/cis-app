import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../security/shared/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { InsuranceService } from '../shared/insurance.service';
import { UtilityClass } from '../../shared/shared/utility.class'
import { Table } from 'primeng/table';

@Component({

    selector: 'insurance-generate-invoice',
    templateUrl: './insurance-generate-invoice.component.html'
})

export class InsuranceGenerateInvoiceComponent implements OnInit {

    utilityClass: UtilityClass = new UtilityClass();

    active: boolean = true;
    showProgress = false;
    enableViewCompanyDetails: boolean = false;
    enableGenerateInvoicesBtn: boolean = false;
    toPrintDiv: string = "print-section";
    clinicId = '0';
    claimsSearchParameters: any = {};
    periodStartDate: Date | undefined;
    periodEndDate: Date | undefined;

    claimsList: any[] = [];
    companiesList: any[] = [];
    policiesList: any[] = [];
    isGenerateInvoiceActive: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    invoiceCompanyId!: any;
    invoicePolicyId!: any;
    invoiceCreatorId!: any;
    prepaidBalance!: any;
    totalAmount!: any;
    lstToTranslated: string[] = [];
    @ViewChild('dt') table!: Table;

    constructor(
        private toastr: ToastrService,
        private localStorage: LocalStorageService,
        private router: Router,
        private insuranceService: InsuranceService,
        private translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {

        this.lstToTranslated = ['creatorName', 'creatorNameTranslation', 'doctorName', 'doctorNameTranslation', 'doctorDivision', 'doctorDivisionTranslation', 'patientName', 'patientNameTranslation', 'insuranceCompany', 'insuranceCompanyTranslation'];
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.invoiceCreatorId = this.localStorage.retrieve("UserID");
        this.claimsSearchParameters.clinicId = this.clinicId;

        this.getInvoiceClaimsSearchWrapper();

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
                if (item.permission.key == this.key.GenerateInvoices && (item.allow == true))
                    this.enableGenerateInvoicesBtn = true;

            }
        }
    }

    getInvoiceClaimsSearchWrapper() {
        this.showProgress = true;
        let thisComponent = this;
        this.insuranceService.getInvoiceClaimsSearchWrapper()
            .subscribe(
                function (response: any) {
                    thisComponent.companiesList = response.insuranceCompanies;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    searchForInvoiceClaims() {

        this.showProgress = true;
        let thisComponent = this;

        //Update the dates
        if (this.periodStartDate != undefined)
            this.claimsSearchParameters.startDate = this.utilityClass.getUtcDate(this.periodStartDate);
        if (this.periodEndDate != undefined)
            this.claimsSearchParameters.endDate = this.utilityClass.getUtcDate(this.periodEndDate);

        this.insuranceService.searchForInvoiceClaims(this.claimsSearchParameters)
            .subscribe(
                function (response: any) {
                    thisComponent.claimsList = response.claims;
                    thisComponent.totalAmount = response.totalAmount;
                    thisComponent.prepaidBalance = response.companyPrePaidBalance;
                    thisComponent.invoiceCompanyId = thisComponent.claimsSearchParameters.companyId;
                    thisComponent.invoicePolicyId = thisComponent.claimsSearchParameters.policyId;
                    if (thisComponent.claimsList != undefined && thisComponent.claimsList.length > 0)
                        thisComponent.isGenerateInvoiceActive = true;
                    else
                        thisComponent.isGenerateInvoiceActive = false;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    fillCompanyPolicies(companyId: any) {
        if (this.companiesList != undefined && this.companiesList.length > 0) {
            let comp = this.companiesList.find(c => c.id == companyId);
            if (comp != undefined && comp.insurancePolicies != undefined)
                this.policiesList = comp.insurancePolicies;
            else
                this.policiesList = [];
        }
    }

    generateInvoice() {
        this.showProgress = true;
        let thisComponent = this;
        let invoice = this.createNewInvoice();

        this.insuranceService.generateInvoice(invoice)
            .subscribe(
                function (response: any) {
                    let msg = thisComponent.translate.instant("InvoiceGeneratedSuccessfully");
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

    createNewInvoice() {
        let invoice: any = { id: 0 };
        invoice.creatorId = this.invoiceCreatorId;
        invoice.clinicId = this.clinicId;
        invoice.companyId = this.invoiceCompanyId;
        invoice.policyId = this.invoicePolicyId;

        invoice.invoiceDate = this.utilityClass.getUtcDate(new Date());
        invoice.claims = this.claimsList;

        invoice.netAmount = this.totalAmount;
        invoice.totalCredit = this.prepaidBalance;

        return invoice;
    }
}