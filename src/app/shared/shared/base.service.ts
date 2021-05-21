import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { UtilityClass } from '../../shared/shared/utility.class';
import { HttpHeaders } from '@angular/common/http';
export class BaseService {

    public headers: any;
    // requestOptions: RequestOptions;
    utilityClass: UtilityClass = new UtilityClass();

    constructor(public localStorage: LocalStorageService, public router: Router) {

        // var accessToken = "Bearer " + localStorage.retrieve("AccessToken");

        // this.headers = new Headers({
        //    'Content-Type': 'application/json',
        //    'Authorization': accessToken
        // });

        // this.requestOptions = new RequestOptions({ headers: this.headers });
    }
    //this code is added to comment location.reload()
    get requestOptions(): any {
        // var accessToken = "Bearer " + this.localStorage.retrieve("AccessToken");

        // this.headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': accessToken
        // });

        // return new RequestOptions({ headers: this.headers });
        var accessToken = "Bearer " + this.localStorage.retrieve("AccessToken");
        const options = {
            headers: new HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Authorization', accessToken)
        }
        return options;
    }

    public extractData(res: any) {
        if (res == null)
            return {};

        let body = res.json();
        return body || {};
    }

    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        if (error.status == "401") {
            //navigate to current URL
            this.router.navigate(['/shared/unauthorized']);
        }
        else if (error.status == "404") {
            error = 'Item not found';
        }

        return Promise.reject(error._body || error);
    }

    public addModificationData(toSaveObject: any): any {
        let dtNow: Date = new Date();

        if (toSaveObject.constructor === Array) {
            for (let obj of toSaveObject) {
                obj.lastModifierID = this.localStorage.retrieve("UserID");
                obj.lastModifierName = this.localStorage.retrieve("FullUserName");
                obj.lastModificationDate = this.utilityClass.getUtcDateTime(dtNow);
            }
        }
        else {
            toSaveObject.lastModifierID = this.localStorage.retrieve("UserID");
            toSaveObject.lastModifierName = this.localStorage.retrieve("FullUserName");
            toSaveObject.lastModificationDate = this.utilityClass.getUtcDateTime(dtNow);
        }

        return toSaveObject;
    }

}