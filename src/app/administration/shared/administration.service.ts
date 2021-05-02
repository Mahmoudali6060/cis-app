import {Component, Injectable} from '@angular/core';
import { Observable }     from 'rxjs';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';
import {remoteServerUrl} from '../../app.config';
import {BaseService} from '../../shared/shared/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdministrationService extends BaseService {

    webApiURL = remoteServerUrl + 'administration';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    saveObject(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL, body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAll(type: string): any {
        return this.http.get(`${this.webApiURL + "/getAll"}/${type}`, this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAllActive(type: string): any {
        return this.http.get(`${this.webApiURL + "/getAllActive"}/${type}`, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    deleteItem(id: string, type: string): any {
        return this.http.delete(`${this.webApiURL}/deleteItem/${id}/${type}`, this.requestOptions)
            .pipe()
            ////.catch((error: any) => this.handleError(error));
    }
    //Region component
    getRegionWrapper(): any {
        return this.http.get(this.webApiURL + "/regionWrapper", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    getAllRegions(): any {
        return this.http.get(this.webApiURL + "/regions", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    saveRegion(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/savedRegion", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    deleteRegion(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteRegion/${id}`, this.requestOptions)
            .pipe()
            ////.catch((error: any) => this.handleError(error));
    }

    //city component
    getCityWrapper(): any {
        return this.http.get(this.webApiURL + "/cityWrapper", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }


    getFullAddressWrapper(): any {
        return this.http.get(this.webApiURL + "/fullAddressWrapper", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAllCities(): any {
        return this.http.get(this.webApiURL + "/cities", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveCity(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/savedCity", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    deleteCity(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteCity/${id}`, this.requestOptions)
            .pipe()
            ////.catch((error: any) => this.handleError(error));
    }

    //district component

    getDistrictWrapper(): any {
        return this.http.get(this.webApiURL + "/districtWrapper", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    getAllDistricts(): any {
        return this.http.get(this.webApiURL + "/districts", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveDistrict(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/savedDistrict", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    deleteDistrict(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteDistrict/${id}`, this.requestOptions)
            .pipe()
            ////.catch((error: any) => this.handleError(error));
    }

    getDivisionsWrapper(): any {
        return this.http.get(this.webApiURL + "/divisionWrapper", this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAllDivisions(): any {
        return this.http.get(this.webApiURL + "/divisions", this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveDivision(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveDivision", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveClinic(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/saveClinic", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    updateClinic(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/updateClinic", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }


    updateClinicDiscount(body: any): any {
        body = this.addModificationData(body);
        return this.http.put(this.webApiURL + "/updateClinicDiscount", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }



    getAllLocations(): any {
        return this.http.get(this.webApiURL + "/locations", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAllClinics(): any {
        return this.http.get(this.webApiURL + "/getAllClinics", this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getClinicById(id: number): any {
        return this.http.get(this.webApiURL + "/getClinicById/" + id, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getClinicDiscountById(id: string): any {
        return this.http.get(this.webApiURL + "/getClinicDiscountById/" +id, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveLocation(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/saveLocation", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    deleteLocation(id: string): any {
        return this.http.delete(`${this.webApiURL}/deleteLocation/${id}`, this.requestOptions)
            .pipe()
            ////.catch((error: any) => this.handleError(error));
    }
    ///import,export,component getConfigFilesPath
    fillConfigFilesDropDownList(): any {
        return this.http.get(this.webApiURL + "/getConfigFilesPath", this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    import(keyName: string, fileType: string, sheetName: string, selectedFileName: string): any {
        return this.http.get(`${this.webApiURL}/import/${keyName}/${fileType}/${sheetName}/${selectedFileName}`, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    export(selectedFileName: string): any {
        return this.http.get(`${this.webApiURL}/export/${selectedFileName}`, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    fillExportConfigFilesDropDownList(): any {
        return this.http.get(this.webApiURL + "/getExportConfigFilesPath", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getfileDescription(selectedName: string, selectedAction: string): any {
        return this.http.get(`${this.webApiURL + "/getDescription"}/${selectedName}/${selectedAction}`, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    prepareDownloadUrl(exportedFileName: string, selectedFileName: string): string {
        // var url = `${this.webApiURL + "attachment" + "/GetFile"}/${id}`;
        var url = `${this.webApiURL + "/download"}/${exportedFileName}/${selectedFileName}` ;
        return url;
    }
    prepareDownloadLogFileUrl(selectedAction: string) {
        var url = `${this.webApiURL + "/downloadLogFile"}/${selectedAction}` ;
        return url;
    }

    getAllDrugUnits(): any {
        return this.http.get(this.webApiURL + "/drugUnits", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveDrugUnit(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveDrugUnit", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getAllDrugFrequences(): any {
        return this.http.get(this.webApiURL + "/drugFrequencies", this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    saveDrugFrequency(body: any): any {
        body = this.addModificationData(body);
        return this.http.post(this.webApiURL + "/saveDrugFrequency", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    renewSubcscription(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/renew", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    addSmsCredit(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/addSmsCredit", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    getSystemSetting(): any {
        return this.http.get(this.webApiURL + "/getSystemSetting", this.requestOptions)
            // .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }

    updateSystemSetting(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateSystemSetting", body, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
    toggleClinicActivation(id: string): any {
        return this.http.get(`${this.webApiURL + "/toggleClinicActivation"}/${id}`, this.requestOptions)
            .pipe(this.extractData)
            ////.catch((error: any) => this.handleError(error));
    }
}