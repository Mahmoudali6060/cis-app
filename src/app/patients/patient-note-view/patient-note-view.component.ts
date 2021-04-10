import {Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'

@Component({
   
    selector: 'patient-note-view',
    templateUrl: 'patient-note-view.component.html',
})

export class PatientNoteViewComponent implements OnInit, OnChanges {
    //@Input() noteId = '';
    PrintNoteDive: string = 'PrintArea';
    showProgress = false;
    @Input() model: any = {};
    lstToTranslatedDiagnosis: string[] = [];
    lstToTranslatedMedications: string[] = [];
    lstToTranslatedLabTests: string[] = [];
    lstToTranslatedRadiologyTests: string[] = [];

    lstToTranslatedServices: string[] = [];
    lstToTranslated: string[] = [];
    constructor(private localStorage: LocalStorageService,
        public patientService: PatientService,
        public toastr: ToastrService,
        private _route: ActivatedRoute) { }

    ngOnChanges(changes: SimpleChanges) {
       
            //this.getClinicNotbyId();
    }


    ngOnInit() {
        this.lstToTranslatedDiagnosis = ['diagnoseName', 'diagnoseNameTranslation', 'visitTypeName', 'visitTypeNameTranslation', 'doctorName', 'doctorNameTranslation'];
        this.lstToTranslatedMedications = ['dosageUnitName', 'dosageUnitNameTranslation', 'frequencyName', 'frequencyNameNameTranslation', 'relatedDiagnoseName', 'relatedDiagnoseNameTranslation', 'recorderName', 'recorderNameTranslation'];
        this.lstToTranslatedServices = ['serviceName', 'serviceNameTranslation', 'diagnoseName', 'diagnoseNameTranslation', 'servicePackageName', 'servicePackageNameTranslation', 'recorderName', 'recorderNameTranslation'];
        this.lstToTranslatedLabTests = ['diagnoseName', 'diagnoseNameTranslation', 'labTestName', 'labTestNameTranslation'];
        this.lstToTranslatedRadiologyTests = ['radTestName', 'radTestNameTranslation', 'diagnoseName', 'diagnoseNameTranslation'];

        let patient: any = {};
        let activeInsurance: any = {};
        let chiefComplaint: any = {};

        this.model.patient = patient;
        this.model.patient.activeInsurance = activeInsurance;
        this.model.chiefComplaint = chiefComplaint;
       
    }

  

}