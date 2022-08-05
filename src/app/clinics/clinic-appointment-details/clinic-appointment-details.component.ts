import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClinicService } from '../shared/clinic.service';

import { UtilityClass } from '../../shared/shared/utility.class';
import { TimeSlot } from '../../shared/shared/time-slot.model';
//import {TimePicker} from 'primeng/primeng'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';;

@Component({

    selector: 'clinic-appointment-details',
    templateUrl: './clinic-appointment-details.component.html'
})

export class ClinicAppointmentDetailsComponent implements OnInit {

    @Input() slotDurations: any[] = [];
    @Input() appointmentIdValue: string = '';
    @Input() daysList: any[] = [];
    @Input() doctorIdValue: string = '';
    @Input() doctorNameValue: string = '';
    @Input() clinicIdValue: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    selectAppointmentsTab: boolean = true;
    model: any = {};
    sessionModel: any = {};
    sessionsList!: any[];
    sessionsListIfError!: any[];
    items: any[] = [];
    days: any[] = [];
    controlsCount: number = 1;
    appointmentId!: any;
    doctorId!: any;
    clinicId!: any;
    doctorName!: any;
    active: boolean = true;
    strm: string = "tttt";
    utilityClass: UtilityClass = new UtilityClass();
    showProgress = false;
    sessionIndex!: number;
    sessionIdToDeleted: string = '';
    @Output() onBack = new EventEmitter();
    displayCalendarSlots: boolean = false;
    calendarSlots: TimeSlot[] = [];

    constructor(public toastr: ToastrService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }
    goBack() {
        this.onBack.emit();
    }

    addNewItem() {
        this.sessionModel = {};
        this.sessionsList.push(this.sessionModel);
        this.controlsCount++;

    }
    getControlNumber() {
        return this.controlsCount; // GUID.newGuid();
    }

    updateModelWithSessions() {
        let vm = this;
        vm.sessionsListIfError = vm.sessionsList;
        var updatedSessions = [];
        for (let item of vm.sessionsList) {
            item.startTime = this.utilityClass.getUtcDateTime(item.startTime);
            item.endTime = this.utilityClass.getUtcDateTime(item.endTime);
            // item.startTime = this.utilityClass.getISODateFormat(item.startTime);
            //   item.endTime = this.utilityClass.getISODateFormat(item.endTime);
            updatedSessions.push(item);
        }
        this.model.sessions = updatedSessions;
    }

    deleteItem(index: number): void {
        this.sessionsList.splice(index, 1);

    }
    selectSessionToDelete(index: number, id: string) {
        this.sessionIndex = index;
        this.sessionIdToDeleted = id;
    }

    deleteSession(): void {
        this.sessionsList.splice(this.sessionIndex, 1);

        if (this.sessionIdToDeleted != null && this.sessionIdToDeleted != undefined && this.sessionIdToDeleted != '')
            this.deleteSessionFromDB();

    }
    deleteSessionFromDB() {
        let vm = this;
        this.clinicService.deleteAppointmentScheduleSession(this.sessionIdToDeleted)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant('DeletedSuccessfully');
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    //var selectedObject = vm.sessionsList.find(o => o.id == vm.selectSessionToDelete);
                    //var index = vm.appointmentsList.indexOf(selectedObject);
                    //if (index > -1)
                    //    vm.appointmentsList.splice(index, 1);

                    // clear fields
                    //  vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

    }
    ngOnInit(): void {
        let vm = this;
        //this.getServiceGroupsForTree();
        vm.appointmentId = vm.appointmentIdValue;
        vm.days = vm.daysList;
        vm.sessionsList = [];
        vm.doctorId = vm.doctorIdValue;
        vm.doctorName = vm.doctorNameValue;
        vm.clinicId = vm.clinicIdValue;
        //thisComponent.getServiceGroupsForTree();
        // get team member to be updated 

        if (vm.appointmentId.toString().toLowerCase() != 'new') {

            vm.loadAppointmentScheduleModel();
        }
    }

