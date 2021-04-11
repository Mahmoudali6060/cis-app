import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { NurseService } from './shared/nurse.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'nurses',  
    templateUrl:'nurses.component.html'
    
})

export class NursesComponent implements OnInit {    

    filterString!:string;
    organizationsList!: any[];
    showProgress = false;

    constructor(private organizationService: NurseService
        , public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
    ){ }

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

}