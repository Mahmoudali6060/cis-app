
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { MobileScreensRoutingModule } from './mobileScreens.routing';

import { MobileTabsComponent }   from './mobile-tabs/mobile-tabs.component';
import { MobileAppointmentsComponent }   from './mobile-appointments/mobile-appointments.component';
import { MobileInsuranceComponent }   from './mobile-insurance/mobile-insurance.component';
import { MobileMedicalClaculatorComponent }   from './mobile-medicalClaculator/mobile-medicalClaculator.component';
import { MobileProfileComponent }   from './mobile-profile/mobile-profile.component';
import { MobileSearchComponent }   from './mobile-search/mobile-search.component';
import { MobileRegisterComponent }   from './mobile-register/mobile-register.component';
import { MobileNewsomponent }   from './mobile-news/mobile-news.component';
import { MobileFeedbackomponent }   from './mobile-feedback/mobile-feedback.component';
import { MobileBookAppointmentComponent }   from './mobile-bookAppointment/mobile-bookAppointment.component';
import { MobileAppointmentDetailsComponent }   from './mobile-appointment-details/mobile-appointment-details.component';
import { MobileMapComponent }   from './mobile-map/mobile-map.component';
import { SharedModule } from '../shared/shared.module';
import { AdministrationModule } from '../administration/administration.module';
import { SecurityModule }   from '../security/security.module';
import { AccountService }   from '../security/shared/account.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MobileScreensRoutingModule,
        SharedModule,
        SecurityModule,
        AdministrationModule
    ],
    declarations: [
        MobileTabsComponent,
        MobileAppointmentsComponent,
        MobileInsuranceComponent,
        MobileMedicalClaculatorComponent,
        MobileProfileComponent,
        MobileSearchComponent,
        MobileRegisterComponent,
        MobileNewsomponent,
        MobileFeedbackomponent,
        MobileBookAppointmentComponent,
        MobileAppointmentDetailsComponent,
        MobileMapComponent,


    ],
    providers: [AccountService],
    exports: [
        MobileTabsComponent,
        MobileAppointmentsComponent,
        MobileInsuranceComponent,
        MobileMedicalClaculatorComponent,
        MobileProfileComponent,
        MobileSearchComponent,
        MobileRegisterComponent, 
        MobileNewsomponent,
        MobileFeedbackomponent,
        MobileBookAppointmentComponent,
        MobileAppointmentDetailsComponent,
        MobileMapComponent,

    ]
})
export class MobileScreensModule { }
