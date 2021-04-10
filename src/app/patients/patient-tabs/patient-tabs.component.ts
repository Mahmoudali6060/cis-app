import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-tabs',
    templateUrl: 'patient-tabs.component.html',
   
})

export class PatientTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() patientId = 'new';
    isDoctor: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

        this.isDoctor = this.localStorage.retrieve("IsDoctor");
    }
}