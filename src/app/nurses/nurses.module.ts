
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { NurseRoutingModule } from './nurses.routing';

import { NursesComponent }   from './nurses.component';
import { NurseTabsComponent }   from './nurse-tabs/nurse-tabs.component';
import { NurseBasicComponent }   from './nurse-basic/nurse-basic.component';
import { NurseAddressComponent }   from './nurse-address/nurse-address.component';
import { NurseAccountComponent } from './nurse-account/nurse-account.component';
import { NurseAppointmentsComponent } from './nurse-appointments/nurse-appointments.component';
import { NurseRequestsComponent } from './nurse-requests/nurse-requests.component';
import { NurseReportsComponent } from './nurse-reports/nurse-reports.component';

import { SharedModule } from '../shared/shared.module';

import { NurseService }   from './shared/nurse.service';
import { SharedService }   from '../shared/shared/shared.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NurseRoutingModule,
        SharedModule,        
        //routing,        
    ],
    declarations: [
        NursesComponent,
        NurseTabsComponent,
        NurseBasicComponent,
        NurseAddressComponent,
        NurseAccountComponent,
        NurseAppointmentsComponent,
        NurseRequestsComponent,
        NurseReportsComponent
    ],
    providers: [],
    exports:[
        NursesComponent,
        NurseTabsComponent,
        NurseBasicComponent,
        NurseAddressComponent,
        NurseAccountComponent,
        NurseAppointmentsComponent,
        NurseRequestsComponent,
        NurseReportsComponent
    ]
})
export class NursesModule { }
