import {Component, Input} from '@angular/core';


@Component({
   
    selector: 'mobile-medicalClaculator',
    templateUrl: 'mobile-medicalClaculator.component.html',

})

export class MobileMedicalClaculatorComponent {

    selectMedicalCalc: boolean = true;
    user: any = {};
}