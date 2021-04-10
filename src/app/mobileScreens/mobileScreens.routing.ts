import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// mobile screens
import { MobileAppointmentsComponent } from './mobile-appointments/mobile-appointments.component';
import { MobileInsuranceComponent } from './mobile-insurance/mobile-insurance.component';
import { MobileProfileComponent } from './mobile-profile/mobile-profile.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { MobileMedicalClaculatorComponent } from './mobile-medicalClaculator/mobile-medicalClaculator.component';
import { MobileRegisterComponent } from './mobile-register/mobile-register.component';
import { MobileNewsomponent } from './mobile-news/mobile-news.component';
import { MobileFeedbackomponent } from './mobile-feedback/mobile-feedback.component';
import { MobileBookAppointmentComponent } from './mobile-bookAppointment/mobile-bookAppointment.component';
import { MobileAppointmentDetailsComponent } from './mobile-appointment-details/mobile-appointment-details.component';
import { MobileMapComponent } from './mobile-map/mobile-map.component';

const mobileScreensRoutes: Routes = [

    // mobile screens
    { path: 'patientAppointments', component: MobileAppointmentsComponent },
    { path: 'updateInsuranceDetails', component: MobileInsuranceComponent },
    { path: 'medicalCalculator', component: MobileMedicalClaculatorComponent },
    { path: 'updatePatientProfile', component: MobileProfileComponent },
    { path: 'homeSearch', component: MobileSearchComponent },
    { path: 'patientRegister', component: MobileRegisterComponent },
    { path: 'news', component: MobileNewsomponent },
    { path: 'feedback', component: MobileFeedbackomponent },
    { path: 'booking', component: MobileBookAppointmentComponent },
    { path: 'appointmentDetails', component: MobileAppointmentDetailsComponent },
    { path: 'map', component: MobileMapComponent },

];

@NgModule({
    imports: [
        RouterModule.forChild(mobileScreensRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MobileScreensRoutingModule { }