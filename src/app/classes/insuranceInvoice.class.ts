import { BaseEntity } from './baseEntity.class';
import { PatientClaim } from './patientClaim.class';
import { Charge } from './charge.class';
import { InvoiceStatus } from './enums.class';
import { SecurityUser } from './securityUser.class';

export class InsuranceInvoice extends BaseEntity {

    status: InvoiceStatus | undefined;
    invoiceDate: Date | undefined;
    invoiceDateString!:string;
    creatorId!: number;
    creatorName!:string;
    clinicId!: number;
    companyId!: number;
    companyName!:string;
    policyId!: number;
    policyName!:string;
    claims: Array<PatientClaim> | undefined;
    charges: Array<Charge> | undefined;
    totalCredit!: number;
    chargeAmount!: number;
    netAmount!: number;
    cancellationReason!:string;
    cancellationDate: Date | undefined;
    cancellationDateString!:string;
    canceledBy: SecurityUser | undefined;
    canceledById!: number;
}