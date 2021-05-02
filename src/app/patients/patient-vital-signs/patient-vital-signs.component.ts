import { Component, OnInit, ViewChild, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({
    selector: 'patient-vital-signs',
    templateUrl: 'patient-vital-signs.component.html',
})

export class PatientVitalSignsComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;

    @Output() onCheifComplaintSaved = new EventEmitter<any>();
    @Input() passedAppointmentId: number = 0;
    @Input() noteId: string = '';

    active = true;
    chiefComplaint: any = { id: 0 };

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    doctorId!: string;
    clinicIdReq!: string;
    height!: number;
    heightValue!: number;
    heightType!: string;
    weight!: number;
    weightvalue!: number;
    userType: boolean | undefined; // if user Type equal true this mean this person is Doctor else patient
    bmi!: number;
    selectedPatientId!: number;
    selectedApointmentId!: number;
    weightType!: string;
    isDoctor: boolean = false;
    previousTab: string = '';
    nextTab: string = '';
    heightList: any[] = [];
    weightList: any[] = [];
    enableNewNoteBtn: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {
        this.loadDoctorOrNurseInfo();
        if (this.isDoctor) {
            this.previousTab = '/patient/basic/1';
            this.nextTab = '/patient/diagnosis/1';
        }
        else {
            this.previousTab = '/patient/basic/1';
            this.nextTab = '/patient/medication/1';
        }
        this.loadProductWrapper();
        //this.getChiefComplaintById();

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    loadDoctorOrNurseInfo(): void {
        if (this.chiefComplaint.clinicNote == null || this.chiefComplaint.clinicNote == undefined) {
            let clinicNote: any = {};
            this.chiefComplaint.clinicNote = clinicNote;

        }

        this.clinicIdReq = this.storage.retrieve("ClinicID");
        this.doctorId = this.storage.retrieve("UserID");
        this.isDoctor = this.storage.retrieve("IsDoctor");
        this.selectedPatientId = this._route.snapshot.params['id'];
        this.selectedApointmentId = this._route.snapshot.params['appointmentId'];

        if (this.passedAppointmentId != null && this.passedAppointmentId != undefined && this.passedAppointmentId != 0)
            this.selectedApointmentId = this.passedAppointmentId;
    }

    loadProductWrapper() {
        let thisComponent = this;
        this.patientService.getProductUnits()
            .subscribe(
                function (wrapper: any) {
                    thisComponent.heightList = wrapper.heights;
                    thisComponent.weightList = wrapper.weights;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

    }

    SavechiefComplaint(): void {
        let vm = this;
        if (this.chiefComplaint.clinicNote == null || this.chiefComplaint.clinicNote == undefined) {
            let clinicNote: any = {};
            this.chiefComplaint.clinicNote = clinicNote;
        }
        vm.showProgress = true;

        //if (this.chiefComplaint.recordedBy > 0 && this.chiefComplaint.clinicNote.appointmentId > 0 && this.chiefComplaint.userType == this.isDoctor) {
        if (this.chiefComplaint.id > 0) {//Update
            vm.chiefComplaint.clinicNote = null;
            this.patientService.updateChiefComplaintData(this.chiefComplaint)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.chiefComplaint = response;
                        vm.onCheifComplaintSaved.emit({ clinicNoteId: vm.chiefComplaint.cLinicNoteId, moveNext: true });
                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });

        }
        else {//Create new
            this.chiefComplaint.clinicNote.clinicId = this.clinicIdReq;
            this.chiefComplaint.clinicNote.patientId = this.selectedPatientId;
            //Appoinment is optional
            if (this.selectedApointmentId == 0 || this.selectedApointmentId == undefined)
                this.chiefComplaint.clinicNote.appointmentId = undefined;
            else
                this.chiefComplaint.clinicNote.appointmentId = this.selectedApointmentId;

            if (this.isDoctor) {
                this.chiefComplaint.userType = true;
                this.chiefComplaint.recordedBy = this.doctorId;
                this.chiefComplaint.clinicNote.doctorId = this.doctorId;

            }
            else {
                this.chiefComplaint.userType = false;
                this.chiefComplaint.recordedBy = this.doctorId;
                this.chiefComplaint.clinicNote.doctorId = this.doctorId;
            }
            this.patientService.createChiefComplaint(this.chiefComplaint)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.chiefComplaint = response;

                        vm.onCheifComplaintSaved.emit({ clinicNoteId: vm.chiefComplaint.clinicNote.id, moveNext: true });
                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });

        }

    }


    getChiefComplaintById() {
        let vm = this;
        if (this.isDoctor) {
            this.chiefComplaint.userType = true;
            vm.userType = this.chiefComplaint.userType;

        }
        else {
            this.chiefComplaint.userType = false;
            vm.userType = this.chiefComplaint.userType;
            //this.chiefComplaint.recordedBy = this.doctorId;
        }

        //if (vm.selectedPatientId != undefined && vm.doctorId != undefined && vm.selectedApointmentId != undefined) {
        if (vm.noteId != '' && vm.noteId != 'new') {
            this.patientService.getChiefComplaintByNoteId(vm.noteId)
                .subscribe(
                    function (response: any) {
                        vm.chiefComplaint = response;
                        vm.onCheifComplaintSaved.emit({ clinicNoteId: vm.chiefComplaint.cLinicNoteId, moveNext: false });
                    },
                    function (error: any) {
                        //vm.toastr.error('Failed to Load Data - ' + error, '');
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
        //}
    }

    getHeight(height: number) {
        this.heightValue = height;
        this.CaluclateBMI();

    }

    getWeight(weight: number) {
        this.weightvalue = weight;
        this.CaluclateBMI();

    }
    getWeightType(weightTypeId: string) {
        for (let weightType of this.weightList) {
            if (weightType.id == weightTypeId) {
                this.weightType = weightType.key;
            }
        }

        if (this.weightType == "Kg") {
            this.weightvalue = this.weightvalue;
        }
        else if (this.weightType == "Pound") {
            this.weightvalue = this.weightvalue / 2.2;

        }
        else if (this.weightType == "gram") {
            this.weightvalue = this.weightvalue / 1000;
        }
        this.CaluclateBMI();

    }
    getHeightType(heightTypeId: string) {

        for (let heightType of this.heightList) {
            if (heightType.id == heightTypeId) {
                this.heightType = heightType.key;
            }
        }

        if (this.heightType == "Meter") {
            this.heightValue = this.heightValue;
        }
        else if (this.heightType == "Kilometr") {
            this.heightValue = this.heightValue * 1000;

        }
        else if (this.heightType == "Centimeter") {
            this.heightValue = this.heightValue / 1000;
        }
        this.CaluclateBMI();
    }

    //BMI = weight / (height) ^ 2

    //where weight is in kg and height in cm.

    CaluclateBMI() {
        if (this.weightvalue > 0 && this.heightValue > 0) {
            this.bmi = this.weightvalue / (this.heightValue * this.heightValue);
            this.chiefComplaint.bmi = this.bmi.toFixed(3);
        }

    }
    clear(): void {
        this.chiefComplaint = { id: 0 };
        this.chiefComplaint.clinicNote = {};
        this.active = false;

        setTimeout(() => this.active = true, 0);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {

                if (item.permission.key == this.key.EMR && (item.fullControl == true))
                    this.enableNewNoteBtn = true;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) {

        this.selectedApointmentId = this.passedAppointmentId;
        if (this.noteId == '' || this.noteId == 'new')
            this.clear();

        this.getChiefComplaintById();

        /*if (this.passedAppointmentId != null && this.passedAppointmentId != undefined && this.passedAppointmentId != 0) {
            this.selectedApointmentId = this.passedAppointmentId;

               this.getChiefComplaintById();
        }*/
    }


}