    loadAppointmentScheduleModel() {
        let thisComponent = this;
        this.clinicService.getAppointmentScheduleById(thisComponent.appointmentId)
            .subscribe(
                function (response: any) {
                    thisComponent.model = response;

                    thisComponent.calculateCalendarSlots(thisComponent.model.slotDuration)

                    thisComponent.sessionsList = response.sessions;

                    if (response.sessions == null) {
                        thisComponent.sessionsList = [];
                    } else {

                        thisComponent.updateSessionsTime(thisComponent.sessionsList);
                    }

                    if (thisComponent.model.startDate)
                        thisComponent.model.startDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.startDate);
                    if (thisComponent.model.endDate)
                        thisComponent.model.endDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.endDate);
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    updateSessionsTime(sessions: any[]) {
        let thisComponent = this;
        for (let item of sessions) {
            item.startTime = thisComponent.utilityClass.getDateTimeFromString(item.startTime);
            item.endTime = thisComponent.utilityClass.getDateTimeFromString(item.endTime);
            //thisComponent.strm = 'aaaaa';
        }
    }

    formatTime(time: Date) {
        var momentTime = time.getTime();
        return momentTime.toString();
    }

    saveAppointment(): void {
        let thisComponent = this;

        let results: any[] = this.validateSessionSlotsWithCalendarSlot();

        if (results[0] == false) {
            thisComponent.toastr.error(results[1], '');
            return;
        }

        thisComponent.showProgress = true;
        thisComponent.updateModelWithSessions();

        thisComponent.model.clinicId = thisComponent.clinicId;
        if (this.model.startDate)
            this.model.startDate = this.utilityClass.getUtcDate(this.model.startDate);
        if (this.model.endDate)
            this.model.endDate = this.utilityClass.getUtcDate(this.model.endDate);

        if (isNaN(thisComponent.appointmentId) && thisComponent.appointmentId.toString().toLowerCase() == 'new') {
            thisComponent.model.securityUserId = thisComponent.doctorId;
            this.clinicService.createAppointmentSchedule(this.model)
                .subscribe(
                    function (response: any) {
                        thisComponent.model = response;
                        thisComponent.appointmentId = thisComponent.model.id
                        thisComponent.toastr.success(thisComponent.translate.instant('SavedSuccessfully'), '');
                        thisComponent.sessionsList = thisComponent.model.sessions;
                        thisComponent.updateSessionsTime(thisComponent.sessionsList);

                        thisComponent.model.startDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.startDate);
                        thisComponent.model.endDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.endDate);

                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else {
            //Update
            this.clinicService.updateAppointmentSchedule(this.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.toastr.success(thisComponent.translate.instant('SavedSuccessfully'), '');

                        thisComponent.sessionsList = thisComponent.model.sessions;
                        thisComponent.updateSessionsTime(thisComponent.sessionsList);

                        thisComponent.model.startDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.startDate);
                        thisComponent.model.endDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.endDate);

                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');

                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    validateSessionSlotsWithCalendarSlot(): any[] {
        let msg: string = '';
        let sessionsNames: any[] = [];
        let valid = true;
        this.calendarSlots = [];
        this.calendarSlots = this.getFullDayTimeSlots(parseInt(this.model.slotDuration));

        // loop for all sessions and check if first slot match calendar slot or not 
        for (let session of this.sessionsList) {
            let timeSlotDate: Date = new Date(session.startTime.getFullYear(), session.startTime.getMonth(), session.startTime.getDate(), session.startTime.getHours(), session.startTime.getMinutes());
            let timeSlot: TimeSlot = new TimeSlot(timeSlotDate);

            let selectedSlot = this.calendarSlots.find(s => s.name == timeSlot.name);

            if (!selectedSlot) {
                valid = false;
                sessionsNames.push(session.name);
            }
        }

        if (!valid) {
            msg = this.translate.instant('DoctorSlotsdontMatchCalendarSlots') + sessionsNames.toString();
        }

        return [valid, msg];
    }

    clear() {
        this.model = {}
        for (let i = 0; i < this.sessionsList.length; i++) {
            this.deleteItem(i);
        }
        this.controlsCount = 1;
        this.sessionsList = [];
        this.appointmentId = 'new';
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    getFullDayTimeSlots(daySlotDuration: any): TimeSlot[] {
        if (daySlotDuration == null || daySlotDuration == undefined) {
            daySlotDuration = 10;//Default
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

    calculateCalendarSlots(slotduration: any) {
        this.calendarSlots = [];
        if (slotduration)
            this.calendarSlots = this.getFullDayTimeSlots(parseInt(slotduration));
    }

}

