
import { Component, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';

import { remoteServerUrl } from '../../app.config';
import { BaseService } from '../../shared/shared/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class PatientService extends BaseService {

    //   private headers = new Headers({ 'Content-Type': 'application/json' });
    webApiURL = remoteServerUrl + 'Patient';
    productApiURL = remoteServerUrl + 'Clinic';
    appointmentApiURL = remoteServerUrl + 'appointment';
    doctorApiURL = remoteServerUrl + 'Doctor';
    notify: Subject<any> = new Subject<any>();
    notifyObservable$: any//;= this.notify.asObservable();

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
        this.notifyObservable$ = this.notify.asObservable();

    }
    ///personal patient data.
    public notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }
    updatePatientPersonalData(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updatePatientPersonalData", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    getProductUnits(): any {
        return this.http.get(this.productApiURL + "/getProductUnit", this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    createChiefComplaint(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createChiefComplaint", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    updateChiefComplaintData(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/updateChiefComplaintData", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    GetAllPatientMRF(patientId: string): any {
        return this.http.get(`${this.doctorApiURL}/getAllPatientMRF/${patientId}`, this.requestOptions)
        //.pipe()
        //.catch((error: any) => this.handleError(error));
    }

    getChiefComplaintById(patientId: number, doctorId: string, clinicId: string, appointmentId: number, userType: boolean): any {
        return this.http.get(`${this.doctorApiURL}/getChiefComplaintById/${patientId}/${doctorId}/${clinicId}/${appointmentId}/${userType}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getChiefComplaintByNoteId(clinicNoteId: string): any {
        return this.http.get(`${this.doctorApiURL}/getChiefComplaintByNoteId/${clinicNoteId}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    createPatientAccount(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createPatientAccount", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    checkIfCurrentBirthDateChanged(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/checkIfCurrentBirthDateChanged", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    updatePatientAccount(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updatePatientAccount", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    getPatientPersonalWrapper(): any {
        return this.http.get(this.webApiURL + "/patientPersonalWrapper", this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    getPatientById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getPatientById"}/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    getPatientByClinicMRN(mrn: string): any {
        return this.http.get(`${this.webApiURL + "/getPatientByClinicMRN"}/${mrn}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    createPatientInsurance(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createPatientInsurance", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    updatePatientInsurance(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updatePatientInsurance", body, this.requestOptions)
        //.pipe()
        //.catch((error: any) => this.handleError(error));
    }
    getPatientInsuranceById(id: string): any {
        return this.http.get(`${this.webApiURL}/getPatientInsuranceById/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    getAllPatientInsurances(patientId: string): any {
        return this.http.get(`${this.webApiURL}/allPatientInsurances/${patientId}`, this.requestOptions)
        //.pipe()
        //.catch((error: any) => this.handleError(error));
    }
    getpatientInsuranceWrapper(): any {
        return this.http.get(this.webApiURL + "/patientInsuranceWrapper", this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getPatientReachInformation(patientId: string): any {
        return this.http.get(`${this.webApiURL + "/getClinicReachInformation"}/${patientId}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    saveorUpdateReachInformation(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/saveReachInfo", body, this.requestOptions)
        //.pipe()
        //.catch((error: any) => this.handleError(error));
    }
    deletePatientInsurance(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deletePatientInsurance"}/${id}`, this.requestOptions) // ...using delete request
        //.pipe() // ...and calling .json() on the response to return data
        //.catch((error: any) => this.handleError(error));//...errors if any
    }
    togglePatientInsuranceActivation(id: string): any {

        return this.http.get(`${this.webApiURL + "/activatePatientInsurance"}/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    //updatePatientAccount(body: any): any {
    //    return this.http.put(this.webApiURL + "/updatePatientAccount", body, this.requestOptions)
    //        //.pipe(this.extractData)
    //       .catch(this.handleError);
    //}
    ////////////////////

    ///Attachement


    createPatientAttachments(keyName: string, fileType: string, body: any): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/saveAttachment/${keyName}/${fileType}/${body}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    updatePatientAttachments(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateAttachment", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getPatientType(): any {
        return this.http.get(this.webApiURL + "/getAllPatientType", this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    upload(fileToUpload: any): any {
        let input = new FormData();
        input.append("file", fileToUpload);

        let serviceUrl = remoteServerUrl + "Upload";

        return this.http
            .post(serviceUrl + "/upload", input);
    }

    saveClinicNoteRemarks(body: any): any {
        body = this.addModificationData(body);

        let options = new RequestOptions({ headers: this.headers });

        return this.http.put(this.webApiURL + "/saveNoteRemarks", body, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    getClinicNoteById(id: number): any {
        return this.http.get(`${this.webApiURL + "/getClinicNoteById"}/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        // .catch(this.handleError);
    }
    getAppointmentDetailsWrapper(id: string): any {
        return this.http.get(`${this.appointmentApiURL}/getAppointmentDetailsWrapper/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    saveOrUpdateAppointment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.appointmentApiURL + "/saveOrUpdateAppointment", body, this.requestOptions)
        //.pipe()
        //.catch((error: any) => this.handleError(error));
    }

    getClinicNoteWithAllData(id: string): any {
        return this.http.get(`${this.webApiURL + "/getClinicNoteWithAllData"}/${id}`, this.requestOptions)
        //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

}