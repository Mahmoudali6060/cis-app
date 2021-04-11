import { Component, Input, OnInit, EventEmitter, ViewChild, ElementRef, Output, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { PatientService } from '../shared/patient.service'
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ReceptionistAppointmentManager } from '../../receptionists/shared/receptionist-appointment.manager';
import { UtilityClass } from '../../shared/shared/utility.class';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
@Component({

    selector: 'patient-mrf',
    templateUrl: 'patient-mrf.component.html'
})

export class PatientMrfComponent implements OnInit {
    selectAddressTab: boolean = true;
    selectedPatientId!: string;
    active = true;
    selectedPatient: any = {};
    showProgress = false;
    divisionId!: any;
    parentType: string = "PatientFileType";
    detailsUrl = "PatientReceptionistAttachmentsDetails";

    documentDetailsUrl: string = "patientAttachments";
    fileNameUploadTxt: string = this.translate.instant("File");

    fileNameTxt: string = this.translate.instant("FileName");
    btnUploadText = this.translate.instant("UploadFile");
    fileType: boolean = true;
    showDocumentDetails: boolean = true;
    appointmentModel: any = { id: 0 };
    selectedDate!: any;
    selectedTimeSlot!: any;
    patientName = '';
    selectedDept: any = {};
    appointmentSchedulesList: any[] = [];
    sessionExtensionsList: any[] = [];
    appointmentClassesList: any[] = [];
    visitTypesList: any[] = [];
    timeSlotsList: any[] = [];
    appointementsList: any[] = [];
    currentWeekDays: any[] = [];
    slotDuration!: number;
    doctorId!: any;
    clinicId!: any;
    entireDayTimeSlotsList: any[] = [];
    pateintMrfs: any[] = [];
    noteId = "new";
    getMrf: boolean = false;

    @ViewChild('appointmentModalButton') appointmentModalButton!: ElementRef;
    @ViewChild('btnClostAppointmentModal') btnClostAppointmentModal!: ElementRef;
    @ViewChild('btnAddNewNote') btnAddNewNote!: ElementRef;
    @ViewChild('newClinicalNoteComp') newClinicalNoteComp!: any;

    // @ViewChild('triggerOldNotes') triggerOldNotes: ElementRef;
    utilityClass: UtilityClass = new UtilityClass();
    receptionistAppointmentManager!: ReceptionistAppointmentManager;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAttachmentBtn: boolean = false;
    enableNewAppointmentBtn: boolean = false;
    enableSaveNewAppointmentBtn: boolean = false;
    enableNewNoteBtn: boolean = false;
    defaultAppointmentId: string = '';

    constructor(private patientService: PatientService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
        , private accountService: AccountService
    ) { }


