import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdministrationTabsComponent } from './administration-tabs/administration-tabs.component';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { RegionsComponent } from './regions/regions.component';
import { CitiesComponent } from './cities/cities.component';
import { DistrictsComponent } from './districts/districts.component';
import { LocationsComponent } from './locations/locations.component';
import { DrugUnitComponent } from './drug-unit/drug-unit.component';
import { DrugFrequencyComponent } from './drug-frequency/drug-frequency.component';
import { AdministrationService } from './shared/administration.service';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        //routing,
        SharedModule,
        TableModule
    ],
    declarations: [BasicDataComponent,
        AdministrationTabsComponent,
        RegionsComponent,
        CitiesComponent,
        DistrictsComponent,
        LocationsComponent,
        DrugUnitComponent,
        DrugFrequencyComponent,
    ],
    providers: [],
    exports: [BasicDataComponent,
        AdministrationTabsComponent,
        RegionsComponent,
        CitiesComponent,
        DistrictsComponent,
        LocationsComponent,
        DrugUnitComponent,
        DrugFrequencyComponent
    ]
})
export class AdministrationModule { }
