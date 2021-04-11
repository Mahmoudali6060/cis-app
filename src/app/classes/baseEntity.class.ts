export class BaseEntity {

    id!: number;
    name!:string;
    nameTranslation!:string;
    description!:string;
    descriptionTranslation!:string;
    isActive: boolean | undefined;
    lastModificationDateString!:string;
    lastModificationDate: Date | undefined;
    lastModifierID!: number;
    lastModifierName!:string;
}