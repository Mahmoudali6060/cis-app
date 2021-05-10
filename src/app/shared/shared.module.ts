import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared.routing';
import { AddressComponent } from './address/address.component';
import { PrintComponent } from './print-page/print-page.component';
import { ContactComponent } from './contact/contact.component';
import { LocationNameComponent } from './location-name/location-name.component';
import { DocumentsComponent } from './attachments/documents.component';
import { DocumentDetailsComponent } from './attachments/document-details.component';
import { ProjectParticipationComponent } from './project-participation/project-participation.component';
import { ReportsComponent } from './reports/reports.component';
import { FilterByNamePipe } from './pipes/filterbyname.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LocationComponent } from './location/location.component';
import { RegistrationResultComponent } from './registration-result/registration-result.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';
import { TreeCheckboxListComponent } from './tree-checkboxList/tree-checkboxList.component';
import { FilterByNameOrCodePipe } from './pipes/filterbynameorcode.pipe';
import { TranslateObjectsPipe } from './pipes/translateObjects.pipe';
import { UnAuthorizedComponent } from './unauthorized/unauthorized.component';
import { SharedTabsComponent } from './shared-tabs/shared-tabs.component';

import { TranslateModule } from '@ngx-translate/core';

import { GMapModule } from 'primeng/gmap';
import { TreeModule } from 'primeng/tree';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedRoutingModule,
        //routing,
        GMapModule,
        TranslateModule,
        TreeModule,
        CalendarModule,
        DialogModule,
        OrderListModule,
        ChartModule,
        TableModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        DropdownModule
    ],
    declarations: [
        AddressComponent,
        PrintComponent,
        ContactComponent,
        LocationNameComponent,
        DocumentsComponent,
        DocumentDetailsComponent,
        ProjectParticipationComponent,
        ReportsComponent,
        FilterByNamePipe,
        LoadingComponent,
        LocationComponent,
        RegistrationResultComponent,
        UnAuthorizedComponent,
        ImageUploaderComponent,
        FileUploaderComponent,
        FilterByNameOrCodePipe,
        TranslateObjectsPipe,
        AllNotificationsComponent,
        SharedTabsComponent,
        TreeCheckboxListComponent,

    ],
    providers: [],
    exports: [
        AddressComponent,
        UnAuthorizedComponent,
        PrintComponent,
        ContactComponent,
        LocationNameComponent,
        DocumentsComponent,
        DocumentDetailsComponent,
        ProjectParticipationComponent,
        ReportsComponent,
        FilterByNamePipe,
        LoadingComponent,
        LocationComponent,
        RegistrationResultComponent,
        ImageUploaderComponent,
        FileUploaderComponent,
        FilterByNameOrCodePipe,
        TranslateObjectsPipe,
        AllNotificationsComponent,
        TranslateModule,
        SharedTabsComponent,
        TreeCheckboxListComponent,
        CalendarModule,
        GMapModule,
        TreeModule,
        DialogModule,
        OrderListModule,
        ChartModule,
        TableModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        DropdownModule
    ]
})
export class SharedModule { }
