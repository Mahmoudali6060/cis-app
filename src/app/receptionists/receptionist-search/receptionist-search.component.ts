import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReceptionistService } from '../shared/receptionist.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';

import { UtilityClass } from '../../shared/shared/utility.class'
import { Table } from 'primeng/table';

@Component({

    selector: 'receptionist-search',
    templateUrl: 'receptionist-search.component.html',
})

export class ReceptionistSearchComponent implements OnInit {

    utilityClass: UtilityClass = new UtilityClass();
    periodStartDate: Date = new Date();
    periodEndDate: Date = new Date();
    selectBasicTab: boolean = true;
    filterString!: string;
    searchCriteria: any = {};
    appointmentDetails: any = {};
    appointmentCriteria: any = {};
    patientId = '';
    //clinicMrn = '';
    lstToTranslated: string[] = [];
    showActive: boolean = false;
    showEdit: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = true;

    appointmentId: any;
    matchedPatients: any = [];
    matchedAppontments: any = [];
    active = true;
    model: any = {};

    @Output() onBookAppointment = new EventEmitter();
    @Output() onAppointmentSelected = new EventEmitter<any>();

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;

    toPrintDiv: string = "matchedAppoitmentsToPrintDiv";
    doctorsList: any[] = [];
    lang: string = 'en';
    @ViewChild('dt') table!: Table;
    constructor(private receptionistService: ReceptionistService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['visitTypeName', 'visitNameTranslation', 'appointmentClassName', 'classNameTranslation', 'patientName', 'patientNameTranslation', 'doctorName', 'doctorNameTranslation'];
        this.lang = this.storage.retrieve('SelectedLanguage');

        this.getAllDoctorsInClinic();
    }

    onSubmit(): void {

    }

    display: boolean = false;
    todayStatus: boolean = false;
    weekStatus: boolean = false;
    monthStatus: boolean = false;
    yearStatus: boolean = false;
    periodOfTime: boolean = false;
    displayPatientTable: boolean = false;
    pastOrFuture: boolean = false;

    selectDate(oppintmentDate: string) {
        if (oppintmentDate == "Days") {
            this.todayStatus = true;
            this.monthStatus = false;
            this.weekStatus = false;
            this.yearStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = true;
        }
        else if (oppintmentDate == "Week") {
            this.weekStatus = true;
            this.monthStatus = false;
            this.periodOfTime = false;
            this.yearStatus = false;
            this.todayStatus = false;
            this.pastOrFuture = true;

        }
        else if (oppintmentDate == "Month") {
            this.monthStatus = true;
            this.periodOfTime = false;
            this.yearStatus = false;
            this.todayStatus = false;
            this.weekStatus = false;
            this.pastOrFuture = true;

        }

        else if (oppintmentDate == "Year") {
            this.yearStatus = true;
            this.todayStatus = false;
            this.weekStatus = false;
            this.monthStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = true;

        }
        else if (oppintmentDate == "PeriodOfTime") {
            this.periodOfTime = true;
            this.yearStatus = false;
            this.todayStatus = false;
            this.weekStatus = false;
            this.monthStatus = false;
            this.pastOrFuture = false;


        }
        else {
            this.todayStatus = false;
            this.monthStatus = false;
            this.weekStatus = false;
            this.yearStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = false;
            //this.appointmentCriteria.receptionistMethodsSearch = "";
        }
    }

    getAllDoctorsInClinic() {
        let thisComponent = this;
        let clinicId = this.storage.retrieve('ClinicId');
        thisComponent.showProgress = true;
        this.receptionistService.getAllDoctorsInClinic(clinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.doctorsList = response;
                },
                function (error: any) {
                    thisComponent.toastr.error(error);
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    getAllPatients() {
        let thisComponent = this;
        thisComponent.receptionistService.SearchForPatient(thisComponent.searchCriteria)
            .subscribe(
                function (response: any) {

                    thisComponent.matchedPatients = response;
                    //thisComponent.display = false;
                    //thisComponent.displayPatientTable = true;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });




    }
    GetId(appointmentModel: any) {
        this.appointmentId = appointmentModel.id;
        this.onAppointmentSelected.emit(appointmentModel);
        //this.getAppointmentById();
    }


    GetAllAppointments() {
        let thisComponent = this;

        //Update the dates
        if (this.periodOfTime) {
            this.appointmentCriteria.searchStartDate = this.utilityClass.getUtcDate(this.periodStartDate);
            this.appointmentCriteria.searchEndDate = this.utilityClass.getUtcDate(this.periodEndDate);

            if (!(this.appointmentCriteria.searchEndDate >= this.appointmentCriteria.searchStartDate)) {
                let msg = thisComponent.translate.instant('ScheduleStartDateValidation');
                thisComponent.toastr.error(msg, '');
                return;
            }
        }

        thisComponent.showProgress = true;

        thisComponent.receptionistService.searchForAppointments(thisComponent.appointmentCriteria)
            .subscribe(
                function (response: any) {

                    thisComponent.matchedAppontments = response;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });




    }

    showDialog() {
        this.display = true;
    }

    getAppointmentById() {
        let thisComponent = this;

        this.receptionistService.getAppointmentById(this.appointmentId)
            .subscribe(
                function (response: any) {

                    thisComponent.appointmentDetails = response;


                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }



    clear(): void {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }


    imageChanged(response: any) {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined) {
                this.model.attachmentInfo = null;
                return;
            }

            this.model.attachmentInfo = attchmentInfo;
            this.model.attachmentInfo.originalName = response.originalName;
            this.model.attachmentInfo.keyName = response.keyName;
            this.model.attachmentInfo.fullPath = response.fullPath;
            this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.model.attachmentInfo = null;
        }

    }
    managePatientSelection(selectedPatientMrn: any) {
        this.appointmentCriteria.patientClinicMRN = selectedPatientMrn;
        this.display = false;
        this.GetAllAppointments();
    }

    bookAppoint() {
        this.onBookAppointment.emit();
    }



}