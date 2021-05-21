
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { remoteServerUrl } from '../../app.config';
import { BaseService } from '../../shared/shared/base.service';

import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class NurseService extends BaseService{

    headers = new Headers({ 'Content-Type': 'application/json' });
    webApiURL = remoteServerUrl + 'organization';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    // constructor(private http: HttpClient) { }

    getAllOrganizations(): any {

        return this.http.get(`${this.webApiURL}`, this.requestOptions)
        ////.pipe(this.extractData)

        return this.http.get(this.webApiURL)
            ////.pipe(this.extractData);
            
            // //.catch(this.handleError);
    }

    getOrganizationsById(id: string): any {
        return this.http.get(`${this.webApiURL}/${id}`)
            ////.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    saveOrganization(body: any): any {
        let bodyString = JSON.stringify(body); // Stringify payload
        let options: any = { headers: this.headers }; // Create a request option

        return this.http.post(this.webApiURL, body, options) // ...using post request
            //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    updateOrganization(body: any): any {
        let bodyString = JSON.stringify(body); // Stringify payload
        let options: any = { headers: this.headers }; // Create a request option

        return this.http.put(this.webApiURL, body, options) // ...using put request
            //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            // //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    deleteOrganization(id: string): any {
        return this.http.delete(`${this.webApiURL}/${id}`) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            // //.catch(this.handleError);//...errors if any
    }

    getOrganizationBasicWrapper(): any {
        return this.http.get(this.webApiURL + "/basicWrapper")
            //.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    getAllOrganizationServices(id: string): any {

        return this.http.get(`${this.webApiURL + "/services"}/${id}`)
            //.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    getServiceWrapper(): any {
        return this.http.get(this.webApiURL + "/serviceWrapper")
            //.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    deleteOrganizationService(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deleteOrganizationService"}/${id}`) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            // //.catch(this.handleError);//...errors if any
    }


    getAllOrganizationBranches(id: string): any {
        return this.http.get(`${this.webApiURL + "/branches"}/${id}`)
            //.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    getOrganizationBranch(id: string): any {
        return this.http.get(`${this.webApiURL + "/getBranch"}/${id}`)
            //.pipe(this.extractData)
            // //.catch(this.handleError);
    }

    saveOrganizationBranch(body: any): any {
        let options:any = { headers: this.headers }; // Create a request option

        return this.http.post(this.webApiURL + "/saveBranch", body, options) // ...using post request
            //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            // //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    updateOrganizationBranch(body: any): any {
        let options:any = { headers: this.headers }; // Create a request option

        return this.http.put(this.webApiURL + "/updateBranch", body, options) // ...using put request
            //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    deleteOrganizationBranch(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deleteBranch"}/${id}`) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            //.catch(this.handleError);//...errors if any
    }


    getOrganizationAddress(id: string): any {
        return this.http.get(`${this.webApiURL + "/getAddress"}/${id}`)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    SaveOrganizationAddress(body: any): any {
        let options:any = { headers: this.headers }; // Create a request option

        return this.http.put(this.webApiURL + "/saveAddress", body, options) // ...using post request
            //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    getOrganizationProfile(id: string): any {
        return this.http.get(`${this.webApiURL + "/profile"}/${id}`)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    updateOrganizationActivation(id: string): any {
        return this.http.get(`${this.webApiURL + "/activation"}/${id}`)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    //uploadFile(fileToUpload: any) {
    //    let input = new FormData();
    //    input.append("file", fileToUpload);

    //    return this.http.post(this.webApiURL + "/upload"  , input);
    //}


    upload(fileToUpload: any): any {
        let input = new FormData();
        input.append("file", fileToUpload);

        let serviceUrl = remoteServerUrl + "Upload";

        return this.http
            .post(serviceUrl + "/upload", input);
    }


    getOrganizationSentRequests(id: string): any {
        return this.http.get(`${this.webApiURL + "/sentRequests"}/${id}`)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    getOrganizationReceivedRequests(id: string): any {
        return this.http.get(`${this.webApiURL + "/receivedRequests"}/${id}`)
            //.pipe(this.extractData)
            //.catch(this.handleError);
    }

    //upload(body: any): any {
    //    return this.http
    //        .post("/api/uploadFile", input);

    //    let options:any = new RequestOptions({ headers: this.headers }); // Create a request option

    //    return this.http.post(this.webApiURL + "/upload", body, options) // ...using post request
    //        //.pipe(this.extractData)////.pipe((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //        //.catch(this.handleError);//.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    //}

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {};
    // }

    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}