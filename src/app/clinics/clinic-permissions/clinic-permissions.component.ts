import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'clinic-permissions',
    templateUrl: './clinic-permissions.component.html'
})

export class ClinicPermissionsComponent {
    showProgress!: boolean;
    selectPermissionsTab: boolean = true;

}