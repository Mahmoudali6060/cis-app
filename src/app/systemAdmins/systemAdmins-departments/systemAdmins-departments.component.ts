import {Component, OnInit } from '@angular/core';

import { AccountService } from '../../security/shared/account.service';

@Component({
   
    selector: 'systemAdmins-departments',
    templateUrl: 'systemAdmins-departments.component.html'
})

export class SystemAdminDepartmentsComponent implements OnInit {

    selectDepartmentsTab: boolean = true;
    // default selected object
    objectType: string = 'Cis.Core.Department';
    title: string = 'Departments';

    public constructor(public accountService: AccountService) { }

    ngOnInit(): void {

    }
}