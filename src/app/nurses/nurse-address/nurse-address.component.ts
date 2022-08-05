import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NurseService } from '../shared/nurse.service'
import { ToastrService } from 'ngx-toastr';

@Component({
   
    selector: 'nurse-address',
    templateUrl: 'nurse-address.component.html'
})

export class NurseAddressComponent implements OnInit {
    selectAddressTab: boolean = true;

    active = true;
    model: any = {};
    showProgress = false;
    //organizationId = '';

    constructor(private organizationService: NurseService,
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

        // get organization contact and address in case of update
        this.getOrganizationAddress(vm);
    }

    getOrganizationAddress(vm:any)
    {
        if (!isNaN(vm.model.id) && vm.model.id != 'new') {
            vm.showProgress = true;
            this.organizationService.getOrganizationAddress(vm.model.id)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                    vm.model.contact = response.contact;
                    vm.model.address = response.address;

                    if (response.contact == null) {
                        vm.model.contact = {};
                        vm.model.contactId = 0;
                    }

                    if (response.address == null) {
                        vm.model.address = {};
                        vm.model.addressId = 0;
                    }
                },
                function (error:any) { 
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    clear(): void {
        this.getOrganizationAddress(this);
        //this.model = {};
        //this.active = false;
        //this.model.id = 'new';
        //this.model.contact = {};
        //this.model.address = {};
        //setTimeout(() => this.active = true, 0);
    }

    onSubmit(): void {
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
    }

}