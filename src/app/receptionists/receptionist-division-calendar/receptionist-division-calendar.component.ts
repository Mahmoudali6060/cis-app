import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ReceptionistService } from '../shared/receptionist.service'
import { ReceptionistAppointmentManager } from '../shared/receptionist-appointment.manager'

import { UtilityClass } from '../../shared/shared/utility.class'
import { calendarSlotDuration } from '../../app.config';
import { LocalStorageService } from 'ng2-webstorage';


@Component({

    selector: 'receptionist-division-calendar',
    templateUrl: 'receptionist-division-calendar.component.html',
})

export class ReceptionistDivisionCalendarComponent implements OnInit, OnChanges {

    @Input() divisonId: any;
    @Input() divisonName!: string;

    utilityClass: UtilityClass = new UtilityClass();
    receptionistAppointmentManager: ReceptionistAppointmentManager = new ReceptionistAppointmentManager([], []);

    dayTimeSlotsList: any[] = [];
    showProgress: boolean = false;
    doctorsList: any[] = [];

    today!: string;
    lang: string = '';

    constructor(
        private receptionistService: ReceptionistService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService) { }

    ngOnInit() {
        this.lang = this.localStorage.retrieve('SelectedLanguage');
    }

    ngOnChanges() {
        this.loadDoctorsWithAppointments();

        this.dayTimeSlotsList = this.receptionistAppointmentManager.getFullDayTimeSlots(null);

        this.today = this.utilityClass.getISODateFormat(new Date());

    }

    loadDoctorsWithAppointments() {

        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getDivisionDoctorsWithAppointments(this.divisonId)
            .subscribe(
                function (response: any) {

                    thisComp.doctorsList = response;

                },
                function (error: any) {
                    thisComp.toastr.error(error.error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }

    getAppointmentTitle(doctor: any, slotName: any): string {
        let appointmentTitle = '';
        if (doctor.appointments != undefined && doctor.appointments != null && doctor.appointments.length > 0) {
            let appointment = doctor.appointments.find((app: any) => app.time == slotName && app.cancelled != true);
            if (appointment != undefined)
                appointmentTitle = appointment.patientName;
        }

        return appointmentTitle;
    }

    getClassName(doctor: any, slotName: any): string {

        if (doctor.appointments != undefined) {
            let appointment = doctor.appointments.find((app: any) => app.time == slotName);
            if (appointment != undefined)
                return 'dividion-calendar-event';//Return the event style if there is an appointment
        }

        return '';
    }


}
