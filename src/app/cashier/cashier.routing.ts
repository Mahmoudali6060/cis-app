import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierTabsComponent }   from './cashier-tabs/cashier-tabs.component';
import { CashierClaimsComponent }   from './cashier-claims/cashier-claims.component';
import { CashierClaimDetailsComponent } from './cashier-claim-details/cashier-claim-details.component';
import { CashierClaimServicesComponent } from './cashier-claim-services/cashier-claim-services.component';
import { CashierMRFAttachmentComponent }   from './cashier-MRF-attachment/cashier-MRF-attachment.component';
import { CashierPatientTransactionsComponent }   from './cashier-patient-transactions/cashier-patient-transactions.component';
import { CashierReportsComponent }   from './cashier-reports/cashier-reports.component';


const cashierRoutes: Routes = [

    //Cashier
    { path: 'claims', component: CashierClaimsComponent },
    { path: 'claimDetails/:id', component: CashierClaimDetailsComponent },
    { path: 'cashier/claim/services/:id', component: CashierClaimServicesComponent },
    { path: 'patientTransactions', component: CashierPatientTransactionsComponent },
    { path: 'cashier/claims/attachment/:id', component: CashierMRFAttachmentComponent },
    { path: 'reports/:id', component: CashierReportsComponent },


];

@NgModule({
    imports: [
        RouterModule.forChild(cashierRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CashierRoutingModule { }