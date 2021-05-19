import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Table } from 'primeng/table';

@Component({

    selector: 'patient-laboratoryGrid',
    templateUrl: 'patient-laboratoryGrid.component.html',
})

export class PatientLaboratoryGridComponent implements OnInit, OnChanges {

    @Input() laboratories!: any[];
    @Input() noteLaboratories!: any[];
    @Input() diagnosis: any[] = [];
    @Input() masterList!: any[];
    @Input() noteId!: number;

    allLaboratories: any[] = [];
    lstToTranslated: string[] = ['labTestName', 'labTestNameTranslation'];
    @ViewChild('dt') table!: Table;
    
    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.laboratories && this.noteLaboratories && this.masterList) {
            this.allLaboratories = [];
            // loop for all services 
            for (let laboratory of this.laboratories) {
                let bindedLaboratory: any = this.createClinicNoteLaboratory(laboratory);

                this.allLaboratories.push(bindedLaboratory);

                if (bindedLaboratory.id == 0) // new object
                {
                    // check if laboratory exsists in note laboratories 
                    let existedLaboratory = this.noteLaboratories.find(s => s.labTestId == laboratory.data);

                    if (existedLaboratory) {
                        bindedLaboratory.id = existedLaboratory.id;
                        bindedLaboratory.isSelected = true;
                        bindedLaboratory.clinicNoteId = this.noteId;
                        bindedLaboratory.labTestId = laboratory.data;
                        bindedLaboratory.labTestCode = laboratory.code;
                        bindedLaboratory.labTestName = laboratory.label;
                        bindedLaboratory.quantity = existedLaboratory.quantity;
                        bindedLaboratory.diagnoseId = existedLaboratory.diagnoseId;
                        bindedLaboratory.description = existedLaboratory.description;
                        bindedLaboratory.labTestNameTranslation = existedLaboratory.labTestNameTranslation;
                    }
                }
            }
        }
    }

    createClinicNoteLaboratory(laboratory: any): any {
        let bindedLaboratory: any;

        bindedLaboratory = this.masterList.find(s => s.labTestId == laboratory.data);

        if (bindedLaboratory == undefined) {
            bindedLaboratory = { id: 0, isSelected: false, clinicNoteId: this.noteId, labTestId: laboratory.data, labTestCode: laboratory.code, labTestName: laboratory.label, quantity: 1, labTestNameTranslation: laboratory.labelTranslation };

            this.masterList.push(bindedLaboratory);
        }

        return bindedLaboratory;
    }

    updateSelectedLaboratory(labTestId: any, event: any) {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteRadiology = this.allLaboratories.find(s => s.labTestId == labTestId);
            noteRadiology.quantity = 1;
            noteRadiology.isSelected = false;
            noteRadiology.diagnoseId = 0;
            noteRadiology.description = '';

            let masterNoteRadiology = this.masterList.find(s => s.labTestId == labTestId);
            masterNoteRadiology.quantity = 1;
            masterNoteRadiology.isSelected = false;
            masterNoteRadiology.diagnoseId = 0;
            masterNoteRadiology.description = '';
        }
        else {
            let noteLaboratory = this.allLaboratories.find(s => s.labTestId == labTestId);
            let masterNoteLaboratory = this.masterList.find(s => s.labTestId == labTestId);
            noteLaboratory.isSelected = true;
            masterNoteLaboratory.isSelected = true;
        }
    }

}
