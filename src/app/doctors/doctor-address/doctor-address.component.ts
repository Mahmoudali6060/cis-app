import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorService } from '../shared/doctor.service'
import { ToastrService } from 'ngx-toastr';

@Component({
   
    selector: 'doctor-address',
    templateUrl: './doctor-address.component.html'
})

export class DoctorAddressComponent implements OnInit {
    selectAddressTab: boolean = true;

    active = true;
    model: any = {};
    showProgress = false;
    //organizationId = '';

    constructor(private organizationService: DoctorService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
    ) { }
    

    ngOnInit(): void {
        let vm = this;
        let contact: any = {};
        let address: any = {};

        vm.model.contact = contact;
        vm.model.address = address;

        let id = this._route.snapshot.params['id'];
        this.model.id = `${id}`;
    }

    clear(): void {
        //this.getOrganizationAddress(this);
        //this.model = {};
        //this.active = false;
        //this.model.id = 'new';
        //this.model.contact = {};
        //this.model.address = {};
        //setTimeout(() => this.active = true, 0);
    }

    onSubmit(): void {
        /*
        let vm = this;
        vm.showProgress = true;

        // update 
        this.organizationService.SaveOrganizationAddress(vm.model)
            .subscribe(
            function (response:any) {
                vm.toastr.success('Saved successfully', '');
                vm.model = response;
            },
            function (error:any) { 
                vm.toastr.error('Failed to save - ' + error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });

        */
    }
}