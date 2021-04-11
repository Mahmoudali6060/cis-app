export class Reply {
    feedbackId!: number;
    dateString!:string;
    date: Date | undefined;
    repliedById!: number;
    repliedByName!:string;
    message !:string;
    status!:string;
}