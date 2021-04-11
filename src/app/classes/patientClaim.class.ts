import { Charge }   from './charge.class';
import { SecurityUser }   from './securityUser.class';
import { Patient }   from './patient.class';
import { ClaimStatus }   from './enums.class';

export class PatientClaim {

    clinicId!: number;
    clinicNoteId!: number;
    claimDate: Date | undefined;
    claimDateString!:string;
    claimDateChangeReason!:string;
    claimStatus: ClaimStatus| undefined;
    cancellationReason!:string;
    cancellationDate: Date | undefined;
    cancellationDateString!:string;
    canceledBy: SecurityUser| undefined;
    canceledById!: number;
    patient: Patient| undefined;
    doctor: SecurityUser| undefined;
    charges: Array<Charge>| undefined;
    totalAmount!: number;
    maxAmount!: number;
    doctorName!:string;
    doctorDivision!:string;
    patientId!: number;
    patientMrn!:string;
    patientName!:string;
    patientBirthDate!:string;
    patientAge!:string;
    insuranceCompany!:string;
    insuranceCardNo!:string;
    insurancePolicy!:string;
    policyEndDate!:string;
    patientShare!:string;
    companyShare!:string;
    prePaidBalance!: number;
}