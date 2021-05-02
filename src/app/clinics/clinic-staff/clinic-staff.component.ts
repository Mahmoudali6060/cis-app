import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'clinic-staff',
    templateUrl: './clinic-staff.component.html'
})

export class ClinicStaffComponent {
    selectStaffTab: boolean = true;
    showProgress: boolean = true;
}