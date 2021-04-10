import {Component, Input} from '@angular/core';


@Component({
   
    selector: 'mobile-register',
    templateUrl: 'mobile-register.component.html',

})

export class MobileRegisterComponent {

    selectRegister: boolean = true;
    user: any = {};
}