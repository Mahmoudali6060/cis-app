import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';

import { InsuranceService } from '../shared/insurance.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'primeng/table';
@Component({

    selector: 'insurance-company-transactions',
    templateUrl: './insurance-company-transactions.component.html'
})

export class InsuranceCompanyTransactionsComponent implements OnInit {

    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    active: boolean = true;
    showProgress: boolean = false;
    allCharges: any[] = [];
    allCompanyPayments: any[] = [];
    paymentTypes: any[] = [];
    paymentMethods: any[] = [];
    dateFiltersList: any[] = [];
    companiesList = [];
    payment: any = { id: 0 };
    company: any = {};
    utilityClass: UtilityClass = new UtilityClass();
    @ViewChild("btnOpenPaymentPopup") btnOpenPaymentPopup!: ElementRef;;
    defaultChargeStatus = 'UnPaid';
    defaultClaimSearch = 'Charges';
    displayChargeStatus: boolean = true;
    enableViewCompanyDetails: boolean = true;
    enableSaveCompanyPaymentBtn: boolean = true;
    enableConsumeFromPrepaidBtn: boolean = true;
    refundModel: any = {};
    prePaidBalanceAmount = 0;
    pendingAmount = 0;
    amountToPay = 0;
    netAmount = 0;
    net = 0;
    isDurationVisible: boolean = false;
    isPeriodOfTimeVisible: boolean = false;
    durationLabel: string = "Duration";
    lstToTranslated: string[] = [];
    display: boolean = false;
    showActive: boolean = false;
    showEdit: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = true;

    searchCriteria: any = { 'chargeStatus': this.defaultChargeStatus, 'claimSearchType': this.defaultClaimSearch };

