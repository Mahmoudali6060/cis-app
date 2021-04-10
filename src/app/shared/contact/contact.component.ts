import {Component , OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
   
    selector: 'contact',  
    templateUrl: 'contact.component.html',
   
})

export class ContactComponent implements OnInit {   

    @Input() contact: any = {};

    //@Output('change') contactChanged: any = new EventEmitter();
 

    ngOnInit(): void {
    }

    raiseChanges() {
        //this.contactChanged.emit({
        //    value: this.contact
        //})
    }

}