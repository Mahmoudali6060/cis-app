
import { UtilityClass } from '../../shared/shared/utility.class'
import { TimeSlot } from '../../shared/shared/time-slot.model'
import { calendarSlotDuration } from '../../app.config';

export class ReceptionistAppointmentManager {
    utilityClass: UtilityClass = new UtilityClass();
    appointmentSchedulesList: any[] = [];
    sessionExtensionsList: any[] = [];
    timeSlotsList: any[] = [];
    toExcludeTimeSlotsList: any[] = [];
    sessionsList: any[] = [];
    slotDuration!: number;

    constructor(schedulesList: any[], sessionExtensionsList: any) {
        this.appointmentSchedulesList = schedulesList;
        this.sessionExtensionsList = sessionExtensionsList;
    }

    public getFirstTimeSlot(dateValue: Date) {
        let firstTimeSlot!: TimeSlot;

        for (let dayno = 0; dayno <= 6; dayno++) {

            let satrt: number = dateValue.getDate();
            let date: Date = new Date(dateValue.getTime());
            date.setDate(satrt + dayno)

            let arrSlotsInDate = this.getTimeSlots(date);
            if (arrSlotsInDate != undefined && arrSlotsInDate.length > 0) {
                firstTimeSlot = arrSlotsInDate[0];
                break;
            }
        }

        return firstTimeSlot;
    }

    public getTimeSlots(dateValue: Date): any[] {

        this.timeSlotsList = [];
        //this.toExcludeTimeSlotsList = [];
        if (dateValue != undefined) {
            let appSchedule = this.getAppointmentSchedule(dateValue);
            if (appSchedule != undefined) {
                //Get the day name
                let dayName = this.utilityClass.getDayName(dateValue.getDay());
                //Get the slot duration
                this.slotDuration = appSchedule.slotDuration;
                //Get the day sessions
                let daySessions: any[] = this.getDaySessions(appSchedule, dayName);

                //Divide the sessions into time-slots
                this.fillTimeSlots(dateValue, daySessions);

                //Handle sesion extensions
                this.handleSessionExtensions(dateValue);
            }
        }

        //Sort time slots
        this.timeSlotsList.sort(function (slot1, slot2) {

            if (slot1.dateTime > slot2.dateTime)
                return 1;
            else
                return -1
        });

        return this.timeSlotsList;
    }

    handleSessionExtensions(selectedDate: any) {
        if (this.sessionExtensionsList != undefined) {

            //Get session extensions in selected date
            let sessionExtensionsInDate: any = [];

            this.sessionExtensionsList.forEach((item: any) => {
                var date = this.utilityClass.getUtcDateFromString(item.day);
                if (date.toDateString() == selectedDate.toDateString()) {
                    sessionExtensionsInDate.push(item);
                }
            });

            //Sort by DB ID
            let thisComp = this;
            sessionExtensionsInDate.sort(function (sesion1: any, sesion2: any) {
                let id1: number = Number(sesion1.id);
                let id2: number = Number(sesion2.id);

                if (id1 > id2)
                    return 1;
                else
                    return -1
            });

            //Manage session extenstions slots
            sessionExtensionsInDate.forEach((item: any) => this.manageSesssionExtensionItem(selectedDate, item));
        }
    }

    manageSesssionExtensionItem(selectedDate: any, item: any) {
        let itemTimeSlots: any = [];
        this.addTimeSlots(selectedDate, item, itemTimeSlots)

        itemTimeSlots.forEach((slot: any) => this.handleSesssionExtensionSlot(item, slot));
    }

    handleSesssionExtensionSlot(sessionExtensionItem: any, slot: any) {
        if (sessionExtensionItem.type == "OpenSlot") {
            let availableSlot = this.timeSlotsList.find(s => s.name == slot.name);
            if (availableSlot == undefined)//add it
                this.timeSlotsList.push(slot);
        }
        else if (sessionExtensionItem.type == "CloseSlot") {
            var matchedIndex = this.findWithAttr(this.timeSlotsList, 'name', slot.name);
            if (matchedIndex > -1)
                this.timeSlotsList.splice(matchedIndex, 1);
        }
    }

    public getSessions(dateValue: Date): any[] {
        this.sessionsList = [];
        if (dateValue != undefined) {
            let appSchedule = this.getAppointmentSchedule(dateValue);
            if (appSchedule != undefined) {
                //Get the day name
                let dayName = this.utilityClass.getDayName(dateValue.getDay());
                //Get the slot duration
                this.slotDuration = appSchedule.slotDuration;
                //Get the day sessions
                this.sessionsList = this.getDaySessions(appSchedule, dayName);

                if (this.sessionExtensionsList != undefined) {
                    this.sessionExtensionsList.forEach((item: any) => {
                        var date = this.utilityClass.getUtcDateFromString(item.day);
                        if (date.toDateString() == dateValue.toDateString() && item.type == "OpenSlot") {
                            this.sessionsList.push(item);
                        }
                    });
                }
            }
        }

        return this.sessionsList;
    }

