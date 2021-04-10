import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security.component';
import { RegistrationTypeComponent } from './registration-type/registration-type.component';


const securityRoutes: Routes = [

    //Security
    //{ path: 'login', component: LoginComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'registrationType', component: RegistrationTypeComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(securityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SecurityRoutingModule { }