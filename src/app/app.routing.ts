//import { ModuleWithProviders }  from '@angular/core';
import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
//import { HomeComponent }      from './home/home.component';
//import { PrototypeHomeComponent }      from './home/prototype-home/prototype-home.component';
//import { AdvancedSearchComponent } from './home/advanced-search/advanced-search.component';


const appRoutes: Routes = [

    //General
    //{ path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },

    //System Admins
    {
        path: 'systemAdmin',
        loadChildren: 'app/systemAdmins/systemAdmins.module#SystemAdminsModule'
    },
    //cashier
    {
        path: 'cashier',
        loadChildren: 'app/cashier/cashier.module#CashiersModule'
    },
    //clinic
    {
        path: 'clinic',
        loadChildren: 'app/clinics/clinic.module#ClinicsModule'
    },
    //doctor
    {
        path: 'doctor',
        loadChildren: 'app/doctors/doctors.module#DoctorsModule'
    },
    //shared
    {
        path: 'shared',
        loadChildren: 'app/shared/shared.module#SharedModule'
    },
    //receptionists
    {
        path: 'receptionist',
        loadChildren: 'app/receptionists/receptionists.module#ReceptionistsModule'
    },
    //insurance
    {
        path: 'insurance',
        loadChildren: 'app/insurance/insurance.module#InsuranceModule'
    },
    //nurses
    {
        path: 'nurse',
        loadChildren: 'app/nurses/nurses.module#NursesModule'
    },
    //patients
    {
        path: 'patient',
        loadChildren: 'app/patients/patients.module#PatientsModule'
    },
    //security
    {
        path: 'security',
        loadChildren: 'app/security/security.module#SecurityModule'
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: 'prototypeHome', component: PrototypeHomeComponent },
    //{ path: 'advancedSearch', component: AdvancedSearchComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { useHash: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });