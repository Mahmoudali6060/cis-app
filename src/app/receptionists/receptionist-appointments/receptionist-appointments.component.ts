import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';

import { ReceptionistService } from '../shared/receptionist.service'
import { ReceptionistAppointmentManager } from '../shared/receptionist-appointment.manager'
import { SharedService } from '../../shared/shared/shared.service';
import { ClinicService } from '../../clinics/shared/clinic.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { UtilityClass } from '../../shared/shared/utility.class'
import { calendarSlotDuration } from '../../app.config';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

import { TimeSlot } from '../../shared/shared/time-slot.model';
import { CalendarOptions } from '@fullcalendar/angular';
import { ThisReceiver } from '@angular/compiler';

@Component({

    selector: 'receptionist-appointments',
    templateUrl: 'receptionist-appointments.component.html',
    styleUrls: ['receptionist-appointments.component.css']
})

export class ReceptionistAppointmentsComponent implements OnInit {

    appoitmentDateTimeBackup: string = '';
    SelectedDayAppoitments: any[] = [];
    toPrintDiv: string = 'todayAppoinmentsDiv';
    isDayView: boolean = false;
    dayViewSelectedDate = new Date();
    selectedDateAsString!: string;
    defaultclassId: string = '';
    lang: string = '';
    isRTL: boolean = false;
    waitInInquiry: string = '';
    gotoDateString: string = ''; // used to open the appointment that edited from search
    selectedAppointmentIDFromSearch!: number;
    initialView: boolean = false;
    @ViewChild('bookOrCloseModalButton') bookOrCloseModalButton!: ElementRef;
    @ViewChild('btnCloseBookOrCloseModal') btnCloseBookOrCloseModal!: ElementRef;
    @ViewChild('appointmentModalButton') appointmentModalButton!: ElementRef;
    @ViewChild('btnClostAppointmentModal') btnClostAppointmentModal!: ElementRef;
    @ViewChild('btnShowSessionExtensionSlotModal') btnShowSessionExtensionSlotModal!: ElementRef;
    @ViewChild('btnCloseSessionExtensionModal') btnCloseSessionExtensionModal!: ElementRef;
    @ViewChild('btnCloseRestoreTimeSlotsModal') btnCloseRestoreTimeSlotsModal!: ElementRef;
    @ViewChild('btnShowRestoreTimeSlotsModal') btnShowRestoreTimeSlotsModal!: ElementRef;
    @ViewChild('fullCallendar') fullCallendar: any;
    @ViewChild('btnCloseReceptionistSearchPopup') btnCloseReceptionistSearchPopup!: ElementRef;
    @ViewChild('btnCloseAppointmentPopup') btnCloseAppointmentPopup!: ElementRef;
    @ViewChild('btnDisplayCurrentDayAppointment') btnDisplayCurrentDayAppointment!: ElementRef;

    utilityClass: UtilityClass = new UtilityClass();
    receptionistAppointmentManager!: ReceptionistAppointmentManager;
    showProgress: boolean = false;
    showLoading: boolean = false;
    active: boolean = true;

    events: any[] = [];
    selectedDoctor: any;
    currentDoctor: any = {};

    displayPatientAdvancedSearch: boolean = false;
    showSelectPatient: boolean = true;
    showEditPatient: boolean = false;
    organizationStructureTree: any[] = [];
    clinicId!: any;
    doctorId!: any;
    divisonId!: any;
    divisonName!: any;
    doctorName = '';
    isDoctorSelected: boolean = false;
    isDivisionSelected: boolean = false;
    isDepartmentSelected: boolean = false;
    appointmentModel: any = { id: 0 };
    appointmentSchedulesList: any[] = [];
    sessionExtensionsList: any[] = [];
    appointmentClassesList: any[] = [];
    visitTypesList: any[] = [];
    timeSlotsList: any[] = [];
    appointementsList: any[] = [];
    serviceTimeSlotsList: any[] = [];
    currentWeekDays: any[] = [];
    currentHijriWeekDays: string[] = [];
    slotDuration!: number;
    calendarSlotDuration!: string;
    patientQucikAccount: any = {};

    sessionExtension: any = {};
    entireDayTimeSlotsListForStartTime: any[] = [];
    entireDayTimeSlotsListForEndTime: any[] = [];
    sessionExtensionPopupTitle: string = '';

    patientClinicMrn = '';
    patientName = '';
    patientId = '';

    selectedDate!: any;
    selectedTimeSlot!: any;
    selectedDateForOpenCloseSlot!: any;
    selectedDateToForOpenCloseSlot!: any;
    selectedStartTimeForOpenCloseSlot!: any;
    selectedEndTimeForOpenCloseSlot!: any;
    numberOfTimeSlots: number = 1;
    defaultDate = '';
    dateToRestoreTimeSlots!: Date;
    display: boolean = false;
    title = "Add Arrival Time";
    title1 = "Reconfirm Appointment";
    title2 = "Cancel Appointment";
    isArrived: boolean | undefined;
    isAddArrivalTime: boolean = false;
    isReconfirmedAppointment: boolean = false;
    reconfirmRemarks = "";
    isUpdatedAppointment = false;
    isCancelledAppointment = false;
    cancelationRemarks = "";
    cancelled: boolean | undefined;
    cancelledDate: any;
    timeSlotForCancelledApp: any;
    displayRepeatAppointmentPopup: boolean = false;
    selectedRepeatDate!: any;
    selectedRepeatTimeSlot!: any;
    repeatedAppointmentModel: any = { id: 0 };
    repeatingTimeSlotsList: any[] = [];
    rescheduledTimeSlotsList: any[] = [];
    selectedRescheduledDate!: any;
    selectedRescheduledTimeSlot!: any;
    isRescheduledAppointment: boolean = false;
    rescheduledAppointmentModel: any = {};
    reconfirmTime: any;
    selectedDivisionId!: any;
    selectedDivisionName!: any;
    ts = "";
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableNewAppointmentBtn: boolean = false;
    enableQuickRegistrationBtn: boolean = false;
    enableSaveAppointmentPopupBtn: boolean = false;
    enableCancelAppointmentBtn: boolean = false;
    enableSetArrivalTimeBtn: boolean = false;
    enableOpenSlotBtn: boolean = false;
    enableCloseSlot: boolean = false;
    enableRestoreSlot: boolean = false;

    // calendarOptions: any = {};
    reconfirmDate!: any;
    arrivalTime!: any;
    cancellationDate;
    calendarRangeStartDateTime: Date | undefined;
    calendarRangeEndDateTime: Date | undefined;
    calendarRangeFirstSlot!: TimeSlot;
    calendarRangeLastSlot!: TimeSlot;
    lstToTranslated: string[] = ['serviceName', 'serviceNameTranslation'];

