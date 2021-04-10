import {Component, OnInit } from '@angular/core';

import { AccountService } from '../../security/shared/account.service';

@Component({
   
    selector: 'prototype-home',
    templateUrl: 'prototype-home.component.html'

})

export class PrototypeHomeComponent implements OnInit {

    public constructor(private accountService: AccountService) { }
    
    ngOnInit(): void {
        
        //this.accountService.changeUserRole('');
    }

}