import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-receptionist-tabs',
    templateUrl: 'patient-receptionist-tabs.component.html',
   
})

export class PatientReceptionistTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() patientId = '1';
    isDoctor: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

        this.isDoctor = this.localStorage.retrieve("IsDoctor");
    }
}