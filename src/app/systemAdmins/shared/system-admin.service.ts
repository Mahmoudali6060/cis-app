
import {Component, Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';

import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';

import {remoteServerUrl} from '../../app.config';
import {BaseService} from '../../shared/shared/base.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SystemAdminService extends BaseService {

    webApiURL = remoteServerUrl + 'administration';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }














    administrationWebApiURL = remoteServerUrl + 'administration';

    getVendors(): any {
        return this.http.get(this.administrationWebApiURL + "/GetAllVendors", this.requestOptions)
            //.pipe()
            //.catch(this.handleError);
    }

   
    getVendorById(id: string): any {
        return this.http.get(`${this.administrationWebApiURL}/getVendorById/${id}`,this.requestOptions)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    createVendor(body: any): any {
        body = this.addModificationData(body);


        return this.http.post(this.administrationWebApiURL + "/createVendor", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    updateVendor(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.administrationWebApiURL + "/updateVendor", body, this.requestOptions)
            //.pipe()
            //.catch(this.handleError);
    }


    getDashboardWrapper(): any {
        debugger;
        return this.http.get(this.webApiURL + "/dashboardWrapper", this.requestOptions)
            // .pipe(this.extractData)
            //.catch(this.handleError);
    }
}