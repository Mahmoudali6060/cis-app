import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NurseAccountComponent } from './nurse-account/nurse-account.component';
import { NurseBasicComponent }   from './nurse-basic/nurse-basic.component';
import { NurseAddressComponent }   from './nurse-address/nurse-address.component';
import { NurseAppointmentsComponent } from './nurse-appointments/nurse-appointments.component';
import { NurseRequestsComponent } from './nurse-requests/nurse-requests.component';
import { NurseReportsComponent } from './nurse-reports/nurse-reports.component';


const nurseRoutes: Routes = [

    //Nurses
    { path: 'account/:id', component: NurseAccountComponent },
    { path: 'basic/:id', component: NurseBasicComponent },
    { path: 'address/:id', component: NurseAddressComponent },
    { path: 'appointments/:id', component: NurseAppointmentsComponent },
    { path: 'requests/:id', component: NurseRequestsComponent },
    { path: 'reports/:id', component: NurseReportsComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(nurseRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NurseRoutingModule { }