    calendarOptions: CalendarOptions = {
        headerToolbar: {
            left: 'today,timeGridWeek',
            center: 'title',
            right: 'prev,next'

        },
        editable: false,
        //scrollTime: '1:00:00',
        displayEventTime: false,
        // eventColor: '#000000',
        // eventBackgroundColor: '#ffffff',
        initialView: 'timeGridWeek',

        allDaySlot: true,
        slotDuration: calendarSlotDuration,
        slotLabelInterval: calendarSlotDuration,
        contentHeight: 500,

        allDayText: "",
        eventClick: this.handleEventClick.bind(this), // bind is important!
        navLinkDayClick: this.handleNavDayClick.bind(this),
        dateClick: this.handleDateClick.bind(this),

        //loading: this.handleloadEvents,
    };


    constructor(
        public receptionistService: ReceptionistService,
        private clinicService: ClinicService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService
        , private router: Router
        , public translate: TranslateService
        , public accountService: AccountService) {
        this.cancellationDate = this.utilityClass.getUtcDate(new Date());
    }

    ngOnInit() {

        this.lang = this.localStorage.retrieve('SelectedLanguage');
        if (this.lang && this.lang == 'ar')
            this.isRTL = true;

        this.setCalendarOptions();
        let thisComp = this;

        this.clinicId = this.localStorage.retrieve("ClinicID");
        // this.clinicId = "1";
        this.loadOrganizationStructureTree();
        this.fillCurrentWeekDays(new Date());
        this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
        //this.entireDayTimeSlotsList = this.receptionistAppointmentManager.getFullDayTimeSlots(this.receptionistAppointmentManager.getSlotDuration());

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

    }
    setCalendarOptions() {
        this.defaultDate = this.utilityClass.getISODateFormat(new Date());
        this.calendarOptions.firstDay = new Date().getDay();
        this.calendarOptions.navLinks = true;
        this.calendarOptions.selectable = true;
        // this.calendarOptions.select = function (start: any, end: any) { thisComp.handleCalendarSelect(start, end); }
        // this.calendarOptions.isRTL = this.isRTL;

    }

    FillHijriWeekDays() {
        if (this.currentWeekDays && this.currentWeekDays.length > 0) {
            let dates = [];
            for (let date of this.currentWeekDays)
                dates.push(this.utilityClass.getUtcDate(date));

            for (let dayNo = 0; dayNo <= 6; dayNo++) {
                let event: any = {};
                event.start = dates[dayNo];
                event.end = dates[dayNo];
                event.allDay = true;
                event.className = 'hijriDateStyle';
                event.title = this.currentHijriWeekDays[dayNo];
                this.events.push(event);
            }
        }
    }

    fillCurrentWeekDays(startDate: Date) {
        this.currentWeekDays = [];

        let satrt: number = startDate.getDate();

        for (let dayNo = 0; dayNo <= 6; dayNo++) {
            {
                let date: Date = new Date(startDate.getTime());
                date.setDate(satrt + dayNo)
                this.currentWeekDays.push(date);
            }
        }
    }

    handleDateClick(arg: any) {
        if (!this.doctorId) {
            let msg = this.translate.instant("NoDoctorSelected");
            this.toastr.error(msg, '');
            return;
        }
        this.selectedStartTimeForOpenCloseSlot = null;
        this.selectedEndTimeForOpenCloseSlot = null;

        this.selectedDateForOpenCloseSlot = arg.date;
        this.calendarRangeStartDateTime = this.utilityClass.convertToUTCDateTime(this.selectedDateForOpenCloseSlot);


        this.selectedStartTimeForOpenCloseSlot = new TimeSlot(this.selectedDateForOpenCloseSlot).name;
        this.selectedDateToForOpenCloseSlot = arg.date;
        this.selectedDateToForOpenCloseSlot.setMinutes(this.selectedDateToForOpenCloseSlot.getMinutes() + 15);
        this.selectedEndTimeForOpenCloseSlot = new TimeSlot(this.selectedDateToForOpenCloseSlot).name;
        this.calendarRangeEndDateTime = this.utilityClass.convertToUTCDateTime(this.selectedDateToForOpenCloseSlot);

        this.calendarRangeFirstSlot = new TimeSlot(this.calendarRangeStartDateTime);
        this.calendarRangeLastSlot = new TimeSlot(this.calendarRangeEndDateTime);
        this.onOpneCloseSlotDateSelect(arg.date);

        this.showSessionExtensionPopupForOpenSlot();
    }

    showDialog() {
        this.isAddArrivalTime = true
        this.isReconfirmedAppointment = false;
        this.isCancelledAppointment = false;
        this.isRescheduledAppointment = false;
        //this.isArrived = false;

        this.arrivalTime = new Date();

        this.display = true;
    }

