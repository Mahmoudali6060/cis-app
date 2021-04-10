import {Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable }     from 'rxjs';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

import {BaseService} from './base.service';
import {remoteServerUrl} from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharityRequestService extends BaseService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });
    webApiURL = remoteServerUrl + 'charityRequest';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService, public router: Router)
    {
        super(localStorage, router);
    }

    getRequestWrapper(): any {
        return this.http.get(this.webApiURL + "/requestWrapper", this.requestOptions )
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    getVolunteerRequestWrapper(organizationId: string): any {
        return this.http.get(this.webApiURL + "/requestWrapper/" + organizationId, this.requestOptions)
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    saveCharityRequest(body: any): any {

        return this.http.post(this.webApiURL + "/saveCharityRequest", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    updateCharityRequest(body: any): any {

        return this.http.put(this.webApiURL + "/updateCharityRequest", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)//.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    approveCharityRequest(id: string): any {
        return this.http.get(`${this.webApiURL}/approveCharityRequest/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    rejectCharityRequest(id: string): any {
        return this.http.get(`${this.webApiURL}/rejectCharityRequest/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    cancelCharityRequest(id: string): any {
        return this.http.get(`${this.webApiURL}/cancelCharityRequest/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    getCharityRequestById(id: string): any {
        return this.http.get(`${this.webApiURL}/getCharityRequest/${id}`, this.requestOptions)
            .pipe(this.extractData)
            //.catch(this.handleError);
    }

    deleteCharityRequest(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteCharityRequest/${id}`, this.requestOptions) // ...using delete request
            .pipe()
            //.catch(this.handleError);
    }

}