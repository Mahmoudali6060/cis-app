import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import { SystemAdminService } from '../shared/system-admin.service';


@Component({
   
    selector: 'systemAdmins-dashboard',
    templateUrl: 'systemAdmins-dashboard.component.html'
})

export class SystemAdminDashboardComponent implements OnInit {

    enableMyAccountBtn: boolean = false
    selectDashboardTab: boolean = true;
    model: any = {};
    showProgress: boolean = false;

    public constructor(private systemAdminService: SystemAdminService,
        public toastr: ToastrService
        , private storage: LocalStorageService) { }

    ngOnInit(): void {

        let vm = this;
        vm.model = {};

        vm.showProgress = true;
        this.systemAdminService.getDashboardWrapper()
            .subscribe(
            function (response:any) {
                vm.model = response;
            },
            function (error:any) { 
                vm.toastr.error(error.error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });


        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

    }


}