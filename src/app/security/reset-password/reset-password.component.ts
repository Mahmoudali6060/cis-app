import {Component , Input} from '@angular/core';

import { AccountService } from '../shared/account.service';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { UserTypeEnum } from '../shared/user-type.enum';

@Component({
   
    selector: 'reset-password',
    templateUrl: 'reset-password.component.html',
})

export class ResetPasswordComponent {

    model: any = {};
    showProgress = false;
    active: boolean = true;
    @Input() userId: string = '';
   // @Input() userType: UserTypeEnum;
    @Input() enableMyAccountBtn: boolean = false;

    constructor(public accountService: AccountService
        , public toastr: ToastrService
        , public translate: TranslateService) { }


    resetPassword() {
        if (this.isPasswordValid()) {

            //if (this.isOldAndNewPasswordSame()) {
            //    this.toastr.error('old Password and new Password are the same.');
            //    return;
            //}

            let thisComponent = this;
            thisComponent.showProgress = true;

            this.model.userId = this.userId;
           // this.model.userType = this.userType;

            this.accountService.resetPassword(this.model)
                .subscribe(
                function (response:any) {
                    let msg = thisComponent.translate.instant("ChangePasswordSubmit");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.clear();
                },
                function (error:any) { 
                   thisComponent.toastr.error(error.error, '');
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

    clear() {
        this.model = { };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }


    //isOldAndNewPasswordSame(): boolean
    //{
    //    if (this.model.newPassword == this.model.oldPassword)
    //        return true

    //    return false;
    //}


}