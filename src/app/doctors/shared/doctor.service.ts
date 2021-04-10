
import {Component, Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';
import {BaseService} from '../../shared/shared/base.service';
import { LocalStorageService } from 'ng2-webstorage';
import {remoteServerUrl} from '../../app.config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DoctorService extends BaseService {

    doctorApiURL = remoteServerUrl + 'Doctor';
    appointmentApiURL = remoteServerUrl + 'appointment';
    webApiURL = remoteServerUrl + 'Clinic';
    patientApiURL = remoteServerUrl + 'Patient';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }
    getDoctorAppointments(doctorId: string, clinicId: string): any {
        return this.http.get(`${this.doctorApiURL}/doctorAppointments/${doctorId}/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getAllClinics(doctorId: string): any {
        return this.http.get(`${this.doctorApiURL}/getAllClinics/${doctorId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createInventoryRequest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createInventoryRequest", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAllInventoryRequests(doctorId: string, clinicId: string): any {
        return this.http.get(`${this.doctorApiURL}/getAllInventoryRequest/${doctorId}/${clinicId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    deleteInventoryRequest(id: string): any {
        return this.http.delete(`${this.doctorApiURL}/deleteInventoryRequest/${id}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getProductsGroupsForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getProductsGroupsForTreeView/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    addSeenTimeForAppointment(body: any): any {
        return this.http.post(this.appointmentApiURL + "/saveOrUpdateAppointment", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    searchForDoctorAppointments(body: any): any {

        return this.http.post(this.appointmentApiURL + "/searchForDoctorAppointments", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getDoctorAppointmentsWrapper(doctorId: string): any {
        return this.http.get(`${this.doctorApiURL}/doctorAppointmentsWrapper/${doctorId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    ////////////////////////////////// Diagnosis /////////////////////////////

    getClinicDivisionDiagnoseGroupsForTreeView(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionDiagnoseGroupsForTreeView/${divisionId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getPatientSnapshotDiagnosis(patientId: number): any {
        return this.http.get(`${this.doctorApiURL}/getPatientSnapshotDiagnosis/${patientId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicNoteDiagnosis(clinicNoteId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteDiagnosis/${clinicNoteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicNoteDiagnoseById(clinicNoteDiagnoseId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteDiagnoseById/${clinicNoteDiagnoseId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    createClinicNoteDiagnose(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createClinicNoteDiagnose", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateClinicNoteDiagnose(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/updateClinicNoteDiagnose", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    deleteClinicNoteDiagnose(clinicNoteDiagnoseId: number): any {
        return this.http.delete(`${this.doctorApiURL}/deleteClinicNoteDiagnose/${clinicNoteDiagnoseId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    changeClinicNoteDiagnoseCurrentStatus(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/changeClinicNoteDiagnoseCurrentStatus", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////// Medications /////////////////////////////
    getClinicNoteMedicationWrapper(clinicNoteId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteMedicationWrapper/${clinicNoteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getPatientSnapshotMedications(patientId: number): any {
        return this.http.get(`${this.doctorApiURL}/getPatientSnapshotMedications/${patientId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicNoteMedications(clinicNoteId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteMedications/${clinicNoteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicNoteMedicationById(clinicNoteMedicationId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteMedicationById/${clinicNoteMedicationId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    createClinicNoteMedication(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createClinicNoteMedication", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateClinicNoteMedication(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/updateClinicNoteMedication", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    deleteClinicNoteMedication(clinicNoteMedicationId: number): any {
        return this.http.delete(`${this.doctorApiURL}/deleteClinicNoteMedication/${clinicNoteMedicationId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    changeClinicNoteMedicationCurrentStatus(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/changeClinicNoteMedicationCurrentStatus", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////// Surgery /////////////////////////////

    getPatientSnapshotSurgeries(patientId: number): any {
        return this.http.get(`${this.doctorApiURL}/getPatientSnapshotSurgeries/${patientId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getSurgeryById(surgeryId: number): any {
        return this.http.get(`${this.doctorApiURL}/getSurgeryById/${surgeryId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    createSurgery(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createSurgery", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateSurgery(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/updateSurgery", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    deleteSurgery(surgeryId: number): any {
        return this.http.delete(`${this.doctorApiURL}/deleteSurgery/${surgeryId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ///////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////// Drug Allergy ///////////////////////////////////////

    getPatientSnapshotDrugAllergies(patientId: number): any {
        return this.http.get(`${this.doctorApiURL}/getPatientSnapshotDrugAllergies/${patientId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getDrugAllergyById(drugAllergyId: number): any {
        return this.http.get(`${this.doctorApiURL}/getDrugAllergyById/${drugAllergyId}`, this.requestOptions)
            .pipe();
            //.catch((error: any) => this.handleError(error));
    }

    createDrugAllergy(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createDrugAllergy", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateDrugAllergy(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/updateDrugAllergy", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    deleteDrugAllergy(drugAllergyId: number): any {
        return this.http.delete(`${this.doctorApiURL + "/deleteDrugAllergy"}/${drugAllergyId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicDivisionDrugGroupsForTreeView(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionDrugGroupsForTreeView/${divisionId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ///////////////////////////////////////////////////////////////////////////////////
    
    getServiceGroupsForTreeView(clinicId: string): any {
        //webApiURL represents clinic service
        return this.http.get(`${this.webApiURL}/getServiceGroupsForTreeView/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getNoteDiagnosis(noteId: string): any {
        return this.http.get(`${this.doctorApiURL}/getNoteDiagnosis/${noteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createClinicNoteService(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createClinicNoteService", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    getNoteServicesList(noteId: number): any {
        return this.http.get(`${this.doctorApiURL}/clinicNoteServices/${noteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getNoteServicePackagesList(noteId: number): any {
        return this.http.get(`${this.doctorApiURL}/clinicNoteServicePackages/${noteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    deleteNoteService(id: string): any {
        return this.http.delete(`${this.doctorApiURL + "/deleteNoteService"}/${id}`, this.requestOptions) // ...using delete request
            .pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));//...errors if any
    }
    updateNoteService(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.doctorApiURL + "/updateClinicNoteService", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getNoteServiceById(noteServiceId: string): any {
        return this.http.get(`${this.doctorApiURL}/getNoteServiceById/${noteServiceId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getClinicDivisionServiceGroupsForTreeView(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionServiceGroupsForTreeView/${divisionId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getClinicDivisionServicePackageGroupsForTreeView(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionServicePackageGroupsForTreeView/${divisionId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getAllservicePackages(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/allServicePackages/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getClinicDivisionLaboratoryTestsGroupsForTreeView(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionLaboratoryTestsGroupsForTreeView/${divisionId}`, this.requestOptions)
            .pipe()
              //.catch((error: any) => this.handleError(error));
    }
    getClinicDivisionRadiologyTestsGroups(divisionId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicDivisionRadiologyTestsGroups/${divisionId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getClinicNoteLabTestById(labTestId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteLabTestById/${labTestId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getClinicNoteRadTestById(radTestId: string): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteRadTestById/${radTestId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    updateClinicNoteLabTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.doctorApiURL + "/updateClinicNoteLabTest", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    updateClinicNoteRadTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.doctorApiURL + "/updateClinicNoteRadTest", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    deleteClinicNoteLabTest(id: string): any {
        return this.http.delete(`${this.doctorApiURL + "/deleteClinicNoteLabTest"}/${id}`, this.requestOptions) // ...using delete request
            .pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));//...errors if any
    }
    deleteClinicNoteRadTest(id: string): any {
        return this.http.delete(`${this.doctorApiURL + "/deleteClinicNoteRadTest"}/${id}`, this.requestOptions) // ...using delete request
            .pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));//...errors if any
    }
    getClinicNoteLabTests(noteId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteLabTests/${noteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getClinicNoteRadTests(noteId: number): any {
        return this.http.get(`${this.doctorApiURL}/getClinicNoteRadTests/${noteId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createClinicNoteLabTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createClinicNoteLabTest", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    createClinicNoteRadTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.doctorApiURL + "/createClinicNoteRadTest", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    getLaboratoryTestsGroupsForTreeView(clinicId: string): any {
        //webApiURL represents clinic service
        return this.http.get(`${this.webApiURL}/getLaboratoryTestsGroupsForTreeView/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getRadiologyTestsGroupsForTreeView(clinicId: string): any {
        //webApiURL represents clinic service
        return this.http.get(`${this.webApiURL}/getRadiologyTestsGroupsForTreeView/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    /////////////////////
    createPatientAttachments(keyName: string, fileType: string, body: any): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL}/saveAttachment/${keyName}/${fileType}/${body}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    updatePatientAttachments(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateAttachment", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getPatientType(): any {
        return this.http.get(this.webApiURL + "/getAllPatientType", this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    fillTemplate(selectedTemplateId: number, clinicNoteId: number): string {
        var file = `${this.doctorApiURL + "/applyTemplate"}/${selectedTemplateId}/${clinicNoteId}`;
        return file;
    }

    getPatientMrfByUnifiedMrn(unifiedMrn: string): any {
        return this.http.get(`${this.patientApiURL + "/getPatientMrfByUnifiedMrn"}/${unifiedMrn}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getPatientByMrn(unifiedMrn: string): any {
        return this.http.get(`${this.patientApiURL + "/getPatientByUnifiedMrn"}/${unifiedMrn}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    markAppointmentAsSeen(body: any): any {
        return this.http.post(this.appointmentApiURL + "/markAppointmentAsSeen", body, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getPatientNoteDiagnoseWrapper(): any {
        return this.http.get(this.doctorApiURL + "/patientNoteDiagnoseWrapper", this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
}