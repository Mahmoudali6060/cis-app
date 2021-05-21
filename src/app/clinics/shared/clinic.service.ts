
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { remoteServerUrl } from '../../app.config';
import { BaseService } from '../../shared/shared/base.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClinicService extends BaseService {

    webApiURL = remoteServerUrl + 'Clinic';

    constructor(private http: HttpClient,
        public localStorage: LocalStorageService,
        public router: Router) {
        super(localStorage, router);
    }

    ///////////////////////// Diagnosis Groups //////////////////////////

    getDiagnosisGroupsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getDiagnosisGroupsForTreeView/${clinicId}`, this.requestOptions)
            ////.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getDiagnosisGroupsWithoutServicesForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getDiagnosisGroupsWithoutDiagnosisForTreeView/${clinicId}`, this.requestOptions)
            ////.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAllDiagnosis(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getAllDiagnosis/${clinicId}`, this.requestOptions)
            ////.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getDiagnosisGroupById(id: string): any {
        return this.http.get(`${this.webApiURL}/getDiagnosisGroupById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createDiagnosisGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createDiagnosisGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateDiagnosisGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDiagnosisGroup", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    updateDiagnosisGroupActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDiagnosisGroupActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getDiagnoseById(id: string): any {
        return this.http.get(`${this.webApiURL}/getDiagnoseById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createDiagnose(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createDiagnose", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    updateDiagnose(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDiagnose", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    updateDiagnoseActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDiagnoseActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }
    ////////////////////////////////// Clinic Inventory  /////////////////////////////////////////


    CreateClinicInventory(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createClinicInventory", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }
    GetClinicProducts(clinicId: number, isActiveItem: boolean, isNullQuantity: boolean): any {
        return this.http.get(`${this.webApiURL}/getClinicProducts/${clinicId}/${isActiveItem}/${isNullQuantity}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    ///////////////////////// Drugs Groups ////////////////////////////////////////

    getDrugsGroupsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getDrugsGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getDrugsGroupsWithoutDrugsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getDrugsGroupsWithoutDrugsForTree/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAllDrugs(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getAllDrugs/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getDrugsGroupById(id: string): any {
        return this.http.get(`${this.webApiURL}/getDrugsGroupById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createDrugsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createDrugsGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    updateDrugsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDrugsGroup", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    updateDrugsGroupActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDrugsGroupActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }


    getDrugById(id: string): any {
        return this.http.get(`${this.webApiURL}/getDrugById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createDrug(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createDrug", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    updateDrug(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDrug", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    updateDrugActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateDrugActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }
    ////////////////////////////////////////////////////////////////////////////////

    ///////////////////////// Laboratory Tests Groups /////////////////////////////

    getLaboratoryTestsGroupsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getLaboratoryTestsGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getLaboratoryTestsGroupsWithoutTestsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getLaboratoryTestsGroupsWithoutTestsForTree/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }
    getAllLaboratoryTests(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getAllLaboratoryTests/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }


    getLaboratoryTestsGroupById(id: string): any {
        return this.http.get(`${this.webApiURL}/getLaboratoryTestsGroupById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createLaboratoryTestsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createLaboratoryTestsGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateLaboratoryTestsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateLaboratoryTestsGroup", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    updateLaboratoryTestsGroupActiveState(body: any): any {
        return this.http.post(this.webApiURL + "/updateLaboratoryTestsGroupActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }


    getLaboratoryTestById(id: string): any {
        return this.http.get(`${this.webApiURL}/getLaboratoryTestById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createLaboratoryTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createLaboratoryTest", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    updateLaboratoryTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateLaboratoryTest", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    updateLaboratoryTestActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateLaboratoryTestActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    ////////////////////////////////////////////////////////////////////////////////


    ///////////////////////// Radiology Tests Groups //////////////////////////////

    getRadiologyTestsGroupsForTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getRadiologyTestsGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getRadiologyTestsGroupsOnlyForTreeView(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getRadiologyTestsGroupsOnlyForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getAllRadiologyTests(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getAllRadiologyTests/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getRadiologyTestsGroupById(id: string): any {
        return this.http.get(`${this.webApiURL}/getRadiologyTestsGroupById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createRadiologyTestsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createRadiologyTestsGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    updateRadiologyTestsGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateRadiologyTestsGroup", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    updateRadiologyTestsGroupActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateRadiologyTestsGroupActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }


    getRadiologyTestById(id: string): any {
        return this.http.get(`${this.webApiURL}/getRadiologyTestById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createRadiologyTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createRadiologyTest", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateRadiologyTest(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateRadiologyTest", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    updateRadiologyTestActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateRadiologyTestActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    ////////////////////////////////////////////////////////////////////////////////

    //////ProductGroup
    createProductGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createProductsGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createProduct(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createProduct", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getProductGroupById(id: string, checkParentChildren: boolean): any {
        return this.http.get(`${this.webApiURL + "/getProductGroupById"}/${id}/${checkParentChildren}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    getProductUnits(): any {
        return this.http.get(this.webApiURL + "/getProductUnit", this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    updateProductGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateProductsGroup", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getProductById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getProductById"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateProduct(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateProduct", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getProductsGroupsForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getProductsGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    //get all active products only
    getActiveProductsGroupsForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getActiveProductsGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getProductsGroupsOnlyForTree(clinicId: string): any {

        return this.http.get(`${this.webApiURL}/getProductsGroupsOnlyForTree/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    /////
    updateProductsGroupActiveState(body: any, checkParentChildren: boolean): any {
        body = this.addModificationData(body);

        return this.http.post(`${this.webApiURL + "/updateProductsGroupActiveState"}/${checkParentChildren}`, body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    updateProductActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateProductActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ///////////servicegroup

    createServiceGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createServiceGroup", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    createService(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createService", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getServiceGroupById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getServiceGroupById"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateServiceGroup(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateServiceGroup", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getServiceById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getServiceById"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateService(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateService", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));

    }

    getServiceGroupsForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getServiceGroupsForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getAllServiceGroupsWithoutServicesForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getAllServiceGroupsWithoutServicesForTreeView/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getAllServices(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getAllServices/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }

    getServiceGroupsOnlyForTreeView(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getServiceGroupsOnlyForTree/${clinicId}`)
            //.pipe()
            //.catch((error: any) => this.handleError(error));

    }
    /////
    updateServiceGroupActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateServiceGroupActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    updateServiceActiveState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateServiceActiveState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getOrganizationStructureTree(clinicId: number): any {
        return this.http.get(`${this.webApiURL + "/organizationStructureTree"}/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getOrganizationStructureWrapper(): any {
        return this.http.get(this.webApiURL + "/organizationStructureWrapper", this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    saveMedicalDepartmentsandDivisions(body: any): any {

        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveMedicalDepartmentsandDivisions", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    saveNonMedicalDepartment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveNonMedicalDepartment", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getNonMedicalDepartmentById(departmentId: number): any {
        return this.http.get(`${this.webApiURL + "/nonMedicalDepartment"}/${departmentId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    saveNonMedicalDivision(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveNonMedicalDivision", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getNonMedicalDivisionById(divisionId: number): any {
        return this.http.get(`${this.webApiURL + "/nonMedicalDivision"}/${divisionId}`, this.requestOptions)
            //.pipe()
            // .catch(this.handleError);
    }

    savePhysicalResource(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/savePhysicalResource", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getPhysicalResourceById(resourceId: number): any {
        return this.http.get(`${this.webApiURL + "/physicalResource"}/${resourceId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    toggleOrganizationStructureActivation(id: number, active: boolean, objectType: string) {

        return this.http.get(`${this.webApiURL + "/toggleOrgStructureItemActivation"}/${id}/${active}/${objectType}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ///////////service Packages
    getAllservicePackages(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/allServicePackages/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getAllservicePackagesForClinic(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/allServicePackagesForClinic/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createServicePackage(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createServicePackage", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getServicePackageById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getServicePackageById"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateServicePackage(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateServicePackage", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    toggleServicePackageActivation(id: string): any {
        return this.http.get(`${this.webApiURL + "/activation"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    ///appointment shedule
    createAppointmentSchedule(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createAppointmentSchedule", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getAppointmentScheduleById(id: string): any {
        return this.http.get(`${this.webApiURL + "/getAppointmentScheduleById"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateAppointmentSchedule(body: any): any {
        body = this.addModificationData(body);

        return this.http.put(this.webApiURL + "/updateAppointmentSchedule", body, this.requestOptions) // ...using put request
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getClinicReachInformation(clinicId: string): any {
        return this.http.get(`${this.webApiURL + "/getClinicReachInformation"}/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveorUpdateReachInformation(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveReachInfo", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getHumanResourcesWrapper(clinicId: string): any {
        return this.http.get(this.webApiURL + "/getHumanResourcesWrapper/" + clinicId, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveHumanResource(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveHumanResource", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateHumanResource(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateHumanResource", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAllMedicalDepartments(clinicId: string): any {
        return this.http.get(`${this.webApiURL + "/allMedicalDepartments"}/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getDivisionsUnderDepartment(deptId: string): any {
        return this.http.get(`${this.webApiURL + "/divisionsUnderDepartment"}/${deptId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getClinicDivisionWithEMR(divisionId: string): any {
        return this.http.get(`${this.webApiURL + "/clinicDivisionWithEMR"}/${divisionId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    saveorUpdateEMRMasterItem(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveEMRMasterItem", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getHumanResourceById(id: string): any {
        return this.http.get(this.webApiURL + "/getHumanResourceById/" + id, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    toggleEMRMasterItemActivation(id: number, active: boolean, objectType: string) {
        return this.http.get(`${this.webApiURL + "/toggleEMRMasterItemActivation"}/${id}/${active}/${objectType}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ////////////appointment schedule
    getAppointmentScheduleWrapper(): any {
        return this.http.get(this.webApiURL + "/getAppointmentScheduleWrapper", this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getAllAppointmentSchedules(doctorId: string): any {
        return this.http.get(`${this.webApiURL}/allAppointmentSchedules/${doctorId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAllAppointmentSchedulesUnderClinic(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/allAppointmentSchedulesUnderClinic/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getOrganizationStructureTreeWithDoctorsOnly(clinicId: number): any {
        return this.http.get(`${this.webApiURL + "/organizationTreeWithDoctorsOnly"}/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getAllAppointmentSchedulesUnderDepartment(deptId: string): any {
        return this.http.get(`${this.webApiURL}/allAppointmentSchedulesUnderDepartment/${deptId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    toggleAppointmentScheduleActivation(id: string): any {
        return this.http.get(`${this.webApiURL + "/activateAppointmentSchedule"}/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    deleteAppointmentSchedule(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deleteAppointmentSchedule"}/${id}`, this.requestOptions) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));
    }
    deleteAppointmentScheduleSession(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deleteAppointmentScheduleSession"}/${id}`, this.requestOptions) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));
    }
    getAllAppointmentSchedulesUnderDivision(divisionId: string): any {
        return this.http.get(`${this.webApiURL}/allAppointmentSchedulesUnderDivision/${divisionId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    //purchasing order
    getPurchasingOrderWrapper(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getPurchasingOrderWrapper/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getProductsUnderClinic(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/getProductsUnderClinic/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    savePurchasingOrders(body: any[]): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/savePurchasingOrders", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createPurchasingOrder(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createPurchasingOrder", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    createAndSendPurchasingOrder(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createAndSendOrder", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    editPurchasingOrder(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/editPurchasingOrder", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    editAndSendPurchasingOrder(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/editAndSendPurchasingOrder", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getAllPurchasingOrders(clinicId: string): any {
        return this.http.get(`${this.webApiURL}/allPurchasingOrders/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getPurchasingOrderById(orderId: string): any {
        return this.http.get(`${this.webApiURL}/getPurchasingOrderById/${orderId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    receivePurchasingOrder(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/receivePurchasingOrder", body, this.requestOptions)
            //.pipe(this.extractData)
            // //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    ///////////////////////////////Feedback////////////////////////////////////////////////

    getClinicFeedbacks(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getClinicFeedbacks/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    getFeedbackById(feedbackId: number): any {
        return this.http.get(`${this.webApiURL + "/getFeedbackById"}/${feedbackId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    saveReply(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/saveReply", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateFeedback(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateFeedback", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////// Clinic news ////////////////////////////////////////////
    getClinicNews(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getClinicNews/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    getClinicNewsById(id: number): any {
        return this.http.get(`${this.webApiURL}/getClinicNewsById/${id}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    createClinicNews(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createClinicNews", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    updateClinicNews(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateClinicNews", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    changeClinicNewsActivationState(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/changeClinicNewsActivationState", body, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    CreateClinicQuantityAdjustment(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/createClinicQuantityAdjustment", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    updateClinicQuantity(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/updateClinicQuantity", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    getAllQuantityAdjustment(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getAllQuantityAdjustment/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }

    getAllDoctorsRequests(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/getAllDoctorsRequests/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }


    calculateRequestOfInventoryByDoctor(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/calculateRequestOfInventoryByDoctor", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }


    getClinicDashboardWrapper(clinicId: number): any {
        return this.http.get(`${this.webApiURL}/clinicDashboardWrapper/${clinicId}`, this.requestOptions)
            //.pipe()
            //.catch((error: any) => this.handleError(error));
    }
    sendOrderToVendor(body: any): any {
        body = this.addModificationData(body);

        return this.http.post(this.webApiURL + "/sendOrderToVendor", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    deletePurchaseItem(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deletePurchaseItem"}/${id}`, this.requestOptions) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));
    }
    deletePurchaseOrder(id: string): any {
        return this.http.delete(`${this.webApiURL + "/deletePurchaseOrder"}/${id}`, this.requestOptions) // ...using delete request
            //.pipe() // ...and calling .json() on the response to return data
            //.catch((error: any) => this.handleError(error));
    }

    getDoctorRequestsSearchWrapper(clinicId:any): any {
        return this.http.get(`${this.webApiURL}/getDoctorRequestsSearchWrapper/${clinicId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }

    getDoctorsRequestsAccordingtoSearchCriteria(body: any): any {
        return this.http.post(this.webApiURL + "/getDoctorsRequestsAccordingtoSearchCriteria", body, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
    closeOrder(orderId: any): any {
        return this.http.get(`${this.webApiURL}/closeOrder/${orderId}`, this.requestOptions)
            //.pipe(this.extractData)
            //.catch((error: any) => this.handleError(error));
    }
}