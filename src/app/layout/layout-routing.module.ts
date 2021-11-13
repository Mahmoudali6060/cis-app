import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/login/doctor/doctor.component';
import { LoginComponent } from './components/login/login.component';
import { VisitorComponent } from './components/login/visitor/visitor.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "layout-login", component: LoginComponent, children: [
      { path: "visitor", component: VisitorComponent },
      { path: "doctor", component: DoctorComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