    public getSlotDurationForDate(dateValue: Date): number {

        let appSchedule = this.getAppointmentSchedule(dateValue);
        //Get the slot duration
        if (appSchedule != undefined)
            this.slotDuration = appSchedule.slotDuration;

        return this.slotDuration;
    }

    public getSlotDuration(): number {
        return this.slotDuration;
    }


    public getAppointmentSchedule(dateValue: Date): any {

        dateValue = this.utilityClass.getUtcDate(dateValue);
        let appSchedule;
        if (this.appointmentSchedulesList != undefined) {
            appSchedule = this.appointmentSchedulesList.find(schdul => dateValue >= this.utilityClass.getUtcDateFromString(schdul.startDate) && dateValue <= this.utilityClass.getUtcDateFromString(schdul.endDate));
        }

        return appSchedule;
    }

    private getDaySessions(appSchedule: any, dayName: string): any[] {
        let daySessions: any[] = [];
        if (appSchedule != undefined && appSchedule.sessions != undefined) {
            appSchedule.sessions.forEach((item: any) => {
                if (item.day == dayName)
                    daySessions.push(item);
            });
        }

        ////Sort the session by the StartTime
        //let thisComp = this;
        //daySessions.sort(function (sesion1, sesion2) {
        //    let startTime1: Date = thisComp.utilityClass.getDateTimeFromString(sesion1.startTime);
        //    let startTime2: Date = thisComp.utilityClass.getDateTimeFromString(sesion2.startTime);

        //    if (startTime1 > startTime2)
        //        return 1;
        //    else
        //        return -1
        //});

        return daySessions;
    }

    private fillTimeSlots(selectedDate: Date, daySessions: any[]) {
        let thisCompnonent = this;
        daySessions.forEach((item: any) => this.addTimeSlots(selectedDate, item, this.timeSlotsList));
    }

    findWithAttr(array: any, attr: any, value: any) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }
    private addTimeSlots(selectedDate: Date, session: any, toFillTimeSlotsList: any[]) {
        //Start Time
        let startHour: number = this.utilityClass.getDateTimeFromString(session.startTime).getHours();
        let startMinute: number = this.utilityClass.getDateTimeFromString(session.startTime).getMinutes();
        let timeSlotDate: Date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), startHour, startMinute);

        //End Time
        let endHour: number = this.utilityClass.getDateTimeFromString(session.endTime).getHours();
        let endMinute: number = this.utilityClass.getDateTimeFromString(session.endTime).getMinutes();
        let endSlotDate: Date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), endHour, endMinute);

        while (timeSlotDate < endSlotDate) {

            let timeSlot: TimeSlot = new TimeSlot(timeSlotDate);

            toFillTimeSlotsList.push(timeSlot);

            let minutes: number = timeSlotDate.getMinutes();

            timeSlotDate.setMinutes(minutes + this.slotDuration);
        }

        //Add the end slot
        /*let endTimeSlot: TimeSlot = new TimeSlot(endSlotDate);
        if (getExcluded == undefined || getExcluded == false) {
            if (this.findWithAttr(toFillTimeSlotsList,'name', endTimeSlot.name) == -1) {
                toFillTimeSlotsList.push(endTimeSlot);
            }
        }*/
        //else if (session.type == "CloseSlot")
        //    toFillTimeSlotsList.push(endTimeSlot);
    }

    getFullDayTimeSlots(daySlotDuration: any): TimeSlot[] {
        if (daySlotDuration == null || daySlotDuration == undefined) {
            daySlotDuration = 10;//Default
            //Override it if there is calendar slot duration
            if (calendarSlotDuration != undefined && calendarSlotDuration != '') {
                let components: string[] = calendarSlotDuration.split(':');
                if (components.length >= 1) {
                    daySlotDuration = Number(components[1]);//get the minutes component
                }
            }
        }
        let dayTimeSlotsList: TimeSlot[] = [];

        let slotsPerHour: number = 60 / daySlotDuration;
        let slotsPerDay: number = 24 * slotsPerHour;

        let todDay: Date = new Date();
        //Day start time
        let date: Date = new Date(todDay.getFullYear(), todDay.getMonth(), todDay.getDate(), 0, 0);

        dayTimeSlotsList.push(new TimeSlot(date));

        for (let slotNo = 1; slotNo < slotsPerDay; slotNo++) {

            //Increase minutes
            let minutes = date.getMinutes() + daySlotDuration;
            date.setMinutes(minutes);

            //Add time to the list
            dayTimeSlotsList.push(new TimeSlot(date));
        }

        return dayTimeSlotsList;
    }


}