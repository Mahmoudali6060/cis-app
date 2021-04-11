import { AttachmentInfo } from './attachmentInfo.class';
export class Attachment {
    name!:string;
    parentId!: number;
    parentType!:string;
    fileType!:string;
    type!:string;
    attachmentTypeId!: number;
    nameWithoutExtension!:string;
    attachmentInfo: AttachmentInfo | undefined;
}