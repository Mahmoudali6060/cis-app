export class BaseEntity {

    id: number | undefined;
    name: string | undefined;
    nameTranslation: string | undefined;
    description: string | undefined;
    descriptionTranslation: string | undefined;
    isActive: boolean | undefined;
    lastModificationDateString: string | undefined;
    lastModificationDate: Date | undefined;
    lastModifierID: number | undefined;
    lastModifierName: string | undefined;
}