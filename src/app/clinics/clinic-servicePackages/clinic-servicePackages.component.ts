import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { Table } from 'primeng/table';
@Component({
    selector: 'clinic-servicePackages',
    templateUrl: './clinic-servicePackages.component.html'
})

export class ClinicServicePackagesComponent implements OnInit {
    filterString!: string;
    clinicId = "0";
    servicePackagesList!: any[];
    showProgress = false;
    selectServicePackagesTab: boolean = true;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableNewBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;

    toPrintDiv: string = "print-section";
    userType: string = '';
    isClinicAdmin: boolean = false;
    lstToTranslated: string[] = [];
    @ViewChild('dt') table!: Table;
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService

    ) { }

    ngOnInit(): void {
        let vm = this;
        this.lstToTranslated = ['name', 'nameTranslation'];
        //let hasAdminPermission = this.storage.retrieve("HasAdminPermission");
        //let userType = this.storage.retrieve("UserType");
        //if (hasAdminPermission) {
        //    this.isAdmin = true;
        //}
        //else if (userType == new UserTypeEnum().Organization) {
        //    this.isOrganization = true;
        //}
        this.clinicId = this.storage.retrieve("ClinicID");
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        vm.showProgress = true;
        vm.loadServicePackages();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    editServicePackage(id: string): void {

        // store selected company ID
        this.storage.store("ServicePackageID", id);

        //navigate to current URL
        this.router.navigate(['/clinic/servicePackageDetails', id]);
    }

    addServicePackage(): void {
        // store selected company ID
        this.storage.store("ServicePackageID", 'new');

        //navigate to current URL
        this.router.navigate(['/clinic/servicePackageDetails', 'new']);
    }
    changeActivation(packageId: any, event: any) {
        let vm = this;
        vm.showProgress = true;

        this.clinicService.toggleServicePackageActivation(packageId)
            .subscribe(
                function (response: any) {
                    // get company by Id from the companies List 
                    //var selectedCompany = vm.companiesList.find(comp => comp.id == id);
                    //selectedCompany.isActive = response;

                    // load all companies
                    vm.loadServicePackages();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    loadServicePackages() {
        let vm = this;
        this.clinicService.getAllservicePackagesForClinic(vm.clinicId).subscribe(
            function (response: any) {
                vm.servicePackagesList = response;
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.Coding) {
                    if (item.fullControl == true || item.add)
                        this.enableNewBtn = true;// then any add button should be enabled
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl == true || item.activate)
                        this.enableActivateBtn = true;
                }

            }
        }

    }

}