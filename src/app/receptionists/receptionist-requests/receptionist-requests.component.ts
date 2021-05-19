import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ReceptionistService } from '../shared/receptionist.service';
import { SharedService } from '../../shared/shared/shared.service';


import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { Table } from 'primeng/table';

@Component({

    selector: 'receptionist-requests',
    templateUrl: 'receptionist-requests.component.html',
})

export class ReceptionistRequestsComponent implements OnInit {

    selectBasicTab: boolean = true;
    filterString!: string;

    active = true;
    model: any = {};
    isConfirmed = false;
    isCanceled = false;
    isPending = true;
    @Output() onBookAppointment = new EventEmitter();

    patientRequestList!: any[];
    clinicId = "0";
    selectedRequestToBeCanceled!: any;
    lstToTranslated: string[] = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableCancelLink: boolean = false;
    enableConfirmLink: boolean = false;
    @ViewChild('dt') table!: Table;
    constructor(private receptionistService: ReceptionistService
        , public sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public accountService: AccountService
        , public translate: TranslateService

    ) {

        //this.lstToTranslated = ['visitTypeName', 'visitNameTranslation', 'appointmentClassName', 'classNameTranslation', 'patientName', 'patientNameTranslation', 'doctorName', 'doctorNameTranslation'];
    }

    ngOnInit(): void {

        let vm = this;
        //this.lstToTranslated = ['doctorName', 'doctorNameTranslation'];
        this.clinicId = this.storage.retrieve("ClinicID");
        vm.showProgress = true;
        vm.loadPatientRequests();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    loadPatientRequests() {
        let vm = this;
        this.receptionistService.getAllPatientRequests(vm.clinicId).subscribe(
            function (response: any) {
                vm.patientRequestList = response;
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    confirmPatientRequest(requestId: string) {
        let vm = this;
        this.receptionistService.confirmPatientRequest(requestId).subscribe(
            function (response: any) {
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');
                if (response != undefined)
                    vm.updatePatientRequest(response);
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });


    }

    cancelServiceGroup() {

    }

    updatePatientRequest(res: any) {
        var request = this.patientRequestList.find(r => r.id == res.id);
        request.status = res.status;
        if (request.status == "Confimed") {
            this.isConfirmed = true;
            this.isCanceled = false;
            this.isPending = false;
        } else if (request.status == "Cancelled") {
            this.isConfirmed = false;
            this.isCanceled = true;
            this.isPending = false;
        }
    }
    selectRequestToBeCanceled(requestId: string) {
        this.selectedRequestToBeCanceled = requestId;
    }
    cancelPatientRequest() {
        let vm = this;
        //vm.model.id = vm.selectedRequestToBeCanceled;
        var requestToCanceled = vm.patientRequestList.find(r => r.id == vm.selectedRequestToBeCanceled);
        if (requestToCanceled != undefined) {
            requestToCanceled.cancelationReason = vm.model.cancelationReason;
        }
        this.receptionistService.cancelPatientRequest(requestToCanceled).subscribe(
            function (response: any) {
                if (response != undefined)
                    vm.updatePatientRequest(response);
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });
    }
    //deleteOrganization(id): void {
    //    /*let vm = this;
    //    if (id == undefined || isNaN(id)) {
    //        vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
    //        return;
    //    }

    //    vm.showProgress = true;
    //    this.organizationService.deleteOrganization(id)
    //        .subscribe(
    //        function (response:any) {
    //            vm.toastr.success('Deleted successfully', '');
    //            vm.clear();

    //            // store selected organization ID
    //            vm.storage.store("OrganizationID", 'new');
    //        },
    //        function (error:any) { 
    //            //console.log("Error happened" + error)
    //            vm.toastr.error('Failed to Delete - ' + error, '');
    //        },
    //        function () {
    //            vm.showProgress = false;
    //        });*/
    //}

    bookAppoint() {
        this.onBookAppointment.emit();
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                //i want ask cancel request under PatientRegistration or AppointmentSchedule
                if (item.permission.key == this.key.PatientRegistration && (item.edit == true || item.fullControl == true))//PatientRegistration
                    this.enableCancelLink = true;
                else if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true))//AppointmentSchedule
                    this.enableConfirmLink = true;

            }
        }

    }

    close() {

    }

}