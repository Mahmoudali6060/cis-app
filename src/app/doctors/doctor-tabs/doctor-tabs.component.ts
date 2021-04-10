import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'doctor-tabs',
    templateUrl: 'doctor-tabs.component.html',
   
})

export class DoctorTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() doctorId = 'new';
    hasID: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

        //this.doctorId = this.localStorage.retrieve("UserID");

        //if (this.doctorId == 'new' || this.doctorId == null)
        //    this.hasID = false;
        //else
        //    this.hasID = true;
    }
}