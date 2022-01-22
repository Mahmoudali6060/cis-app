import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { reportUrl } from '../../app.config';

@Component({

    selector: 'clinic-reports',
    templateUrl: './clinic-reports.component.html'
})

export class ClinicReportsComponent {
    selectReportsTab: boolean = true;
    showProgress!: boolean;

    clinicId = '';

    constructor(private _route: ActivatedRoute
        , public storage: LocalStorageService) { }





    ngOnInit(): void {

        this.clinicId = this.storage.retrieve("ClinicID");

    }

    openReport(reportName: string) {

        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url =reportUrl+ 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.clinicId;

        window.open(url);
    }

}