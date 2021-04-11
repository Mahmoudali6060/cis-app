import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdministrationService } from '../../administration/shared/administration.service';
import { ToastrService } from 'ngx-toastr';

@Component({

    selector: 'systemAdmins-clinics-details',
    templateUrl: 'systemAdmins-clinics-details.component.html'
})

export class SystemAdminClinicDetailsComponent implements OnInit {

    clinicModel: any = { id: 0, isActive: true };
    clinicId!: number;
    selectClinicsTab: boolean = true;
    showProgress = false;
    @ViewChild('divAddress') divAddress!: any;

    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        private _route: ActivatedRoute) { }

    ngOnInit(): void {

        this.clinicId = this._route.snapshot.params['id'];

        this.initializeModel();

    }


    initializeModel(): void {
        //Initialize the mode
        this.clinicModel.owner = { id: 0 };
        this.clinicModel.admin = { id: 0 };
        this.clinicModel.owner.reachInfo = { id: 0 };
        this.clinicModel.admin.reachInfo = { id: 0 };
        //this.clinicModel.owner.reachInfo.mobile = { id: 0 };
        //this.clinicModel.admin.reachInfo.mobile = { id: 0 };
        this.clinicModel.reachInfo = { id: 0 };

        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.clinicId && this.clinicId > 0) {
            this.showProgress = true;
            this.administrationService.getClinicById(this.clinicId)
                .subscribe(
                    function (response: any) {
                        if (response.owner == null || response.owner == undefined)
                            response.owner = { id: 0 };

                        if (response.owner.reachInfo == null || response.owner.reachInfo == undefined)
                            response.owner.reachInfo = { id: 0 };

                        if (response.admin == null || response.admin == undefined)
                            response.admin = { id: 0 };

                        if (response.admin.reachInfo == null || response.admin.reachInfo == undefined)
                            response.admin.reachInfo = { id: 0 };

                        thisComp.clinicModel = response;
                        thisComp.showProgress = false;
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

    updateModel(updatedModel: any) {
        this.clinicModel = updatedModel;
    }

    isUpdateMode(): boolean {

        if (this.clinicModel.id > 0)
            return true;

        return false;
    }

    //updateMap() {
    //    //window.document.body.style.zoom = '0.99';
    //    //    // window.document.body.style.zoom = '1.0';
    //}

    ngAfterViewInit() {
        let div = this.divAddress.nativeElement;
        div.className = "tab-pane fade";
    }

}