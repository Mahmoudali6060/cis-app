import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { ClaimService } from '../shared/claim.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'cashier-claim-services',
    templateUrl: './cashier-claim-services.component.html'
})

export class CashierClaimServicesComponent implements OnInit, OnChanges {

    active: boolean = true;
    showProgress: boolean = false;
    patientChargesDiv: string = 'patientChargesDiv';

    controlsCount: number = 1;
    installment: any = {};
    selectedInstallment: any = {};
    installmentList: any[] = [];
    allCharges: any[] = [];
    paymentTypes: any[] = [];
    paymentMethods: any[] = [];
    selectedCharges: any[] = [];
    payment: any = { id: 0 };
    //paymentDate;
    patientId!: any;
    //patientClaimId;
    utilityClass: UtilityClass = new UtilityClass();
    editable: boolean = true;
    @ViewChild("btnOpenPaymentPopup") btnOpenPaymentPopup!: ElementRef;
    @ViewChild('btnOverrideChargeModal') btnOverrideChargeModal!: ElementRef;
    @ViewChild('btnCancelOverrideChargeModal') btnCancelOverrideChargeModal!: ElementRef;
    @ViewChild('btnReleaseChargeModal') btnReleaseChargeModal!: ElementRef;
    @ViewChild('btnCancelReleaseChargeModal') btnCancelReleaseChargeModal!: ElementRef;
    @ViewChild('btnMarkSatisfiedModal') btnMarkSatisfiedModal!: ElementRef;
    @ViewChild('btnCancelMarkSatisfiedModal') btnCancelMarkSatisfiedModal!: ElementRef;

    @Input() showPrintButton = false;
    @Input() displayColumnDate = false;
    @Input() passedCharges: any = [];
    @Input() passedPatient = {};
    @Input() isClaimCanceled!: any;
    @Output() onAmountUpdated = new EventEmitter<any>();
    @Output() onChargeSelected = new EventEmitter<any>();

    validtoSave: boolean = true;
    newOverrideAmount!: any;
    selectedCharge!: any;
    releaseChargeReason = '';
    satisfiedRemarks = '';
    isSatisfied: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enablePriceOverrideBtn: boolean = false;
    enableMarkSatisfiedBtn: boolean = false;

    enableReleaseChargeClaimBtn: boolean = false;
    enablePatientPaymentBtn: boolean = false;
    enableEditClaimDate: boolean = false;
    viewPateintPayment: boolean = false;
    lstToTranslated: string[] = [];
    paymentDateString: string = '';
    isPrePaid: boolean = false;
    oldPaymentMethodId: string = '';
    selectedInstallmentDate = '';
    constructor(public toastr: ToastrService,
        private claimService: ClaimService
        , public translate: TranslateService
        , private accountService: AccountService
        , public storage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (this.passedCharges != undefined && this.passedCharges != null) {
            this.allCharges = this.passedCharges;
            this.selectedCharges = [];

            if (this.allCharges.length > 0)
                this.patientId = this.allCharges[0].patientId;

            //this.patientId = this.patientClaim.patientId;
            //this.patientClaimId = this.patientClaim.id;
        }

    }

