import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AccountService } from '../shared/account.service'
import { ToastrService } from 'ngx-toastr';
import { UserTypeEnum } from '../shared/user-type.enum';
import { PermissionAssignment } from '../../security/shared/permission-assignment';
import { PermissionNames } from '../../security/shared/permission-names';
import { Table } from 'primeng/table/table';

@Component({

    selector: 'user-groups',
    templateUrl: 'user-groups.component.html'
})

export class UserGroupsComponent implements OnInit, OnChanges {
    @Input() isClinicAdmin: boolean = false;
    @Input() userGroupsWrapper: any;
    @Output() onModelUpdated = new EventEmitter();

    permissionNames: PermissionNames = new PermissionNames();

    groupfilterString!: string;
    userfilterString!: string;
    model: any = { id: 0, isActive: true };
    active = true;
    showProgress = false;
    userGroupsList!: any[];

    usersList: any[] = [];
    permissionsList!: any;
    groupedPermissionsList: any = [];


    selectedGroupUsersIDs: any = [];
    selectedGroupPermissions: PermissionAssignment[] = [];

    groupToDeleteId: string = '';
    selectedGroupId: string = '';

    isAdminGroupSelected: boolean = false;
    clinicId = '';
    selectedLang = 'ar';
    loading: boolean = true;
    @ViewChild('dt') table!: Table;


    constructor(public accountService: AccountService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService,
        private router: Router
        , public translate: TranslateService) {
        //this.model.userType = this.userTypeEnum.Operational;
    }

    ngOnInit(): void {
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
    }

    ngOnChanges(): void {

        this.userGroupsList = this.userGroupsWrapper.userGroups;
        this.usersList = this.userGroupsWrapper.users;
        debugger;
        this.permissionsList = this.userGroupsWrapper.permissions;
        this.prepareGroupedPermissionList(this.permissionsList);
        if (this.userGroupsList == null || this.userGroupsList == undefined)
            this.userGroupsList = [];

        if (this.usersList == null || this.usersList == undefined)
            this.usersList = [];

        if (this.permissionsList == null || this.permissionsList == undefined)
            this.permissionsList = [];

    }
    prepareGroupedPermissionList(permissionsList: any) {
        debugger;
        for (let item of permissionsList) {
            let exsitedItem = this.groupedPermissionsList.find((x: any) => x.categoryFriendlyName == item.categoryFriendlyName);
            let newItem = {
                id: item.id,
                key: item.key,
                isFullControlAvailable: item.isFullControlAvailable,
                isViewAvailable: item.isViewAvailable,
                isAddAvailable: item.isAddAvailable,
                isEditAvailable: item.isEditAvailable,
                isActivateAvailable: item.isActivateAvailable,
                isAllowAvailable: item.isAllowAvailable,
                categoryFriendlyName: item.categoryFriendlyName
            };
            if (!exsitedItem) {
                exsitedItem = {
                    categoryFriendlyName: item.categoryFriendlyName
                };
                exsitedItem.items = [];
                exsitedItem.items.push(newItem);
                this.groupedPermissionsList.push(exsitedItem);
            }
            else {
                exsitedItem.items.push(newItem);
            }
        }
    }

