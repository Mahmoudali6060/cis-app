import {Component, OnInit, ViewChild, Output, EventEmitter,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReceptionistService } from '../shared/receptionist.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'receptionist-appointment-details',
    templateUrl: 'receptionist-appointment-details.component.html',
})

export class ReceptionistAppointmentDetailsComponent implements OnInit {

    selectBasicTab: boolean = true;
    filterString!:string;
    @Input() AppontmentId: any;

   @Input() appointmentDetails: any = {};

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!:any;

    constructor(private receptionistService: ReceptionistService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {


        if (this.appointmentDetails.activeInsurance == null || this.appointmentDetails.activeInsurance == undefined)
        {

            let activeInsurance: any = {};
            this.appointmentDetails.activeInsurance = activeInsurance;
        }

    }


}