import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'receptionist-tabs',
    templateUrl: 'receptionist-tabs.component.html',
   
})

export class ReceptionistTabsComponent implements OnChanges {
    @Input() activeTabIndex: number = 0;
    @Input() receptionistId = '1';
    hasID: boolean = false;

    constructor(private localStorage: LocalStorageService) { }

    ngOnChanges(changes: SimpleChanges) {

        //this.volunteerId = this.localStorage.retrieve("VolunteerId");

        //if (this.volunteerId == 'new' || this.volunteerId == null)
        //    this.hasID = false;
        //else
        //    this.hasID = true;
    }
}