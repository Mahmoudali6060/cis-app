import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'patient-notes',
    templateUrl: 'patient-notes.component.html',
})

export class PatientNotesComponent implements OnChanges, OnInit {
    selectBasicTab: boolean = true;
    selectedPatientId!: string;
    @Input() divisionId!: string;
    //@Input() updatedPateintMrf: any[] = [];
    @Input() getMrf: boolean = false;
    selectedPatient: any = {};
    lstToTranslated: string[] = [];
    active = true;
    private subscription!: Subscription;
    model: any = {};
    noteId = "new";
    pateintMrfs: any[] = [];
    classifications = [];
    showProgress = false;
    @ViewChild("btnCloseViewClinicNotePopUp") btnCloseViewClinicNotePopUp!: ElementRef;;
    @ViewChild("btnEditClinicNote") btnEditClinicNote!: ElementRef;;
    @ViewChild("btnAddNewNote") btnAddNewNote!: ElementRef;;
    @ViewChild("patientClinicalNoteComp") patientClinicalNoteComp: any;

    selectedAppointmentId: any;
    selectedNote: any = {};

    appointmentId = '';
    enable = true;

    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
    ) { }

    ngOnInit(): void {
        this.subscription = this.patientService.notifyObservable$.subscribe((res: any) => {
            if (res.hasOwnProperty('option') && res.option === 'call_child') {

                this.getAllPatientMRF();

            }
        });
        this.lstToTranslated = ['clinicName', 'clinicNameTranslation', 'departmentName', 'departmentNameTranslation', 'divisionName', 'divisionNameTranslation', 'doctorName', 'doctorNameTranslation'];
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.appointmentId = this._route.snapshot.params['appointmentId'];
        let vm = this;
        // vm.pateintMrfs = vm.updatedPateintMrf;
        this.selectedPatientId = this._route.snapshot.params['id'];
        this.getAllPatientMRF();

        this.getAllPatientMRF();

        //if (vm.divisionId == "0" && vm.appointmentId == "0")
        //    vm.enable = false;

    }
    ngOnChanges(changes: SimpleChanges) {

        this.getAllPatientMRF();
    }
    getAllPatientMRF(): void {
        let vm = this;
        vm.showProgress = true;
        if (this.selectedPatientId && this.selectedPatientId != undefined) {
            this.patientService.GetAllPatientMRF(this.selectedPatientId)
                .subscribe(
                    function (response: any) {
                        vm.pateintMrfs = response;
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }

    setClinicNoteId(selectedNoteId: any, appointmentId: any) {
        this.noteId = selectedNoteId;
        this.selectedAppointmentId = appointmentId;

        this.getClinicNotbyId();
    }

    getClinicNotbyId() {
        let vm = this;

        vm.showProgress = true;
        this.patientService.getClinicNoteWithAllData(vm.noteId)
            .subscribe(
                function (response: any) {
                    vm.selectedNote = response;

                    if (response.patient == undefined) {
                        let patient: any = {};
                        let activeInsurance: any = {};
                        vm.selectedNote.patient = patient;
                        vm.selectedNote.patient.activeInsurance = activeInsurance;
                    }

                    if (response.patient != undefined && response.patient.activeInsurance == undefined) {
                        let activeInsurance: any = {};
                        vm.selectedNote.patient.activeInsurance = activeInsurance;
                    }

                    if (response.chiefComplaint == undefined) {
                        let chiefComplaint: any = {};
                        vm.selectedNote.chiefComplaint = chiefComplaint;
                    }
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () { // finally
                    vm.showProgress = false;
                });
    }


    openEditClinicNotePopup() {
        this.btnCloseViewClinicNotePopUp.nativeElement.click();
        //this.btnEditClinicNote.nativeElement.click();

        setTimeout(() => this.openClinicNotePopup(), 500);
    }

    openClinicNotePopup() {
        this.patientClinicalNoteComp.setSelectedTab(0);
        this.btnEditClinicNote.nativeElement.click();
    }

    openPrescription(noteId: string, reportName: string) {

        let lang = this.storage.retrieve("SelectedLanguage");

        if (lang == null || lang == undefined)
            lang = 'ar';

        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + noteId;

        window.open(url);
    }


}