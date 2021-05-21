
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';

import { remoteServerUrl } from '../../app.config';
import { BaseService } from '../../shared/shared/base.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClaimService extends BaseService {

    webApiURL = remoteServerUrl + 'claim';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    getTodayClaims(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getTodayClaims/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getPatientPaymentWrapper(): any {
        return this.http.get(`${this.webApiURL}/getPatientPaymentWrapper`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    savePatientPayment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/savePatientPayment", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    //installment
    saveInstallment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveInstallment", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getPatientPaymentById(paymentId: number): any {
        return this.http.get(`${this.webApiURL}/getPatientPayment/${paymentId}`, this.requestOptions)
            //.pipe(this.extractData);
        //.catch((error: any) => this.handleError(error));    
    }

    getClaimDetails(id: number): any {
        return this.http.get(`${this.webApiURL}/getClaimDetails/${id}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    reProcessClaim(id: number): any {
        return this.http.get(`${this.webApiURL}/reProcessClaim/${id}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    cancelClaim(body: any): any {
        return this.http.post(this.webApiURL + "/cancelClaim", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    changeClaimDate(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/changeClaimDate", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }
    overrideCharge(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/overrideCharge", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    releaseCharge(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/releaseCharge", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    markSatisfiedCharge(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/markSatisfiedCharge", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    getPatientAllTransactionsWithinClinic(patientId: any, cliniId: any): any {
        return this.http.get(`${this.webApiURL}/getPatientAllTransactionsWithinClinic/${patientId}/${cliniId}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    getPatientTransactionSearchWrapper(clinicId: any): any {
        return this.http.get(`${this.webApiURL}/PatientTransactionSearchWrapper/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }


    getPatientTransactionsAccordingtoSearchCriteria(body: any): any {
        return this.http.post(this.webApiURL + "/getPatientTransactionsAccordingtoSearchCriteria", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getClaimsSearchParametersWrapper(clinicId: any): any {
        return this.http.get(`${this.webApiURL}/getClaimsSearchParametersWrapper/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    searchForClaims(body: any): any {
        return this.http.post(this.webApiURL + "/searchForClaims", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    reFundFromPrePaid(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/reFundFromPrePaid", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    getPatientFinanceFields(patientId: any, cliniId: any): any {
        return this.http.get(`${this.webApiURL}/patientFinanceFields/${patientId}/${cliniId}`, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

    updatePrepaidBalance(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/updatePrepaidBalance", body, this.requestOptions)
            //.pipe(this.extractData)
        //.catch((error: any) => this.handleError(error));
    }

}