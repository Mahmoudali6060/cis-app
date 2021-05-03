import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { AccountService } from '../../security/shared/account.service';
import { InsuranceService } from '../shared/insurance.service';
import { ClaimService } from '../../cashier/shared/claim.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { Charge } from '../../classes/charge.class';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'insurance-invoice-services',
    templateUrl: './insurance-invoice-services.component.html'
})

export class InsuranceInvoiceServicesComponent implements OnInit {
    active: boolean = true;
    showProgress: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableViewCompanyDetails: boolean = false;
    enableResubmitInvoice: boolean = false;
    enableReleaseCharge: boolean = false;
    enableViewPatientPayment: boolean = false;
    enableSaveCompanyPayment: boolean = false;
    enableCancelInvioce: boolean = false;
    enableCancelCharge: boolean = false;
    paymentTypes: any[] = [];
    paymentMethods: any[] = [];
    lstToTranslated: string[] = [];
    selectedCharges: Charge[] = [];
    payment: any = { id: 0 };
    editable: boolean = true;
    selectedCharge!: Charge;
    releaseChargeReason = '';
    resubmitChargeReason = '';
    rejectChargeReason = '';

    utilityClass: UtilityClass = new UtilityClass();

    @Input() invoiceChargesList!: Array<Charge>;
    @Input() isInvoiceCanceled: boolean | undefined;
    @Input() companyId!: number;
    @Output() onAmountUpdated = new EventEmitter<any>();
    @Output() onChargeSelected = new EventEmitter<any>();

    @ViewChild("btnOpenPaymentPopup") btnOpenPaymentPopup!: ElementRef;
    @ViewChild('btnReleaseChargeModal') btnReleaseChargeModal!: ElementRef;
    @ViewChild('btnCancelReleaseChargeModal') btnCancelReleaseChargeModal!: ElementRef;
    @ViewChild('btnRejectChargeModal') btnRejectChargeModal!: ElementRef;
    @ViewChild('btnCancelRejectChargeModal') btnCancelRejectChargeModal!: ElementRef;
    @ViewChild('btnResubmitChargeModal') btnResubmitChargeModal!: ElementRef;
    @ViewChild('btnCancelResubmitChargeModal') btnCancelResubmitChargeModal!: ElementRef;

