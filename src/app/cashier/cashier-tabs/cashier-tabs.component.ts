export class CashierClaimDetailsComponent {

    active: boolean = true;

}import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'cashier-tabs',
    templateUrl: 'cashier-tabs.component.html',

})

export class CashierTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() doctorId = 'new';
    hasID: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

    }
}