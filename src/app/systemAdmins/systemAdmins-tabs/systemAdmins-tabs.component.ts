import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'systemAdmins-tabs',
    templateUrl: 'systemAdmins-tabs.component.html',
   
})

export class SystemAdminTabsComponent implements OnChanges {
    hasID: boolean = true;
    @Input() clinicAdminId = '1';

    @Input() isAccountSelected: boolean = false;
    @Input() isClinicsSelected: boolean = false;
    @Input() isVendorsSelected: boolean = false;
    @Input() isDepartmentSelected: boolean = false;
    @Input() isDivisionSelected: boolean = false;
    @Input() isSettingsSelected: boolean = false;
    @Input() isDashboardSelected: boolean = false;
    @Input() isDemoghraphicsSelected: boolean = false;
    @Input() isImportExportSelected: boolean = false;

    constructor(private storage: LocalStorageService) { }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges) {

    }
}