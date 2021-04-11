import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClinicRoutingModule } from './clinic.routing';
import { ClinicTabComponent } from './clinic-tab/clinic-tab.component';
import { ClinicAccountComponent } from './clinic-account/clinic-account.component';
import { ClinicAddressComponent } from './clinic-address/clinic-address.component';
import { ClinicEMRMasterComponent } from './clinic-EMRMaster/clinic-EMRMaster.component';
import { ClinicEMRWizardComponent } from './clinic-EMRWizard/clinic-EMRWizard.component';
import { ViewfeedbacksListComponent } from './clinic-feedback/view-feedbacks-list/view-feedbacks-list.component';
import { ReplyToFeedbackComponent } from './clinic-feedback/reply-to-feedback/reply-to-feedback.component';
import { ClinicInventoryComponent } from './clinic-inventory/clinic-inventory.component';
import { ClinicInventoryList } from './clinic-inventory/clinic-inventory-list/clinic-inventory-list.component';
import { ClinicInventoryAddQuantity } from './clinic-inventory/clinic-inventory-add-quantity/clinic-inventory-add-quantity.component';
import { ClinicInventoryAdjustQuantity } from './clinic-inventory/clinic-inventory-adjust-quantity/clinic-inventory-adjust-quantity.component';
import { ClinicInventoryAdjustmentHistory } from './clinic-inventory/clinic-inventory-adjustment-history/clinic-inventory-adjustment-history.component';
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
import { ClinicManageDiagnosisGroupComponent } from './clinic-diagnosis/manage-diagnosis-group/clinic-manage-diagnosis-group.component';
import { ClinicDiagnosisComponent } from './clinic-diagnosis/clinic-diagnosis.component';
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { ClinicServicePackagesComponent } from './clinic-servicePackages/clinic-servicePackages.component';
import { ClinicServicePackageDetailsComponent } from './clinic-servicePackage-details/clinic-servicePackage-details.component';
import { ClinicDrugsComponent } from './clinic-drugs/clinic-drugs.component';
import { ClinicManageDrugComponent } from './clinic-drugs/manage-drug/clinic-manage-drug.component';
import { ClinicManageDrugsGroupComponent } from './clinic-drugs/manage-drugs-group/clinic-manage-drugs-group.component';
import { ClinicLaboratoryTestsComponent } from './clinic-laboratory-tests/clinic-laboratory-tests.component';
import { ClinicManageLaboratoryTestComponent } from './clinic-laboratory-tests/manage-laboratory-test/clinic-manage-laboratory-test.component';
import { ClinicManageLaboratoryTestsGroupComponent } from './clinic-laboratory-tests/manage-laboratory-tests-group/clinic-manage-laboratory-tests-group.component';
import { ClinicRadiologyTestsComponent } from './clinic-radiology-tests/clinic-radiology-tests.component';
import { ClinicManageRadiologyTestComponent } from './clinic-radiology-tests/manage-radiology-test/clinic-manage-radiology-test.component';
import { ClinicManageRadiologyTestsGroupComponent } from './clinic-radiology-tests/manage-radiology-tests-group/clinic-manage-radiology-tests-group.component';
import { ClinicProductsComponent } from './clinic-products/clinic-products.component';
import { ClinicTemplatesComponent } from './clinic-templates/clinic-templates.component';

