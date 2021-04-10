import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-attachment-details',
    templateUrl: 'patient-attachment-details.component.html',
})

export class PatientAttachmentDetailsComponent implements OnInit {
    selectBasicTab: boolean = true;

    @Output() onBack = new EventEmitter();
    patientFiles: any[] = [];
    attachment: any;
    keyName: string | undefined;
    fileType: string | undefined;
    active = true;
    patientAttachmentFile: any = {};
    type = 'PatientFileType';

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput;

    isReceptionist: boolean = false;

    constructor(private patientAttachementService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {

       
    }


    clear(): void {
        this.patientAttachmentFile = {};
      
    }


    //attachmentChanged(response:any) {
    //    let attchmentInfo: any = {};

    //    if (response != null) {

    //        if (response.originalName == undefined) {
    //            //  this.model.attachmentInfo = null;
    //            this.attachment = null;
    //            return;
    //        }

    //        //  this.model.attachmentInfo = attchmentInfo;
    //        //   this.model.attachmentInfo.originalName = response.originalName;
    //        //   this.model.attachmentInfo.keyName = response.keyName;
    //        this.keyName = response.keyName;
    //        this.fileType = response.fileType;
    //        //  this.model.attachmentInfo.fileType = response.fileType;
    //    }
    //    else {
    //        //  this.model.attachmentInfo = null;
    //        this.attachment = null;
    //    }
    //}

    //loadPatientWrapper() {
    //    let thisComponent = this;
    //    this.patientAttachementService.getPatientType()
    //        .subscribe(
    //        function (wrapper) {
            
    //            thisComponent.patientFiles = wrapper.attachmentType;



    //        },
    //        function (error:any) { 
    //            thisComponent.toastr.error('Failed to Load Data - ' + error, '');
    //            thisComponent.showProgress = false;
    //        },
    //        function () { // finally
    //            thisComponent.showProgress = false;
    //        });

    //}
    //savePatientAttachement(): void {
    //    let thisComponent = this;
    //    if (this.patientAttachmentFile.id > 0) {
    //        //Update

    //        this.patientAttachementService.updatePatientAttachments(this.patientAttachmentFile)
    //            .subscribe(
    //            function (response:any) {

    //                thisComponent.patientAttachmentFile = response;
    //                thisComponent.toastr.success('Saved successfully', '');
    //                // thisComponent.onServiceChanged.emit();
    //                // thisComponent.serviceIdValue.emit(thisComponent.serviceId);
    //                thisComponent.clear();
              
    //            },
    //            function (error:any) { 
    //                thisComponent.toastr.error('Error occured during saving ' + error);
    //                thisComponent.clear();

    //                thisComponent.showProgress = false;
    //            },
    //            function () {
    //                thisComponent.showProgress = false;
    //            });

    //    }
    //    else {


    //        this.patientAttachementService.createPatientAttachments(this.keyName, this.fileType,this.patientAttachmentFile)

    //            .subscribe(
    //            function (response:any) {

    //                thisComponent.patientAttachmentFile = response;
    //                thisComponent.toastr.success('Saved successfully', '');
    //                // thisComponent.onServiceChanged.emit();
    //                //thisComponent.serviceIdValue.emit(thisComponent.serviceId);
    //                thisComponent.clear();
    //            },
    //            function (error:any) { 
    //                thisComponent.toastr.error('Error occured during saving ' + error);
    //                thisComponent.showProgress = false;
    //            },
    //            function () {
    //                thisComponent.showProgress = false;
    //            });
    //    }
    //}


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

   

    goBack() {
        this.onBack.emit();
    }

}