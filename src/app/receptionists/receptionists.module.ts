
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceptionistRoutingModule } from './receptionists.routing';
import { ReceptionistsComponent } from './receptionists.component';
import { ReceptionistTabsComponent } from './receptionist-tabs/receptionist-tabs.component';
import { ReceptionistBasicComponent } from './receptionist-basic/receptionist-basic.component';
import { ReceptionistAddressComponent } from './receptionist-address/receptionist-address.component';
import { ReceptionistAccountComponent } from './receptionist-account/receptionist-account.component';
import { ReceptionistAppointmentsComponent } from './receptionist-appointments/receptionist-appointments.component';
import { ReceptionistReportsComponent } from './receptionist-reports/receptionist-reports.component';
import { ReceptionistPatientsComponent } from './receptionist-patients/receptionist-patients.component';
import { ReceptionistSearchComponent } from './receptionist-search/receptionist-search.component';
import { ReceptionistAppointmentDetailsComponent } from './receptionist-appointment-details/receptionist-appointment-details.component';
import { ReceptionistRequestsComponent } from './receptionist-requests/receptionist-requests.component';
import { ReceptionistDivisionCalendarComponent } from './receptionist-division-calendar/receptionist-division-calendar.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsModule } from '../patients/patients.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin
  ])

  
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReceptionistRoutingModule,
        SharedModule,
        FullCalendarModule,
        //routing,
        // ScheduleModule,
      
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
    exports: [
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
