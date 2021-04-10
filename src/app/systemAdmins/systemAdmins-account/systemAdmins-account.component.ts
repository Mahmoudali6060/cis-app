import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { UserTypeEnum } from '../../security/shared/user-type.enum';
import { AccountService } from '../../security/shared/account.service';

@Component({
   
    selector: 'systemAdmins-account',
    templateUrl: 'systemAdmins-account.component.html'
})

export class SystemAdminAccountComponent implements OnInit {
    selectAccountTab: boolean = true;
    active: boolean = true;
    model: any = { reachInfo: {} };
    allCountryCodes: any[];

    showProgress = false;
    enableMyAccountBtn: boolean = false;
   // userType = new UserTypeEnum().SysAdmin;
    hasRequester: boolean = false;
    public constructor(private sharedService: SharedService
        , private accountService: AccountService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService) { }
    ngOnInit(): void {
        let vm = this;

        this.accountService.getAllCountryCodes()
            .subscribe(
            function (response:any) {
                vm.allCountryCodes = response;

            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
        let id = this._route.snapshot.params['id'];
        this.model.id = `${id}`;
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

        this.getSecurityUserById();
    }

    getSecurityUserById() {
        let vm = this;
        vm.showProgress = true;
        if (this.model.id.toString().toLowerCase() != 'new') {
            vm.showProgress = true;
            this.accountService.getSecurityUserById(this.model.id)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                    if (vm.model.reachInfo == undefined || vm.model.reachInfo == null)
                        vm.model.reachInfo = {};
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;

        this.accountService.updateSecurityUser(this.model)
            .subscribe(
            function (response:any) {
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            }
            );
    }
}