import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
    selector: 'patient-templates',
    templateUrl: 'patient-templates.component.html',
})

export class PatientTemplatesComponent implements OnInit {
    selectBasicTab: boolean = true;
    isDetailsVisible: boolean = false;
    @Input() allowEditing: boolean = true;
     active = true;
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!:any;
    isDoctor: boolean = false;
    isReceptionist: boolean = false;
    previousTab: string = '';
    nextTab: string = '';
    fileNameTxt: string = this.translate.instant("TemplateName");
    btnUploadText = this.translate.instant("ApplyTemplate");
    fileNameUploadTxt = this.translate.instant("AppliedTemplate");
    fileType: boolean = false;
    isTemplateExist: boolean = true;

    @Input() noteId!: number;
    model: any;
    type = 'DoctorAppliedTemplate';
    patientAttachementId = '';

        constructor(private organizationService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    )
    { }

    ngOnInit(): void {

        this.isDoctor = this.storage.retrieve("IsDoctor");
        this.isReceptionist = this.storage.retrieve("IsReceptionist");

        if (this.isDoctor) {
            this.previousTab = '/patient/radiology/1';
            this.nextTab = '/doctor/appointments';
        }
        else {
            this.previousTab = '/patient/services/1';
            this.nextTab = '/nurse/appointments/1';
        }

    }

    showDetails() {
        this.isDetailsVisible = true;
    }

    hideDetails() {
        this.isDetailsVisible = false;
    }


}