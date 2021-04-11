import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAdminAccountComponent } from './systemAdmins-account/systemAdmins-account.component';
import { SystemAdminClinicsComponent } from './systemAdmins-clinics/systemAdmins-clinics.component';
import { SystemAdminClinicDetailsComponent } from './systemAdmins-clinics-details/systemAdmins-clinics-details.component';
import { SystemAdminVendorsComponent } from './systemAdmins-vendors/systemAdmins-vendors.component';
import { SystemAdminVendorDetailsComponent } from './systemAdmins-vendor-details/systemAdmins-vendor-details.component';
import { VendorDetailGuard} from './systemAdmins-vendor-basicData/vendor-guard.service';
import { SystemAdminDepartmentsComponent } from './systemAdmins-departments/systemAdmins-departments.component';
import { SystemAdminDivisionsComponent } from './systemAdmins-divisions/systemAdmins-divisions.component';
import { SystemAdminSettingsComponent } from './systemAdmins-settings/systemAdmins-settings.component';
import { SystemAdminDashboardComponent } from './systemAdmins-dashboard/systemAdmins-dashboard.component';
import { SystemAdminClinicPermissionsComponent } from './systemAdmins-clinic-permissions/systemAdmins-clinic-permissions.component';
import { SystemAdminsBasicDataComponent } from './systemAdmins-basicData/systemAdmins-basicData.component';
import { SystemAdminImportExportComponent } from './systemAdmins-import-export/systemAdmins-import-export.component';
const systemAdminRoutes: Routes = [
    //System Admins
    { path: 'account/:id', component: SystemAdminAccountComponent },
    { path: 'clinics', component: SystemAdminClinicsComponent },
    { path: 'clinicDetails/:id', component: SystemAdminClinicDetailsComponent },
    { path: 'basicData', component: SystemAdminsBasicDataComponent },
    { path: 'vendors', component: SystemAdminVendorsComponent },
    { path: 'vendorDetails/:id', canActivate: [VendorDetailGuard], component: SystemAdminVendorDetailsComponent },
    { path: 'departments', component: SystemAdminDepartmentsComponent },
    { path: 'divisions', component: SystemAdminDivisionsComponent },
    { path: 'settings', component: SystemAdminSettingsComponent },
    { path: 'dashboard', component: SystemAdminDashboardComponent },
    { path: 'permissions', component: SystemAdminClinicPermissionsComponent },
    { path: 'importExport', component: SystemAdminImportExportComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(systemAdminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SystemAdminsRoutingModule { }