    ngOnInit(): void {

        this.showProgress = true;
        this.selectedPatientId = this._route.snapshot.params['id'];
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.doctorId = this.storage.retrieve("UserID");
        this.clinicId = this.storage.retrieve("ClinicID");
        this.defaultAppointmentId = this._route.snapshot.params['appointmentId'];

        let vm = this;
        this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
        this.entireDayTimeSlotsList = this.receptionistAppointmentManager.getFullDayTimeSlots(null);
        this.patientService.getPatientById(vm.selectedPatientId.toString()).subscribe(
            function (response: any) {
                vm.selectedPatient = response;
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

        /*if (vm.divisionId == "0" && vm.defaultAppointmentId == "0" && vm.enableNewNoteBtn == true) {
            vm.enableNewNoteBtn = false;
            vm.enableAttachmentBtn = false;
            vm.enableNewAppointmentBtn = false;
        }*/

    }
    addNewAppointment() {
        this.clear();
        this.getAppointmentDetailsWrapper(this.doctorId);
        this.showAppointmentModal();

    }
    showAppointmentModal() {
        this.appointmentModalButton.nativeElement.click();
    }

    selectAppointmentClass(classId: any) {
        this.appointmentModel.appointmentClassId = classId;
    }
    getAppointmentDetailsWrapper(doctorId: any) {

        this.showProgress = true;
        let thisComp = this;
        this.patientService.getAppointmentDetailsWrapper(doctorId)
            .subscribe(
                function (response: any) {

                    thisComp.appointmentSchedulesList = response.appointmentSchedules;
                    thisComp.sessionExtensionsList = response.sessionExtensions;
                    thisComp.appointmentClassesList = response.appointmentClasses;
                    thisComp.visitTypesList = response.visitTypes;
                    thisComp.appointementsList = response.appointments;
                },
                function (error: any) {
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
    }
    onDateSelect(dateValue: Date) {
        this.timeSlotsList = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            this.timeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
            this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
        }
    }
    closeAppointmentModal() {
        this.btnClostAppointmentModal.nativeElement.click();
    }
    clear() {
        this.appointmentModel = { id: 0 };
        this.timeSlotsList = [];
        this.selectedDate = '';
        this.selectedTimeSlot = '';
    }
    saveOrUpdateAppointment() {

        this.appointmentModel.clinicId = this.clinicId;
        this.appointmentModel.clinicDivisionId = this.divisionId;
        //if (this.appointmentModel.arrivalTime)//time only
        //    this.appointmentModel.arrivalTime = this.utilityClass.getUtcDateTime(this.appointmentModel.arrivalTime);

        //if (this.appointmentModel.reconfirmDate)//date
        //{
        //    this.appointmentModel.reconfirmDate = this.utilityClass.getUtcDateTime(this.reconfirmTime);
        //}


        //if (this.appointmentModel.cancellationDate != undefined) {//date only
        //    this.appointmentModel.cancellationDate = this.utilityClass.getUtcDate(this.appointmentModel.cancellationDate);
        //    this.appointmentModel.cancelled = this.cancelled;
        //}

        let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedTimeSlot);
        if (timeSlot != undefined) {
            //Update the model
            //if (this.appointmentModel.cancelled)//in case of cancelled = true
            //    this.timeSlotForCancelledApp = timeSlot;

            this.appointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.appointmentModel.doctorId = this.doctorId;
            this.appointmentModel.patientId = this.selectedPatient.id;
            this.appointmentModel.slotDuration = this.slotDuration;

            this.showProgress = true;
            let thisComp = this;
            let isNewAppointment: boolean = (this.appointmentModel.id == 0) ? true : false;

            this.patientService.saveOrUpdateAppointment(this.appointmentModel)
                .subscribe(
                    function (response: any) {
                        thisComp.appointmentModel = response;
                        thisComp.closeAppointmentModal();

                        let msg = thisComp.translate.instant("SavedSuccessfully");
                        thisComp.toastr.success(msg, '');
                    },
                    function (error: any) {
                        thisComp.toastr.error(error, '');
                        thisComp.showProgress = false;
                    },
                    function () {
                        thisComp.showProgress = false;
                    });

        }
        else {
            let msg = this.translate.instant("EnterDateAndTime");
            this.toastr.error(msg, '');
        }
    }

    /*//to fix
    getAllPatientMRF(): void {
        let vm = this;
        vm.showProgress = true;
        if (this.selectedPatientId && this.selectedPatientId != undefined) {
            this.patientService.GetAllPatientMRF(this.selectedPatientId)
                .subscribe(
                function (response:any) {
                    vm.pateintMrfs = response;
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }
    */

    getPatientMrf(value: any) {
        this.getMrf = value;
        this.pateintMrfs = [];
        this.patientService.notifyOther({ option: 'call_child', value: 'From child' });

        // this.triggerOldNotes.nativeElement.click();
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.AddPatientAttachment && (item.allow == true))
                    this.enableAttachmentBtn = true;
                if (item.permission.key == this.key.AppointmentSchedule && (item.fullControl == true || item.add == true || item.edit == true))
                    this.enableNewAppointmentBtn = true;
                if (item.permission.key == this.key.EMR && (item.fullControl == true))
                    this.enableNewNoteBtn = true;
            }
        }

    }

    openAddNewNote() {
        if (this.noteId == '')
            this.noteId = 'new';
        else
            this.noteId = '';

        this.newClinicalNoteComp.setSelectedTab(0);
        this.btnAddNewNote.nativeElement.click();
    }

}