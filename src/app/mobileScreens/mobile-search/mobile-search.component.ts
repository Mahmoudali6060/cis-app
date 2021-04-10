import {Component, Input} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'mobile-search',
    templateUrl: 'mobile-search.component.html',

})

export class MobileSearchComponent {

    selectAccountTab: boolean = true;
    displayResults: boolean = false;


    search() {
        this.displayResults = true;
    }
}