    enableReleaseChargeboolean: boolean = true;

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private activatedRoute: ActivatedRoute
        , private insuranceService: InsuranceService
        , private claimService: ClaimService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        let vm = this;
        this.lstToTranslated = ['serviceName', 'serviceNameTranslation', 'diagnoseName', 'diagnoseNameTranslation', 'doctorName', 'doctorNameTranslation', 'policyName', 'policyNameTranslation'];
        vm.showProgress = true
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
                if ((item.permission.key == this.key.GenerateInvoices || item.permission.key == this.key.ExcludeInvoices || item.permission.key == this.key.IncludeInvoices || item.permission.key == this.key.DeleteInvoices || item.permission.key == this.key.EndorseInvoices) && (item.allow == true))
                    this.enableViewCompanyDetails = true;
                if ((item.permission.key == this.key.ReleaseCharge || item.permission.key == this.key.CancelCharge) && (item.allow == true))
                    this.enableResubmitInvoice = true;
                if ((item.permission.key == this.key.CancelCharge) && (item.allow == true))
                    this.enableCancelCharge = true;
                if ((item.permission.key == this.key.Claim) && (item.view == true))
                    this.enableViewPatientPayment = true;
                if ((item.permission.key == this.key.PaymentIn) && (item.allow == true))
                    this.enableSaveCompanyPayment = true;
                if ((item.permission.key == this.key.ReleaseCharge) && (item.allow == true))
                    this.enableReleaseCharge = true;
            }
        }
    }

    raiseAmountUpdated(updates: any) {
        this.onAmountUpdated.emit(updates);
    }

    updateSelectedCharges(charge: any, event: any) {
        if (event.target.checked) {
            this.selectedCharges.push(charge);
        }
        else {
            var selectedObject: any = this.selectedCharges.find(o => o.id == charge.id);
            var index = this.selectedCharges.indexOf(selectedObject);
            if (index > -1)
                this.selectedCharges.splice(index, 1);
        }

        // calculate total amount and fire event
        let totalAmount = 0;
        this.selectedCharges.forEach(charge => {
            totalAmount += charge.insuranceCompanyNetPrice;
        });

        this.onChargeSelected.emit(totalAmount);

    }


    saveCompanyPayment() {
        this.payment.companyCharges = this.selectedCharges;
        this.payment.insuranceCompanytId = this.companyId;
        this.payment.patientId = null;
        this.payment.clinicId = this.localStorage.retrieve("ClinicID");

        let vm = this;

        this.insuranceService.saveCompanyPayment(vm.payment)
            .subscribe(
                function (response: any) {
                    // update selected charges to be paid
                    vm.selectedCharges.forEach(charge => {
                        var selectedCharge: any = vm.invoiceChargesList.find(c => c.id == charge.id);
                        selectedCharge.companyPaymentId = response.id;
                    });
                    vm.selectedCharges = [];

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

    getPaymentById(paymentId: any) {
        let vm = this;
        vm.showProgress = true
        vm.editable = false;

        this.claimService.getPatientPaymentById(paymentId)
            .subscribe(
                function (response: any) {
                    vm.payment = response;

                    if (vm.payment.date)
                        vm.payment.date = vm.utilityClass.getDateTimeFromString(vm.payment.date);

                    if (vm.localStorage.retrieve("selectedLanguage") == 'en')
                        vm.payment.companyChargesAsString = vm.payment.companyChargesAsStringTranslation;

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
        let chargeAsString = '';
        let chargeAsStringTranslation = '';
        this.selectedCharges.forEach(charge => {
            totalAmount += charge.insuranceCompanyNetPrice;
            chargeAsString += charge.serviceName + ',';
            chargeAsStringTranslation += charge.serviceNameTranslation + ',';
        });

        if (this.localStorage.retrieve("selectedLanguage") == 'en')
            this.payment.companyChargesAsString = chargeAsStringTranslation;
        else
            this.payment.companyChargesAsString = chargeAsString;

        this.payment.amount = totalAmount;

        // check if there is charges selected
        if (this.selectedCharges.length == 0) {
            //  this.toastr.error('You must select charges to add payment', '');
            let msg = this.translate.instant("MustSelectChargesToAddPayment");
            this.toastr.error(msg, '');
            return;
        }

        // open popup
        this.btnOpenPaymentPopup.nativeElement.click();
    }


    updatePaymentType(typeId: any) {
        //var selectedType = this.paymentTypes.find(t => t.id == typeId);

        //if (selectedType.key == 'PrePaid') {
        //    // check the patient prepaid balance
        //    //if (this.patientClaim.prePaidBalance == 0 || this.patientClaim.prePaidBalance < this.payment.amount) {
        //    //    this.toastr.error('You do not have enough balance. your pre-paid balance is: ' + this.patientClaim.prePaidBalance, '');
        //    //    this.validtoSave = false;
        //    //}
        //}
        //else {
        //    this.validtoSave = true;
        //}
    }

    releaseCharge(): void {
        let vm = this;
        vm.showProgress = true;
        let toReleaseCharge: Charge = new Charge();
        toReleaseCharge.id = this.selectedCharge.id;
        toReleaseCharge.releaseReasonForCompany = this.releaseChargeReason;

        this.insuranceService.releaseCompanyCharge(toReleaseCharge)
            .subscribe(
                function (response: any) {

                    vm.raiseAmountUpdated({ oldValue: vm.selectedCharge.actualNetPrice, newValue: 0 })
                    //update the selected charge
                    vm.selectedCharge.releaseReasonForCompany = response.releaseReasonForCompany;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    vm.selectedCharge.isReleasedForCompany = response.isReleasedForCompany;
                    vm.selectedCharge.releaseForCompanyIconName = response.releaseForCompanyIconName;

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeReleaseChargeWindow();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    openReleaseChargeWindow(charge: any) {
        this.selectedCharge = charge;
        this.releaseChargeReason = charge.releaseReasonForCompany;

        this.btnReleaseChargeModal.nativeElement.click();
    }

    closeReleaseChargeWindow() {
        this.btnCancelReleaseChargeModal.nativeElement.click();
    }

    rejectCharge(): void {
        let vm = this;
        vm.showProgress = true;
        let toRejectCharge: Charge = new Charge();
        toRejectCharge.id = this.selectedCharge.id;
        toRejectCharge.rejectReasonForCompany = this.rejectChargeReason;
        this.insuranceService.rejectCompanyCharge(toRejectCharge)
            .subscribe(
                function (response: any) {

                    vm.raiseAmountUpdated({ oldValue: vm.selectedCharge.actualNetPrice, newValue: 0 })
                    //update the selected charge
                    vm.selectedCharge.rejectReasonForCompany = response.rejectReasonForCompany;
                    vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    vm.selectedCharge.isRejectedForCompany = response.isRejectedForCompany;
                    vm.selectedCharge.rejectForCompanyIconName = response.rejectForCompanyIconName;

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeRejectChargeWindow();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    openRejectChargeWindow(charge: any) {
        this.selectedCharge = charge;
        this.rejectChargeReason = charge.rejectReasonForCompany;

        this.btnRejectChargeModal.nativeElement.click();
    }

    closeRejectChargeWindow() {
        this.btnCancelRejectChargeModal.nativeElement.click();
    }

    resubmitCharge(): void {
        let vm = this;
        vm.showProgress = true;
        let toResubmitCharge: Charge = new Charge();
        toResubmitCharge.id = this.selectedCharge.id;
        toResubmitCharge.resubmitReasonForCompany = this.resubmitChargeReason;
        this.insuranceService.resubmitCompanyCharge(toResubmitCharge)
            .subscribe(
                function (response: any) {

                    //update the selected charge
                    vm.selectedCharge.resubmitReasonForCompany = response.resubmitReasonForCompany;
                    //vm.selectedCharge.actualNetPrice = response.actualNetPrice;
                    //vm.selectedCharge.isRejectedForCompany = response.isRejectedForCompany;
                    //vm.selectedCharge.rejectForCompanyIconName = response.rejectForCompanyIconName;

                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                    vm.closeResubmitChargeWindow();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    openResubmitChargeWindow(charge: any) {
        this.selectedCharge = charge;
        this.resubmitChargeReason = charge.resubmitReasonForCompany;

        this.btnResubmitChargeModal.nativeElement.click();
    }

    closeResubmitChargeWindow() {
        this.btnCancelResubmitChargeModal.nativeElement.click();
    }

    clear() {
        this.selectedCharge = new Charge();
        this.releaseChargeReason = '';
        this.resubmitChargeReason = '';
        this.rejectChargeReason = '';

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}