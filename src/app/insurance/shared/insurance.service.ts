import {Component, Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';

import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';

import {remoteServerUrl} from '../../app.config';
import {BaseService} from '../../shared/shared/base.service';

import { InsuranceInvoice } from '../../classes/insuranceInvoice.class';
import { Charge }   from '../../classes/charge.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsuranceService extends BaseService {

    webApiURL = remoteServerUrl + 'Insurance';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    getAllInsuranceCompanies(): any {
        return this.http.get(`${this.webApiURL + "/allInsuranceCompanies"}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    
    updateInsuranceCompanyActivation(body: any): any {
        body = this.addModificationData(body);
        return this.http.put(this.webApiURL + "/updateCompanyActivation", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getInsuranceCompanyByID(companyId:any): any {
        return this.http.get(`${this.webApiURL + "/getInsuranceCompanyByID"}/${companyId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    SaveInsuranceCompanyBasic(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/saveCompanyBasic", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    UpdateInsuranceCompanyBasic(body: any): any {
        body = this.addModificationData(body);
        return this.http.put(this.webApiURL + "/updateCompanyBasic", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    savePolicy(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/savePolicy", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updatePolicy(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/updatePolicy", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getPolicyDetails(id:any): any {
        return this.http.get(`${this.webApiURL + "/getPolicyDetails/" + id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getCoverageDetailsWrapper(clinicID:any): any {
        return this.http.get(`${this.webApiURL + "/coverageDetailsWrapper/" + clinicID}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }     


    getPolicyCoverageDetails(id:any , clinicId:any): any {
        return this.http.get(`${this.webApiURL}/getPolicyCoverageDetails/${id }/${clinicId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveorUpdateCoverageDetail(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/saveorUpdateCoverageDetail", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    copyCoverageDetail(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/copyCoverageDetail", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    copyPolicy(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/copyPolicy", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAllInvoicesToday(clinicId:any): any {
        return this.http.get(`${this.webApiURL + "/getAllInvoicesToday"}/${clinicId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getInvoiceSearchParametersWrapper(): any {
        return this.http.get(`${this.webApiURL + "/getInvoiceSearchParametersWrapper"}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getInvoiceClaimsSearchWrapper(): any {
        return this.http.get(`${this.webApiURL + "/getInvoiceClaimsSearchWrapper"}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    
    searchForInvoiceClaims(body: any): any {
        return this.http.post(this.webApiURL + "/searchForInvoiceClaims", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    generateInvoice(body: any): any {
        return this.http.post(this.webApiURL + "/generateInvoice", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getInvoiceById(selectedInvoiceId: number): any {
        return this.http.get(`${this.webApiURL + "/getInvoiceById/" + selectedInvoiceId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    cancelInvoice(body: InsuranceInvoice): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/cancelInvoice", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    endorseInvoice(body: InsuranceInvoice): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/endorseInvoice", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveCompanyPayment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveCompanyPayment", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    releaseCompanyCharge(body: Charge): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/releaseCompanyCharge", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    rejectCompanyCharge(body: Charge): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/rejectCompanyCharge", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    resubmitCompanyCharge(body: Charge): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/resubmitCompanyCharge", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    searchForInvoices(body: any): any {
        return this.http.post(this.webApiURL + "/searchForInvoices", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getCompanyTransactionSearchWrapper(): any {
        return this.http.get(`${this.webApiURL}/getCompanyTransactionSearchWrapper`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getCompanyTransactionsAccordingtoSearchCriteria(body: any): any {
        return this.http.post(this.webApiURL + "/getCompanyTransactionsAccordingtoSearchCriteria", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    refundCompanyFromPrePaid(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/refundCompanyFromPrePaid", body, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getCompanyFinanceFields(companyId:any, cliniId:any): any {
        return this.http.get(`${this.webApiURL}/getCompanyFinanceFields/${companyId}/${cliniId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getCompanyPaymentById(paymentId: number): any {
        return this.http.get(`${this.webApiURL}/getCompanyPaymentById/${paymentId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getCoverageDetailsById(coverageId: number): any {
        return this.http.get(`${this.webApiURL}/coverageDetailById/${coverageId}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAllServices(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getAllServices/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getAllDiagnosis(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getAllDiagnosis/${clinicId}`, this.requestOptions)
            .pipe()
            //.catch((error: any) => this.handleError(error));
    }

}