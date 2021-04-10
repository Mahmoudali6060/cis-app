import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsComponent }   from './doctors.component';
import { DoctorTabsComponent }   from './doctor-tabs/doctor-tabs.component';
import { DoctorBasicComponent }   from './doctor-basic/doctor-basic.component';
import { DoctorAddressComponent }   from './doctor-address/doctor-address.component';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorRequestsComponent } from './doctor-requests/doctor-requests.component';
import { DoctorReportsComponent } from './doctor-reports/doctor-reports.component';
import { DoctorRequestDetailsComponent } from './doctor-request-details/doctor-request-details.component';

const doctorRoutes: Routes = [
    //Doctors
    { path: 'doctors', component: DoctorsComponent },
    { path: 'account/:id', component: DoctorAccountComponent },
    { path: 'basic/:id', component: DoctorBasicComponent },
    { path: 'address/:id', component: DoctorAddressComponent },
    { path: 'appointments', component: DoctorAppointmentsComponent },
    { path: 'requests/:id', component: DoctorRequestsComponent },
    { path: 'reports/:id', component: DoctorReportsComponent },
    { path: 'requestDetails/:id', component: DoctorRequestDetailsComponent },

];


@NgModule({
    imports: [
        RouterModule.forChild(doctorRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DoctorRoutingModule { }