    showReconfirmDialog() {
        this.isReconfirmedAppointment = true;
        this.isAddArrivalTime = false;
        this.isCancelledAppointment = false;
        this.isRescheduledAppointment = false;
        this.display = true;
    }
    showCancelationDialog() {
        this.isCancelledAppointment = true;
        this.isReconfirmedAppointment = false;
        this.isAddArrivalTime = false;
        this.isRescheduledAppointment = false;
        this.display = true;
    }
    //showRescheduleDialog() {
    //    this.isCancelledAppointment = false;
    //    this.isReconfirmedAppointment = false;
    //    this.isAddArrivalTime = false;
    //    this.isRescheduledAppointment = true;
    //    this.display = true;
    //}
    createQuickPateintAccount() {
        let thisComponent = this;
        let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedTimeSlot);
        if (timeSlot != undefined) {

            this.patientQucikAccount.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.patientQucikAccount.doctorId = this.doctorId;
            this.patientQucikAccount.slotDuration = this.slotDuration;
            this.patientQucikAccount.clinicId = this.clinicId;
            this.patientQucikAccount.numberOfTimeSlots = this.numberOfTimeSlots;
            if (this.patientQucikAccount.birthDate)
                this.patientQucikAccount.birthDate = this.utilityClass.getUtcDate(this.patientQucikAccount.birthDate);

            // check for available open slots 
            let isSlotsOpened = this.isAppointmentSlotsOpened(timeSlot.dateTime);

            if (!isSlotsOpened) {
                let msg = this.translate.instant("NotEnoughOpenedSlots");
                this.toastr.error(msg, '');
                this.showProgress = false;
                return;
            }

            thisComponent.showProgress = true;

            this.receptionistService.createPatientRequest(this.patientQucikAccount)
                .subscribe(
                    function (response: any) {

                        thisComponent.updateCalendarEvents(response, true);
                        thisComponent.closeAppointmentModal();

                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error.error);
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clearControl(): void {
        this.patientQucikAccount = { id: 0 };
        this.timeSlotsList = [];
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.numberOfTimeSlots = 1;
        this.active = false;
        this.reconfirmTime = '';
        this.reconfirmDate = '';
        this.arrivalTime = '';
        //this.cancellationDate = '';
        setTimeout(() => this.active = true, 0);
    }

    loadOrganizationStructureTree() {
        let thisComp = this;
        thisComp.showProgress = true;
        //let userId = this.storage.retrieve("UserID");
        this.clinicService.getOrganizationStructureTreeWithDoctorsOnly(this.clinicId)
            .subscribe(
                function (response: any) {
                    thisComp.organizationStructureTree = response;
                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    clear() {
        this.appointmentModel = { id: 0 };
        this.timeSlotsList = [];
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.numberOfTimeSlots = 1;
        this.patientClinicMrn = '';
        this.patientName = '';
        this.cancelled = false;
        this.rescheduledAppointmentModel = {};
        this.reconfirmTime = '';
        this.reconfirmDate = '';
        this.arrivalTime = '';
        //this.cancellationDate = '';

        // set default class ID
        this.appointmentModel.appointmentClassId = this.defaultclassId;

    }

    addNewAppointment() {
        this.isUpdatedAppointment = false;
        this.clear();
        this.showAppointmentModal();
    }

    handleEventClick(e: any) {
        debugger;
        let eventId = e.event._def.publicId;
        this.fillAppointmentinfo(eventId);

        this.selectedDateForOpenCloseSlot = e.el.fcSeg.start;
        this.calendarRangeStartDateTime = this.utilityClass.convertToUTCDateTime(this.selectedDateForOpenCloseSlot);
        this.onOpneCloseSlotDateSelect(this.selectedDateForOpenCloseSlot);

        this.selectedDateToForOpenCloseSlot = e.el.fcSeg.start;
        this.selectedDateToForOpenCloseSlot.setMinutes(this.selectedDateToForOpenCloseSlot.getMinutes() + 15);

        this.calendarRangeEndDateTime = this.utilityClass.convertToUTCDateTime(this.selectedDateToForOpenCloseSlot);

        this.calendarRangeFirstSlot = new TimeSlot(this.calendarRangeStartDateTime);
        this.calendarRangeLastSlot = new TimeSlot(this.calendarRangeEndDateTime);



    }

    fillAppointmentinfo(eventId: any) {
        if (this.appointementsList != undefined) {
            this.appointmentModel = this.appointementsList.find(app => app.id == eventId);

            if (this.appointmentModel != undefined) {
                this.isUpdatedAppointment = true;
                this.selectedDate = this.utilityClass.getDateTimeFromString(this.appointmentModel.dateTime);
                this.onDateSelect(this.selectedDate);
                this.selectedTimeSlot = this.appointmentModel.time;
                this.numberOfTimeSlots = this.appointmentModel.numberOfTimeSlots;
                this.patientId = this.appointmentModel.patientId;
                this.patientClinicMrn = this.appointmentModel.patientClinicMRN;
                this.patientName = this.appointmentModel.patientName;
                //if (this.appointmentModel.arrived == true) {
                //    this.isArrived = true;
                //}
                if (this.appointmentModel.arrivalTime)
                    this.arrivalTime = this.utilityClass.getDateTimeFromString(this.appointmentModel.arrivalTime);

                if (this.appointmentModel.reconfirmDate) {
                    this.reconfirmTime = this.utilityClass.getDateTimeFromString(this.appointmentModel.reconfirmDate);
                    this.reconfirmDate = this.utilityClass.getDateTimeFromString(this.appointmentModel.reconfirmDate);
                }

                //if (this.appointmentModel.cancellationDate)
                //    this.cancellationDate = this.utilityClass.getUtcDateFromString(this.appointmentModel.cancellationDate);

                //this.appointmentModel.description += this.appointmentModel.cancelRemarks + this.appointmentModel.reconfirmRemarks;
                this.showAppointmentModal();
            }
            else {
                this.appointmentModel = { id: 0 };
                this.showBookOrCloseModal();
                //this.isUpdatedAppointment = false;
            }

            this.inquireWaitInAppointment();
        }
    }


    showAppointmentModal() {

        this.appointmentModalButton.nativeElement.click();
    }

    showBookOrCloseModal() {
        this.bookOrCloseModalButton.nativeElement.click();
    }

    closeAppointmentModal() {
        this.btnClostAppointmentModal.nativeElement.click();
    }

    expandAll() {
        this.organizationStructureTree.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.organizationStructureTree.forEach(node => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }


    nodeSelect(event: any) {

        this.isDayView = false;
        this.handelSelectedNode(event.node);
        this.handleloadEvents(event.node.$id)
    }

    handelSelectedNode(node: any) {
        let vm = this;
        this.doctorId = 0;
        this.doctorName = "";
        this.isDoctorSelected = false;
        this.isDivisionSelected = false;
        this.isDepartmentSelected = false;

        if (node.type.toLocaleLowerCase() == "securityuser") {
            this.initialView = true;

            this.doctorId = node.data;

            if (this.lang == 'ar')
                this.doctorName = node.label;
            else
                this.doctorName = node.labelTranslation;

            this.isDoctorSelected = true;
            this.isDivisionSelected = false;
            this.isDepartmentSelected = false;

            this.getAppointmentDetailsWrapper(this.doctorId);

            this.getDoctorClinicDivision(this.doctorId);

        } else if (node.type.toLocaleLowerCase() == "clinicdivision") {

            this.divisonId = node.data;

            if (this.lang == 'ar')
                this.divisonName = node.label;
            else
                this.divisonName = node.labelTranslation;

            this.isDoctorSelected = false;
            this.isDivisionSelected = true;
            this.isDepartmentSelected = false;


        } else if (node.type.toLocaleLowerCase() == "clinicdepartment") {

            this.isDoctorSelected = false;
            this.isDivisionSelected = false;
            this.isDepartmentSelected = true;

        }
    }

    getAppointmentDetailsWrapper(doctorId: any) {

        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getAppointmentDetailsWrapper(doctorId)
            .subscribe(
                function (response: any) {

                    thisComp.appointmentSchedulesList = response.appointmentSchedules;
                    thisComp.sessionExtensionsList = response.sessionExtensions;
                    thisComp.appointmentClassesList = response.appointmentClasses;
                    thisComp.visitTypesList = response.visitTypes;
                    thisComp.appointementsList = response.appointments;
                    thisComp.serviceTimeSlotsList = response.serviceTimeSlots;
                    thisComp.currentHijriWeekDays = response.currentWeekHijriDates;
                    thisComp.currentDoctor = response.doctor;

                    // get default class ID 
                    if (thisComp.appointementsList) {
                        thisComp.appointmentClassesList.forEach(cls => {
                            if (cls.key == 'Reserved') {
                                thisComp.defaultclassId = cls.id;
                            }
                        });
                    }

                    //------- Work with the Calendar view -------

                    //Refresh the calendar solt duration according to the doctor solt duration
                    let formattedSlotDuration = thisComp.calendarSlotDuration;
                    let scrollTime = "00:00:00";
                    thisComp.receptionistAppointmentManager = new ReceptionistAppointmentManager(thisComp.appointmentSchedulesList, thisComp.sessionExtensionsList);
                    thisComp.slotDuration = thisComp.receptionistAppointmentManager.getSlotDurationForDate(thisComp.utilityClass.getDateComponent(new Date()));
                    if (thisComp.slotDuration != undefined && thisComp.slotDuration != 0)
                        formattedSlotDuration = '00:' + thisComp.utilityClass.getTwoDigitNumber(thisComp.slotDuration) + ':00';

                    //Get first timeSlot
                    let firstTimeSlot: TimeSlot = thisComp.receptionistAppointmentManager.getFirstTimeSlot(new Date());
                    if (firstTimeSlot != undefined) {
                        if (firstTimeSlot.name.indexOf(":") > -1)//has minutes
                            scrollTime = firstTimeSlot.name + ":00";//add seconds
                        else//has only hours
                            scrollTime = firstTimeSlot.name + ":00:00";//add minutes and seconds
                    }

                    thisComp.initialView = true;
                    debugger;
                    //thisComp.fullCallendar.refreshSlotDuration(formattedSlotDuration, scrollTime);
                    thisComp.calendarOptions.scrollTime = scrollTime;
                    thisComp.calendarOptions.slotDuration = formattedSlotDuration;
                    thisComp.calendarOptions.slotLabelInterval = formattedSlotDuration;

                    thisComp.initialView = false;
                    //Update calendar events
                    thisComp.events = response.calendarEvents;
                    thisComp.calendarOptions.events = response.calendarEvents;
                    //Adjust calendar view according the schedules
                    thisComp.fillCurrentWeekDays(new Date());
                    thisComp.adjustCalendarView();
                    //thisComp.FillHijriWeekDays();

                    if (thisComp.gotoDateString) {
                        let date = thisComp.utilityClass.getDateTimeFromString(thisComp.gotoDateString)

                        if (thisComp.isDateWithinCurrentWeek(date)) {
                            // open appointment popup
                            thisComp.fillAppointmentinfo(thisComp.selectedAppointmentIDFromSearch);
                            thisComp.gotoDateString = '';
                        }
                        else {
                            //thisComp.fullCallendar.gotoDate(date);
                        }
                    }

                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    isDateWithinCurrentWeek(passedDate: Date): boolean {
        for (let weekDate of this.currentWeekDays) {
            let currentWeekDate = this.utilityClass.getUtcDate(weekDate);
            if (currentWeekDate.getDay() == passedDate.getDay() &&
                currentWeekDate.getFullYear() == passedDate.getFullYear() &&
                currentWeekDate.getMonth() == passedDate.getMonth())
                return true;
        }

        return false;
    }

    getDoctorClinicDivision(doctorId: any) {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getDoctorClinicDivision(doctorId)
            .subscribe(
                function (response: any) {
                    if (response != undefined)
                        thisComp.selectedDivisionId = response.id;
                    if (thisComp.lang == 'ar')
                        thisComp.selectedDivisionName = response.name;
                    else
                        thisComp.selectedDivisionName = response.nameTranslation;
                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }
    setClinicDepartmentId(value: any) {
        let vm = this;
        //  this.clinicId = value;

    }
    adjustCalendarView() {

        this.FillHijriWeekDays();

        for (let indx = 0; indx < this.currentWeekDays.length; indx++) {
            let day: Date = this.currentWeekDays[indx];
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(day);

            for (let indx = 0; indx < availableTimeSlots.length; indx++) {
                let timSlot = availableTimeSlots[indx];

                let startMinutes: string = timSlot.dateTime.toTimeString().split(' ')[0];

                timSlot.dateTime.setMinutes(timSlot.dateTime.getMinutes() + this.receptionistAppointmentManager.getSlotDuration());
                let endMintues: string = timSlot.dateTime.toTimeString().split(' ')[0];
                if (endMintues == "00:00:00")
                    endMintues = "23:59:59";

                debugger;
                let bgEvent: CalendarEvent = new CalendarEvent();
                let startDateTime = this.utilityClass.getISODateFormat(day) + "T" + startMinutes;
                let endDateTime = this.utilityClass.getISODateFormat(day) + "T" + endMintues;

                bgEvent.id = 0;
                bgEvent.start = startDateTime;
                bgEvent.end = endDateTime;
                bgEvent.rendering = 'inverse-background';
                bgEvent.className = 'inverse-backgroundEvent';
                bgEvent.backgroundColor = '#989898';
                //if event is exssited in events list ,then do not add it
                let exsitedEvent = this.events.find(x => x.start == startDateTime);
                if (!exsitedEvent)
                    this.events.push(bgEvent);
                this.calendarOptions.events = this.events;
            }
        }

    }

    onDateSelect(dateValue: Date) {
        this.timeSlotsList = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            this.timeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
            this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
        }
    }

    onOpneCloseSlotDateSelect(dateValue: Date) {
        debugger;
        this.entireDayTimeSlotsListForStartTime = [];
        this.entireDayTimeSlotsListForEndTime = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let appSchedule = this.receptionistAppointmentManager.getAppointmentSchedule(dateValue);
            if (appSchedule != undefined) {
                this.entireDayTimeSlotsListForStartTime = this.receptionistAppointmentManager.getFullDayTimeSlots(appSchedule.slotDuration);
                this.entireDayTimeSlotsListForEndTime = this.entireDayTimeSlotsListForStartTime.slice();
                //Add last slot in the day
                let todDay: Date = new Date();
                let date: Date = new Date(todDay.getFullYear(), todDay.getMonth(), todDay.getDate(), 23, 59);
                this.entireDayTimeSlotsListForStartTime.push(new TimeSlot(date));
                this.entireDayTimeSlotsListForEndTime.push(new TimeSlot(date));
            }
        }
    }

    getPatient() {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getPatientByClinicMRN(this.patientClinicMrn)
            .subscribe(
                function (response: any) {
                    thisComp.patientName = response.name;
                    thisComp.patientId = response.id;
                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    selectAppointmentClass(classId: any) {
        this.appointmentModel.appointmentClassId = classId;
    }


    notifyRelatedUserForCancel() {
        var thisComp = this;
        this.appointmentModel.notificationType = 'Cancel';
        this.receptionistService.notifyRelatedUser(this.appointmentModel)
            .subscribe(
                function (response: any) {
                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    notifyRelatedUserForConfirm() {
        var thisComp = this;
        this.appointmentModel.notificationType = 'Confirm';
        this.receptionistService.notifyRelatedUser(this.appointmentModel)
            .subscribe(
                function (response: any) {
                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }
    mergeCallingDateAndCallingTime(obj: Date, secondObj: Date): Date {

        let hour: number = secondObj.getHours();
        let minute: number = secondObj.getMinutes();
        let dateTime = new Date(obj.getFullYear(), obj.getMonth(),
            obj.getDate(), hour, minute);

        return dateTime;
    }
    saveOrUpdateAppointment(updateArrivalTime?: boolean | undefined) {

        this.appointmentModel.clinicId = this.clinicId;
        this.appointmentModel.clinicDivisionId = this.selectedDivisionId;
        this.appointmentModel.arrived = false;

        if (this.arrivalTime && updateArrivalTime)//time only
        {
            this.appointmentModel.arrivalTime = this.utilityClass.getUtcDateTime(this.arrivalTime);
            this.appointmentModel.arrived = true;
        }

        if (this.reconfirmDate && this.reconfirmTime)//date
        {
            let updatedDate: Date = this.mergeCallingDateAndCallingTime(this.reconfirmDate, this.reconfirmTime);
            this.appointmentModel.reconfirmDate = this.utilityClass.getUtcDateTime(updatedDate);
        }


        if (this.cancelled) {
            this.appointmentModel.cancellationDate = this.cancellationDate;
            this.appointmentModel.cancelled = this.cancelled;
        }

        let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedTimeSlot);
        if (timeSlot != undefined) {
            //Update the model
            if (this.appointmentModel.cancelled)//in case of cancelled = true
                this.timeSlotForCancelledApp = timeSlot;

            this.appoitmentDateTimeBackup = this.appointmentModel.dateTime;
            this.appointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.appointmentModel.doctorId = this.doctorId;
            this.appointmentModel.patientId = this.patientId;
            this.appointmentModel.slotDuration = this.slotDuration;
            this.appointmentModel.numberOfTimeSlots = this.numberOfTimeSlots;

            this.showProgress = true;
            let thisComp = this;
            let isNewAppointment: boolean = (this.appointmentModel.id == 0) ? true : false;

            if (updateArrivalTime) {
                this.receptionistService.updatePatientArrivalTime(this.appointmentModel)
                    .subscribe(
                        function (response: any) {
                            thisComp.updateCalendarEvents(response, isNewAppointment);
                            thisComp.closeAppointmentModal();

                            let msg = thisComp.translate.instant("SavedSuccessfully");
                            thisComp.toastr.success(msg, '');
                        },
                        function (error: any) {
                            thisComp.appointmentModel.dateTime = thisComp.appoitmentDateTimeBackup;
                            thisComp.toastr.error(error.error, '');
                            thisComp.showProgress = false;
                        },
                        function () {
                            thisComp.showProgress = false;
                        });
            }
            else {
                let isSlotsOpened = this.isAppointmentSlotsOpened(timeSlot.dateTime);

                if (!isSlotsOpened) {
                    let msg = this.translate.instant("NotEnoughOpenedSlots");
                    this.toastr.error(msg, '');
                    this.showProgress = false;
                    this.appointmentModel.dateTime = this.appoitmentDateTimeBackup;
                    return;
                }

                this.receptionistService.saveOrUpdateAppointment(this.appointmentModel)
                    .subscribe(
                        function (response: any) {
                            thisComp.updateCalendarEvents(response, isNewAppointment);
                            thisComp.closeAppointmentModal();
                            thisComp.getAppointmentDetailsWrapper(thisComp.doctorId);
                            let msg = thisComp.translate.instant("SavedSuccessfully");
                            thisComp.toastr.success(msg, '');
                        },
                        function (error: any) {
                            thisComp.toastr.error(error.error, '');
                            thisComp.appointmentModel.dateTime = thisComp.appoitmentDateTimeBackup;
                            thisComp.showProgress = false;
                        },
                        function () {
                            thisComp.showProgress = false;
                        });
            }
        }
        else {
            let msg = this.translate.instant("EnterDateTime");
            this.toastr.error(msg, '');
        }
    }

    updateArrivalTime() {
        this.saveOrUpdateAppointment(true);
        this.display = false;
    }
    updateReconfirm() {
        this.saveOrUpdateAppointment(false);
        this.notifyRelatedUserForConfirm();
        this.display = false;
    }

    cancelAppointment() {
        this.cancelled = true;
        this.saveOrUpdateAppointment(false);
        this.getAppointmentDetailsWrapper(this.doctorId);
        this.notifyRelatedUserForCancel();
        this.display = false;
    }

    // RescheduleAppointment() {
    //    this.saveRescheduleAppointment();
    // }
    handleIsArrivedValue(event: any) {
        if (event.target.checked) {
            this.isArrived = true;
        } else {
            this.isArrived = false;
        }
    }

    saveSessionExtension() {

        let thisComponent = this;
        //thisComponent.showProgress = true;
        this.sessionExtension.day = this.selectedDateForOpenCloseSlot;//this.utilityClass.getUtcDateTime(this.selectedDateForOpenCloseSlot);
        this.sessionExtension.startTime = this.utilityClass.getISODateFormat(this.sessionExtension.day) + "T" + this.selectedStartTimeForOpenCloseSlot + (this.selectedStartTimeForOpenCloseSlot.length == 2 ? ":00" : "");
        this.sessionExtension.endTime = this.utilityClass.getISODateFormat(this.sessionExtension.day) + "T" + this.selectedEndTimeForOpenCloseSlot + (this.selectedEndTimeForOpenCloseSlot.length == 2 ? ":00" : "");
        if (this.sessionExtension.startTime >= this.sessionExtension.endTime) {
            let msg = this.translate.instant("SessionExtensionStart");
            thisComponent.toastr.error(msg, '');
            return;
        }
        this.receptionistService.saveNewSessionExtension(this.sessionExtension)
            .subscribe(
                function (response: any) {
                    debugger;
                    thisComponent.sessionExtension = response;
                    thisComponent.clearSessionExtensionControls();
                    thisComponent.getAppointmentDetailsWrapper(thisComponent.doctorId);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.btnCloseSessionExtensionModal.nativeElement.click();
                    thisComponent.btnCloseBookOrCloseModal.nativeElement.click();
                },
                function (error: any) {
                    thisComponent.toastr.error(error.error, '');
                    //thisComponent.showProgress = false;
                },
                function () {
                    //thisComponent.showProgress = false;
                });
    }


    updateCalendarEvents(appointment: any, isNewAppointment: boolean) {
        debugger;
        let evnt: CalendarEvent = new CalendarEvent();
        this.updateEvent(evnt, appointment);

        if (isNewAppointment)//Add new
        {
            this.appointementsList.push(appointment);

            this.events.push(evnt);
            this.calendarOptions.events = this.events;
        }
        else//Update existing
        {
            if (this.cancelled) {
                for (let i = 0; i < this.appointementsList.length; i++) {
                    if (appointment.id == this.appointementsList[i].id) {
                        //        this.sessionsList.splice(this.sessionIndex, 1);
                        this.appointementsList.splice(i, 1);
                        this.cancelled = false;
                        break;
                    }
                }

                for (let i = 0; i < this.events.length; i++) {
                    if (appointment.id == this.events[i].id) {
                        this.events.splice(i, 1);
                        this.cancelled = false;


                        break;
                    }
                    this.calendarOptions.events = this.events;
                }

            }
            else {
                for (let i = 0; i < this.appointementsList.length; i++) {
                    if (appointment.id == this.appointementsList[i].id) {
                        this.appointementsList[i] = appointment;
                        break;
                    }
                }

                for (let i = 0; i < this.events.length; i++) {
                    if (appointment.id == this.events[i].id) {
                        this.events[i] = evnt;
                        break;
                    }
                    this.calendarOptions.events = this.events;

                }
            }

        }
    }
    updateAppointmentModel(appointment: any) {
        let thisComponent = this;

        if (appointment.arrivalTime)
            appointment.arrivalTime = thisComponent.utilityClass.getDateTimeFromString(appointment.arrivalTime);

        if (appointment.reconfirmDate)
            appointment.reconfirmDate = thisComponent.utilityClass.getDateTimeFromString(appointment.reconfirmDate);


    }

    getAppointmentFullTitle(appointment: any): string {
        let fullTitle = '';

        fullTitle += appointment.patientUnifiedMRN;
        fullTitle += ' - ' + appointment.patientName;
        fullTitle += ' - ' + appointment.mobile;

        if (appointment.arrived)
            fullTitle += ' - ' + appointment.arrivalTimeString;

        if (appointment.confirmed)
            fullTitle += ' - ' + this.translate.instant('Confirmed');
        else
            fullTitle += ' - ' + this.translate.instant('NotConfirmed');

        if (appointment.description)
            fullTitle += ' - ' + appointment.description;

        return fullTitle;
    }

    updateEvent(evnt: CalendarEvent, appointment: any) {

        evnt.id = appointment.id;
        evnt.dateTime = appointment.dateTimeString;
        evnt.title = appointment.patientName;
        evnt.fullTitle = appointment.fullTitle;

        //Start
        evnt.start = appointment.start;
        //End
        evnt.end = appointment.end;
        if (appointment.isWaitIn)
            evnt.className = 'calendarEvent-waitin';
        else if (appointment.arrived)
            evnt.className = 'calendarEvent-arrived';
        else if (appointment.confirmed)
            evnt.className = 'calendarEvent-confirmed';
        else if (appointment.flag)
            evnt.className = 'calendarEvent-flaged';
        else
            evnt.className = 'calendarEvent';

    }

    clearSessionExtensionControls() {
        this.sessionExtension = {};
    }

    showSessionExtensionPopupForOpenSlot() {
        let msg = this.translate.instant("OpenSlot");
        //if (this.isDoctorSelected != undefined && this.isDoctorSelected == true) {
        this.sessionExtension = {
            type: 0,
            clinicId: this.clinicId,
            doctorId: this.doctorId
        };
        this.sessionExtensionPopupTitle = msg;
        this.btnShowSessionExtensionSlotModal.nativeElement.click();
        //}
    }

    showSessionExtensionPopupForCloseSlot() {
        let msg = this.translate.instant("CloseSlot");

        // if (this.isDoctorSelected != undefined && this.isDoctorSelected == true) {
        this.sessionExtension = {
            type: 1,
            clinicId: this.clinicId,
            doctorId: this.doctorId
        };
        this.sessionExtensionPopupTitle = msg;
        this.btnShowSessionExtensionSlotModal.nativeElement.click();
        // }
    }

    showRestoreTimeSlotsPopup() {
        //if (this.isDoctorSelected != undefined && this.isDoctorSelected == true)
        this.btnShowRestoreTimeSlotsModal.nativeElement.click();
    }

    restoreTimeSlots() {

        let thisComponent = this;
        //thisComponent.showProgress = true;
        var restoreSlotWrapper = {
            clinicId: this.clinicId,
            doctorId: this.doctorId,
            dateToRestoreTimeSlots: this.utilityClass.getUtcDateTime(this.dateToRestoreTimeSlots)
        };
        this.receptionistService.restoreTimeSlots(restoreSlotWrapper)
            .subscribe(
                function (response: any) {
                    thisComponent.getAppointmentDetailsWrapper(thisComponent.doctorId);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.btnCloseRestoreTimeSlotsModal.nativeElement.click();
                },
                function (error: any) {
                    thisComponent.toastr.error(error.error, '');
                    //thisComponent.showProgress = false;
                },
                function () {
                    //thisComponent.showProgress = false;
                });
    }


    showRepeatAppointmentPopup() {
        if (this.appointmentModel != undefined) {
            //this.selectedRepeatDate = this.utilityClass.getUtcDateFromString(this.appointmentModel.dateTime);
            //this.selectedRepeatTimeSlot = this.appointmentModel.time;
            //this.repeatedAppointmentModel.time = this.appointmentModel.time;
            this.repeatedAppointmentModel.patientId = this.appointmentModel.patientId;
            this.repeatedAppointmentModel.patientClinicMRN = this.appointmentModel.patientClinicMRN;
            this.repeatedAppointmentModel.patientName = this.appointmentModel.patientName;
            this.repeatedAppointmentModel.visitTypeId = this.appointmentModel.visitTypeId;
            this.repeatedAppointmentModel.appointmentClassId = this.appointmentModel.appointmentClassId;
            this.repeatedAppointmentModel.flag = this.appointmentModel.flag;
            this.repeatedAppointmentModel.description = this.appointmentModel.description;
            this.displayRepeatAppointmentPopup = true;
        }
    }

    selectRepeatedAppointmentClass(classId: any) {
        this.repeatedAppointmentModel.appointmentClassId = classId;
    }

    saveRepeatedAppointment() {

        let timeSlot = this.repeatingTimeSlotsList.find(ts => ts.name == this.selectedRepeatTimeSlot);
        if (timeSlot != undefined) {
            //Update the model

            this.repeatedAppointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.repeatedAppointmentModel.doctorId = this.doctorId;
            this.repeatedAppointmentModel.patientId = this.patientId;
            this.repeatedAppointmentModel.slotDuration = this.slotDuration;
            this.repeatedAppointmentModel.numberOfTimeSlots = this.numberOfTimeSlots;

            this.showProgress = true;
            let thisComp = this;
            let isNewAppointment: boolean = true;
            this.receptionistService.saveOrUpdateAppointment(this.repeatedAppointmentModel)
                .subscribe(
                    function (response: any) {
                        thisComp.updateCalendarEvents(response, isNewAppointment);

                        thisComp.cancelRepeatingAppointment();

                        let msg = thisComp.translate.instant("SavedSuccessfully");
                        thisComp.toastr.success(msg, '');
                    },
                    function (error: any) {
                        thisComp.toastr.error(error.error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });
        }
        else {
            let msg = this.translate.instant("EnterDateTime");
            this.toastr.error(msg, '');
        }
    }
    onRepeatDateSelect(dateValue: Date) {
        this.repeatingTimeSlotsList = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            this.repeatingTimeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
            this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
        }
    }
    cancelRepeatingAppointment() {
        this.repeatedAppointmentModel = { id: 0 };
        this.repeatingTimeSlotsList = [];
        this.selectedRepeatDate = '';
        this.selectedRepeatTimeSlot = '';
        this.displayRepeatAppointmentPopup = false;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true))
                    this.enableNewAppointmentBtn = true;//that is used also with open,restore,close solts.can we use this boolean with save button also?

                if (item.permission.key == this.key.PatientRegistration && (item.add == true || item.fullControl == true))
                    this.enableQuickRegistrationBtn = true;

                if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true || item.edit == true))
                    this.enableSaveAppointmentPopupBtn = true;

                //
                if (item.permission.key == this.key.CancelAppointment && (item.allow))
                    this.enableCancelAppointmentBtn = true;//that is used also with open,restore,close solts.can we use this boolean with save button also?

                if (item.permission.key == this.key.SetArrivalTime && (item.allow))
                    this.enableSetArrivalTimeBtn = true;

                if (item.permission.key == this.key.OpenSlot && (item.allow))
                    this.enableOpenSlotBtn = true;

                if (item.permission.key == this.key.CloseSlot && (item.allow))
                    this.enableCloseSlot = true;

                if (item.permission.key == this.key.RestoreSlots && (item.allow))
                    this.enableRestoreSlot = true;

            }
        }

    }

    handleloadEvents(doctorId: any) {
        debugger;
        let event: any = {};
        event.view = {};
        event.view.intervalStart = {};
        event.view.start = {};

        event.view.name = "basicDay";
        event.view.intervalStart._d = new Date('2/2/2020');
        event.view.start._d = new Date('2/2/2021');

        let thisComp = this;

        if (!this.initialView) {

            let viewName = event.view.name;
            this.isDayView = false;
            this.dayViewSelectedDate = new Date();

            if (viewName == 'basicDay') {
                this.isDayView = true;
                this.dayViewSelectedDate = event.view.intervalStart._d;
                this.selectedDateAsString = this.utilityClass.getUtcDateAsString(this.dayViewSelectedDate);
            }

            let startDate: Date = event.view.start._d;
            let startDay = startDate.getDate();
            let endDate: Date = new Date(startDate.getTime());
            endDate.setDate(startDay + 6);

            let periodArgs: any = {};
            periodArgs.startDate = startDate;
            periodArgs.endDate = endDate;
            periodArgs.doctorId = doctorId;


            thisComp.showLoading = true;
            thisComp.receptionistService.getAppointmentsWithinPeriod(periodArgs)
                .subscribe(
                    function (response: any) {
                        thisComp.appointementsList = response.appointments;
                        thisComp.events = response.calendarEvents;
                        thisComp.calendarOptions.events = thisComp.events;
                        thisComp.adjustEventsAccordingToCalendarView();

                        thisComp.currentHijriWeekDays = response.currentWeekHijriDates;

                        thisComp.fillCurrentWeekDays(startDate);

                        thisComp.adjustCalendarView(); /*call this method inside FillHijriWeekDays*/
                        //thisComp.FillHijriWeekDays()

                        if (thisComp.gotoDateString) {
                            // open appointment popup
                            thisComp.fillAppointmentinfo(thisComp.selectedAppointmentIDFromSearch);
                        }

                        //thisComp.GetSelectedDateAppointmentsToPrint();

                    },
                    function (error: any) {
                        thisComp.toastr.error(error.error, '');
                        thisComp.showLoading = false;
                    },
                    function () {
                        thisComp.showLoading = false;
                        thisComp.gotoDateString = '';
                    });

            //this.FillHijriWeekDays();
        }
    }

    adjustEventsAccordingToCalendarView() {
        //if (this.isDayView) {
        //    for (let event of this.events) {
        //        event.title = event.fullTitle;
        //    }
        //}
        //else {
        //    for (let event of this.events) {
        //        event.title = event.shortTitle;
        //    }
        //}
        for (let event of this.events) {
            event.title = event.shortTitle;
        }
    }

    handleDayClick(evt: any) {

        let selectedDateTime: any = this.utilityClass.convertToUTCDateTime(evt.date._d);
        let selectedSlot: TimeSlot = new TimeSlot(selectedDateTime);

        this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
        let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(selectedDateTime);

        let availableSlot = availableTimeSlots.find(ts => ts.name == selectedSlot.name);
        if (availableSlot != undefined) {
            this.addNewAppointment();

            this.selectedDate = selectedDateTime;

            this.onDateSelect(this.selectedDate);
            this.selectedTimeSlot = availableSlot.name;
        }
    }

    handleCalendarSelect(start: any, end: any) {

        if (this.isDoctorSelected) {
            this.calendarRangeStartDateTime = this.utilityClass.convertToUTCDateTime(start._d);
            this.calendarRangeEndDateTime = this.utilityClass.convertToUTCDateTime(end._d);

            let dayDate: any = this.utilityClass.getDateComponent(this.calendarRangeStartDateTime);
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(dayDate);

            this.calendarRangeFirstSlot = new TimeSlot(this.calendarRangeStartDateTime);
            this.calendarRangeLastSlot = new TimeSlot(this.calendarRangeEndDateTime);

            let availableSlot = availableTimeSlots.find(ts => ts.name == this.calendarRangeFirstSlot.name);

            //Selection is in an Open area
            if (availableSlot != undefined) {

                this.showBookOrCloseModal();

            }
            else //Selection is in a Closed area
            {
                this.prepareAndShowOpenSlotsModal();
            }
        }
        else {
            let msg = this.translate.instant("NoDoctorSelected");
            this.toastr.error(msg);
        }

    }

    calculateNumberOfSlots(startDateTime: any, endDateTime: any) {
        let dayDate: any = this.utilityClass.getDateComponent(startDateTime);
        let slotDuration = this.receptionistAppointmentManager.getSlotDurationForDate(dayDate);
        let diffInMiliSeconds = Math.abs(endDateTime - startDateTime);
        let diffInMinutes = (diffInMiliSeconds / 1000) / 60;

        let numberOfTimeSlots: number = 1;
        if (slotDuration != undefined && slotDuration != 0)
            numberOfTimeSlots = diffInMinutes / slotDuration;

        return numberOfTimeSlots;
    }

    prepareAndShowNewAppointmentModal() {
        //Close the options popup
        this.btnCloseBookOrCloseModal.nativeElement.click();

        this.addNewAppointment();

        this.selectedDate = this.calendarRangeStartDateTime;

        this.onDateSelect(this.selectedDate);
        this.selectedTimeSlot = this.calendarRangeFirstSlot.name;
        this.numberOfTimeSlots = this.calculateNumberOfSlots(this.calendarRangeStartDateTime, this.calendarRangeEndDateTime);

        this.inquireWaitInAppointment();
    }

    prepareAndShowCloseSlotsModal() {
        //Close the options popup
        // this.btnCloseBookOrCloseModal.nativeElement.click();

        this.selectedDateForOpenCloseSlot = this.calendarRangeStartDateTime;
        this.selectedStartTimeForOpenCloseSlot = this.calendarRangeFirstSlot.name;
        this.selectedEndTimeForOpenCloseSlot = this.calendarRangeLastSlot.name;

        this.onOpneCloseSlotDateSelect(this.selectedDateForOpenCloseSlot);

        this.showSessionExtensionPopupForCloseSlot();

    }

    prepareAndShowOpenSlotsModal() {

        this.selectedDateForOpenCloseSlot = this.calendarRangeStartDateTime;
        this.selectedStartTimeForOpenCloseSlot = this.calendarRangeFirstSlot.name;
        this.selectedEndTimeForOpenCloseSlot = this.calendarRangeLastSlot.name;

        this.onOpneCloseSlotDateSelect(this.selectedDateForOpenCloseSlot);

        this.showSessionExtensionPopupForOpenSlot();
    }

    showPatientAdvancedSearchDialog() {
        this.displayPatientAdvancedSearch = true;
    }

    managePatientSelection(selectedPatientMrn: any) {
        this.patientClinicMrn = selectedPatientMrn;
        this.displayPatientAdvancedSearch = false;
        this.getPatient()
    }

    handleEventResize(e: any) {
        alert('Event resized');
    }

    handleEventDrop(e: any) {
        alert('Event dropped');
    }

    getSelectedAppointment(appointmentWrapper: any) {
        if (appointmentWrapper) {
            // select current doctor 
            let selectedItem = this.getSelectedDoctor(appointmentWrapper.doctorId);

            if (selectedItem) {
                this.selectedDoctor = selectedItem;
                this.handelSelectedNode(selectedItem);

                this.gotoDateString = appointmentWrapper.appointmentDate;
                this.selectedAppointmentIDFromSearch = appointmentWrapper.id;
                this.btnCloseReceptionistSearchPopup.nativeElement.click();
            }
        }
    }

    getSelectedDoctor(doctorID: any): any {
        let selectedNode;
        for (let node of this.organizationStructureTree) {
            selectedNode = this.getDoctorNode(node, doctorID);
            if (selectedNode)
                break;
        }

        return selectedNode;
    }

    private getDoctorNode(node: any, doctorID: Number): any {

        if (node.children) {

            for (let childNode of node.children) {
                if (childNode.type == 'SecurityUser' && childNode.data == doctorID) {
                    return childNode;
                }
                else
                    return this.getDoctorNode(childNode, doctorID);

            }
        }
    }

    openPatientProfile() {
        this.router.navigate(['/patient/file', this.patientId]);
        this.btnCloseAppointmentPopup.nativeElement.click();
    }

    inquireWaitInAppointment() {

        this.waitInInquiry = '';

        if ((!this.appointmentModel || this.appointmentModel.id == 0) && this.selectedDate) {

            this.appointmentModel.dateTime = this.utilityClass.getUtcDateTime(this.selectedDate);
            this.appointmentModel.doctorId = this.doctorId;
        }

        let vm = this;
        this.receptionistService.inquiryWaitInAppointment(this.appointmentModel)
            .subscribe(
                function (response: any) {
                    vm.waitInInquiry = response;
                },
                function (error: any) {

                },
                function () {

                });
    }

    getServiceTimeSlots(serviceTimeSlotId: string) {
        var serviceTimeSlot = this.serviceTimeSlotsList.find(srv => srv.id == serviceTimeSlotId);

        if (serviceTimeSlot) {
            this.numberOfTimeSlots = serviceTimeSlot.noOfTimeSlots;
        }
    }

    handelDayClickEvent(e: any) {
        alert(e.calEvent.date);
    }

    GetSelectedDateAppointmentsToPrint() {
        let selectedDayAppoitmentsOriginal: any[] = [];
        let vm = this;

        if (this.isDayView && this.events) {
            for (let event of this.events) {
                if (event.dateTime && this.utilityClass.getDateTimeFromString(event.dateTime).getDate() == this.dayViewSelectedDate.getDate()) {
                    let evnt: any = {};
                    evnt.dateTime = this.utilityClass.getDateTimeFromString(event.start);
                    evnt.title = this.utilityClass.getAppointmentTime(event.start, event.end) + event.fullTitle;
                    selectedDayAppoitmentsOriginal.push(evnt);
                }
            }

            // order apointments by datetime
            selectedDayAppoitmentsOriginal.sort(function (a, b) {
                // to get a value that is either negative, positive, or zero.
                return a.dateTime - b.dateTime;
            });

            this.SelectedDayAppoitments = [];
            for (let event of selectedDayAppoitmentsOriginal) {
                var items = event.title.split('**');
                this.SelectedDayAppoitments.push({
                    time: items[0],
                    mrn: items[1],
                    name: items[2],
                    mobile: items[3],
                    arrivalTime: items[4],
                    confirmed: items[5],
                    remarks: items[6]
                });
            }

            this.btnDisplayCurrentDayAppointment.nativeElement.click();
        }
    }

    isAppointmentSlotsOpened(timeSlot: Date): boolean {

        let isSlotOpened = true;

        if (this.numberOfTimeSlots > 1) {
            for (let i = 0; i < this.numberOfTimeSlots; i++) {

                let minutes = timeSlot.getMinutes() + (i * this.slotDuration);
                let appointmentDate: Date = new Date(timeSlot.getFullYear(), timeSlot.getMonth(),
                    timeSlot.getDate(), timeSlot.getHours(), timeSlot.getMinutes());

                appointmentDate.setMinutes(minutes);

                let slotName = this.utilityClass.getFormattedTime(appointmentDate.getHours(), appointmentDate.getMinutes());

                let existedSlot = this.timeSlotsList.find(slt => slt.name == slotName);

                if (existedSlot == null || existedSlot == undefined) {
                    isSlotOpened = false;
                    break;
                }
            }
        }

        return isSlotOpened;
    }

    handleNavDayClick(event: any) {
        debugger;
        this.isDayView = true;
        this.dayViewSelectedDate = event.date._d;
        this.selectedDateAsString = this.utilityClass.getUtcDateAsString(this.dayViewSelectedDate);

        this.GetSelectedDateAppointmentsToPrint();
    }


    resetCallendarOptions(scrollTime: string) {
        let temp = this.calendarOptions;
        temp.scrollTime = scrollTime;
        this.calendarOptions = temp;
    }

}

export class CalendarEvent {
    id: number | undefined;
    title: string | undefined;
    start: string | undefined;
    end: string | undefined;
    rendering: string | undefined;
    className: string | undefined;
    dateTime: string | undefined;
    fullTitle: string | undefined;

    display: string | undefined;
    startEditable: boolean | undefined;
    durationEditable: boolean | undefined;
    constraints: any;
    overlap: boolean | undefined;
    allows: any;
    backgroundColor: string | undefined;
    borderColor: string | undefined;
    textColor: string | undefined;
    classNames!: string[];
}