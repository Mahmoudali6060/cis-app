import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../shared/clinic.service';

import { UtilityClass } from '../../shared/shared/utility.class';
//import {TableModule} from 'primeng/table';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { TreeNode } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({

    selector: 'clinic-appointments',
    templateUrl: './clinic-appointments.component.html'
})

export class ClinicAppointmentsComponent implements OnInit {
    selectAppointmentsTab: boolean = true;
    count: number = 12;
    showProgress = true;
    organizationStructure: any[] = [];
    clinicId!: any;
    doctorId: string = "0";
    doctorName: string = "";
    slotDurations: any[] = [];
    appointmentsList!: any[];
    groupedAppointmentsList: any = [];

    daysList: any[] = [];
    appointmentId = '';
    selectedFiles!: TreeNode;
    departmentId: any;
    divisionId: any;
    appointmentToBeDeleted: any;
    isDetailsVisible: boolean = false;
    isDepartmentOrDivisionSelected = false;
    isDoctorSelected = false;
    utilityClass: UtilityClass = new UtilityClass();
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    userType: string = '';
    isClinicAdmin: boolean = false;
    enableNewBtn: boolean = false;
    enableDeleteBtn: boolean = false;
    lstToTranslated: string[] = [];
    lstToBeTranslated: string[] = [];
    loading: boolean = true;
    @ViewChild('dt') table!: Table;
    showDetails(id: string) {
        this.isDetailsVisible = true;
        this.appointmentId = id;
    }

    hideDetails() {
        this.isDetailsVisible = false;
        //in case of the doctor selected only.
        this.loadAppointmentSchedules();
    }

    constructor(public toastr: ToastrService,
        private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService) { }


