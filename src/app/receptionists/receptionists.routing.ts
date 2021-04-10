import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ReceptionistAccountComponent } from './receptionist-account/receptionist-account.component';
import { ReceptionistBasicComponent }   from './receptionist-basic/receptionist-basic.component';
import { ReceptionistAddressComponent }   from './receptionist-address/receptionist-address.component';
import { ReceptionistAppointmentsComponent } from './receptionist-appointments/receptionist-appointments.component';
import { ReceptionistReportsComponent } from './receptionist-reports/receptionist-reports.component';
import { ReceptionistPatientsComponent } from './receptionist-patients/receptionist-patients.component';
import { ReceptionistRequestsComponent } from './receptionist-requests/receptionist-requests.component';



const receptionistRoutes: Routes = [

    //Receptionists
    { path: 'account/:id', component: ReceptionistAccountComponent },
    { path: 'basic/:id', component: ReceptionistBasicComponent },
    { path: 'address/:id', component: ReceptionistAddressComponent },
    { path: 'appointments', component: ReceptionistAppointmentsComponent },
    { path: 'reports/:id', component: ReceptionistReportsComponent },
    { path: 'patients/:id', component: ReceptionistPatientsComponent },
    { path: 'requests/:id', component: ReceptionistRequestsComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(receptionistRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReceptionistRoutingModule { }