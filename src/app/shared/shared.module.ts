import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
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
import { SharedService } from './shared/shared.service';
import { CharityRequestService } from './shared/charityRequest.service';
// import {TableModule} from 'primeng';
import {  DataTableModule } from 'primeng/primeng';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';
import { TreeCheckboxListComponent } from './tree-checkboxList/tree-checkboxList.component';

import { FilterByNameOrCodePipe } from './pipes/filterbynameorcode.pipe';
import { TranslateObjectsPipe } from './pipes/translateObjects.pipe';
import { UnAuthorizedComponent } from './unauthorized/unauthorized.component';
import { SharedTabsComponent } from './shared-tabs/shared-tabs.component';


import { GMapModule } from 'primeng/primeng';
import { TranslateModule } from '@ngx-translate/core';
import { TreeModule } from 'primeng/primeng';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedRoutingModule,
        //routing,
        GMapModule,
        DataTableModule,
        TranslateModule,
        TreeModule
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
        DataTableModule,
        GMapModule,
        TreeModule
    ]
})
export class SharedModule { }
