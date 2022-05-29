import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { InsuranceService } from '../shared/insurance.service';
import { AccountService } from '../../security/shared/account.service';

@Component({

    selector: 'insurance-company-basicData',
    templateUrl: './insurance-company-basicData.component.html'
})

export class InsuranceCompanyBasicDataComponent implements OnInit, OnChanges {

    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    showProgress = false;
    enableAddCompanyBasicBtn = false;
    enableViewCompanyDetails = false;
    active = true;
    firstContact: any = {};
    secondContact: any = {};

    @Input() model: any;
    @Output() onModelUpdated = new EventEmitter<any>();

    constructor(public toastr: ToastrService,
        public localStorage: LocalStorageService,
        private _route: ActivatedRoute,
        private insuranceService: InsuranceService,
        public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit() {
        if (this.model) {
            if (this.model.firstContact)
                this.firstContact = this.model.firstContact;

            if (this.model.secondContact)
                this.secondContact = this.model.secondContact;
        }

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.add == true || item.fullControl))
                    this.enableAddCompanyBasicBtn = true;
                if (item.permission.key == this.key.ThirdPartyPayersAndPolicies && (item.view == true || item.fullControl))
                    this.enableViewCompanyDetails = true;
            }
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        if (this.model) {
            if (this.model.firstContact)
                this.firstContact = this.model.firstContact;

            if (this.model.secondContact)
                this.secondContact = this.model.secondContact;
        }
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.model.firstContact = this.firstContact;
        this.model.secondContact = this.secondContact;

        //New
        if (this.model.id == 0) {
            this.insuranceService.SaveInsuranceCompanyBasic(this.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.raiseModelUpdated(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else//Update
        {
            this.insuranceService.UpdateInsuranceCompanyBasic(this.model)
                .subscribe(
                    function (response: any) {
                        thisComponent.model = response;
                        thisComponent.raiseModelUpdated(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clear() {
        this.model = { id: 0, isActive: true };
        this.firstContact = {}
        this.model.firstContact = this.firstContact;
        this.secondContact = {};
        this.model.secondContact = this.secondContact;

        this.raiseModelUpdated(this.model);
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

}