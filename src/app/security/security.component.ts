import {Component, OnInit} from '@angular/core';

import { AccountService } from './shared/account.service'
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
   
    selector: 'security',
    templateUrl: 'security.component.html'

})

export class SecurityComponent implements OnInit {

    showProgress = false;
    userGroupsWrapper: any = {};
    clinicId = '';
    userType: string = '';
    isClinicAdmin: boolean = false;
    constructor(public accountService: AccountService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService
    ) {
    }

    ngOnInit(): void {
        this.clinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        thisComponent.showProgress = true;
        this.accountService.getClinicUserGroupsWrapper(this.clinicId)
            .subscribe(
            function (response:any) {
                thisComponent.userGroupsWrapper = response;
            },
            function (error:any) { 
                thisComponent.toastr.error( error, '');
                thisComponent.showProgress = false;
            },
            function () {
                thisComponent.showProgress = false;
            });
    }

    updateModel() {
        this.ngOnInit();
    }

}