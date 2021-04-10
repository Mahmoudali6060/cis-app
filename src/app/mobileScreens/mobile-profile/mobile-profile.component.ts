import {Component, Input} from '@angular/core';


@Component({
   
    selector: 'mobile-profile',
    templateUrl: 'mobile-profile.component.html',

})

export class MobileProfileComponent {
   
    selectProfile: boolean = true;
    user: any = {}
    gendersList: any[] = [{ text: 'Male' }, { text: 'Female' }];
    nationalitiesList: any[] = [{ text: 'Egypt' }, { text: 'Suadi Arabia' }, { text: 'Qatar' }];
}