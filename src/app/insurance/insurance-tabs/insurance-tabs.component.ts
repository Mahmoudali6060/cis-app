import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
    selector: 'insurance-tabs',
    templateUrl: './insurance-tabs.component.html',
})

export class InsuranceTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() doctorId = 'new';
    hasID: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

    }
}