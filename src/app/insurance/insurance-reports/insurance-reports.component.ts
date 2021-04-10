import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'insurance-reports',
    templateUrl: 'insurance-reports.component.html'
})

export class InsuranceReportsComponent {

    active: boolean = true;

}