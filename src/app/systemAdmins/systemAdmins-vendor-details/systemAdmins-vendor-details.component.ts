import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdministrationService } from '../../administration/shared/administration.service';
import { SystemAdminService } from '../shared/system-admin.service';

import { ToastrService } from 'ngx-toastr';

@Component({

    selector: 'systemAdmins-vendor-details',
    templateUrl: 'systemAdmins-vendor-details.component.html'
})

export class SystemAdminVendorDetailsComponent implements OnInit {

    enableMyAccountBtn: boolean = false;
    selectVendorsTab: boolean = true;
    active: boolean = true;
    model: any = {};
    showProgress = false;
    @ViewChild('divAddress') divAddress!: any;

    public constructor(private administrationService: AdministrationService,
        private route: ActivatedRoute,
        private systemAdminService: SystemAdminService,
        private toastr: ToastrService) { }

    ngOnInit(): void {

        this.initializeModel();
    }

    initializeModel(): void {

        //Initialize the model
        let vendorId = this.route.snapshot.params['id'];
        this.model.category = { id: 0 };
        //In case of Edit mode, load it from the DB
        let thisComp = this;
        thisComp.showProgress = true;
        if (vendorId.toLowerCase() != 'new') {
            this.systemAdminService.getVendorById(vendorId)
                .subscribe(
                    function (response: any) {
                        thisComp.model = response;
                    },
                    function (error: any) {
                        thisComp.toastr.error(error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
    }


    isUpdateMode(): boolean {

        if (this.model.id > 0)
            return true;

        return false;
    }

    updateModel(updatedModel: any) {
        this.model = updatedModel;
    }

    //updateMap() {
    //   // window.document.body.style.zoom = '0.99';
    //    //this.refreshMap = true
    //   // window.document.body.style.zoom = '1.0';
    //}

    ngAfterViewInit() {
        let div = this.divAddress.nativeElement;
        div.className = "tab-pane fade";
    }
}