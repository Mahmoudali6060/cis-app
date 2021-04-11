import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
    selector: 'patient-attachments',
    templateUrl: 'patient-attachments.component.html',
})

export class PatientAttachmentsComponent implements OnInit {
    selectBasicTab: boolean = true;
    selectAttachmentsTab: boolean = true;
    //documentDetailsUrl: string = "patientAttachments";
    isDetailsVisible: boolean = false;
    @Input() allowEditing: boolean = true;
    type = 'PatientFileType';
    docsDetailsUrl: string = "patientAttachmentDetails";
    docsListUrl: string = "patientAttachments";
    organizationId = '';
    active = true;
    model: any = {};
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!:any;
    isDoctor: boolean = false;
    isReceptionist: boolean = false;
    previousTab: string = '';
    nextTab: string = '';

    constructor(private organizationService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {

        //this.isDoctor = this.storage.retrieve("IsDoctor");
        //this.isReceptionist = this.storage.retrieve("IsReceptionist");

        //if (this.isDoctor) {
        //    this.previousTab = '/patientRadiology/1';
        //    this.nextTab = '/doctorAppointments/1';
        //}
        //else {
        //    this.previousTab = '/patientServices/1';
        //    this.nextTab = '/nurseAppointments/1';
        //}
        //let id = this._route.snapshot.params['id'];
        //this.organizationId = `${id}`;
    
        
    }

    //onSubmit(): void {
    //    let vm = this;
    //    vm.showProgress = true;

    //    if (!this.model.hasOwnProperty('id') || this.model.id.toString().toLowerCase() == 'new') {
    //        // Add new
    //        this.organizationService.saveOrganization(this.model)
    //            //.subscribe(
    //            //organization => this.model = organization,
    //            //error => this.errorMessage = <any>error);
    //            .subscribe(
    //            function (response:any) {
    //                vm.toastr.success('Saved Successfully', '');
    //                vm.model = response;

    //                // store selected organization ID
    //                vm.storage.store("OrganizationID", vm.model.id);
    //                if (response.imageData != null) {
    //                    vm.model.imageData = response.imageData;
    //                    vm.model.imageId = response.imageId;
    //                }
    //            },
    //            function (error:any) { 
    //                //console.log("Error happened" + error)
    //                vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
    //                vm.showProgress = false;
    //            },
    //            function () {
    //                vm.showProgress = false;
    //            }
    //            );
    //    }
    //    else {
    //        // update 
    //        this.organizationService.updateOrganization(this.model)
    //            .subscribe(
    //            function (response:any) {
    //                vm.toastr.success('Saved Successfully', '');
    //                vm.model = response;

    //                if (response.imageData != null) {
    //                    vm.model.imageData = response.imageData;
    //                    vm.model.imageId = response.imageId;
    //                }
    //            },
    //            function (error:any) { 
    //                //console.log("Error happened" + error)
    //                vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
    //                vm.showProgress = false;
    //            },
    //            function () {
    //                vm.showProgress = false;
    //            });
    //    }
    //}

    clear(): void {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }

    //deleteOrganization(id): void {
    //    let vm = this;
    //    if (id == undefined || isNaN(id)) {
    //        vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
    //        return;
    //    }

    //    vm.showProgress = true;
    //    this.organizationService.deleteOrganization(id)
    //        .subscribe(
    //        function (response:any) {
    //            vm.toastr.success('Deleted successfully', '');
    //            vm.clear();

    //            // store selected organization ID
    //            vm.storage.store("OrganizationID", 'new');
    //        },
    //        function (error:any) { 
    //            //console.log("Error happened" + error)
    //            vm.toastr.error('Failed to Delete - ' + error, '');
    //        },
    //        function () {
    //            vm.showProgress = false;
    //        });
    //}

    //imageChanged(response:any)
    //{
    //    let attchmentInfo: any = {};

    //    if (response != null) {

    //        if (response.originalName == undefined)
    //        {
    //            this.model.attachmentInfo = null;
    //            return;
    //        }

    //        this.model.attachmentInfo = attchmentInfo;
    //        this.model.attachmentInfo.originalName = response.originalName;
    //        this.model.attachmentInfo.keyName = response.keyName;
    //        this.model.attachmentInfo.fullPath = response.fullPath;
    //        this.model.attachmentInfo.fileType = response.fileType;
    //    }
    //    else {
    //        this.model.attachmentInfo = null;
    //    }

    //}

    //showDetails() {
    //    this.isDetailsVisible = true;
    //}

    //hideDetails() {
    //    this.isDetailsVisible = false;
    //}


}