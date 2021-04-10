import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
   
    selector: 'registration-type',
    templateUrl: 'registration-type.component.html'
})

export class RegistrationTypeComponent {

    constructor(private router: Router) { }

    registerVolunteer(): void {
        
        this.router.navigate(['/volunteerRegistration']);
    }

    registerOrganization(): void {

        this.router.navigate(['/organizationRegisteration']);
    }

}