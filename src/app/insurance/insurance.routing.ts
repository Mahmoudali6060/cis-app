import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceTabsComponent }   from './insurance-tabs/insurance-tabs.component';
import { InsuranceReportsComponent } from './insurance-reports/insurance-reports.component';
import { InsuranceInvoiceComponent }   from './insurance-invoice/insurance-invoice.component';
import { InsuranceInvoiceDetailComponent } from './insurance-invoice-detail/insurance-invoice-detail.component';
import { InsuranceCompanyComponent }   from './insurance-company/insurance-company.component';
import { InsuranceCompanyDetailComponent }   from './insurance-company-detail/insurance-company-detail.component';
import { InsuranceCompanyTransactionsComponent }   from './insurance-company-transactions/insurance-company-transactions.component';
import { InsurancePolicyComponent }   from './insurance-policy/insurance-policy.component';
import { InsuranceGenerateInvoiceComponent }   from './insurance-generate-invoice/insurance-generate-invoice.component';
import { InsuranceCoverageDetailsComponent }   from './insurance-coverageDetails/insurance-coverageDetails.component';


const insuranceRoutes: Routes = [
    //insurance Specialist
    { path: 'reports/:id', component: InsuranceReportsComponent },
    { path: 'invoice', component: InsuranceInvoiceComponent },
    { path: 'invoice/detail/:id', component: InsuranceInvoiceDetailComponent },
    { path: 'companies', component: InsuranceCompanyComponent },
    { path: 'companyTransactions', component: InsuranceCompanyTransactionsComponent },
    { path: 'companyDetails/:id', component: InsuranceCompanyDetailComponent },
    //{ path: 'insurance/policy/:id', component: InsurancePolicyComponent },
    { path: 'invoice/generate', component: InsuranceGenerateInvoiceComponent },
    { path: 'coverageDetails', component: InsuranceCoverageDetailsComponent }


];

@NgModule({
    imports: [
        RouterModule.forChild(insuranceRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InsuranceRoutingModule { }