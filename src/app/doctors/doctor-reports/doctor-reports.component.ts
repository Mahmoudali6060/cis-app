import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorService } from '../shared/doctor.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'doctor-reports',
    templateUrl: 'doctor-reports.component.html',
})

export class DoctorReportsComponent implements OnInit {

    selectBasicTab: boolean = true;
    filterString: string | undefined;

    active = true;
    model: any = {};
  
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput;

    constructor(private organizationService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    )
    { }

    ngOnInit(): void {
        
    }

    onSubmit(): void {
        
    }

  

}