import { ClinicEMRMasterDrugsComponent } from './clinic-EMRMaster-drugs/clinic-EMRMaster-drugs.component';
import { ClinicEMRMasterServicesComponent } from './clinic-EMRMaster-services/clinic-EMRMaster-services.component';
import { ClinicEMRMasterLaboratoryTestsComponent } from './clinic-EMRMaster-laboratoryTests/clinic-EMRMaster-laboratoryTests.component';
import { ClinicEMRMasterRadiologyTestsComponent } from './clinic-EMRMaster-radiologyTests/clinic-EMRMaster-radiologyTests.component';
import { ClinicEMRMasterServicePackagesComponent } from './clinic-EMRMaster-servicePackages/clinic-EMRMaster-servicePackages.component';
import { ClinicHumanResourceComponent } from './clinic-humanResource/clinic-humanResource.component';
import { ClinicHumanResourceBasicComponent } from './clinic-humanResource-basic/clinic-humanResource-basic.component';
import { ClinicHumanResourceServiceFeesComponent } from './clinic-humanResource-serviceFees/clinic-humanResource-serviceFees.component';
import { ClinicHumanResourceServiceSlotsComponent } from './clinic-humanResource-serviceSlots/clinic-humanResource-serviceSlots.component';
import { ClinicAppointmentDetailsComponent } from './clinic-appointment-details/clinic-appointment-details.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from '../security/security.module';
import { TreeModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { ClinicServiceGroupDetailsComponent } from './clinic-serviceGroup-details/clinic-serviceGroup-details.component';
import { ClinicServiceDetailsComponent } from './clinic-service-details/clinic-service-details.component';
import { CalendarModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ClinicManageDiagnoseComponent } from './clinic-diagnosis/manage-diagnose/clinic-manage-diagnose.component';
import { ClinicEMRMasterDiagnosisComponent } from './clinic-EMRMaster-diagnosis/clinic-EMRMaster-diagnosis.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ClinicRoutingModule,
        SharedModule,
        SecurityModule,
        //routing,
        TreeModule,
        OrderListModule,
        CalendarModule,
        DataTableModule,
        ChartModule,
        DialogModule,
        //ToastModule
    ],
    declarations: [
        ClinicTabComponent,
        ClinicTemplatesComponent,
        ClinicAccountComponent,
        ClinicAddressComponent,
        ClinicEMRMasterComponent,
        ClinicEMRWizardComponent,
        ViewfeedbacksListComponent,
        ReplyToFeedbackComponent,
        ClinicInventoryComponent,
        ClinicInventoryList,
        ClinicInventoryAddQuantity,
        ClinicInventoryAdjustQuantity,
        ClinicInventoryAdjustmentHistory,
        DoctorInventoryRequestsComponent,
        ClinicPermissionsComponent,
        PurchaseOrderList,
        CreatePurchaseOrder,
        ReceivePurchaseOrder,
        PurchaseOrderViewDetails,
        ClinicReportsComponent,
        ViewNewsListComponent,
        AddNewsComponent,
        ClinicSettingsComponent,
        ClinicStaffComponent,
        ClinicAppointmentsComponent,
        ClinicOrganizationMasterComponent,
        ClinicManageDiagnoseComponent,
        ClinicManageDiagnosisGroupComponent,
        ClinicDiagnosisComponent,
        ClinicServicesComponent,
        ClinicServicePackagesComponent,
        ClinicServicePackageDetailsComponent,
        ClinicDrugsComponent,
        ClinicManageDrugComponent,
        ClinicManageDrugsGroupComponent,
        ClinicLaboratoryTestsComponent,
        ClinicManageLaboratoryTestComponent,
        ClinicManageLaboratoryTestsGroupComponent,
        ClinicRadiologyTestsComponent,
        ClinicManageRadiologyTestComponent,
        ClinicManageRadiologyTestsGroupComponent,
        ClinicProductsComponent,
        ClinicEMRMasterDiagnosisComponent,
        ClinicEMRMasterDrugsComponent,
        ClinicEMRMasterServicesComponent,
        ClinicEMRMasterLaboratoryTestsComponent,
        ClinicEMRMasterRadiologyTestsComponent,
        ClinicEMRMasterServicePackagesComponent,

        ClinicAppointmentDetailsComponent,
        ClinicHumanResourceComponent,
        ClinicServiceGroupDetailsComponent,
        ClinicServiceDetailsComponent,

        ClinicHumanResourceBasicComponent,
        ClinicHumanResourceServiceFeesComponent,
        ClinicHumanResourceServiceSlotsComponent,
        ClinicDashboardComponent

    ],
    providers: [],
    exports: [

    ]
})
export class ClinicsModule { }
