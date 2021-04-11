import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
   
    selector: 'patient-snapshot',
    templateUrl: 'patient-snapshot.component.html',

})

export class PatientSnapshotComponent implements OnChanges, OnInit {
    @Input() activeTabIndex: number = 0;
    @Input() patientId!: number;
    @Input() patientDOB: Date | undefined;
    isDoctor: boolean = false;

    isNotesSelected: boolean = false;
    isDiagnosisSelected: boolean = true;
    isMedicationSelected: boolean = false;
    isSurgeriesSelected: boolean = false;
    isAllergiesSelected: boolean = false;
    isServicesSelected: boolean = false;
    isLaboratorySelected: boolean = false;
    isRadiologySelected: boolean = false;
    clinicId!:any;
    headerText: string = this.translate.instant('Diagnosis');
    allServices = [];
    divisionId = '';
    appointmentId = '';
    enable = true;

    constructor(private localStorage: LocalStorageService
        , private doctorService: DoctorService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public translate: TranslateService) { }
    ngOnInit(): void {
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.appointmentId = this._route.snapshot.params['appointmentId'];
        //
        this.clinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        if (thisComponent.divisionId == "0" && thisComponent.appointmentId == "0")
            thisComponent.enable = false;

        this.getAllServiceGroupsForTreeView(false);
    }
    getAllServiceGroupsForTreeView(needAll: boolean) {
        let vm = this;

        /////////////////////////get all services groups
        this.doctorService.getServiceGroupsForTreeView(vm.clinicId)
            .subscribe(
            function (response:any) {

                vm.allServices = response;

            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                // vm.showProgress = false;
            });
    }
    ngOnChanges(changes: SimpleChanges) {
    }

    setSelectedTab(tabName: string) {
        this.isNotesSelected = false;
        this.isDiagnosisSelected = false;
        this.isMedicationSelected = false;
        this.isSurgeriesSelected = false;
        this.isAllergiesSelected = false;
        this.isServicesSelected = false;
        this.isLaboratorySelected = false;
        this.isRadiologySelected = false;

        if (tabName == 'Notes') {
            this.isNotesSelected = true;
        }
        else if (tabName == 'Diagnosis') {
            this.isDiagnosisSelected = true;
            this.headerText = this.translate.instant('Diagnosis');
        }
        else if (tabName == 'Medication') {
            this.isMedicationSelected = true;
            this.headerText = this.translate.instant('Medication');
        }
        else if (tabName == 'Surgeries') {
            this.isSurgeriesSelected = true;
            this.headerText = this.translate.instant('PastSurgeries');
        }
        else if (tabName == 'Allergies') {
            this.isAllergiesSelected = true;
            this.headerText = this.translate.instant('DrugAllergies');
        }
        else if (tabName == 'Services') {
            this.isServicesSelected = true;
            this.headerText = 'Services';
        }
        else if (tabName == 'Laboratory') {
            this.isLaboratorySelected = true;
            this.headerText = 'Lab Tests';
        }
        else if (tabName == 'Radiology') {
            this.isRadiologySelected = true;
            this.headerText = 'Radiology Test';
        }
    }
}