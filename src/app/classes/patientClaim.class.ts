import { Charge }   from './charge.class';
import { SecurityUser }   from './securityUser.class';
import { Patient }   from './patient.class';
import { ClaimStatus }   from './enums.class';

export class PatientClaim {

    clinicId: number | undefined;
    clinicNoteId: number | undefined;
    claimDate: Date | undefined;
    claimDateString: string | undefined;
    claimDateChangeReason: string | undefined;
    claimStatus: ClaimStatus| undefined;
    cancellationReason: string | undefined;
    cancellationDate: Date | undefined;
    cancellationDateString: string | undefined;
    canceledBy: SecurityUser| undefined;
    canceledById: number | undefined;
    patient: Patient| undefined;
    doctor: SecurityUser| undefined;
    charges: Array<Charge>| undefined;
    totalAmount: number | undefined;
    maxAmount: number | undefined;
    doctorName: string | undefined;
    doctorDivision: string | undefined;
    patientId: number | undefined;
    patientMrn: string | undefined;
    patientName: string | undefined;
    patientBirthDate: string | undefined;
    patientAge: string | undefined;
    insuranceCompany: string | undefined;
    insuranceCardNo: string | undefined;
    insurancePolicy: string | undefined;
    policyEndDate: string | undefined;
    patientShare: string | undefined;
    companyShare: string | undefined;
    prePaidBalance: number | undefined;
}