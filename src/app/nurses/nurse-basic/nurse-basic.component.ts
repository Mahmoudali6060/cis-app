import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NurseService } from '../shared/nurse.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'nurse-basic',
    templateUrl: 'nurse-basic.component.html',
})

export class NurseBasicComponent implements OnInit {
    selectBasicTab: boolean = true;

    active = true;
    model: any = {};
  
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!:any;

    constructor(private organizationService: NurseService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {
        /*let vm = this;
       
        let id = this._route.snapshot.params['id'];
        this.model.id = `${id}`;
        vm.showProgress = true;

        //get all calssifications from DB
        this.organizationService.getOrganizationBasicWrapper()
            .subscribe(
            function (response:any) {
                vm.classifications = response.classifications;
            },
            function (error:any) { 
                vm.toastr.error('Failed to Load Data - ' + error, '');
            },
            function () {
                vm.showProgress = false;
            });

        // get organization in case of update
        if (this.model.id.toString().toLowerCase() != 'new') {
            vm.showProgress = true;
            this.organizationService.getOrganizationsById(this.model.id)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                },
                function (error:any) { 
                    vm.toastr.error('Failed to get organization with ID:' + this.model.id + " - " + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
        */
    }

    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;

        if (!this.model.hasOwnProperty('id') || this.model.id.toString().toLowerCase() == 'new') {
            // Add new
            this.organizationService.saveOrganization(this.model)
                //.subscribe(
                //organization => this.model = organization,
                //error => this.errorMessage = <any>error);
                .subscribe(
                function (response:any) {
                    vm.toastr.success('Saved Successfully', '');
                    vm.model = response;

                    // store selected organization ID
                    vm.storage.store("OrganizationID", vm.model.id);
                    if (response.imageData != null) {
                        vm.model.imageData = response.imageData;
                        vm.model.imageId = response.imageId;
                    }
                },
                function (error:any) { 
                    //console.log("Error happened" + error)
                    vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
                );
        }
        else {
            // update 
            this.organizationService.updateOrganization(this.model)
                .subscribe(
                function (response:any) {
                    vm.toastr.success('Saved Successfully', '');
                    vm.model = response;

                    if (response.imageData != null) {
                        vm.model.imageData = response.imageData;
                        vm.model.imageId = response.imageId;
                    }
                },
                function (error:any) { 
                    //console.log("Error happened" + error)
                    vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    clear(): void {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }

    deleteOrganization(id:any): void {
        let vm = this;
        if (id == undefined || isNaN(id)) {
            vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
            return;
        }

        vm.showProgress = true;
        this.organizationService.deleteOrganization(id)
            .subscribe(
            function (response:any) {
                vm.toastr.success('Deleted successfully', '');
                vm.clear();

                // store selected organization ID
                vm.storage.store("OrganizationID", 'new');
            },
            function (error:any) { 
                //console.log("Error happened" + error)
                vm.toastr.error('Failed to Delete - ' + error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }

    imageChanged(response:any)
    {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined)
            {
                this.model.attachmentInfo = null;
                return;
            }

            this.model.attachmentInfo = attchmentInfo;
            this.model.attachmentInfo.originalName = response.originalName;
            this.model.attachmentInfo.keyName = response.keyName;
            this.model.attachmentInfo.fullPath = response.fullPath;
            this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.model.attachmentInfo = null;
        }

    }

}