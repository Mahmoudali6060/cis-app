import {Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityClass } from '../../shared/shared/utility.class';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

import { TreeNode } from 'primeng/primeng';
import {ClinicService} from '../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-templates',
    templateUrl: 'clinic-templates.component.html'
})

export class ClinicTemplatesComponent implements OnInit {
    fileNameTxt: string = this.translate.instant("TemplateName");
    btnUploadText = this.translate.instant("UploadTemplate");
    fileNameUploadTxt = this.translate.instant("Template");
    fileType: boolean = false;
    showDocumentDetails: boolean = true;
    model: any;
    type = 'TemplateFileType';
    patientAttachementId = '';
    selectedClinicId: string | undefined;
    isTemplatesSelected = true;

    constructor(public toastr: ToastrService,
        private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }



    ngOnInit(): void {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
    }
    updateModel(updatedModel: any) {
        this.model = updatedModel;
        this.patientAttachementId = this.model.id;
    }
}