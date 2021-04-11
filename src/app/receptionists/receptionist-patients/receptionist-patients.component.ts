import {Component, OnInit} from '@angular/core';
import { AccountService } from '../../security/shared/account.service';
import {UserPermissions} from '../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../shared/shared/permission-key.enum';
@Component({
   
    selector: 'receptionist-patients',
    templateUrl: 'receptionist-patients.component.html'
})

export class ReceptionistPatientsComponent implements OnInit {
    showActive: boolean = true;
    showEdit: boolean = true;
    showSelect: boolean = false;
    showClose: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableNewPatientBtn: boolean = false;
    enableEditPatientBtn: boolean = false;
    enableActivatePatientBtn: boolean = false;
    constructor(
        private accountService: AccountService) { }

    ngOnInit() {
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item :any)=> this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.PatientRegistration && (item.add == true || item.fullControl == true))
                    this.enableNewPatientBtn = true;
            }

        }

    }
}