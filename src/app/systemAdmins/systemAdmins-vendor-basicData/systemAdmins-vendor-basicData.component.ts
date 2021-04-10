import {Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LocalStorageService} from 'ng2-webstorage';

import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

import {AdministrationService} from '../../administration/shared/administration.service';
import {SystemAdminService} from '../shared/system-admin.service';

@Component({
   
    selector: 'systemAdmins-vendor-basicData',
    templateUrl: 'systemAdmins-vendor-basicData.component.html'
})

export class SystemAdminVendorBasicDataComponent implements OnInit {

    @Input() model: any;
    @Output() onModelUpdated = new EventEmitter<any>();
    enableMyAccountBtn: boolean = false;
    //model: any = { id: 'new', isActive: true };
    showProgress = false;
    active = true;
    vendorCategoriesList: any[];
    vendorId: string = '';

    constructor(private administrationService: AdministrationService,
        private systemAdminService: SystemAdminService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
        , public translate: TranslateService
        , private storage: LocalStorageService) { }

    ngOnInit(): void {

        //this.vendorId = this.route.snapshot.params['id'];
        //this.initializeModel();

        this.showProgress = true;

        let thisComponent = this;
        if (thisComponent.model.reachInfo == null || thisComponent.model.reachInfo == undefined) {
            let reachInfo: any = {};
            this.model.reachInfo = reachInfo;
        }
        this.administrationService.getAllActive('Cis.Core.VendorCategory')
            .subscribe(
            function (response:any) {
                thisComponent.vendorCategoriesList = response;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

    }

    initializeModel(): void {
        //Initialize the model
        this.model.category = { id: 0 };

        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.vendorId.toLowerCase() != 'new') {
            this.systemAdminService.getVendorById(this.vendorId)
                .subscribe(
                function (response:any) {
                    thisComp.model = response;
                },
                function (error:any) { 
                    thisComp.toastr.error(error, '');
                },
                function () {
                });
        }
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        if (this.model.id > 0)
        {
            //Update
            this.systemAdminService.updateVendor(this.model)
                .subscribe(
                function (response:any) {

                    thisComponent.model = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.raiseModelUpdated(response:any);
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });

        }
        else
        {
            //New
            this.systemAdminService.createVendor(this.model)
                .subscribe(
                function (response:any) {

                    thisComponent.model = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.raiseModelUpdated(response:any);
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
        }
    }

    clearControl(): void {
        this.model = {};

        let thisComponent = this;
        if (thisComponent.model.reachInfo == null || thisComponent.model.reachInfo == undefined) {
            let reachInfo: any = {};
            this.model.reachInfo = reachInfo;
        }
        thisComponent.raiseModelUpdated(thisComponent.model);
        thisComponent.active = false;
        ///systemAdmin/vendorDetails/new
        //thisComponent.router.navigate(['/systemAdmin/vendorDetails/new']);
        setTimeout(() => thisComponent.active = true, 0);
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }
}