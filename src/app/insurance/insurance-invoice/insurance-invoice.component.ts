import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../security/shared/account.service';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { InsuranceService } from '../shared/insurance.service';
import { UtilityClass } from '../../shared/shared/utility.class'

@Component({

    selector: 'insurance-invoice',
    templateUrl: './insurance-invoice.component.html'
})

export class InsuranceInvoiceComponent implements OnInit {

    utilityClass: UtilityClass = new UtilityClass();
    active: boolean = true;
    showProgress = false;
    lstToTranslated: string[] = [];
    toPrintDiv: string = "print-section";
    clinicId = '0';
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableViewCompanyDetails: boolean = false;
    isDurationVisible: boolean = false;
    isPeriodOfTimeVisible: boolean = false;
    durationLabel: string = "Duration";
    periodStartDate: Date | undefined;
    periodEndDate: Date | undefined;
    invoiceSearchParameters: any = {};
    dateFiltersList: any[] = [];
    invoiceStatusesList: any[] = [];
    invoicesList: any[] = [];
    companiesList: any[] = [];
    policiesList: any[] = [];

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private router: Router
        , private insuranceService: InsuranceService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.invoiceSearchParameters.clinicId = this.clinicId;

        this.lstToTranslated = ['companyName', 'companyNameTranslation', 'creatorName', 'creatorNameTranslation'];
        this.getInvoiceSearchParametersWrapper();

        this.getAllInvoicesToday();

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
            }
        }
    }

    getAllInvoicesToday() {
        this.showProgress = true;
        let thisComponent = this;
        this.insuranceService.getAllInvoicesToday(this.clinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.invoicesList = response;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    getInvoiceSearchParametersWrapper() {
        this.showProgress = true;
        let thisComponent = this;
        this.insuranceService.getInvoiceSearchParametersWrapper()
            .subscribe(
                function (response: any) {
                    thisComponent.dateFiltersList = response.dateFilters;
                    thisComponent.invoiceStatusesList = response.invoiceStatuses;
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

    searchForInvoices() {

        this.showProgress = true;
        let thisComponent = this;

        //Update the dates
        if (this.periodStartDate != undefined)
            this.invoiceSearchParameters.startDate = this.utilityClass.getUtcDate(this.periodStartDate);
        if (this.periodEndDate != undefined)
            this.invoiceSearchParameters.endDate = this.utilityClass.getUtcDate(this.periodEndDate);

        this.insuranceService.searchForInvoices(this.invoiceSearchParameters)
            .subscribe(
                function (response: any) {
                    thisComponent.invoicesList = response;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    selectDateFilter(dateFilter: string) {

        this.invoiceSearchParameters.dateFilter = dateFilter;

        if (dateFilter == "Days") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant("NumberofDays");
        }
        else if (dateFilter == "Weeks") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant("NumberofWeeks");
        }
        else if (dateFilter == "Months") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant("NumberofMonths");
        }
        else if (dateFilter == "Years") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant("NumberofYears");
        }
        else if (dateFilter == "TimePeriod") {
            this.isDurationVisible = false;
            this.isPeriodOfTimeVisible = true;
        }
        else {
            this.isDurationVisible = false;
            this.isPeriodOfTimeVisible = false;
        }
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
}