import {Component, OnInit, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-template-details',
    templateUrl: 'patient-template-details.component.html',
})

export class PatientTemplateDetailsComponent implements OnInit {

    selectBasicTab: boolean = true;
    @Input() noteId: number | undefined;
    @Output() onBack = new EventEmitter();
    showDocumentDetails: boolean = false;
    fileNameTxt: string = this.translate.instant("TemplateName");
    btnUploadText = this.translate.instant("ApplyTemplate");
    fileNameUploadTxt = this.translate.instant("AppliedTemplate");
    fileType: boolean = false;
    isTemplateExist: boolean = true;
    showSelectedTemplates: boolean = true;
    showBackBtn: boolean = false;
    parentType: string ="DoctorAppliedTemplate";
    attachmentsList: any = [];
    parentId: string = '';
    active = true;
    model: any = {};

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput;

    isReceptionist: boolean = false;

    constructor(private organizationService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    )
    { }

    ngOnInit(): void {

        this.isReceptionist = this.storage.retrieve("IsReceptionist");


    }



    clear(): void {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }

    goBack() {
        this.onBack.emit();

    }

}