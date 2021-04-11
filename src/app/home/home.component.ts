import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from '../security/shared/account.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'

})

export class HomeComponent implements OnInit {

    userRole: string = '';
    @ViewChild('btnhideBars')
    btnhideBars!: ElementRef;

    public constructor(
        private _route: ActivatedRoute,
        private accountService: AccountService) { }


    ngOnInit(): void {
        this.userRole = this._route.snapshot.params['role'];
        
        //this.accountService.changeUserRole(this.userRole);

        this.btnhideBars.nativeElement.click();
    }

}