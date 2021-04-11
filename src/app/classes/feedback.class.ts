import { Reply } from './reply.class';

export class Feedback {
    clinicId!: number;
    patientId!: number;
    patientName!:string;
    patientUniqueMRN!:string;
    patientMobileNumber!:string;
    dateString: Date | undefined;
    date: Date | undefined;
    status!:string;
    message!:string;
    lastReplyingDateString!:string;
    lastReplyingUserName!:string;
    replies: Reply[] | undefined;
}