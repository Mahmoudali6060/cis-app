import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrototypeHomeComponent } from './prototype-home/prototype-home.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { LoginComponent } from './login/login.component';
import { HomeLoadingComponent } from './loading/home-loading.component';
import { SecurityModule }   from '../security/security.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        RouterModule,  
        SecurityModule
    ],
    declarations: [
        LoginComponent,
        HomeLoadingComponent,
        HomeComponent,
        SearchComponent,
        MostPopularComponent,
        AdvancedSearchComponent,
        NavBarComponent,
        PrototypeHomeComponent
    ],
    providers: [],
    exports: [
        LoginComponent,
        HomeLoadingComponent,
        HomeComponent,
        SearchComponent,
        MostPopularComponent,
        AdvancedSearchComponent,
        NavBarComponent,
        PrototypeHomeComponent
    ]
})
export class HomeModule { }