    ngOnInit(): void {
        let vm = this;
        vm.showProgress = true
        vm.lstToTranslated = ['serviceName', 'serviceNameTranslation', 'diagnoseName', 'diagnoseNameTranslation'];
        this.claimService.getPatientPaymentWrapper()
            .subscribe(
                function (response: any) {
                    vm.paymentTypes = response.paymentTypes;
                    vm.paymentMethods = response.paymentMethod;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.PriceOverride && (item.allow == true))
                    this.enableMarkSatisfiedBtn = this.enablePriceOverrideBtn = true;
                if (item.permission.key == this.key.Claim && (item.fullControl || item.view == true))
                    this.viewPateintPayment = true;
                if (item.permission.key == this.key.CancelClaim && (item.allow == true))
                    this.enableReleaseChargeClaimBtn = true;
                if (item.permission.key == this.key.Claim && (item.add == true || item.fullControl))
                    this.enablePatientPaymentBtn = true;

            }
        }
    }

    updateSelectedCharges(charge: any, event: any) {

        this.installmentList = [];
        //this.selectedCharges = [];
        //this.selectedCharges.push(charge);

        if (event.target.checked) {
            this.selectedCharges.push(charge);
        }
        else {
            var selectedObject = this.selectedCharges.find(o => o.id == charge.id);
            var index = this.selectedCharges.indexOf(selectedObject);
            if (index > -1)
                this.selectedCharges.splice(index, 1);
        }

        // calculate total amount and fire event
        let totalAmount = 0;
        this.selectedCharges.forEach(charge => {
            totalAmount += charge.actualNetPrice;
        });

        //this.clearPaymentandOpenPopup();

        this.onChargeSelected.emit(totalAmount);
    }

    savePatientPayment() {
        this.payment.charges = this.selectedCharges;
        this.payment.patientId = this.patientId;
        this.payment.clinicId = this.storage.retrieve("ClinicID");

        let vm = this;

        if (vm.payment.date)
            vm.payment.date = vm.utilityClass.getUtcDateTime(vm.payment.date);

        // validate payments 
        if (!this.validatePaymentInstallments()) {
            this.toastr.error(this.translate.instant('TotalPaymentsAmountMustnotExceedChargeAmount'));
            return;
        }

        if (this.installmentList.length == 0) {
            this.toastr.error(this.translate.instant('YouMustAddPayment'));
            return;
        }

        this.payment.installments = this.installmentList;

        this.claimService.savePatientPayment(vm.payment)
            .subscribe(
                function (response: any) {
                    vm.payment = response;
                    if (vm.payment.date)
                        vm.payment.date = vm.utilityClass.getDateTimeFromString(vm.payment.date);
                    // update selected charges to be paid
                    vm.selectedCharges.forEach(charge => {
                        var selectedCharge = vm.passedCharges.find((c: any) => c.id == charge.id);
                        selectedCharge.patientPaymentId = response.id;

                        // update charge remaining
                        let updatedCharge = vm.payment.charges.find((c: any) => c.id == selectedCharge.id);
                        selectedCharge.patientRemaining = updatedCharge.patientRemaining;
                    });
                    vm.selectedCharges = [];

                    //// update charge remaining
                    for (let i = 0; i < response.charges.length; i++) {
                        var selectedCharge = vm.passedCharges.find((c: any) => c.id == response.charges[i].id);
                        selectedCharge.patientRemaining = response.charges[i].patientRemaining;

                        //vm.passedCharges[i].patientRemaining = response.charges[i].patientRemaining;
                    }

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.raiseAmountUpdated(null)
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

    validatePaymentInstallments(): boolean {
        let paymentTotal = 0;
        for (let item of this.installmentList) {
            paymentTotal += item.amount;
        }

        if (paymentTotal > this.payment.amount)
            return false;

        return true;
    }

    getPatientPaymentById(paymentId: any) {
        let vm = this;
        vm.showProgress = true
        vm.editable = false;

        this.claimService.getPatientPaymentById(paymentId)
            .subscribe(
                function (response: any) {
                    vm.payment = response;
                    vm.installmentList = response.installments;
                    //vm.selectedCharges = response.charges;

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

    clearPaymentandOpenPopup() {
        this.payment = { id: 0 };
        this.active = false;
        this.editable = true;
        setTimeout(() => this.active = true, 0);

        // calculate total amount
        let totalAmount = 0;
        this.selectedCharges.forEach(charge => {
            totalAmount += charge.actualNetPrice;
        });

        // calculate total Vat amount
        let totalVATAmount = 0;
        this.selectedCharges.forEach(charge => {
            totalVATAmount += charge.vatAmountForPatient;
        });

        // calculate total amount
        let totalNetPrice = 0;
        this.selectedCharges.forEach(charge => {
            totalNetPrice += charge.netPrice;
        });

        // gathering charges name
        let chargesNames = '';
        this.selectedCharges.forEach(charge => {
            chargesNames = chargesNames.concat(charge.serviceName + ' , ');
        });

        this.payment.amount = totalAmount;
        this.payment.vatAmountForPatient = totalVATAmount;
        this.payment.netPrice = totalNetPrice;
        this.payment.chargesAsString = chargesNames.trim().slice(0, -1);

        // check if there is charges selected
        if (this.selectedCharges.length == 0) {
            //  this.toastr.error('You must select charges to add payment', '');
            let msg = this.translate.instant("MustSelectChargesToAddPayment");
            this.toastr.error(msg, '');
            return;
        }
        //to get the current date
        let date = new Date();

        this.payment.date = date;
        this.paymentDateString = this.utilityClass.getDateTimeAsString(this.payment.date);
        // open popup
        this.btnOpenPaymentPopup.nativeElement.click();
    }


    updatePaymentType(index: number, typeId: any) {
        var selectedType = this.paymentTypes.find(t => t.id == typeId);

        if (selectedType == null || selectedType == undefined)
            return;

        if (selectedType.key == 'PrePaid')
            this.isPrePaid = true;
        else {
            this.validtoSave = true;
            this.isPrePaid = false;
        }

        // get current installment from list 
        let currentInstallment = this.installmentList[index];
        currentInstallment.isPrepaid = this.isPrePaid;
    }

    overrideCharges(): void {
        let vm = this;
        vm.showProgress = true;

        this.claimService.overrideCharge({ id: this.selectedCharge.id, newOverrideAmount: this.newOverrideAmount })
            .subscribe(
                function (response: any) {

                    vm.raiseAmountUpdated({ oldValue: vm.selectedCharge.actualNetPrice, newValue: response.newOverrideAmount })

                    //update the selected charge
                    vm.selectedCharge.patientRemaining = response.patientRemaining;
                    vm.selectedCharge.isOverridden = response.isOverridden;
                    vm.selectedCharge.overrideIconName = response.overrideIconName;

                    vm.selectedCharge.unitPrice = response.unitPrice;
                    vm.selectedCharge.netPriceWithoutDiscount = response.netPriceWithoutDiscount;
                    vm.selectedCharge.insuranceCompanyNetPriceWithoutVAT = response.insuranceCompanyNetPriceWithoutVAT;
                    vm.selectedCharge.coverageType = response.coverageType;
                    vm.selectedCharge.insuranceCompanyNetPriceWithoutVAT = response.insuranceCompanyNetPriceWithoutVAT;
                    vm.selectedCharge.companyDiscountAmount = response.companyDiscountAmount;
                    vm.selectedCharge.vatAmountForCompany = response.vatAmountForCompany;
                    vm.selectedCharge.insuranceCompanyNetPrice = response.insuranceCompanyNetPrice;

                    vm.selectedCharge.patientShareAmount = response.patientShareAmount;
                    vm.selectedCharge.vatAmountForPatient = response.vatAmountForPatient;
                    vm.selectedCharge.patientDiscountAmount = response.patientDiscountAmount;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeOverrideChargeModal();
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

    releaseCharge(): void {
        let vm = this;
        vm.showProgress = true;

        this.claimService.releaseCharge({ id: this.selectedCharge.id, releaseReason: this.releaseChargeReason })
            .subscribe(
                function (response: any) {

                    vm.raiseAmountUpdated({ oldValue: vm.selectedCharge.actualNetPrice, newValue: vm.selectedCharge.actualNetPrice })
                    //update the selected charge
                    vm.selectedCharge.releaseReason = response.releaseReason;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    vm.selectedCharge.patientRemaining = response.actualNetPrice;
                    vm.selectedCharge.isReleased = response.isReleased;
                    vm.selectedCharge.releaseIconName = response.releaseIconName;
                    vm.selectedCharge.patientPaymentId = response.patientPaymentId;
                    vm.selectedCharge.patientPayment = response.patientPayment;


                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeReleaseChargeModal();
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

    markSatisfiedCharge(): void {
        let vm = this;
        vm.showProgress = true;

        this.claimService.markSatisfiedCharge({ id: this.selectedCharge.id, isSatisfied: this.isSatisfied, satisfiedRemarks: this.satisfiedRemarks })
            .subscribe(
                function (response: any) {

                    vm.raiseAmountUpdated({ oldValue: vm.selectedCharge.actualNetPrice, newValue: response.actualNetPrice })
                    //update the selected charge
                    vm.selectedCharge.isSatisfied = response.isSatisfied;
                    vm.selectedCharge.satisfiedRemarks = response.satisfiedRemarks;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    vm.selectedCharge.isSatisfied = response.isSatisfied;

                    vm.selectedCharge.companyShareString = response.companyShareString;
                    vm.selectedCharge.patientShareString = response.patientShareString;
                    vm.selectedCharge.netPrice = response.netPrice;
                    vm.selectedCharge.vatAmountForPatient = response.vatAmountForPatient;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    vm.selectedCharge.patientRemaining = response.patientRemaining;
                    vm.selectedCharge.netPatientDiscountPercentage = response.netPatientDiscountPercentage;
                    vm.selectedCharge.patientDiscountString = response.patientDiscountString;

                    vm.selectedCharge.coverageTypeIconName = response.coverageTypeIconName;

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeMarkSatisfiedModal();
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

    openOverrideChargeModal(charge: any) {
        this.selectedCharge = charge;

        this.btnOverrideChargeModal.nativeElement.click();
    }

    closeOverrideChargeModal() {
        this.btnCancelOverrideChargeModal.nativeElement.click();
    }

    clear() {
        this.selectedCharge = undefined;
        this.releaseChargeReason = '';
        this.isSatisfied = false;
        this.satisfiedRemarks = '';

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    raiseAmountUpdated(updates: any) {
        this.onAmountUpdated.emit(updates);
    }

    openReleaseChargeModal(charge: any) {
        this.selectedCharge = charge;
        this.releaseChargeReason = charge.releaseReason;

        this.btnReleaseChargeModal.nativeElement.click();
    }

    closeReleaseChargeModal() {
        this.btnCancelReleaseChargeModal.nativeElement.click();
    }

    openMarkSatisfiedModal(charge: any) {
        if (charge.coverageType == 'ConditionallyCovered') {
            this.selectedCharge = charge;
            this.isSatisfied = charge.isSatisfied;
            this.satisfiedRemarks = charge.satisfiedRemarks;
            this.btnMarkSatisfiedModal.nativeElement.click();
        }
    }

    closeMarkSatisfiedModal() {
        this.btnCancelMarkSatisfiedModal.nativeElement.click();
    }

    changeSatisfied(event: any) {
        this.isSatisfied = event.target.checked;
    }

    getControlNumber() {
        return this.controlsCount; // GUID.newGuid();
    }

    addInstallment() {

        let todayDate = new Date();
        let todayDateString = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();

        let currentDate = this.utilityClass.getUtcDateTime(todayDate);

        this.installment = { id: 0, paymentId: this.payment.id, isPrepaid: false, dateString: todayDateString, date: currentDate };
        this.installmentList.push(this.installment);
        this.controlsCount++;
    }

    deleteInstallment(index: number, itemId: string): void {
        this.installmentList.splice(index, 1);
    }

    isNewItem(item: any): boolean {
        if (item && (item.id == undefined || item.id == 0))
            return true;
        return false;
    }

    openReport(reportName: string) {

        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.payment.id;

        window.open(url);
    }
    openReceiptReport(installmentId: string, reportName: string) {
        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.payment.id + "&installmentId=" + installmentId;

        window.open(url);
    }
    saveInstallment() {
        let vm = this;
        if (vm.selectedInstallment.date)
            vm.selectedInstallment.date = vm.utilityClass.getUtcDateTime(vm.selectedInstallment.date);

        this.claimService.saveInstallment(vm.selectedInstallment)
            .subscribe(
                function (response: any) {
                    vm.selectedInstallment = response;

                    vm.updateSelectedInstallmentInList(vm.selectedInstallment, false);

                    if (vm.selectedInstallment.date)
                        vm.selectedInstallment.date = vm.utilityClass.getDateTimeFromString(vm.selectedInstallment.date);

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');

                },
                function (error: any) {
                    vm.updateSelectedInstallmentInList(vm.selectedInstallment, true);
                    vm.selectedInstallment.date = vm.selectedInstallmentDate;
                    if (vm.selectedInstallment.date)
                        vm.selectedInstallment.date = vm.utilityClass.getDateTimeFromString(vm.selectedInstallment.date);

                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });

    }
    updateSelectedInstallmentInList(updatedInstallment: any, isError: any) {
        let vm = this;
        var selected = vm.installmentList.find(i => i.id == updatedInstallment.id);
        if (selected != undefined) {
            if (isError) {

                selected.date = vm.selectedInstallmentDate;
            } else {

                selected.dateString = updatedInstallment.dateString;
                selected.date = updatedInstallment.date;
                selected.dateTimeString = updatedInstallment.dateTimeString;
            }

        }

    }
    getSelectedItem(item: any) {
        let vm = this;
        if (vm.installmentList.length > 0) {

            let selected = vm.installmentList.find(i => i.id == item.id);
            if (selected != undefined) {
                vm.oldPaymentMethodId = selected.paymentMethodId;
                vm.selectedInstallmentDate = selected.date;
                vm.selectedInstallment = selected;
                if (vm.selectedInstallment.date)
                    vm.selectedInstallment.date = vm.utilityClass.getDateTimeFromString(vm.selectedInstallment.date);
            }

        }

    }
    getOriginalItem() {
        let vm = this;
        vm.selectedInstallment.paymentMethodId = vm.oldPaymentMethodId;

    }
}