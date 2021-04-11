import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
@Component({

    selector: 'clinic-EMRMaster',
    templateUrl: './clinic-EMRMaster.component.html'
})

export class ClinicEMRMasterComponent implements OnInit {
    selectEMRMasterTab: boolean = true;
    medicalDepartments: any[] = [];
    lstDepartmentDivisions: any[] = [];
    selectedDivision: any = {};
    showProgress: boolean = false;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    enabletabs: boolean = false;

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService
        , public translate: TranslateService
        , private accountService: AccountService) { }

    ngOnInit(): void {
        let vm = this;
        vm.showProgress = true;
        let clinicId = this.storage.retrieve("ClinicId");
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.clinicService.getAllMedicalDepartments(clinicId)
            .subscribe(
                function (response: any) {
                    vm.medicalDepartments = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }

    }

    getSelectedDivision(divisionId: any) {
        if (divisionId != 'null')
            this.getClinicDivisionWithEMR(divisionId);
        else
            this.selectedDivision = null;
    }

    fillDepartmentDivisions(departmentId: any) {
        if (departmentId != 'null') {
            let vm = this;
            vm.showProgress = true;
            this.clinicService.getDivisionsUnderDepartment(departmentId)
                .subscribe(
                    function (response: any) {
                        vm.lstDepartmentDivisions = response;
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }

    getClinicDivisionWithEMR(divisionId: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.getClinicDivisionWithEMR(divisionId)
            .subscribe(
                function (response: any) {
                    vm.selectedDivision = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.EMRMaster) {
                    if (item.fullControl == true || item.add || item.edit || item.view)//
                        this.enabletabs = true;
                    if (item.fullControl == true || item.add)
                        this.enableAddRootBtn = true;
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl || item.activate)
                        this.enableActivateBtn = true;
                }

            }
        }

    }
}