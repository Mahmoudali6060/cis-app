
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeModule } from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';

//import { routing } from '../app.routing';
import { ReceptionistRoutingModule } from './receptionists.routing';


import { ReceptionistsComponent }   from './receptionists.component';
import { ReceptionistTabsComponent }   from './receptionist-tabs/receptionist-tabs.component';
import { ReceptionistBasicComponent }   from './receptionist-basic/receptionist-basic.component';
import { ReceptionistAddressComponent }   from './receptionist-address/receptionist-address.component';
import { ReceptionistAccountComponent } from './receptionist-account/receptionist-account.component';
import { ReceptionistAppointmentsComponent } from './receptionist-appointments/receptionist-appointments.component';
import { ReceptionistReportsComponent } from './receptionist-reports/receptionist-reports.component';
import { ReceptionistPatientsComponent } from './receptionist-patients/receptionist-patients.component';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistAppointmentDetailsComponent } from './receptionist-appointment-details/receptionist-appointment-details.component';
import { ReceptionistRequestsComponent } from './receptionist-requests/receptionist-requests.component';
import { ReceptionistDivisionCalendarComponent } from './receptionist-division-calendar/receptionist-division-calendar.component';

import { PatienSearchComponent } from '../patients/patient-search/patient-search.component';


import { SharedModule } from '../shared/shared.module';
import { CalendarModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { PatientsModule } from '../patients/patients.module'; 

import { ReceptionistService }   from './shared/receptionist.service';
import { SharedService }   from '../shared/shared/shared.service';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReceptionistRoutingModule,
        SharedModule,        
        //routing,
        ScheduleModule,  
        TreeModule,
        DataTableModule,      
        DialogModule,
        CalendarModule,
        PatientsModule
        

    ],
    declarations: [
        ReceptionistsComponent,
        ReceptionistTabsComponent,
        ReceptionistBasicComponent,
        ReceptionistAddressComponent,
        ReceptionistAccountComponent,
        ReceptionistAppointmentsComponent,
        ReceptionistReportsComponent,
        ReceptionistPatientsComponent,
        ReceptionistSearchComponent,
        ReceptionistAppointmentDetailsComponent,
        ReceptionistRequestsComponent,
        ReceptionistDivisionCalendarComponent
       
    ],
    providers: [],
    exports:[
        ReceptionistsComponent,
        ReceptionistTabsComponent,
        ReceptionistBasicComponent,
        ReceptionistAddressComponent,
        ReceptionistAccountComponent,
        ReceptionistAppointmentsComponent,
        ReceptionistReportsComponent,
        ReceptionistPatientsComponent,
        ReceptionistSearchComponent,
        ReceptionistAppointmentDetailsComponent,
        ReceptionistRequestsComponent,
        ReceptionistDivisionCalendarComponent        
    ]
})
export class ReceptionistsModule { }
