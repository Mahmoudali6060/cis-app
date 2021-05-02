import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { AccountService } from '../shared/account.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UserTypeEnum } from '../shared/user-type.enum';

@Component({

    selector: 'change-password',
    templateUrl: 'change-password.component.html',
})

export class ChangePasswordComponent {

    model: any = {};
    active: boolean = true;
    showProgress = false;
    @Input() userId: string = '';
    @Input() userType!: any;
    @Input() enableMyAccountBtn: boolean = false;
    @ViewChild('btnCloseChangePasswordPopup')
    btnCloseChangePasswordPopup!: ElementRef;
    constructor(public accountService: AccountService
        , public toastr: ToastrService
        , public translate: TranslateService) { }


    changePassword() {
        if (this.isPasswordValid()) {

            if (this.isOldAndNewPasswordSame()) {
                let msg = this.translate.instant("PasswordDifference");
                this.toastr.error(msg, '');
                return;
            }

            let thisComponent = this;
            thisComponent.showProgress = true;

            this.model.userId = this.userId;
            this.model.userType = this.userType;

            this.accountService.ChangePassword(this.model)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("ChangePasswordSubmit");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clear();
                        thisComponent.btnCloseChangePasswordPopup.nativeElement.click();
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
        else {

            let msg = this.translate.instant("PasswordAndConfirm");
            this.toastr.error(msg, '');
        }
    }

    isPasswordValid(): boolean {
        if (this.model.newPassword == this.model.confirmPassword)
            return true

        return false;
    }

    isOldAndNewPasswordSame(): boolean {
        if (this.model.newPassword == this.model.oldPassword)
            return true

        return false;
    }

    clear() {
        this.model = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}