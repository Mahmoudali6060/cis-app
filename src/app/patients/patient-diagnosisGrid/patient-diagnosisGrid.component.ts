import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';

@Component({
   
    selector: 'patient-diagnosisGrid',
    templateUrl: 'patient-diagnosisGrid.component.html',
})

export class PatientDiagnosisGridComponent implements OnInit, OnChanges {

    @Input() diagnosis: any[];
    @Input() noteDiagnosis: any[];
    @Input() masterList: any[];
    @Input() noteId: number | undefined;
    @Input() diagnosisStatuses: any[];

    allDiagnosis: any[] = [];
    lstToTranslated: string[] = ['diagnoseName', 'diagnoseNameTranslation'];

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.diagnosis && this.noteDiagnosis && this.masterList) {
            this.allDiagnosis = [];
            // loop for all services 
            for (let diagnose of this.diagnosis) {
                let bindedDiagnose: any = this.createClinicNoteDiagnose(diagnose);

                this.allDiagnosis.push(bindedDiagnose);

                if (bindedDiagnose.id == 0) // new object
                {
                    // check if Diagnose exsists in note Diagnosis
                    let existedDiagnose = this.noteDiagnosis.find(s => s.diagnoseId == diagnose.data);

                    if (existedDiagnose) {
                        bindedDiagnose.id = existedDiagnose.id;
                        bindedDiagnose.isSelected = true;
                        bindedDiagnose.clinicNoteId = this.noteId;
                        bindedDiagnose.diagnoseId = diagnose.data;
                        bindedDiagnose.diagnoseCode = diagnose.code;
                        bindedDiagnose.diagnoseName = diagnose.label;
                        bindedDiagnose.status = existedDiagnose.status;
                        bindedDiagnose.description = existedDiagnose.description;
                        bindedDiagnose.diagnoseNameTranslation = existedDiagnose.diagnoseNameTranslation;
                    }
                }
            }
        }
    }

    createClinicNoteDiagnose(diagnose): any {
        let bindedDiagnose: any;

        bindedDiagnose = this.masterList.find(s => s.diagnoseId == diagnose.data);

        if (bindedDiagnose == undefined) {
            bindedDiagnose = { id: 0, isSelected: false, clinicNoteId: this.noteId, diagnoseId: diagnose.data, diagnoseCode: diagnose.code, diagnoseName: diagnose.label, status: 1, diagnoseNameTranslation: diagnose.labelTranslation };

            this.masterList.push(bindedDiagnose);
        }

        return bindedDiagnose;
    }

    updateSelectedDiagnose(diagnoseId, event)
    {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteDiagnose= this.allDiagnosis.find(s => s.diagnoseId == diagnoseId);
            noteDiagnose.status ='1';
            noteDiagnose.isSelected = false;
            //noteDiagnose.diagnoseId = 0;
            noteDiagnose.description = '';

            let masterNoteDiagnose = this.masterList.find(s => s.diagnoseId == diagnoseId);
            masterNoteDiagnose.status = '1';
            masterNoteDiagnose.isSelected = false;
            //masterNoteDiagnose.diagnoseId = 0;
            masterNoteDiagnose.description = '';
        }
        else
        {
            let noteDiagnose = this.allDiagnosis.find(s => s.diagnoseId == diagnoseId);
            let masterNoteDiagnose = this.masterList.find(s => s.diagnoseId == diagnoseId);
            noteDiagnose.isSelected = true;
            masterNoteDiagnose.isSelected = true;
        }
    }

    isClinicNoteDiagnoseConfirmed(noteDiagnose): boolean {
        return noteDiagnose && noteDiagnose.status && (noteDiagnose.status == '1' || noteDiagnose.status == 'Confirmed');
    }
    isClinicNoteDiagnoseSuspected(noteDiagnose): boolean {
        return noteDiagnose && noteDiagnose.status && (noteDiagnose.status == '2' || noteDiagnose.status== 'Suspicious');
    }

}
