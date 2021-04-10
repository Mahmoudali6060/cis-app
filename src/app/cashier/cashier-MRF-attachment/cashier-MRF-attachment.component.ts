import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'cashier-MRF-attachment',
    templateUrl: 'cashier-MRF-attachment.component.html'
})
export class CashierMRFAttachmentComponent {

    active: boolean = true;

}