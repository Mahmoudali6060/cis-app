
export class UtilityClass {

    getUtcDate(obj: Date): Date {
        let year: number = obj.getFullYear();
        let month: number = obj.getMonth();
        let day: number = obj.getDate();

        let utcDate: Date = new Date(Date.UTC(year, month, day));

        return utcDate;
    }

    getUtcDateTime(obj: Date): Date {
        let year: number = obj.getFullYear();
        let month: number = obj.getMonth();
        let day: number = obj.getDate();
        let hour: number = obj.getHours();
        let minute: number = obj.getMinutes();

        let utcDate: Date = new Date(Date.UTC(year, month, day, hour, minute));

        return utcDate;
    }

    getUtcDateAsString(obj: Date): string {
        let year: number = obj.getFullYear();
        let month: number = obj.getMonth();
        let day: number = obj.getDate();

        let utcDate: Date = new Date(Date.UTC(year, month, day));
        let utcDateString: string = utcDate.getDate() + "-" + (utcDate.getMonth() + 1) + "-" + utcDate.getFullYear();

        return utcDateString;
    }

    getDateTimeAsString(obj: Date): string {
        let year: number = obj.getFullYear();
        let month: number = obj.getMonth();
        let day: number = obj.getDate();
        let hour: number = obj.getHours();
        let minute: number = obj.getMinutes();

        let strDateTime: string = this.getTwoDigitNumber(day) + "-" + this.getTwoDigitNumber((month + 1)) + "-" + year + " " + this.getTwoDigitNumber(hour) + ":" + this.getTwoDigitNumber(minute);

        return strDateTime;
    }

    getDateFromString(date: string): Date {
        date = date.toString();
        return new Date(date);
    }

    getUtcDateFromString(date: string): Date {
        date = date.toString();//Some times the value is passed as Date
        if (date.includes('Z'))
            return new Date(date);
        else
            return new Date(date + 'Z');
    }

    getDateTimeFromString(dateString: string): Date {

        let date: Date = new Date();
        let separators = ['-', ':', 'T', 'Z'];

        let dateComponents: string[] = dateString.split(new RegExp(separators.join('|')));

        if (dateComponents.length >= 5) {
            let year: number = Number(dateComponents[0]);
            let month: number = Number(dateComponents[1]) - 1;//Months from 0 to 11
            let day: number = Number(dateComponents[2]);
            let hour: number = Number(dateComponents[3]);
            let minute: number = Number(dateComponents[4]);

            date = new Date(year, month, day, hour, minute);
        }

        return date;
    }

    getTimeFromString(dateString: string): Date {

        let todayTime: Date = new Date();
        let today: Date = new Date();
        let separators = ['-', ':', 'T', 'Z'];

        let dateComponents: string[] = dateString.split(new RegExp(separators.join('|')));

        if (dateComponents.length >= 5) {
            let year: number = today.getUTCFullYear();
            let month: number = today.getUTCMonth();
            let day: number = today.getUTCDate();
            let hour: number = Number(dateComponents[3]);
            let minute: number = Number(dateComponents[4]);

            todayTime = new Date(year, month, day, hour, minute);
        }

        return todayTime;
    }

    ///dayNumber: from 0 to 6, as per JavaScript numbering. 0 is Sunday    
    getDayName(dayNumber: number): string {

        let dayeName: string = '';

        switch (dayNumber) {
            case 0:
                dayeName = "Sunday";
                break;
            case 1:
                dayeName = "Monday";
                break;
            case 2:
                dayeName = "Tuesday";
                break;
            case 3:
                dayeName = "Wednesday";
                break;
            case 4:
                dayeName = "Thursday";
                break;
            case 5:
                dayeName = "Friday";
                break;
            case 6:
                dayeName = "Saturday";
                break;
        }

        return dayeName;

    }

    getISODateFormat(date: Date): string {

        let year: number = date.getFullYear();
        let month: number = date.getMonth();
        let day: number = date.getDate();

        let isoFormat: string = year + "-" + this.getTwoDigitNumber((month + 1)) + "-" + this.getTwoDigitNumber(day);

        return isoFormat;
    }

    getFormattedTime(hour: number, minute: number) {

        let time = this.getTwoDigitNumber(hour);

        if (minute > 0)
            time += ":" + this.getTwoDigitNumber(minute);

        return time;
    }

    getTwoDigitNumber(num: any) {

        let s = num + "";

        if (s.length < 2)
            s = "0" + s;

        return s;
    }

    getAmPmTime(hours: number, minutes: number): string {

        let ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        let strTime = this.getTwoDigitNumber(hours);
        if (minutes > 0)
            strTime += ":" + this.getTwoDigitNumber(minutes);

        strTime += ampm;

        return strTime;
    }

    getWeekDay(dayNoInWeek: number): Date {

        let weekDay: Date | undefined;
        let today: Date = new Date();
        let todayInMonth: number = today.getDate();
        let todayInWeek: number = today.getDay();

        let diff = dayNoInWeek - todayInWeek;
        weekDay = new Date();
        weekDay.setDate((todayInMonth + diff));

        return weekDay;
    }

    convertToUTCDateTime(obj: Date): Date {
        //let utcDateTime: Date = this.getUtcDateTime(obj);
        let year: number = obj.getUTCFullYear();
        let month: number = obj.getUTCMonth();
        let day: number = obj.getUTCDate();
        let hours: number = obj.getUTCHours();
        let minutes: number = obj.getUTCMinutes();

        let newDate: Date = new Date(year, month, day, hours, minutes);

        return newDate;
    }

    getISODateTimeFormat(date: Date): string {

        let year: number = date.getFullYear();
        let month: number = date.getMonth();
        let day: number = date.getDate();
        let hour: number = date.getHours();
        let minute: number = date.getMinutes();

        let isoFormat: string = year + "-" + this.getTwoDigitNumber((month + 1)) + "-" + this.getTwoDigitNumber(day) + "T" + this.getTwoDigitNumber(hour) + ":" + this.getTwoDigitNumber(minute) + ":00";

        return isoFormat;
    }

    getDateComponent(obj: Date): Date {
        let year: number = obj.getFullYear();
        let month: number = obj.getMonth();
        let day: number = obj.getDate();

        let dateComponent: Date = new Date(year, month, day);

        return dateComponent;
    }

    getAppointmentTime(start: any, end: any) {
        let startDate = this.getDateTimeFromString(start);
        let endDate = this.getDateTimeFromString(end);

        let startTime = this.getAmPmTime(startDate.getHours(), startDate.getMinutes());
        let endTime = this.getAmPmTime(endDate.getHours(), endDate.getMinutes());

        return startTime + ' - ' + endTime;
    }

}