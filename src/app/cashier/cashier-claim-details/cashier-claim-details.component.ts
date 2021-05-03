import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { AccountService } from '../../security/shared/account.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';
import { ClaimService } from '../shared/claim.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'cashier-claim-details',
    templateUrl: './cashier-claim-details.component.html'
})

export class CashierClaimDetailsComponent implements OnInit {

    patient: any = {};
    claimId!: number;
    filterString!: string;
    showProgress = false;
    active: boolean = true;
    toPrintDiv: string = "print-section";
    patientClaim: any = {};
    isClaimCanceled: boolean | undefined;
    utilityClass: UtilityClass = new UtilityClass();
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableReprocessBtn: boolean = false;
    enableCancelClaim: boolean = false;
    enableEditClaimDate: boolean = false;
    showTime:any;

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private activatedRoute: ActivatedRoute
        , private claimService: ClaimService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {

        this.claimId = this.activatedRoute.snapshot.params['id'];

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

        this.getClaimDetails();
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.ProcessClaim && item.allow == true)
                    this.enableReprocessBtn = true;
                if (item.permission.key == this.key.CancelClaim && (item.allow == true))
                    this.enableCancelClaim = true;
                if (item.permission.key == this.key.EditClaimDate && (item.allow == true))
                    this.enableEditClaimDate = true;
            }
        }
    }
    getClaimDetails() {
        this.showProgress = true;
        let thisComponent = this;
        this.claimService.getClaimDetails(this.claimId)
            .subscribe(
                function (response: any) {
                    thisComponent.patientClaim = response;
                    thisComponent.patientClaim.claimDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.patientClaim.claimDate);
                    thisComponent.patientClaim.claimDateString = thisComponent.utilityClass.getDateTimeAsString(thisComponent.patientClaim.claimDate);;
                    if (thisComponent.patientClaim)
                        thisComponent.isClaimCanceled = thisComponent.patientClaim.claimStatus == 'Canceled';

                    thisComponent.patient = { unifiedMRN: thisComponent.patientClaim.unifiedMRN, clinicMRN: thisComponent.patientClaim.patientMrn, name: thisComponent.patientClaim.patientName }
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    reProcessClaim() {
        this.showProgress = true;
        let thisComponent = this;
        this.claimService.reProcessClaim(this.claimId)
            .subscribe(
                function (response: any) {
                    thisComponent.patientClaim = response;
                    thisComponent.patientClaim.claimDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.patientClaim.claimDate);
                    thisComponent.patientClaim.claimDateString = thisComponent.utilityClass.getDateTimeAsString(thisComponent.patientClaim.claimDate);;
                    if (thisComponent.patientClaim)
                        thisComponent.isClaimCanceled = thisComponent.patientClaim.claimStatus == 'Canceled';

                    thisComponent.patient = { unifiedMRN: thisComponent.patientClaim.unifiedMRN, clinicMRN: thisComponent.patientClaim.patientMrn, name: thisComponent.patientClaim.patientName }
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
            this.patientClaim.totalAmount = this.patientClaim.totalAmount - updates.oldValue;
            //Add the new value
            this.patientClaim.totalAmount = this.patientClaim.totalAmount + updates.newValue;
        }
    }

    confirmClaimCancellation() {
        let thisComponent = this;
        let toCancelClaim: any = {};
        let canceledById = this.localStorage.retrieve("UserID");
        let canceledByName = this.localStorage.retrieve("FullUserName");
        let dtNow: Date = new Date();
        toCancelClaim.id = this.claimId;
        toCancelClaim.cancellationReason = this.patientClaim.cancellationReason;
        toCancelClaim.canceledById = canceledById;
        toCancelClaim.cancellationDate = this.utilityClass.getUtcDateTime(dtNow);

        this.showProgress = true;
        this.claimService.cancelClaim(toCancelClaim)
            .subscribe(
                function (response: any) {
                    thisComponent.patientClaim.claimStatus = 'Canceled';
                    thisComponent.patientClaim.cancellationDateString = thisComponent.utilityClass.getISODateFormat(dtNow);
                    if (thisComponent.patientClaim.canceledBy == null)
                        thisComponent.patientClaim.canceledBy = {};
                    thisComponent.patientClaim.canceledBy.name = canceledByName;
                    thisComponent.isClaimCanceled = true;
                    //thisComponent.toastr.success('Claim canceled successfully', '');
                    let msg = thisComponent.translate.instant("ClaimCanceledSuccessfully");
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


    changeClaimDate() {
        let thisComponent = this;
        let toChangeClaim: any = {};
        toChangeClaim.id = this.claimId;
        toChangeClaim.claimDateChangeReason = this.patientClaim.claimDateChangeReason;
        toChangeClaim.claimDate = this.utilityClass.getUtcDateTime(this.patientClaim.claimDate);
        this.showProgress = true;
        this.claimService.changeClaimDate(toChangeClaim)
            .subscribe(
                function (response: any) {
                    thisComponent.patientClaim.claimDateString = thisComponent.utilityClass.getDateTimeAsString(thisComponent.patientClaim.claimDate);;
                    //thisComponent.toastr.success('ClaimDateChangedSuccessfully', '');
                    let msg = thisComponent.translate.instant("ClaimDateChangedSuccessfully");
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

    //get claim report
    openClaimReport() {

        let lang = this.localStorage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'en';

        let url = 'reports/ClaimDetailsReport/ReportViewer.aspx?lang=' + lang + '&id=' + this.patientClaim.id;

        window.open(url);
    }


}