    claimSearchTypeList: any = [];
    chargeStatusList: any = [];
    @ViewChild('dt') table!: Table;
    constructor(public toastr: ToastrService,
        private insuranceService: InsuranceService,
        private localStorage: LocalStorageService
        , public accountService: AccountService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.lstToTranslated = ['paymentMethodName', 'paymentMethodNameTranslation', 'paymentTypeName', 'paymentTypeNameTranslation'];
        this.loadCompanyTransactionSearchWrapper();

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
                if (item.permission.key == this.key.PaymentIn && (item.allow == true))
                    this.enableSaveCompanyPaymentBtn = true;
                if (item.permission.key == this.key.ConsumeFromPrepaid && (item.allow == true))
                    this.enableConsumeFromPrepaidBtn = true;
            }
        }
    }

    loadCompanyTransactionSearchWrapper() {
        let vm = this;
        vm.showProgress = true
        this.insuranceService.getCompanyTransactionSearchWrapper()
            .subscribe(
                function (response: any) {
                    vm.paymentTypes = response.paymentTypes;
                    vm.paymentMethods = response.paymentMethod;
                    vm.chargeStatusList = response.chargeStatus;
                    vm.claimSearchTypeList = response.claimSearchType;
                    vm.dateFiltersList = response.dateFilters;
                    vm.companiesList = response.companiesList;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }



    //manageCompanySelection(selectedCompanyId) {
    //    this.searchCriteria.insuranceCompanyId = selectedCompanyId;
    //    this.display = false;
    //}

    showDialog() {
        this.display = true;
    }

    selectDateFilter(dateFilter: string) {

        this.searchCriteria.dateFilter = dateFilter;

        if (dateFilter == "Days") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = "Number of Days";
        }
        else if (dateFilter == "Weeks") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = "Number of Weeks";
        }
        else if (dateFilter == "Months") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = "Number of Months";
        }
        else if (dateFilter == "Years") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = "Number of Years";
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

    selectClaimSearchType(claimSearchType: any) {
        this.searchCriteria.claimSearchType = claimSearchType;

        if (claimSearchType == this.defaultClaimSearch)
            this.displayChargeStatus = true;
        else
            this.displayChargeStatus = false;
    }

    selectChargeStatus(chargeStatus: any) {
        this.searchCriteria.chargeStatus = chargeStatus;
    }

    getCompanyTransactions() {
        if (this.searchCriteria.insuranceCompanyId == '' || this.searchCriteria.insuranceCompanyId == undefined) {
            //this.toastr.error('ThereIsNoCompanySelected', '');
            this.toastr.error(this.translate.instant("ThereIsNoCompanySelected"), '');
            return;
        }

        if (this.searchCriteria.dateFilter == "TimePeriod") {
            if (this.searchCriteria.startDate == null || this.searchCriteria.endDate == null ||
                this.searchCriteria.startDate == undefined || this.searchCriteria.endDate == undefined) {
                //this.toastr.error('YouMustSelectStartDateAndEndDate', '');
                this.toastr.error(this.translate.instant("YouMustSelectStartDateAndEndDate"), '');
                return;
            }

            if (this.searchCriteria.startDate > this.searchCriteria.endDate) {
                // this.toastr.error('startDateCanNotBeLaterThanEndDate', '');
                this.toastr.error(this.translate.instant("StartDateCanNotBeLaterThanEndDate"), '');
                return;
            }

            this.searchCriteria.startDate = this.utilityClass.getUtcDate(this.searchCriteria.startDate);
            this.searchCriteria.endDate = this.utilityClass.getUtcDate(this.searchCriteria.endDate);
        }

        let vm = this;
        vm.showProgress = true
        vm.searchCriteria.clinicId = this.localStorage.retrieve("ClinicID");
        this.insuranceService.getCompanyTransactionsAccordingtoSearchCriteria(vm.searchCriteria)
            .subscribe(
                function (response: any) {
                    vm.allCharges = response.charges;
                    vm.company = response.insuranceCompany;
                    vm.allCompanyPayments = response.payments;

                    // Company ptrpaid, pending,.... values
                    vm.prePaidBalanceAmount = response.prePaidBalance;
                    vm.pendingAmount = response.companyPending;
                    vm.amountToPay = response.amountToPay;
                    vm.netAmount = response.netAmount;
                    var discount = +((vm.pendingAmount - vm.prePaidBalanceAmount).toFixed(2));
                    vm.net = discount;



                    if (vm.company == null || vm.company == undefined)
                        vm.toastr.warning(vm.translate.instant('NoCompanyWithProvidedCriteria'), '');


                    if (vm.searchCriteria.claimSearchType == 'Charges' && (vm.allCharges == null || vm.allCharges.length == 0))
                        vm.toastr.warning(vm.translate.instant('NoResults'), '');
                    if (vm.searchCriteria.claimSearchType == 'Transactions' && (vm.allCompanyPayments == null || vm.allCompanyPayments.length == 0))
                        vm.toastr.warning(vm.translate.instant('NoResults'), '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

    saveCompanyPayment() {
        let vm = this;

        vm.payment.insuranceCompanytId = vm.company.id;

        this.insuranceService.saveCompanyPayment(vm.payment)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

    getCompanyPaymentById(paymentId: any) {
        let vm = this;
        vm.showProgress = true

        this.insuranceService.getCompanyPaymentById(paymentId)
            .subscribe(
                function (response: any) {
                    vm.payment = response;

                    if (vm.payment.date)
                        vm.payment.date = vm.utilityClass.getDateTimeFromString(vm.payment.date);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

    refundFromPrepaid() {
        let vm = this;
        vm.refundModel.clinicId = this.localStorage.retrieve("ClinicID");
        vm.refundModel.insuranceCompanytId = vm.company.id;

        if (vm.company == null || vm.company == undefined || vm.company.id == undefined) {
            vm.toastr.error(vm.translate.instant("ThereIsNoCompanySelected"), '');
            return;
        }

        this.insuranceService.refundCompanyFromPrePaid(vm.refundModel)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');

                    // update finance fields such as prepaid, pending,.... values
                    vm.prePaidBalanceAmount = response.prePaidBalance;
                    vm.pendingAmount = response.companyPending;
                    vm.amountToPay = response.amountToPay;
                    vm.netAmount = response.netAmount;

                    vm.refundModel = {};
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
            );
    }

    updateAmount(updates: any) {
        let vm = this;
        this.insuranceService.getCompanyFinanceFields(vm.company.id, vm.localStorage.retrieve("ClinicID"))
            .subscribe(
                function (response: any) {
                    // update finance fields such as prepaid, pending,.... values
                    vm.prePaidBalanceAmount = response.prePaidBalance;
                    vm.pendingAmount = response.companyPending;
                    vm.amountToPay = 0;
                    vm.netAmount = response.netAmount;
                    var discount = +((vm.pendingAmount - vm.prePaidBalanceAmount).toFixed(2));
                    vm.net = discount;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
            );
    }

    updateAmountToPay(amount: any) {
        this.amountToPay = amount;
    }

}