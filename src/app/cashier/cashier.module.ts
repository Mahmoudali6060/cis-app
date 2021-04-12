import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { CashierRoutingModule } from './cashier.routing';

import { CashierTabsComponent }   from './cashier-tabs/cashier-tabs.component';
import { CashierClaimsComponent }   from './cashier-claims/cashier-claims.component';
import { CashierClaimDetailsComponent } from './cashier-claim-details/cashier-claim-details.component';
//import { CashierPatientInfoComponent }   from './cashier-patient-info/cashier-patient-info.component';
//import { CashierPatientMedicalInfoComponent }   from './cashier-patient-medical-info/cashier-patient-medical-info.component';
import { CashierClaimServicesComponent } from './cashier-claim-services/cashier-claim-services.component';
//import { CashierClaimPaymentComponent }   from './cashier-claim-payment/cashier-claim-payment.component';
import { CashierPatientTransactionsComponent }   from './cashier-patient-transactions/cashier-patient-transactions.component';
import { CashierMRFAttachmentComponent }   from './cashier-MRF-attachment/cashier-MRF-attachment.component';
import { CashierReportsComponent }   from './cashier-reports/cashier-reports.component';


import { SharedModule } from '../shared/shared.module';
import { SharedService }   from '../shared/shared/shared.service';
import { ClaimService }   from './shared/claim.service';
import {AccountService} from   '../security/shared/account.service';

import {DataTableModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { PatientsModule } from '../patients/patients.module';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CashierRoutingModule,
        SharedModule,
        //routing,
        CalendarModule,
        DialogModule,
        PatientsModule
        //ToastModule
    ],
    declarations: [
        CashierClaimsComponent,
        CashierTabsComponent,
        CashierClaimDetailsComponent,
        //CashierPatientInfoComponent,
        //CashierPatientMedicalInfoComponent,
        CashierClaimServicesComponent,
        //CashierClaimPaymentComponent,
        CashierPatientTransactionsComponent,
        CashierMRFAttachmentComponent,
        CashierReportsComponent
    ],
    providers: [],
    exports: [

    ]
})
export class CashiersModule { }
