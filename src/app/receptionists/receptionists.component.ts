import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ReceptionistService } from './shared/receptionist.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'receptionists',
    templateUrl: 'receptionists.component.html'

})

export class ReceptionistsComponent implements OnInit {

    filterString!: string;
    organizationsList!: any[];
    showProgress = false;
    volunteersList:any;
    constructor(private organizationService: ReceptionistService
        , public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
    ) { }

    ngOnInit(): void {
        /*let vm = this;
        vm.showProgress = true;

        this.organizationService.getAllOrganizations()
         .subscribe(
            function (response:any) {
                vm.organizationsList = response;
            },
            function (error:any) { 
                vm.toastr.error('Failed to Load Data - ' + error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
        */
    }

    editOrganization(id: string): void {

        // store selected company ID
        this.storage.store("OrganizationID", id);

        //navigate to current URL
        this.router.navigate(['/organizationBasic', id]);
    }

    editVolunteer(id: any) {

    }
}