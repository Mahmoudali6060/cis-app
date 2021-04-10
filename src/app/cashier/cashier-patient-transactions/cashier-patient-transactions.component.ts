import {Component, OnInit, OnChanges, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { ClaimService } from '../shared/claim.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import {TranslateService} from '@ngx-translate/core';

@Component({
   
    selector: 'cashier-patient-transactions',
    templateUrl: 'cashier-patient-transactions.component.html'
})

export class CashierPatientTransactionsComponent implements OnInit {

    displayPrintButton: boolean = true;
    displayColumnDate: boolean = true;
    patientPaymentDiv: string = 'printArea';
    active: boolean = true;
    showProgress: boolean = false;
    allCharges: any[] = [];
    allPatientPayments: any[] = [];
    paymentTypes: any[] = [];
    paymentMethods: any[] = [];
    dateFiltersList: any[] = [];
    payment: any = { id: 0 };
    patient: any = {};
    utilityClass: UtilityClass = new UtilityClass();
    @ViewChild("btnOpenPaymentPopup") btnOpenPaymentPopup: ElementRef;;
    defaultChargeStatus = 'UnPaid';
    defaultClaimSearch = 'Charges';
    displayChargeStatus: boolean = true;
    refundModel: any = {};
    prePaidBalanceAmount = 0;
    pendingAmount = 0;
    amountToPay = 0;
    netAmount = 0;
    isDurationVisible: boolean = false;
    isPeriodOfTimeVisible: boolean = false;
    durationLabel: string = this.translate.instant('Duration');
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableChangePaymentDateBtn: boolean = false;

    enableRefundClaimBtn: boolean = false;
    enableEditClaimDate: boolean = false;
    enableSearchForPatient: boolean = false;
    enableViewPatientPaymentBtn: boolean = false;
    lstToTranslated: string[] = [];
    prepaidAmount = '';
    paymentMethodId;

    enableAttachmentBtn: boolean = false;
    isPatientSelected: boolean = false;
    selectedPatientId: string | undefined;
    parentType: string = "PatientFileType";
    showDocumentDetails: boolean = true;
    btnUploadText = this.translate.instant("UploadFile");
    fileType: boolean = true;
    fileNameTxt: string = this.translate.instant("FileName");
    fileNameUploadTxt: string = this.translate.instant("File");
    doctorsList: any[] = [];
    lastModifierName: string = '';
    lastModifierId: string = '';
    transactionWrapperModel: any = {};
    PrePaidRemarks: string = '';

    constructor(public toastr: ToastrService,
        private claimService: ClaimService,
        private localStorage: LocalStorageService,
        private accountService: AccountService,
        public translate: TranslateService) { }

    ngOnInit(): void {
        this.lastModifierId = this.localStorage.retrieve('userID');
        this.lastModifierName = this.localStorage.retrieve('fullUserName');
        this.lstToTranslated = ['paymentTypeName', 'paymentTypeNameTranslation', 'paymentMethodName', 'paymentMethodNameTranslation', 'chargesAsString', 'chargesAsStringTranslation'];
        this.loadPatientTransactionSearchWrapper();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.Claim && (item.view == true || item.fullControl)) {
                    this.enableSearchForPatient = true;
                    this.enableViewPatientPaymentBtn = true;
                } 
                if (item.permission.key == this.key.ConsumeFromPrepaid && (item.allow == true))
                    this.enableRefundClaimBtn = true;
                if (item.permission.key == this.key.Claim && (item.add == true))
                    this.enableChangePaymentDateBtn = true;
                if (item.permission.key == this.key.AddAttachmentFile && (item.allow == true))
                    this.enableAttachmentBtn = true;
            }
        }
    }

    loadPatientTransactionSearchWrapper() {
        let vm = this;
        vm.showProgress = true
        let clinicId = this.localStorage.retrieve('clinicID');
        this.claimService.getPatientTransactionSearchWrapper(clinicId)
            .subscribe(
            function (response:any) {
                vm.paymentTypes = response.paymentTypes;
                vm.paymentMethods = response.paymentMethod;
                vm.chargeStatusList = response.chargeStatus;
                vm.claimSearchTypeList = response.claimSearchType;
                vm.dateFiltersList = response.dateFilters;
                vm.doctorsList = response.doctors;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    display: boolean = false;
    showActive: boolean = false;
    showEdit: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = true;

    matchedPatients = [];
    model: any = {};
    searchCriteria: any = { 'chargeStatus': this.defaultChargeStatus, 'claimSearchType': this.defaultClaimSearch };

    claimSearchTypeList: any = [];
    chargeStatusList: any = [];

    managePatientSelection(selectedPatientMrn) {
        this.searchCriteria.patientClinicMRN = selectedPatientMrn;
        this.display = false;
    }

    showDialog() {
        this.display = true;
    }

    selectDateFilter(dateFilter: string) {

        this.searchCriteria.dateFilter = dateFilter;

        if (dateFilter == "Days") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant('NoOfDays');
        }
        else if (dateFilter == "Weeks") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant('NumberofWeeks');
        }
        else if (dateFilter == "Months") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant('NumberofMonths');
        }
        else if (dateFilter == "Years") {
            this.isDurationVisible = true;
            this.isPeriodOfTimeVisible = false;
            this.durationLabel = this.translate.instant('NumberofYears');
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

    selectClaimSearchType(claimSearchType) {
        this.searchCriteria.claimSearchType = claimSearchType;

        if (claimSearchType == this.defaultClaimSearch)
            this.displayChargeStatus = true;
        else
            this.displayChargeStatus = false;
    }

    selectChargeStatus(chargeStatus) {
        this.searchCriteria.chargeStatus = chargeStatus;
    }

    getPatientTransactions() {
        if (this.searchCriteria.patientClinicMRN == '' || this.searchCriteria.patientClinicMRN == undefined) {
            this.toastr.error(this.translate.instant('NoPatientSelected'), '');
            return;
        }

        if (this.searchCriteria.dateFilter == "TimePeriod") {
            if (this.searchCriteria.startDate == null || this.searchCriteria.endDate == null ||
                this.searchCriteria.startDate == undefined || this.searchCriteria.endDate == undefined) {
                this.toastr.error(this.translate.instant('YouMustSelectStartDateAndEndDate'), '');
                return;
            }

            if (this.searchCriteria.startDate > this.searchCriteria.endDate) {
                this.toastr.error(this.translate.instant('ScheduleStartDateValidation'), '');
                return;
            }

            this.searchCriteria.startDate = this.utilityClass.getUtcDate(this.searchCriteria.startDate);
            this.searchCriteria.endDate = this.utilityClass.getUtcDate(this.searchCriteria.endDate);
        }

        let vm = this;
        vm.showProgress = true
        vm.searchCriteria.clinicId = this.localStorage.retrieve("ClinicID");
        this.claimService.getPatientTransactionsAccordingtoSearchCriteria(vm.searchCriteria)
            .subscribe(
            function (response:any) {
                vm.allCharges = response.charges;
                vm.allPatientPayments = response.payments;
                vm.allPatientPayments = vm.allPatientPayments.concat(response.installments);
                vm.patient = response.patient;

                // patient ptrpaid, pending,.... values
                vm.prePaidBalanceAmount = response.prePaidBalance;
                vm.pendingAmount = response.patientPending;
                vm.amountToPay = response.amountToPay;
                vm.netAmount = response.netAmount;

                if (vm.patient == null || vm.patient == undefined) {
                    vm.toastr.warning(vm.translate.instant('NoPatientWithProvidedCriteria'), '');
                    vm.patient = {};
                    return;
                }

               
                vm.selectedPatientId = response.patient.id;
                vm.isPatientSelected = true;

                if (vm.searchCriteria.claimSearchType == 'Charges' && (vm.allCharges == null || vm.allCharges.length == 0))
                    vm.toastr.warning(vm.translate.instant('NoResults'), '');
                if (vm.searchCriteria.claimSearchType == 'Transactions' && (vm.allPatientPayments == null || vm.allPatientPayments.length == 0))
                    vm.toastr.warning(vm.translate.instant('NoResults'), '');
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    savePatientPayment() {
        let vm = this;

        this.claimService.savePatientPayment(vm.payment)
            .subscribe(
            function (response:any) {
                vm.toastr.success(vm.translate.instant('SavedSuccessfully'), '');
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    getPatientPaymentById(paymentId) {
        let vm = this;
        vm.showProgress = true

        this.claimService.getPatientPaymentById(paymentId)
            .subscribe(
            function (response:any) {
                vm.payment = response;

                if (vm.payment.date)
                    vm.payment.date = vm.utilityClass.getDateTimeFromString(vm.payment.date);
            },
            function (error:any) { 
                vm.toastr.error(vm.translate.instant('FailedToLoadData'), '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    refundFromPrepaid() {
        let vm = this;
        vm.refundModel.clinicId = this.localStorage.retrieve("ClinicID");
        vm.refundModel.patientId = vm.patient.id;
        //vm.refundModel.lastModifierID = vm.lastModifierId;
        //vm.refundModel.lastModifierName = vm.lastModifierName;
        if (vm.patient == null || vm.patient == undefined || vm.patient.id == undefined) {
            vm.toastr.error(vm.translate.instant('NoPatientSelected'), '');
            return;
        }

        this.claimService.reFundFromPrePaid(vm.refundModel)
            .subscribe(
            function (response:any) {
                vm.toastr.success(vm.translate.instant('SavedSuccessfully'), '');

                // update finance fields such as prepaid, pending,.... values
                vm.prePaidBalanceAmount = response.prePaidBalance;
                vm.pendingAmount = response.patientPending;
                //vm.amountToPay = response.amountToPay;
                //vm.netAmount = response.netAmount;

                vm.refundModel = {};
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            }
            );
    }

    updateAmount(updates) {
        let vm = this;
        this.claimService.getPatientFinanceFields(vm.patient.id, vm.localStorage.retrieve("ClinicID"))
            .subscribe(
            function (response:any) {
                // update finance fields such as prepaid, pending,.... values
                vm.prePaidBalanceAmount = response.prePaidBalance;
                vm.pendingAmount = response.patientPending;
                vm.amountToPay = 0;
                //vm.netAmount = response.netAmount;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            }
            );
    }

    updatePrepaidBalance() {
        let clinicID = this.localStorage.retrieve('ClinicID');
        if (!this.patient && (this.patient.id != null || this.patient.id != undefined)) {
            this.toastr.error(this.translate.instant('NoPatientSelected'), '');
            return;
        }

        if (this.prepaidAmount == '0') {
            this.toastr.error(this.translate.instant('AmountCannotBeZero'), '');
            return;
        }

        let vm = this;
        vm.showProgress = true;
        vm.transactionWrapperModel.patientId = vm.patient.id;
        vm.transactionWrapperModel.clinicId = clinicID;
        vm.transactionWrapperModel.prePaidAmount = vm.prepaidAmount;
        vm.transactionWrapperModel.paymentMethodId = vm.paymentMethodId;
        vm.transactionWrapperModel.description = vm.PrePaidRemarks;

        //vm.transactionWrapperModel.lastModifierID = vm.lastModifierId;
        // vm.transactionWrapperModel.lastModifierName = vm.lastModifierName;
        this.claimService.updatePrepaidBalance(vm.transactionWrapperModel)
            .subscribe(
            function (response:any) {
                // update finance fields such as prepaid, pending,.... values
                vm.prePaidBalanceAmount = response.prePaidBalance;
                //vm.pendingAmount = response.pending;
                //vm.amountToPay = response.amountToPay;
                //vm.netAmount = response.netAmount;
                vm.toastr.success(vm.translate.instant('SavedSuccessfully'), '');
                vm.prepaidAmount = '';
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            }
            );
    }

    updateAmountToPay(amount) {

        this.amountToPay = amount;

    }
}