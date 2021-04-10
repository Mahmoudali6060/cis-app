
import { Component, Injectable } from '@angular/core';
import { BaseService } from '../../shared/shared/base.service';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { remoteServerUrl } from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReceptionistService extends BaseService {

    patientApiURL = remoteServerUrl + 'Patient';
    appointmentApiURL = remoteServerUrl + 'appointment';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }
    getPatientById(id: string): any {
        return this.http.get(`${this.patientApiURL + "/getPatientById"}/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    SearchForPatient(body: any): any {

        return this.http.post(this.patientApiURL + "/searchForPatients", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    searchForAppointments(body: any): any {

        return this.http.post(this.appointmentApiURL + "/searchForAppointments", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    getAppointmentById(id: string): any {
        return this.http.get(`${this.appointmentApiURL + "/getAppointmentById"}/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    updatePatientActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.patientApiURL + "/updatePatientActiveState", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAppointmentDetailsWrapper(id: string): any {
        return this.http.get(`${this.appointmentApiURL}/getAppointmentDetailsWrapper/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAppointmentsWithinPeriod(body: any): any {
        return this.http.post(this.appointmentApiURL + "/getAppointmentsWithinPeriod", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getPatientByClinicMRN(mrn: string): any {
        return this.http.get(`${this.patientApiURL}/getPatientByClinicMRN/${mrn}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveOrUpdateAppointment(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.appointmentApiURL + "/saveOrUpdateAppointment", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    updatePatientArrivalTime(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.appointmentApiURL + "/updatePatientArrivalTime", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAllPatientRequests(clinicId: string): any {
        return this.http.get(`${this.patientApiURL}/allPatientRequests/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    confirmPatientRequest(requestId: string): any {
        return this.http.get(`${this.appointmentApiURL}/confirmPatientRequest/${requestId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    cancelPatientRequest(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.patientApiURL + "/cancelPatientRequest", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getDivisionDoctorsWithAppointments(divisionId: string): any {
        return this.http.get(`${this.appointmentApiURL}/getDivisionDoctorsWithAppointments/${divisionId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createPatientAccountRequest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.patientApiURL + "/createPatientRequest", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    saveNewSessionExtension(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.appointmentApiURL + "/saveNewSessionExtension", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    restoreTimeSlots(restoreTimeSlotsWrapper: any): any {
        restoreTimeSlotsWrapper = this.addModificationData(restoreTimeSlotsWrapper);

        return this.http.post(this.appointmentApiURL + "/restoreTimeSlots", restoreTimeSlotsWrapper, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getDoctorClinicDivision(doctorId: string): any {
        return this.http.get(`${this.appointmentApiURL}/getDoctorClinicDivision/${doctorId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    notifyRelatedUser(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.appointmentApiURL + "/notifyRelatedUser", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }


    inquiryWaitInAppointment(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.appointmentApiURL + "/inquiryWaitInAppointment", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    createPatientRequest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.appointmentApiURL + "/patientQuickRegisteration", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    convertGregorainDateToHijri(body: any): any {
        return this.http.post(this.appointmentApiURL + "/convertGregorainDateToHijri", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getAllDoctorsInClinic(clinicId: any): any {
        return this.http.get(`${this.appointmentApiURL}/getAllDoctorsInClinic/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

}