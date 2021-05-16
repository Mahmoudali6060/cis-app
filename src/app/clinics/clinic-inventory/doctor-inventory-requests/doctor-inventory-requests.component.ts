import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AccountService } from '../../../security/shared/account.service';
import { UserPermissions } from '../../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../../shared/shared/permission-key.enum';
import { UtilityClass } from '../../../shared/shared/utility.class';
import { Table } from 'primeng/table';

@Component({

    selector: 'doctor-inventory-requests',
    templateUrl: './doctor-inventory-requests.component.html'
})

export class DoctorInventoryRequestsComponent implements OnInit {
    @Output() onProductSupplied = new EventEmitter<any>();
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    utilityClass: UtilityClass = new UtilityClass();
    inventoriesListDiv: string = 'incomingRequestsPrintingArea';
    selectInventoryTab: boolean = true;
    selectedClinicId!: number;
    showProgress = false;
    supplyStatus = true;
    doctorsRequestsList: any[] = [];
    supplidObject: any = {};
    inventoryRequestId!: number;
    suppliedQuantity!: number;
    description: any;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableSupplyBtn: boolean = false;
    lstToTranslated: string[] = [];

    doctorsList: any[] = [];
    dateFiltersList: any[] = [];
    requestStatusList: any[] = [];
    defaultRequestStatus = 'Requested';
    searchCriteria: any = { 'requestStatus': this.defaultRequestStatus };

    isDurationVisible: boolean = false;
    isPeriodOfTimeVisible: boolean = false;
    durationLabel: string = this.translate.instant('Duration');
    loading: boolean = true;
    @ViewChild('dt') table!: Table;
    

    ngOnInit(): void {
        this.lstToTranslated = ['itemName', 'itemNameTranslation', 'doctorName', 'doctorNameTranslation', 'departmentName', 'departmentNameTranslation', 'unitName', 'unitNameTranslation'];
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }

        this.getAllDoctorsRequests();
        this.loadDoctorRequestsSearchWrapper();
    }

    getAllDoctorsRequests() {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getAllDoctorsRequests(this.selectedClinicId)
            .subscribe(
                function (response: any) {

                    thisComponent.doctorsRequestsList = response;


                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                    thisComponent.loading = false;
    
                },
                function () { // finally
                    thisComponent.showProgress = false;
                    thisComponent.loading = false;
    
                });


    }
    calculateOrderOut(): void {
        let thisComponent = this;
        thisComponent.supplidObject.id = thisComponent.inventoryRequestId;
        this.clinicService.calculateRequestOfInventoryByDoctor(thisComponent.supplidObject)
            .subscribe(
                function (response: any) {
                    thisComponent.raiseProductSupplied(true);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.getAllDoctorsRequests();

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }


    raiseProductSupplied(getProducts: any) {
        this.onProductSupplied.emit(getProducts);
    }

    passInventoryRequestId(id: any) {
        this.supplidObject = {};
        this.inventoryRequestId = id;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.TransferTransaction) {
                    if (item.fullControl == true || item.add || item.edit)
                        this.enableSupplyBtn = true;
                }


            }

        }
    }

    loadDoctorRequestsSearchWrapper() {
        let vm = this;
        vm.showProgress = true
        let clinicId = this.localStorage.retrieve('clinicID');
        this.clinicService.getDoctorRequestsSearchWrapper(clinicId)
            .subscribe(
                function (response: any) {
                    vm.requestStatusList = response.requestStatus;
                    vm.dateFiltersList = response.dateFilters;
                    vm.doctorsList = response.doctors;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

    selectRequestStatus(requestStatus: any) {
        this.searchCriteria.requestStatus = requestStatus;
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

    getDoctorRequests() {

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
        this.clinicService.getDoctorsRequestsAccordingtoSearchCriteria(vm.searchCriteria)
            .subscribe(
                function (response: any) {
                    vm.doctorsRequestsList = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }

}



