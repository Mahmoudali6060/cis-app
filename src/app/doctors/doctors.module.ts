
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { DoctorRoutingModule } from './doctors.routing';

import { DoctorsComponent }   from './doctors.component';
import { DoctorTabsComponent }   from './doctor-tabs/doctor-tabs.component';
import { DoctorBasicComponent }   from './doctor-basic/doctor-basic.component';
import { DoctorAddressComponent }   from './doctor-address/doctor-address.component';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { DoctorAdvancedSearchComponent } from './doctor-advanced-search/doctor-advanced-search.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorRequestsComponent } from './doctor-requests/doctor-requests.component';
import { DoctorReportsComponent } from './doctor-reports/doctor-reports.component';
import { DoctorRequestDetailsComponent } from './doctor-request-details/doctor-request-details.component';
import { TreeModule, TreeNode } from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';
import { PatientsModule } from '../patients/patients.module'; 
import { PatienSearchComponent } from '../patients/patient-search/patient-search.component';
import { DoctorService }   from './shared/doctor.service';
import { SharedService }   from '../shared/shared/shared.service';
import {DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DoctorRoutingModule,
        SharedModule,        
        TreeModule,      
        //routing, 
        DataTableModule,
        DialogModule,
        PatientsModule     
    ],
    declarations: [
        DoctorsComponent,
        DoctorTabsComponent,
        DoctorBasicComponent,
        DoctorAddressComponent,
        DoctorAccountComponent,
        DoctorAdvancedSearchComponent,
        DoctorAppointmentsComponent,
        DoctorRequestsComponent,
        DoctorReportsComponent,
        DoctorRequestDetailsComponent,
    ],
    providers: [],
    exports:[
        DoctorsComponent,
        DoctorTabsComponent,
        DoctorBasicComponent,
        DoctorAddressComponent,
        DoctorAccountComponent,
        DoctorAdvancedSearchComponent,
        DoctorAppointmentsComponent,
        DoctorRequestsComponent,
        DoctorReportsComponent,
        DoctorRequestDetailsComponent
    ]
})
export class DoctorsModule { }
