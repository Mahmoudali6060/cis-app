import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { InsuranceService } from '../shared/insurance.service';

@Component({
    selector: 'insurance-company-detail',
    templateUrl: './insurance-company-detail.component.html'
})

export class InsuranceCompanyDetailComponent implements OnInit {

    showProgress = false;
    insuranceCompany: any = { id: 0, isActive: true };
    companyID!: number;
    insurancePolicies: any[] = [];
    companyName: string = '';
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private _route: ActivatedRoute
        , private insuranceService: InsuranceService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit() {
        this.companyID = this._route.snapshot.params['id'];
        this.initializeModel();
    }

    initializeModel(): void {
        //In case of Edit mode, load it from the DB
        let vm = this;
        if (this.companyID && this.companyID > 0) {
            this.showProgress = true;
            this.insuranceService.getInsuranceCompanyByID(this.companyID)
                .subscribe(
                    function (response: any) {
                        vm.insuranceCompany = response;
                        vm.companyName = vm.insuranceCompany.name;
                        vm.insurancePolicies = response.insurancePolicies;
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }

    updateModel(updatedModel: any) {
        let vm = this;
        vm.insuranceCompany = updatedModel;
        vm.companyID = vm.insuranceCompany.id;
        vm.companyName = vm.insuranceCompany.name;
    }

    isUpdateMode(): boolean {

        if (this.insuranceCompany.id > 0)
            return true;

        return false;
    }

}