    ngOnInit(): void {
        let vm = this;
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.lstToBeTranslated = ['', ''];
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.loadOrganizationStructureTree();
        this.clinicService.getAppointmentScheduleWrapper()
            .subscribe(
                function (response: any) {
                    vm.daysList = response.days;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    //  vm.showProgress = false;
                },
                function () { // finally
                    //  vm.showProgress = false;
                });

        vm.fillSlotsList(vm.count);
        if (vm.doctorId.toString().toLowerCase() != "0")
            vm.loadAppointmentSchedules();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }
    loadOrganizationStructureTree() {
        
        let vm = this;
        vm.showProgress = true;
        //let userId = this.storage.retrieve("UserID");
        this.clinicService.getOrganizationStructureTreeWithDoctorsOnly(this.clinicId)
            .subscribe(
                function (response: any) {
                    vm.organizationStructure = response;
                },
                function (error: any) {
                    vm.toastr.error(error.message, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    loadAppointmentSchedules() {
        let vm = this;
        this.clinicService.getAllAppointmentSchedules(vm.doctorId).subscribe(
            function (response: any) {
                
                vm.appointmentsList = response;
                vm.prepareGroupedPermissionList(vm.appointmentsList);

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
                vm.loading = false;
            },
            function () { // finally
                vm.showProgress = false;
                vm.loading = false;

            });

    }
    getAllAppointmentSchedulesUnderClinic() {
        let vm = this;
        this.clinicService.getAllAppointmentSchedulesUnderClinic(vm.clinicId).subscribe(
            function (response: any) {
                vm.appointmentsList = response;
                vm.prepareGroupedPermissionList(vm.appointmentsList);

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    getAllAppointmentSchedulesUnderDepartment() {
        let vm = this;
        this.clinicService.getAllAppointmentSchedulesUnderDepartment(vm.departmentId).subscribe(
            function (response: any) {
                vm.appointmentsList = response;
                vm.prepareGroupedPermissionList(vm.appointmentsList);

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    getAllAppointmentSchedulesUnderDivision() {
        let vm = this;
        this.clinicService.getAllAppointmentSchedulesUnderDivision(vm.divisionId).subscribe(
            function (response: any) {
                vm.appointmentsList = response;
                vm.prepareGroupedPermissionList(vm.appointmentsList);

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    fillSlotsList(count: number): void {
        let j = 0;
        for (let i = 0; i < count; i++) {

            j += 5;
            this.slotDurations.push(j);
        }
    }
    ///////////////
    nodeSelect(event: any) {
        if (event.node.type.toLocaleLowerCase() == "securityuser") {
            this.doctorId = event.node.data;
            this.doctorName = event.node.label;
            this.isDoctorSelected = true;
            this.loadAppointmentSchedules();
            this.isDepartmentOrDivisionSelected = false;
            // this.clear();
        } else if (event.node.type.toLocaleLowerCase() == "clinicdepartment") {
            this.departmentId = event.node.data;
            this.isDepartmentOrDivisionSelected = true;
            this.isDoctorSelected = false;
            this.getAllAppointmentSchedulesUnderDepartment();

            // this.clear();
        } else if (event.node.type.toLocaleLowerCase() == "clinicdivision") {
            this.divisionId = event.node.data;
            this.isDepartmentOrDivisionSelected = true;
            this.isDoctorSelected = false;
            this.getAllAppointmentSchedulesUnderDivision();
        }
    }
    nodeUnselect(event: any) {
        //   this.serviceModel.serviceId = '';
        this.clear();
    }
    clear() {
        this.appointmentsList = [];
    }
    changeActivation(packageId: any, event: any) {
        let vm = this;
        vm.showProgress = true;

        this.clinicService.toggleAppointmentScheduleActivation(packageId)
            .subscribe(
                function (response: any) {
                    // get company by Id from the companies List
                    //var selectedCompany = vm.companiesList.find(comp => comp.id == id);
                    //selectedCompany.isActive = response;

                    // load all companies
                    //   vm.loadServicePackages();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    selectAppointmentScheduleToDelete(id: string) {
        this.appointmentToBeDeleted = id;
    }
    deleteSelectedItem(): void {

        let vm = this;
        if (this.appointmentToBeDeleted == '') {
            let msg = vm.translate.instant("NoItemSelected");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.clinicService.deleteAppointmentSchedule(this.appointmentToBeDeleted)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    var selectedObject = vm.appointmentsList.find(o => o.id == vm.appointmentToBeDeleted);
                    var index = vm.appointmentsList.indexOf(selectedObject);
                    if (index > -1)
                        vm.appointmentsList.splice(index, 1);
                    vm.prepareGroupedPermissionList(vm.appointmentsList);

                    // clear fields
                    //  vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.AppointmentMaster) {
                    if (item.fullControl == true || item.add)
                        this.enableNewBtn = true;
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl == true || item.activate)
                        this.enableActivateBtn = true;
                    if (item.fullControl)
                        this.enableDeleteBtn = true;
                    if (item.fullControl || item.add || item.edit)
                        this.enableSaveBtn = true;
                }

            }
        }

    }

    prepareGroupedPermissionList(appointmentsList: any) {
        
        this.groupedAppointmentsList = [];
        for (let item of appointmentsList) {
            let exsitedItem = this.groupedAppointmentsList.find((x: any) => x.fullNameTranslation == item.fullNameTranslation);
            let newItem = {
                clinicId: item.clinicId,
                description: item.description,
                descriptionTranslation: item.descriptionTranslation,
                endDate: item.endDate,
                endDateString: item.endDateString,
                fullName: item.fullName,
                fullNameTranslation: item.fullNameTranslation,
                id: item.id,
                isActive: item.isActive,
                lastModificationDate: item.lastModificationDate,
                lastModificationDateString: item.lastModificationDateString,
                lastModifierID: item.lastModifierID,
                lastModifierName: item.lastModifierName,
                name: item.name,
                nameTranslation: item.nameTranslation,
                oldEndDate: item.oldEndDate,
                oldStartDate: item.oldStartDate,
                securityUserFirstName: item.securityUserFirstName,
                securityUserId: item.securityUserId,
                securityUserLastName: item.securityUserLastName,
                sessions: item.sessions,
                slotDuration: item.slotDuration,
                startDate: item.startDate,
                startDateString: item.startDateString
            };
            if (!exsitedItem) {
                exsitedItem = {
                    fullNameTranslation: item.fullNameTranslation
                };
                exsitedItem.items = [];
                exsitedItem.items.push(newItem);
                this.groupedAppointmentsList.push(exsitedItem);
            }
            else {
                exsitedItem.items.push(newItem);
            }
        }
    }

}

