import { AttachmentInfo } from './attachmentInfo.class';

export class ClinicNews {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    isActive: boolean = true;
    clinicId: number | undefined;
    creationDate: Date | undefined;
    modificationDateString: string | undefined;
    creationDateString: string | undefined;
    attachmentInfo: AttachmentInfo | undefined;
    attachedImageDataId: number | undefined;
    imageData: any[] | undefined;
}