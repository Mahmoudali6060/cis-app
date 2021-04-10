import { BaseEntity } from './baseEntity.class';
import { PatientClaim } from './patientClaim.class';
import { Charge } from './charge.class';
import { InvoiceStatus } from './enums.class';
import { SecurityUser } from './securityUser.class';

export class InsuranceInvoice extends BaseEntity {

    status: InvoiceStatus | undefined;
    invoiceDate: Date | undefined;
    invoiceDateString: string | undefined;
    creatorId: number | undefined;
    creatorName: string | undefined;
    clinicId: number | undefined;
    companyId: number | undefined;
    companyName: string | undefined;
    policyId: number | undefined;
    policyName: string | undefined;
    claims: Array<PatientClaim> | undefined;
    charges: Array<Charge> | undefined;
    totalCredit: number | undefined;
    chargeAmount: number | undefined;
    netAmount: number | undefined;
    cancellationReason: string | undefined;
    cancellationDate: Date | undefined;
    cancellationDateString: string | undefined;
    canceledBy: SecurityUser | undefined;
    canceledById: number | undefined;
}