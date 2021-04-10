import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorService } from '../shared/doctor.service'
import { SharedService } from '../../shared/shared/shared.service';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
@Component({
   
    selector: 'doctor-requests',
    templateUrl: 'doctor-requests.component.html',
})

export class DoctorRequestsComponent implements OnInit {
    inventoryRequestId: string | undefined;
    doctorClinics = [];
    lstToTranslated: string[] = [];
    selectBasicTab: boolean = true;
    filterString: string | undefined;
    inventoryRequestModel: any = {};
    doctorId: string | undefined;
    clinicIdReq: string | undefined;
    hasMultiClincs = false;
    clinics = [];
    selectedClinic: any = {};
    clinicId = '';
    enableDeleteInventoryRequest: boolean = false;
    enableNewInventoryRequest: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    active = true;
    InventoryRequestObject: any = {};
    @ViewChild('btnOpenDeleteRequestPopup') btnOpenDeleteRequestPopup: ElementRef;
    showProgress = false;
    allInventoryRequestObjects: any[];
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
        , private accountService: AccountService
    )
    { }

    ngOnInit(): void {
        this.lstToTranslated = ['itemName', 'itemNameTranslation', 'unitName', 'unitNameTranslation'];
        this.clinicIdReq = this.storage.retrieve("ClinicID");
        let vm = this;
        this.doctorId = this.storage.retrieve("UserID");
        vm.showProgress = true;
        this.doctorService.getDoctorAppointmentsWrapper(this.doctorId)
            .subscribe(
            function (response:any) {
                vm.clinics = response;
                if (vm.clinics.length > 1) {
                    vm.hasMultiClincs = true;
                } else if (vm.clinics.length == 1) {
                    vm.hasMultiClincs = false;
                    for (let item of vm.clinics) {

                        vm.selectedClinic = item;
                        vm.clinicId = vm.selectedClinic.id;
                    }
                    vm.loadTable(vm.clinicId);

                }

            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

    }
    setClinicId(value) {
        let vm = this;
        vm.clinicId = value;
        vm.loadTable(vm.clinicId);

    }

    clear(): void {
        this.InventoryRequestObject = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }



    loadTable(clinicId: string): void {
        let vm = this;
        //  vm.model = { id: 0 };
        vm.showProgress = true;

        this.doctorService.getAllInventoryRequests(vm.doctorId, clinicId)
            .subscribe(
            function (response:any) {
                vm.allInventoryRequestObjects = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    deleteInventoryRequestPopUp(id): void {
        let vm = this;
        vm.inventoryRequestId = id;
        this.btnOpenDeleteRequestPopup.nativeElement.click();


    }
    deleteInventoryRequest(id): void {
        let vm = this;
        id = vm.inventoryRequestId;
        if (id == undefined || isNaN(id)) {
            let msg = vm.translate.instant("DelFile");
            vm.toastr.warning(msg, '');

            return;
        }

        vm.showProgress = true;
        this.doctorService.deleteInventoryRequest(id)
            .subscribe(
            function (response:any) {
                let msg = vm.translate.instant("DeletedSuccessfully");
                vm.toastr.success(msg, '');
                vm.showProgress = false;
                vm.loadTable(vm.clinicId);
            },
            function (error:any) { 
                //console.log("Error happened" + error)
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.EMR && (item.fullControl == true)) {
                    this.enableDeleteInventoryRequest = true;
                    this.enableNewInventoryRequest = true;
                }
            }

        }

    }
}