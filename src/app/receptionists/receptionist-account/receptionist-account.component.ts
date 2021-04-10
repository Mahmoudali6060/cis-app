import {Component, OnInit } from '@angular/core';

import { AccountService } from '../../security/shared/account.service';
import { UserTypeEnum } from '../../security/shared/user-type.enum';

@Component({
   
    selector: 'receptionist-account',
    templateUrl: 'receptionist-account.component.html'
})

export class ReceptionistAccountComponent implements OnInit {

    public constructor(private accountService: AccountService) { }

    ngOnInit(): void {

        //this.accountService.changeUserRole(new UserTypeEnum().Receptionist);
    }
}