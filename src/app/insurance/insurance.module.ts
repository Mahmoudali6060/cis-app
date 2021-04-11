import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { InsuranceRoutingModule } from './insurance.routing';

import { InsuranceTabsComponent } from './insurance-tabs/insurance-tabs.component';
import { InsuranceReportsComponent } from './insurance-reports/insurance-reports.component';
import { InsuranceInvoiceComponent } from './insurance-invoice/insurance-invoice.component';
import { InsuranceInvoiceDetailComponent } from './insurance-invoice-detail/insurance-invoice-detail.component';
import { InsuranceInvoiceServicesComponent } from './insurance-invoice-services/insurance-invoice-services.component';
import { InsuranceCompanyComponent } from './insurance-company/insurance-company.component';
import { InsuranceCompanyDetailComponent } from './insurance-company-detail/insurance-company-detail.component';
import { InsuranceCompanyTransactionsComponent } from './insurance-company-transactions/insurance-company-transactions.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsurancePolicyDetailsComponent } from './insurance-policy-details/insurance-policy-details.component';
import { InsuranceGenerateInvoiceComponent } from './insurance-generate-invoice/insurance-generate-invoice.component';
import { InsuranceCompanyBasicDataComponent } from './insurance-company-basicData/insurance-company-basicData.component';
import { InsuranceCoverageDetailsComponent } from './insurance-coverageDetails/insurance-coverageDetails.component';

import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared/shared/shared.service';
import { InsuranceService } from './shared/insurance.service';

import { CalendarModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

import { PatientsModule } from '../patients/patients.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        InsuranceRoutingModule,
        SharedModule,
        //routing,
        CalendarModule,
        DataTableModule,
        PatientsModule,
        DialogModule,

        TreeModule,
    ],
    declarations: [
        InsuranceTabsComponent,
        InsuranceReportsComponent,
        InsuranceInvoiceComponent,
        InsuranceInvoiceDetailComponent,
        InsuranceInvoiceServicesComponent,
        InsuranceCompanyComponent,
        InsuranceCompanyDetailComponent,
        InsuranceCompanyTransactionsComponent,
        InsurancePolicyComponent,
        InsurancePolicyDetailsComponent,
        InsuranceGenerateInvoiceComponent,
        InsuranceCompanyBasicDataComponent,
        InsuranceCoverageDetailsComponent
    ],
    providers: [],
    exports: [

    ]
})
export class InsuranceModule { }
