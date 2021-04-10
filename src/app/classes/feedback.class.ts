import { Reply } from './reply.class';

export class Feedback {
    clinicId: number | undefined;
    patientId: number | undefined;
    patientName: string | undefined;
    patientUniqueMRN: string | undefined;
    patientMobileNumber: string | undefined;
    dateString: Date | undefined;
    date: Date | undefined;
    status: string | undefined;
    message: string | undefined;
    lastReplyingDateString: string | undefined;
    lastReplyingUserName: string | undefined;
    replies: Reply[] | undefined;
}