import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { SearchComponent } from './home/search/search.component';
//import { MostPopularComponent } from './home/most-popular/most-popular.component';
//import { NavBarComponent } from './home/nav-bar/nav-bar.component';
//import { PrototypeHomeComponent } from './home/prototype-home/prototype-home.component';
//import { AdvancedSearchComponent } from './home/advanced-search/advanced-search.component';

import { HomeModule } from './home/home.module';
import { AdministrationService } from './administration/shared/administration.service';
import { SharedService } from './shared/shared/shared.service';
import { ClaimService } from './cashier/shared/claim.service';
import { AccountService } from './security/shared/account.service';
import { ClinicService } from './clinics/shared/clinic.service';
import { DoctorService } from './doctors/shared/doctor.service';
import { InsuranceService } from './insurance/shared/insurance.service';
import { NurseService } from './nurses/shared/nurse.service';
import { PatientService } from './patients/shared/patient.service';
import { ReceptionistService } from './receptionists/shared/receptionist.service';
import { SystemAdminService } from './systemAdmins/shared/system-admin.service';
import { VendorDetailGuard } from './systemAdmins/systemAdmins-vendor-basicData/vendor-guard.service';
//import { DoctorsModule } from './doctors/doctors.module';
//import { NursesModule } from './nurses/nurses.module';
//import { SystemAdminsModule } from './systemAdmins/systemAdmins.module';//finished
//import { ReceptionistsModule } from './receptionists/receptionists.module';

//import { SharedModule } from './shared/shared.module';
//import { AdministrationModule } from './administration/administration.module';


import { Ng2Webstorage } from 'ng2-webstorage';

//import { ClinicsModule  } from './clinics/clinic.module';
//import { CashiersModule } from './cashier/cashier.module';
//import { InsuranceModule } from './insurance/insurance.module';

//import { SecurityModule } from './security/security.module';

//import { PatientsModule } from './patients/patients.module';

//import { MobileScreensModule } from './mobileScreens/mobileScreens.module';

import { NotificationService, ChannelConfig, SignalrWindow } from "./shared/shared/notification.service";
import { remoteServerUrl } from './app.config';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


let channelConfig = new ChannelConfig();

channelConfig.url = remoteServerUrl.replace("api/", "signalr")
channelConfig.hubName = "CISHub";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "app/assets/i18n/", ".json");
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HomeModule,
        //SystemAdminsModule,
        //CashiersModule,
        //ClinicsModule,
        //DoctorsModule,
        //InsuranceModule,
        //NursesModule,
        //PatientsModule,
        //ReceptionistsModule,  
        //SecurityModule,
        //SharedModule,
        //AdministrationModule,
        //MobileScreensModule,
        AppRoutingModule,
        ToastrModule,
        Ng2Webstorage,


        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })

    ],
    declarations: [
        AppComponent,
        //HomeComponent,
        //SearchComponent,
        //MostPopularComponent,
        //AdvancedSearchComponent,
        //NavBarComponent,
        //PrototypeHomeComponent
    ],
    providers: [
        AdministrationService,
        SharedService,
        ClaimService,
        AccountService,
        NotificationService,
        ClinicService,
        DoctorService,
        InsuranceService,
        NurseService,
        PatientService,
        ReceptionistService,
        SystemAdminService,
        VendorDetailGuard,
        { provide: SignalrWindow, useValue: window },
        { provide: 'channel.config', useValue: channelConfig },
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
