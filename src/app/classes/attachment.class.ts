import { AttachmentInfo } from './attachmentInfo.class';
export class Attachment {
    name: string | undefined;
    parentId: number | undefined;
    parentType: string | undefined;
    fileType: string | undefined;
    type: string | undefined;
    attachmentTypeId: number | undefined;
    nameWithoutExtension: string | undefined;
    attachmentInfo: AttachmentInfo | undefined;
}