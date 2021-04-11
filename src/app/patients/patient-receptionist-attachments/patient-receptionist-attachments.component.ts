import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-receptionist-attachments',
    templateUrl: 'patient-receptionist-attachments.component.html',
})

export class PatientReceptionistAttachmentsComponent implements OnInit {
    selectBasicTab: boolean = true;

    active = true;
    model: any = {};
    hasInsurance: boolean = true;
  
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!:any;



    patientId = '';
    type = 'PatientFileType';
    detailsUrl = "PatientReceptionistAttachmentsDetails";
    
    documentDetailsUrl: string = "patientAttachments";

    constructor(private organizationService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.patientId = `${id}`;
    }


}