    editUserGroup(id: string): void {
        this.selectedGroupId = id;
        let thisComponent = this;
        thisComponent.showProgress = true;
        thisComponent.selectedGroupUsersIDs = [];
        this.accountService.getSecurityGroupById(id)
            .subscribe(
                function (response: any) {
                    thisComponent.model = response;
                    thisComponent.isAdminGroupSelected = response.isAdmin;
                    for (var x = 0; x < response.securityUsers.length; x++)
                        thisComponent.selectedGroupUsersIDs.push(response.securityUsers[x].id);

                    thisComponent.updateModelWithSelectedUsers();

                    thisComponent.selectedGroupPermissions = response.permissions;

                    if (thisComponent.selectedGroupPermissions == null || thisComponent.selectedGroupPermissions == undefined)
                        thisComponent.selectedGroupPermissions = [];
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.model.clinicId = this.clinicId;
        this.updateModelWithPermissions();
        this.accountService.saveOrUpdateUserGroup(this.model)
            .subscribe(
                function (response: any) {
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.raiseModelUpdated();
                    thisComponent.clear();
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                }
            );
    }

    selectGroupToDelete(id: string): void {
        this.groupToDeleteId = id;
    }

    deleteSelectedGroup(): void {

        let thisComponent = this;
        if (this.groupToDeleteId == '') {
            let msg = thisComponent.translate.instant("NoGroupSelected");
            thisComponent.toastr.warning(msg, '');
            return;
        }

        thisComponent.showProgress = true;
        this.accountService.deleteUserGroup(this.groupToDeleteId)
            .subscribe(
                function (response: any) {
                    let msg = thisComponent.translate.instant("DeletedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.clear();
                    thisComponent.raiseModelUpdated();
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    clear(): void {
        this.model = { id: 0, isActive: true };
        this.selectedGroupId = '';
        this.selectedGroupUsersIDs = [];
        this.selectedGroupPermissions = [];
        this.active = false;
        this.isAdminGroupSelected = false;
        setTimeout(() => this.active = true, 0);
    }

    updateSelectedUsers(userId: any, event: any) {
        if (event.target.checked) {
            this.selectedGroupUsersIDs.push(userId);
        }
        else {
            var index = this.selectedGroupUsersIDs.indexOf(userId);
            if (index > -1)
                this.selectedGroupUsersIDs.splice(index, 1);
        }

        this.updateModelWithSelectedUsers();
    }

    updateModelWithSelectedUsers() {
        var arrSelectedUsers = [];
        for (var indx = 0; indx < this.selectedGroupUsersIDs.length; indx++) {
            var selectedUsr = this.usersList.find(u => u.id == this.selectedGroupUsersIDs[indx]);
            if (selectedUsr != undefined)
                arrSelectedUsers.push(selectedUsr);
        }

        this.model.securityUsers = arrSelectedUsers;
    }

    updateSelectedPermissions(permissionId: any, permissionName: any, event: any) {

        var selectedPermission = this.selectedGroupPermissions.find(perm => perm.permissionId == permissionId);
        if (selectedPermission == null) {

            selectedPermission = new PermissionAssignment();
            selectedPermission.permissionId = permissionId;
            selectedPermission.securityGroupId = this.model.id;

            this.selectedGroupPermissions.push(selectedPermission);
        }

        if (permissionName == this.permissionNames.fullControl)
            selectedPermission.fullControl = event.target.checked;
        else if (permissionName == this.permissionNames.view)
            selectedPermission.view = event.target.checked;
        else if (permissionName == this.permissionNames.add)
            selectedPermission.add = event.target.checked;
        else if (permissionName == this.permissionNames.edit)
            selectedPermission.edit = event.target.checked;
        else if (permissionName == this.permissionNames.activate)
            selectedPermission.activate = event.target.checked;
        else if (permissionName == this.permissionNames.allow)
            selectedPermission.allow = event.target.checked;

    }

    updateModelWithPermissions() {
        this.model.permissions = [];
        for (var indx = 0; indx < this.selectedGroupPermissions.length; indx++) {
            let selectedPerm = this.selectedGroupPermissions[indx];
            let permission = new PermissionAssignment();
            permission.id = selectedPerm.id;
            permission.permissionId = selectedPerm.permissionId;
            permission.securityGroupId = selectedPerm.securityGroupId;
            permission.fullControl = selectedPerm.fullControl;
            permission.view = selectedPerm.view;
            permission.add = selectedPerm.add;
            permission.edit = selectedPerm.edit;
            permission.activate = selectedPerm.activate;
            permission.allow = selectedPerm.allow;

            this.model.permissions.push(permission);
        }
    }

    isPermissionChecked(permissionId: any, permissionName: any, isPermissionAvailable: boolean): boolean | undefined {

        if (isPermissionAvailable) {
            var selectedPermission = this.selectedGroupPermissions.find(perm => perm.permissionId == permissionId);
            if (selectedPermission != null) {
                if (permissionName == this.permissionNames.fullControl)
                    return selectedPermission.fullControl;
                else if (permissionName == this.permissionNames.view)
                    return selectedPermission.view;
                else if (permissionName == this.permissionNames.add)
                    return selectedPermission.add;
                else if (permissionName == this.permissionNames.edit)
                    return selectedPermission.edit;
                else if (permissionName == this.permissionNames.activate)
                    return selectedPermission.activate;
                else if (permissionName == this.permissionNames.allow)
                    return selectedPermission.allow;
            }
        }

        return false;
    }

    raiseModelUpdated() {
        this.onModelUpdated.emit();
    }
}