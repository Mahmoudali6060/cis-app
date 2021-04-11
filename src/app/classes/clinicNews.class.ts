import { AttachmentInfo } from './attachmentInfo.class';

export class ClinicNews {
    id!: number;
    name!:string;
    description!:string;
    isActive: boolean = true;
    clinicId!: number;
    creationDate!: Date;
    modificationDateString!:string;
    creationDateString!:string;
    attachmentInfo: AttachmentInfo | undefined;
    attachedImageDataId!: number;
    imageData: any[] | undefined;
}