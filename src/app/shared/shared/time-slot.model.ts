import { UtilityClass } from './utility.class';

export class TimeSlot {

    utilClass: UtilityClass = new UtilityClass();

    name!:string;
    amPmName!:string;

    hour!: number;
    minute!: number;
    dateTime: Date | undefined;

    constructor(selectedDate: Date) {
        this.hour = selectedDate.getHours();
        this.minute = selectedDate.getMinutes();
        this.dateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(),
            selectedDate.getDate(), this.hour, this.minute);

        this.name = this.utilClass.getFormattedTime(this.hour, this.minute);
        this.amPmName = this.utilClass.getAmPmTime(this.hour, this.minute);
    }
}