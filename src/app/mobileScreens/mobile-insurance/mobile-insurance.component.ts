import {Component, Input} from '@angular/core';


@Component({
   
    selector: 'mobile-insurance',
    templateUrl: 'mobile-insurance.component.html',

})

export class MobileInsuranceComponent {

    selectInsurance: boolean = true;
    user: any = {};
}