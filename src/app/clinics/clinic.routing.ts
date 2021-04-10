import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClinicAccountComponent } from './clinic-account/clinic-account.component';
import { ClinicAddressComponent } from './clinic-address/clinic-address.component';
import { ClinicEMRMasterComponent } from './clinic-EMRMaster/clinic-EMRMaster.component';
import { ClinicEMRWizardComponent } from './clinic-EMRWizard/clinic-EMRWizard.component';
import { ViewfeedbacksListComponent } from './clinic-feedback/view-feedbacks-list/view-feedbacks-list.component';
import { ReplyToFeedbackComponent } from './clinic-feedback/reply-to-feedback/reply-to-feedback.component';
import { ClinicInventoryComponent } from './clinic-inventory/clinic-inventory.component';
import { DoctorInventoryRequestsComponent } from './clinic-inventory/doctor-inventory-requests/doctor-inventory-requests.component';
import { ClinicPermissionsComponent } from './clinic-permissions/clinic-permissions.component';
import { PurchaseOrderList } from './clinic-purchasing/purchase-order-list/purchase-order-list.component';
import { CreatePurchaseOrder } from './clinic-purchasing/create-purchase-order/create-purchase-order.component';
import { ReceivePurchaseOrder } from './clinic-purchasing/receive-purchase-order/receive-purchase-order.component';
import { PurchaseOrderViewDetails } from './clinic-purchasing/purchase-order-view-details/purchase-order-view-details.component';
import { ClinicReportsComponent } from './clinic-reports/clinic-reports.component';
import { ViewNewsListComponent } from './clinic-news/view-news-list/view-news-list.component';
import { AddNewsComponent } from './clinic-news/add-news/add-news.component';
import { ClinicSettingsComponent } from './clinic-settings/clinic-settings.component';
import { ClinicStaffComponent } from './clinic-staff/clinic-staff.component';
import { ClinicAppointmentsComponent } from './clinic-appointments/clinic-appointments.component';
import { ClinicOrganizationMasterComponent } from './clinic-organizationMaster/clinic-organizationMaster.component';
import { ClinicDiagnosisComponent } from './clinic-Diagnosis/clinic-Diagnosis.component';
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { ClinicServicePackagesComponent } from './clinic-servicePackages/clinic-servicePackages.component';
import { ClinicServicePackageDetailsComponent } from './clinic-servicePackage-details/clinic-servicePackage-details.component';
import { ClinicDrugsComponent } from './clinic-drugs/clinic-drugs.component';
import { ClinicLaboratoryTestsComponent } from './clinic-laboratory-tests/clinic-laboratory-tests.component';
import { ClinicRadiologyTestsComponent } from './clinic-radiology-tests/clinic-radiology-tests.component';
import { ClinicProductsComponent } from './clinic-products/clinic-products.component';
import { ClinicTemplatesComponent } from './clinic-templates/clinic-templates.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';


const clinicRoutes: Routes = [
    //Clinics
    { path: 'account/:id', component: ClinicAccountComponent },
    { path: 'address/:id', component: ClinicAddressComponent },
    { path: 'EMRMaster/:id', component: ClinicEMRMasterComponent },
    { path: 'EMRWizard/:id', component: ClinicEMRWizardComponent },
    { path: 'feedback/all/:id', component: ViewfeedbacksListComponent },
    { path: 'feedback/replyToFeedback/:id', component: ReplyToFeedbackComponent },
    { path: 'inventory/:id', component: ClinicInventoryComponent },
    { path: 'clinicInventory/doctorRequests/:id', component: DoctorInventoryRequestsComponent },
    { path: 'permissions', component: ClinicPermissionsComponent },
    { path: 'purchasing/all/:id', component: PurchaseOrderList },
    { path: 'purchasing/createOrder/:id/:bool/:proId', component: CreatePurchaseOrder },
    { path: 'purchasing/receiveOrder/:id', component: ReceivePurchaseOrder },
    { path: 'purchasing/orderDetails/:id', component: PurchaseOrderViewDetails },
    { path: 'reports/:id', component: ClinicReportsComponent },
    { path: 'news/all/:id', component: ViewNewsListComponent },
    { path: 'clinicNews/addNews/:id', component: AddNewsComponent },
    { path: 'settings/:id', component: ClinicSettingsComponent },
    { path: 'clinicStaff/:id', component: ClinicStaffComponent },
    { path: 'appointments/:id', component: ClinicAppointmentsComponent },
    { path: 'organizationMaster/:id', component: ClinicOrganizationMasterComponent },
    { path: 'diagnosis/:id', component: ClinicDiagnosisComponent },
    { path: 'services/:id', component: ClinicServicesComponent },
    { path: 'servicePackages/:id', component: ClinicServicePackagesComponent },
    { path: 'servicePackageDetails/:id', component: ClinicServicePackageDetailsComponent },
    { path: 'drugs/:id', component: ClinicDrugsComponent },
    { path: 'laboratoryTests/:id', component: ClinicLaboratoryTestsComponent },
    { path: 'radiologyTests/:id', component: ClinicRadiologyTestsComponent },
    { path: 'products/:id', component: ClinicProductsComponent },
    { path: 'templates/:id', component: ClinicTemplatesComponent },
    { path: 'dashboard', component: ClinicDashboardComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(clinicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClinicRoutingModule { }