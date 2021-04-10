import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnAuthorizedComponent } from './unauthorized/unauthorized.component';
import { ReportsComponent } from './reports/reports.component';
import { RegistrationResultComponent } from './registration-result/registration-result.component';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';

const sharedRoutes: Routes = [
    //Shared
    { path: 'allNotifications', component: AllNotificationsComponent },
    { path: 'registrationResult', component: RegistrationResultComponent },
    { path: 'unauthorized', component: UnAuthorizedComponent },
    { path: 'reports', component: ReportsComponent }



];

@NgModule({
    imports: [
        RouterModule.forChild(sharedRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SharedRoutingModule { }