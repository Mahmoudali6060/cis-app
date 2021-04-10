import {Component, OnInit } from '@angular/core';

import { AccountService } from '../../security/shared/account.service';
import { UserTypeEnum } from '../../security/shared/user-type.enum';

@Component({
   
    selector: 'doctor-account',
    templateUrl: 'doctor-account.component.html'
})

export class DoctorAccountComponent implements OnInit {

    public constructor(private accountService: AccountService) { }

    ngOnInit(): void {

        //this.accountService.changeUserRole(new UserTypeEnum().Doctor);
    }
}