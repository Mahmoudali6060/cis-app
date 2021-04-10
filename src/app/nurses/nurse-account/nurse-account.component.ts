import {Component, OnInit } from '@angular/core';

import { AccountService } from '../../security/shared/account.service';
import { UserTypeEnum } from '../../security/shared/user-type.enum';

@Component({
   
    selector: 'nurse-account',
    templateUrl: 'nurse-account.component.html'
})

export class NurseAccountComponent implements OnInit {

    public constructor(private accountService: AccountService) { }

    ngOnInit(): void {

        //this.accountService.changeUserRole(new UserTypeEnum().Nurse);
    }
}