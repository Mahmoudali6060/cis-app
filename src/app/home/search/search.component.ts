import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {UserTypeEnum} from '../../security/shared/user-type.enum';


@Component({
   
    selector: 'search-home',
    templateUrl: './search.component.html'

})

export class SearchComponent {

    userRoleEnum: UserTypeEnum = new UserTypeEnum();

    @Input() userRole!: string;
    showReservation: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        if (this.userRole == this.userRoleEnum.Patient) {
            this.showReservation = true;
        }
        else {
            this.showReservation = false;
        }
    }
}