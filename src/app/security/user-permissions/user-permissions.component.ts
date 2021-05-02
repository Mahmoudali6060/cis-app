import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AccountService } from '../shared/account.service'
import { ToastrService } from 'ngx-toastr';
import { UserTypeEnum } from '../shared/user-type.enum';

import { PermissionAssignment } from '../../security/shared/permission-assignment';
import { PermissionNames } from '../../security/shared/permission-names';

@Component({
   
    selector: 'user-permissions',
    templateUrl: './user-permissions.component.html'
})

export class UserPermissionsComponent implements OnInit, OnChanges {
    @Input() isClinicAdmin: boolean = false;
    @Input() userGroupsWrapper: any;
    @Output() onModelUpdated = new EventEmitter();

    permissionNames: PermissionNames = new PermissionNames();
    userGroupsList: any[] = [];
    usersList!: any;
    permissionsList!: any;

    userGroupfilterString!:string;
    userListfilterString!:string;

    model: any = { id: 0, isActive: true };
    active = true;
    showProgress = false;


    selectedGroupsIDs: any[] = [];
    selectedUserPermissions: PermissionAssignment[] = [];

    groupToDeleteId: string = '';
    isAdminGroupSelected: boolean = false;
    clinicId = '';
    isUserSelected: boolean = false;
    enable: boolean = true;
    selectedLang = 'ar';
    @ViewChild('btnCloseReconfirm')
    btnCloseReconfirm!: ElementRef;

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
        this.permissionsList = this.userGroupsWrapper.permissions;

        if (this.userGroupsList == null || this.userGroupsList == undefined)
            this.userGroupsList = [];

        if (this.usersList == null || this.usersList == undefined)
            this.usersList = [];

        if (this.permissionsList == null || this.permissionsList == undefined)
            this.permissionsList = [];

    }

    editUser(id: string): void {
        this.isUserSelected = true;
        let thisComponent = this;
        thisComponent.showProgress = true;
        thisComponent.selectedGroupsIDs = [];
        this.accountService.getSecurityUserById(id)
            .subscribe(
                function (response: any) {
                    thisComponent.model = response;
                    thisComponent.isAdminGroupSelected = response.isAdmin;
                    for (var x = 0; x < response.securityGroups.length; x++)
                        thisComponent.selectedGroupsIDs.push(response.securityGroups[x].id);

                    thisComponent.updateModelWithSelectedGroups();

                    thisComponent.selectedUserPermissions = response.permissions;

                    if (thisComponent.selectedUserPermissions == null || thisComponent.selectedUserPermissions == undefined)
                        thisComponent.selectedUserPermissions = [];
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

        //this.model.clinicId = this.clinicId;
        this.updateModelWithPermissions();

        this.accountService.updateUserPermissions(this.model)
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

    resetUserPassword(): void {
        let thisComponent = this;
        thisComponent.enable = true;
        thisComponent.showProgress = true;

        this.accountService.resetUserPassword(this.model.id)
            .subscribe(
                function (response: any) {
                    let msg = thisComponent.translate.instant("PasswordResetSuccessfully");
                    thisComponent.toastr.success(msg, '');

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

    clear(): void {
        this.model = { id: 0, isActive: true };
        this.isUserSelected = false;
        this.selectedGroupsIDs = [];
        this.selectedUserPermissions = [];
        this.active = false;
        this.isAdminGroupSelected = false;
        setTimeout(() => this.active = true, 0);
    }

    updateSelectedGroups(userId: any, event: any) {
        if (event.target.checked) {
            this.selectedGroupsIDs.push(userId);
        }
        else {
            var index = this.selectedGroupsIDs.indexOf(userId);
            if (index > -1)
                this.selectedGroupsIDs.splice(index, 1);
        }

        this.updateModelWithSelectedGroups();
    }

    updateModelWithSelectedGroups() {
        var arrSelectedGroups = [];
        for (var indx = 0; indx < this.selectedGroupsIDs.length; indx++) {
            var selectedGrp = this.userGroupsList.find(usr => usr.id == this.selectedGroupsIDs[indx]);
            arrSelectedGroups.push({ id: selectedGrp.id, name: selectedGrp.name, nameTranslation: selectedGrp.nameTranslation });
        }

        this.model.securityGroups = arrSelectedGroups;
    }

    updateSelectedPermissions(permissionId: any, permissionName: any, event: any) {

        var selectedPermission = this.selectedUserPermissions.find(perm => perm.permissionId == permissionId);
        if (selectedPermission == null) {

            selectedPermission = new PermissionAssignment();
            selectedPermission.permissionId = permissionId;
            selectedPermission.securityUserId = this.model.id;

            this.selectedUserPermissions.push(selectedPermission);
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
        for (var indx = 0; indx < this.selectedUserPermissions.length; indx++) {
            let selectedPerm = this.selectedUserPermissions[indx];
            let permission = new PermissionAssignment();
            permission.id = selectedPerm.id;
            permission.permissionId = selectedPerm.permissionId;
            permission.securityUserId = selectedPerm.securityUserId;
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
            var selectedPermission = this.selectedUserPermissions.find(perm => perm.permissionId == permissionId);
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

    close() {
        this.btnCloseReconfirm.nativeElement.click();
    }
    raiseModelUpdated() {
        this.onModelUpdated.emit();
    }
}