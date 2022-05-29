import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorService } from '../shared/doctor.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { UtilityClass } from '../../shared/shared/utility.class';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'primeng/table';

@Component({

    selector: 'doctor-appointments',
    templateUrl: './doctor-appointments.component.html',
})

export class DoctorAppointmentsComponent implements OnInit {

    utilityClass: UtilityClass = new UtilityClass();
    selectBasicTab: boolean = true;
    filterString!:string;

    active = true;
    model: any = {};
    appointmentCriteria: any = {};
    seenTime = "";
    display: boolean = false;
    doctorAppointmentsList: any = [];
    matchedAppontments = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    doctorId: string = "0";
    showActive: boolean = false;
    showEdit: boolean = false;
    showSelect: boolean = true;
    showClose: boolean = false;
    // viewSearch: boolean = false;
    hasMultiClincs = false;
    clinics:any = [];
    selectedClinic: any = {};
    clinicId = '';
    disabled: boolean = true;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    lstToTranslated: string[] = [];
    // isClinicSelected = false;
    tempDoctorAppointmentsList = [];
    unifiedMrn: string = '';
    seenString: string = '';
    @ViewChild('dt') table!: Table;
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , private router: Router
        , public storage: LocalStorageService
        , public accountService: AccountService
        , public translate: TranslateService
    ) {
        //'patientNameTranslation'
    }

    ngOnInit(): void {
        let vm = this;

        this.seenString = this.translate.instant('Seen');
        this.doctorId = this.storage.retrieve("UserID");
        this.lstToTranslated = ['appointmentClassName', 'classNameTranslation', 'visitTypeName', 'visitNameTranslation', 'patientName', 'patientNameTranslation'];
        vm.showProgress = true;
        this.doctorService.getDoctorAppointmentsWrapper(this.doctorId)
            .subscribe(
                function (response: any) {
                    vm.clinics = response;
                    if (vm.clinics != undefined && vm.clinics.length != undefined) {
                        if (vm.clinics.length > 1) {
                            vm.hasMultiClincs = true;
                        } else if (vm.clinics.length == 1) {
                            vm.hasMultiClincs = false;
                            for (let item of vm.clinics) {

                                vm.selectedClinic = item;
                                vm.clinicId = vm.selectedClinic.id;
                            }
                            vm.getDoctorAppointmentsForSelectedClinic(vm.clinicId);

                        }
                    }

                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

        //get all  from DB
        //if (vm.hasMultiClincs == false) {
        //    this.doctorService.getDoctorAppointments(this.doctorId)
        //        .subscribe(
        //        function (response:any) {
        //            vm.doctorAppointmentsList = response;
        //            vm.updateSerialNumber(vm.doctorAppointmentsList);
        //        },
        //        function (error:any) { 
        //            vm.toastr.error('Failed to Load Data - ' + error, '');
        //        },
        //        function () {
        //            vm.showProgress = false;
        //        });
        //}


    }

    reloadDoctorAppointments() {
        this.getDoctorAppointmentsForSelectedClinic(this.clinicId);
    }

    getDoctorAppointmentsForSelectedClinic(clinicId: string) {
        let vm = this;
        vm.showProgress = true;
        this.doctorService.getDoctorAppointments(this.doctorId, clinicId)
            .subscribe(
                function (response: any) {
                    vm.doctorAppointmentsList = response;

                    vm.updateSerialNumber(vm.doctorAppointmentsList);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    setClinicId(value: any) {
        let vm = this;
        this.clinicId = value;
        // vm.hasMultiClincs = false;
        // vm.viewSearch = false;
        vm.getDoctorAppointmentsForSelectedClinic(this.clinicId);

    }
    addSeenTime(appointment: any) {
        let vm = this;
        vm.showProgress = true;
        appointment.isSeen = true;
        appointment.seenTime = this.utilityClass.getUtcDateTime(new Date());

        this.doctorService.markAppointmentAsSeen(appointment)
            //.subscribe(
            //organization => this.model = organization,
            //error => this.errorMessage = <any>error);
            .subscribe(
                function (response: any) {
                    //  vm.toastr.success('Saved Successfully', '');
                    vm.model = response;
                    if (vm.model.seenTime != undefined)
                        vm.seenTime = vm.model.seenTimeString;
                    else {
                        vm.seenTime = vm.translate.instant("Seen");
                    }

                    vm.updateModelWithSeenTime(vm.model.id);
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                    appointment.isSeen = false;
                },
                function () {
                    vm.showProgress = false;
                }
            );
    }
    updateModelWithSeenTime(id: string) {
        var appoitment = this.doctorAppointmentsList.find((a: any) => a.id == id);
        if (appoitment != undefined)
            appoitment.seenTimeString = this.model.seenTimeString;
    }

    viewMrf(appointment: any) {
        if (appointment.isActivePatient)
            this.router.navigate(['/patient/mrf', appointment.patientId, appointment.id, appointment.clinicDivisionId]);
        else
            this.toastr.warning(this.translate.instant('DeactivatedPatient'), '');
    }

    updateSerialNumber(list: any[]) {
        let i = 1;
        for (let item of list) {
            item.serialNumber = i;
            i++;
        }

    }
    showPatientDialog() {
        this.display = true;
    }
    managePatientSelection(selectedPatientMrn: any) {
        this.appointmentCriteria.patientClinicMRN = selectedPatientMrn;
        this.display = false;

    }
    search() {
        if (this.appointmentCriteria.patientClinicMRN != undefined) {
            this.GetAllAppointments();
            // this.viewSearch = true;
        }
    }
    getPatientMrfByUnifiedMrn() {
        let thisComponent = this;
        if (thisComponent.appointmentCriteria.patientClinicMRN != undefined) {
            thisComponent.unifiedMrn = thisComponent.appointmentCriteria.patientClinicMRN;

            thisComponent.showProgress = true;

            // check patient activation
            thisComponent.doctorService.getPatientByMrn(thisComponent.unifiedMrn)
                .subscribe(
                    function (response: any) {
                        if (response != null && response != undefined && response.isActive) {
                            thisComponent.openPatientMrfByUnifiedMrn();
                        }

                        if (!response.isActive) {
                            thisComponent.toastr.warning(thisComponent.translate.instant('DeactivatedPatient'), '');
                        }
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }


    openPatientMrfByUnifiedMrn() {
        let thisComponent = this;
        thisComponent.doctorService.getPatientMrfByUnifiedMrn(thisComponent.unifiedMrn)
            .subscribe(
                function (response: any) {
                    if (response != null && response != undefined) {
                        let divId = thisComponent.storage.retrieve("DivisionID");
                        thisComponent.router.navigate(['/patient/mrf', response.id, "0", divId]);
                    }
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }


    GetAllAppointments() {
        let thisComponent = this;
        thisComponent.appointmentCriteria.doctorId = thisComponent.doctorId;
        this.showProgress = true;
        thisComponent.doctorService.searchForDoctorAppointments(thisComponent.appointmentCriteria)
            .subscribe(
                function (response: any) {

                    thisComponent.matchedAppontments = response;
                    thisComponent.tempDoctorAppointmentsList = thisComponent.doctorAppointmentsList;
                    thisComponent.doctorAppointmentsList = thisComponent.matchedAppontments;
                    thisComponent.updateSerialNumber(thisComponent.matchedAppontments);
                    //   if (thisComponent.matchedAppontments.length>0)
                    //thisComponent.display = false;
                    //thisComponent.displayPatientTable = true;

                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    returnToDoctorAppointments(value: any) {
        if (value == "") {
            //  this.viewSearch = false;
            this.doctorAppointmentsList = this.tempDoctorAppointmentsList;
            this.matchedAppontments = [];
            this.appointmentCriteria = {};
        }
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.EMR && (item.fullControl == true))
                    this.disabled = false;
            }
        }
    }

}