import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { UtilityClass } from '../../shared/shared/utility.class';

@Component({
   
    selector: 'patient-medicationsGrid',
    templateUrl: 'patient-medicationsGrid.component.html',
})

export class PatientMedicationsGridComponent implements OnInit, OnChanges {

    utilityClass: UtilityClass = new UtilityClass();
    @Input() drugs!: any[];
    @Input() noteDrugs!: any[];
    @Input() diagnosis: any[] = [];
    @Input() drugDosageUnits: any[] = [];
    @Input() drugFrequencies: any[] = [];
    @Input() durationUnits: any[] = [];
    @Input() masterList!: any[];
    @Input() noteId!: number;

    allDrugs: any[] = [];
    lstToTranslated: string[] = ['drugName', 'drugNameTranslation'];

    ngOnInit(): void {

    }

   

    ngOnChanges(): void {
        if (this.drugs && this.noteDrugs && this.masterList && this.drugDosageUnits && this.diagnosis) {
            this.allDrugs = [];
            // loop for all drugs 
            for (let drug of this.drugs) {
                let bindedDrug: any = this.createClinicNoteDrug(drug);
                this.allDrugs.push(bindedDrug);

                if (bindedDrug.id == 0) // new object
                {
                    // check if drug exsists in note drug 
                    let existedDrug = this.noteDrugs.find(s => s.drugId == drug.data);

                    if (existedDrug) {
                        bindedDrug.id = existedDrug.id;
                        bindedDrug.isSelected = true;
                        bindedDrug.clinicNoteId = this.noteId;
                        bindedDrug.drugId = drug.data;
                        bindedDrug.drugCode = drug.code;
                        bindedDrug.drugName = drug.label;
                        bindedDrug.drugNameTranslation = existedDrug.drugNameTranslation;
                        bindedDrug.dosageQuantity = existedDrug.dosageQuantity;
                        bindedDrug.dosageUnitId = existedDrug.dosageUnitId;
                        bindedDrug.frequencyId = existedDrug.frequencyId;
                        bindedDrug.duration = existedDrug.duration;
                        bindedDrug.durationUnit = existedDrug.durationUnit;
                        bindedDrug.startDate = this.utilityClass.getDateTimeFromString(existedDrug.startDate);
                        bindedDrug.relatedDiagnoseId = existedDrug.relatedDiagnoseId;
                        bindedDrug.description = existedDrug.description;
                    }
                }
            }
        }
    }

    createClinicNoteDrug(drug:any): any {
        let bindedDrug: any;

        bindedDrug = this.masterList.find(s => s.drugId == drug.data);

        if (bindedDrug == undefined) {
            bindedDrug = { id: 0, isSelected: false, clinicNoteId: this.noteId, drugId: drug.data, drugCode: drug.code, drugName: drug.label, drugNameTranslation: drug.labelTranslation, dosageQuantity: 0, duration: 0 };

            this.masterList.push(bindedDrug);
        }

        return bindedDrug;
    }

    updateSelectedDrug(drugId:any, event:any) {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteDrug = this.allDrugs.find(s => s.drugId == drugId);

            noteDrug.isSelected = false;
            noteDrug.dosageQuantity = 0;
            noteDrug.dosageUnitId = 0;
            noteDrug.frequencyId = 0;
            noteDrug.duration = 0;
            noteDrug.durationUnit = 0;
            noteDrug.startDate = null;
            noteDrug.relatedDiagnoseId = 0;
            noteDrug.description = '';

            let masterNoteDrug = this.masterList.find(s => s.drugId == drugId);
            masterNoteDrug.isSelected = false;
            masterNoteDrug.dosageQuantity = 0;
            masterNoteDrug.dosageUnitId = 0;
            masterNoteDrug.frequencyId = 0;
            masterNoteDrug.duration = 0;
            masterNoteDrug.durationUnit = 0;
            masterNoteDrug.startDate = null;
            masterNoteDrug.relatedDiagnoseId = 0;
            masterNoteDrug.description = '';
        }
        else {
            let noteDrug = this.allDrugs.find(s => s.drugId == drugId);
            let masterNoteDrug = this.masterList.find(s => s.drugId == drugId);
            noteDrug.isSelected = true;
            masterNoteDrug.isSelected = true;
        }
    }

}
