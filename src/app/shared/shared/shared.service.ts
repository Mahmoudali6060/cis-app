
import {Component, Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import {BaseService} from './base.service';
import {remoteServerUrl} from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService extends BaseService {

    //private headers = new Headers({ 'Content-Type': 'application/json' });
    webApiURL = remoteServerUrl ;
    webApiURLPatient = remoteServerUrl + 'Patient';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    getAddressWrapper(): any {
        return this.http.get(this.webApiURL + "address" + "/addressWrapper", this.requestOptions)
              .pipe(this.extractData);
            // //.catch((error: any) => this.handleError(error));
    }

    uploadFile(fileToUpload: any): any {
        let input = new FormData();
        input.append("file", fileToUpload);

        return this.http.post(this.webApiURL + "attachment" + "/upload", input)
            .pipe(this.extractData);
            // catch((error: any) => this.handleError(error));
    }

    getAllAttachments(id: string, type: string):any {
        return this.http.get(`${this.webApiURL + "attachment" + "/attachments"}/${id}/${type}`, this.requestOptions)
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }

    prepareDownloadUrl(id: string): string{
        var url = `${this.webApiURL + "attachment" + "/GetFile"}/${id}`;
        return url;
    }

    private extractContent(res: Response) {
        // var blob: Blob = res.blob();
        // window['saveAs'](blob, 'test.pdf');
    }
    /////Mohammed
    getAttachmentWrapper(): any {
        return this.http.get(`${this.webApiURL + "attachment" + "/attachmentWrapper"}`, this.requestOptions)
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }


    getLocationById(id: string): any {
        return this.http.get(`${this.webApiURL + "address/getLocation"}/${id}`, this.requestOptions)
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }



    saveLocation(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "address/saveLocation", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }

    updateLocation(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "address/updateLocation", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)//.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            // //.catch((error: any) => this.handleError(error));
    }

    deleteLocation(id: string): any {
        return this.http.delete(`${this.webApiURL}address/deleteLocation/${id}`, this.requestOptions) // ...using delete request
            .pipe();
            // //.catch((error: any) => this.handleError(error));
    }

    deleteAttachment(id: string): any {
        return this.http.delete(`${this.webApiURL}attachment/delete/${id}`, this.requestOptions) // ...using delete request
            .pipe();
            // //.catch((error: any) => this.handleError(error));
    }

    getAttachmentObject(id: string): any {
        return this.http.get(`${this.webApiURL + "attachment/get"}/${id}`, this.requestOptions)
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }

    saveAttachment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "attachment/saveAttachment", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }
    getPatientType(): any {
        return this.http.get(this.webApiURLPatient + "/getAllPatientType", this.requestOptions)
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));

    }
    updateAttachment(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "attachment/updateAttachment", body, this.requestOptions) // ...using post request
            .pipe(this.extractData)
            // //.catch((error: any) => this.handleError(error));
    }

}