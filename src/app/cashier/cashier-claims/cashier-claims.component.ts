import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../security/shared/account.service';
import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
import { ClaimService } from '../shared/claim.service';
import { UtilityClass } from '../../shared/shared/utility.class'
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
   
    selector: 'cashier-claims',
    templateUrl: 'cashier-claims.component.html'
})

export class CashierClaimsComponent implements OnInit {

    contentStyle: any = { height: 400 };
    claimDiv: string = 'divPrintedArea';
    clinicId;
    filterString: string | undefined;
    claimsList: any[] = [];
    showProgress = false;
    toPrintDiv: string = "print-section";

    dateFiltersList: any[] = [];
    claimStatusesList: any[] = [];
    lstToTranslated: string[] = [];

    //Search
    utilityClass: UtilityClass = new UtilityClass();
    claimsSearchParameters: any = {};
    doctorsList: any[] = [];
    showActive: boolean = false;
    showEdit: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = true;
    isDurationVisible: boolean = false;
    isPeriodOfTimeVisible: boolean = false;
    display: boolean = false;
    durationLabel: string = this.translate.instant('Duration');
    periodStartDate: Date = new Date();
    periodEndDate: Date = new Date();
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableSearchForPateintClaim: boolean = false;
    enableQuickRegistrationBtn: boolean = false;

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private router: Router
        , private claimService: ClaimService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['doctorName', 'doctorNameTranslation', 'doctorDivision', 'doctorDivisionTranslation'];
       this.clinicId = this.localStorage.retrieve("ClinicID");
        this.claimsSearchParameters.clinicId = this.clinicId;
        this.getClaimsSearchParametersWrapper();
        this.getTodayClaims();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    getTodayClaims() {
        this.showProgress = true;
        let thisComponent = this;
        this.claimService.getTodayClaims(this.clinicId)
            .subscribe(
            function (response:any) {
                thisComponent.claimsList = response;

            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }

    getClaimsSearchParametersWrapper() {
        this.showProgress = true;
        let thisComponent = this;
        let clinicId = this.localStorage.retrieve('clinicID');
        this.claimService.getClaimsSearchParametersWrapper(clinicId)
            .subscribe(
            function (response:any) {
                thisComponent.dateFiltersList = response.dateFilters;
                thisComponent.claimStatusesList = response.claimStatuses;
                thisComponent.doctorsList = response.doctors;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }

    searchForClaims() {
        this.showProgress = true;
        let thisComponent = this;
        //Update the dates
        this.claimsSearchParameters.startDate = this.utilityClass.getUtcDate(this.periodStartDate);
        this.claimsSearchParameters.endDate = this.utilityClass.getUtcDate(this.periodEndDate);

        this.claimService.searchForClaims(this.claimsSearchParameters)
            .subscribe(
            function (response:any) {
                thisComponent.claimsList = response;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission && item.permission.key == this.key.Claim && (item.fullControl == true || item.view == true))
                    this.enableSearchForPateintClaim = true;
            }
        }
    }
    managePatientSelection(selectedPatientMrn) {
        this.claimsSearchParameters.patientMRN = selectedPatientMrn;
        this.display = false;
    }

    showDialog() {
        this.display = true;
    }

    selectDateFilter(dateFilter: string) {

        this.claimsSearchParameters.dateFilter = dateFilter;

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

    //get claim report
    openClaimReport(claimId: string, reportName: string) {

        let lang = this.localStorage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + claimId;

        window.open(url);
    }

}