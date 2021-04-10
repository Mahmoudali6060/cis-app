﻿import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'cashier-reports',
    templateUrl: 'cashier-reports.component.html'
})

export class CashierReportsComponent {

    //active: boolean = true;
    //selectReportsTab: boolean = true;


    clinicId = '';

    constructor(private _route: ActivatedRoute
        , public storage: LocalStorageService)
    { }





    ngOnInit(): void {

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