import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'mobile-tabs',
    templateUrl: 'mobile-tabs.component.html',
   
})

export class MobileTabsComponent implements OnChanges {
    hasID: boolean = true;

    @Input() clinicAdminId = '1';

    @Input() isSearchSelected: boolean = false;
    @Input() isAppointmentsSelected: boolean = false;
    @Input() isInsuranceSelected: boolean = false;
    @Input() isMedicalCalcSelected: boolean = false;
    @Input() isProfileSelected: boolean = false;
    @Input() isRegisterSelected: boolean = false;
    @Input() isFeedbackSelected: boolean = false;
    @Input() isNewsSelected: boolean = false;

    constructor(private storage: LocalStorageService) { }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges) {

    }
}