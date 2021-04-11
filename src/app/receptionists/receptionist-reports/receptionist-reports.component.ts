import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReceptionistService } from '../shared/receptionist.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'receptionist-reports',
    templateUrl: 'receptionist-reports.component.html',
})

export class ReceptionistReportsComponent implements OnInit {

    //selectBasicTab: boolean = true;
    //filterString!:string;

    //active = true;
    //model: any = {};
  
    //classifications = [];
    //showProgress = false;
    //companyId = '';
    selectTab: boolean = true;
    clinicId = '';

    constructor(private _route: ActivatedRoute
        , public storage: LocalStorageService)
    { }





    ngOnInit(): void {
        //let id = this._route.snapshot.params['id'];
        //this.companyId = `${id}`;

        this.clinicId = this.storage.retrieve("ClinicID");

    }

    openReport(reportName: string) {

        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.clinicId;

        window.open(url);
    }







}