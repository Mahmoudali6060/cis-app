//import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
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
        // loadChildren: () => import('./systemAdmins/systemAdmins.module#SystemAdminsModule'
        loadChildren: () => import('./systemAdmins/systemAdmins.module').then(m => m.SystemAdminsModule),
    },
    //cashier
    {
        path: 'cashier',
        loadChildren: () => import('./cashier/cashier.module').then(m => m.CashiersModule)
    },
    //clinic
    {
        path: 'clinic',
        loadChildren: () => import('./clinics/clinic.module').then(m => m.ClinicsModule)
    },
    //doctor
    {
        path: 'doctor',
        loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
    },
    //shared
    {
        path: 'shared',
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    },
    //receptionists
    {
        path: 'receptionist',
        loadChildren: () => import('./receptionists/receptionists.module').then(m => m.ReceptionistsModule)
    },
    //insurance
    {
        path: 'insurance',
        loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule)
    },
    //nurses
    {
        path: 'nurse',
        loadChildren: () => import('./nurses/nurses.module').then(m => m.NursesModule)
    },
    //patients
    {
        path: 'patient',
        loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
    },
    //security
    {
        path: 'security',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
    },

    {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
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