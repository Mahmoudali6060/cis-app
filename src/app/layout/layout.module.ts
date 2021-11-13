import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UpperNavComponent } from './components/upper-nav/upper-nav.component';
import { SearchModalComponent } from './components/nav-bar/search-modal/search-modal.component';
import { SliderComponent } from './components/home/home-views/slider/slider.component';
import { WelcomeComponent } from './components/home/home-views/welcome/welcome.component';
import { WhatWeDoComponent } from './components/home/home-views/what-we-do/what-we-do.component';
import { StatisticsComponent } from './components/home/home-views/statistics/statistics.component';
import { NewsLetterComponent } from './components/home/home-views/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { LoginComponent } from './components/login/login.component';
import { VisitorComponent } from './components/login/visitor/visitor.component';
import { DoctorComponent } from './components/login/doctor/doctor.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    UpperNavComponent,
    SearchModalComponent,
    SliderComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    StatisticsComponent,
    NewsLetterComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DepartmentsComponent,
    LoginComponent,
    VisitorComponent,
    DoctorComponent,

  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,

        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    UpperNavComponent,
    SearchModalComponent,
    SliderComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    StatisticsComponent,
    NewsLetterComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DepartmentsComponent,
    LoginComponent,
    VisitorComponent,
    DoctorComponent
  ],
  providers: [],
  bootstrap: [],
})
export class LayoutModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
