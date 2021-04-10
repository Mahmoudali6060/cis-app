import {Component, Input} from '@angular/core';


@Component({
   
    selector: 'mobile-bookAppointment',
    templateUrl: 'mobile-bookAppointment.component.html',

})

export class MobileBookAppointmentComponent {

    selectBookAppointment: boolean = true;

    user: any = {};
}