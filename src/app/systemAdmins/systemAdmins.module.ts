
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemAdminsRoutingModule } from './systemAdmins.routing';
import { SystemAdminTabsComponent } from './systemAdmins-tabs/systemAdmins-tabs.component';
import { SystemAdminAccountComponent } from './systemAdmins-account/systemAdmins-account.component';
import { SystemAdminClinicsComponent } from './systemAdmins-clinics/systemAdmins-clinics.component';
import { SystemAdminClinicDetailsComponent } from './systemAdmins-clinics-details/systemAdmins-clinics-details.component';
import { SystemAdminClinicBasicDataComponent } from './systemAdmins-clinic-basicData/systemAdmins-clinic-basicData.component';
import { SystemAdminClinicAddressComponent } from './systemAdmins-clinic-address/systemAdmins-clinic-address.component';
import { SystemAdminClinicSMSCreditComponent } from './systemAdmins-clinic-smsCredit/systemAdmins-clinic-smsCredit.component';
import { SystemAdminClinicSubscriptionComponent } from './systemAdmins-clinic-subscription/systemAdmins-clinic-subscription.component';
import { VendorFilterPipe } from './systemAdmins-vendors/vendor-filter.pipe';
import { SystemAdminVendorsComponent } from './systemAdmins-vendors/systemAdmins-vendors.component';
import { SystemAdminVendorDetailsComponent } from './systemAdmins-vendor-details/systemAdmins-vendor-details.component';
import { SystemAdminVendorBasicDataComponent } from './systemAdmins-vendor-basicData/systemAdmins-vendor-basicData.component';
import { SystemAdminVendorAddressComponent } from './systemAdmins-vendor-address/systemAdmins-vendor-address.component';
import { SystemAdminDepartmentsComponent } from './systemAdmins-departments/systemAdmins-departments.component';
import { SystemAdminDivisionsComponent } from './systemAdmins-divisions/systemAdmins-divisions.component';
import { SystemAdminSettingsComponent } from './systemAdmins-settings/systemAdmins-settings.component';
import { SystemAdminDashboardComponent } from './systemAdmins-dashboard/systemAdmins-dashboard.component';
import { SystemAdminClinicPermissionsComponent } from './systemAdmins-clinic-permissions/systemAdmins-clinic-permissions.component';
import { SystemAdminsBasicDataComponent } from './systemAdmins-basicData/systemAdmins-basicData.component';
import { SharedModule } from '../shared/shared.module';
import { AdministrationModule } from '../administration/administration.module';
import { SystemAdminImportExportComponent } from './systemAdmins-import-export/systemAdmins-import-export.component';
import { SecurityModule } from '../security/security.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SystemAdminsRoutingModule,
        SharedModule,
        SecurityModule,
        AdministrationModule,
        //routing,
    ],
    declarations: [
        SystemAdminTabsComponent,
        SystemAdminAccountComponent,
        SystemAdminClinicsComponent,
        SystemAdminClinicDetailsComponent,
        SystemAdminClinicBasicDataComponent,
        SystemAdminClinicSMSCreditComponent,
        SystemAdminClinicSubscriptionComponent,
        VendorFilterPipe,
        SystemAdminVendorsComponent,
        SystemAdminVendorDetailsComponent,
        SystemAdminVendorBasicDataComponent,
        SystemAdminVendorAddressComponent,
        SystemAdminDepartmentsComponent,
        SystemAdminClinicAddressComponent,
        SystemAdminSettingsComponent,
        SystemAdminDivisionsComponent,
        SystemAdminDashboardComponent,
        SystemAdminClinicPermissionsComponent,
        SystemAdminsBasicDataComponent,
        SystemAdminImportExportComponent
    ],
    providers: [],
    exports: [
        SystemAdminTabsComponent,
        SystemAdminAccountComponent,
        SystemAdminClinicsComponent,
        SystemAdminClinicDetailsComponent,
        SystemAdminClinicBasicDataComponent,
        SystemAdminClinicSMSCreditComponent,
        SystemAdminClinicSubscriptionComponent,
        SystemAdminVendorsComponent,
        SystemAdminVendorDetailsComponent,
        SystemAdminVendorBasicDataComponent,
        SystemAdminVendorAddressComponent,
        SystemAdminDepartmentsComponent,
        SystemAdminClinicAddressComponent,
        SystemAdminSettingsComponent,
        SystemAdminDivisionsComponent,
        SystemAdminDashboardComponent,
        SystemAdminClinicPermissionsComponent,
        SystemAdminsBasicDataComponent,
        SystemAdminImportExportComponent
    ]
})
export class SystemAdminsModule { }
