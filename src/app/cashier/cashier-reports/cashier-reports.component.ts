import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { reportUrl } from '../../app.config';

@Component({

    selector: 'cashier-reports',
    templateUrl: './cashier-reports.component.html'
})

export class CashierReportsComponent {


    clinicId = '';
    showProgress!: boolean;

    constructor(private _route: ActivatedRoute
        , public storage: LocalStorageService) { }

    ngOnInit(): void {

        this.clinicId = this.storage.retrieve("ClinicID");

    }

    openReport(reportName: string) {
        

        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = reportUrl +'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.clinicId;

        // "_blank"
        window.open(url);
    }


}