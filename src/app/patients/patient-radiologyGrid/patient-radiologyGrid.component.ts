import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';

@Component({
   
    selector: 'patient-radiologyGrid',
    templateUrl: 'patient-radiologyGrid.component.html',
})

export class PatientRadiologyGridComponent implements OnInit, OnChanges {

    @Input() radiologies: any[];
    @Input() noteRadiologies: any[];
    @Input() diagnosis: any[] = [];
    @Input() masterList: any[];
    @Input() noteId: number | undefined;

    allRadiologies: any[] = [];
    lstToTranslated: string[] = ['radTestName', 'radTestNameTranslation'];

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.radiologies && this.noteRadiologies && this.masterList)
        {
            this.allRadiologies = [];
            // loop for all services 
            for (let radiology of this.radiologies)
            {
                let bindedRadiology:any = {};
                // check if service exsists in note service 
                let existedRadiology = this.noteRadiologies.find(s => s.radiologyTestId == radiology.data);

                if (existedRadiology) {
                    bindedRadiology = { id: existedRadiology.id, isSelected: true, clinicNoteId: this.noteId, radiologyTestId: radiology.data, radTestCode: radiology.code, radTestName: radiology.label, quantity: existedRadiology.quantity, diagnoseId: existedRadiology.diagnoseId, description: existedRadiology.description, radTestNameTranslation: existedRadiology.radTestNameTranslation};
                }
                else // create new one
                {
                    bindedRadiology = { isSelected: false, clinicNoteId: this.noteId, radiologyTestId: radiology.data, radTestCode: radiology.code, radTestName: radiology.label, quantity: 1, radTestNameTranslation: radiology.labelTranslation};
                }

                this.allRadiologies.push(bindedRadiology);

                let masterItem = this.masterList.find(s => s.radiologyTestId == radiology.data);

                if (masterItem == null || masterItem == undefined)
                    this.masterList.push(bindedRadiology);
                else {
                    var index = this.masterList.indexOf(masterItem);
                    if (index > -1) {
                        this.masterList.splice(index, 1);
                        this.masterList.push(bindedRadiology); // update note service  
                    }
                }
            }
        }
    }

    updateSelectedRadiology(radiologyTestId, event)
    {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteRadiology = this.allRadiologies.find(s => s.radiologyTestId == radiologyTestId);
            noteRadiology.quantity = 1;
            noteRadiology.isSelected = false;
            noteRadiology.diagnoseId = 0;
            noteRadiology.description = '';

            let masterNoteRadiology = this.masterList.find(s => s.radiologyTestId == radiologyTestId);
            masterNoteRadiology.quantity = 1;
            masterNoteRadiology.isSelected = false;
            masterNoteRadiology.diagnoseId = 0;
            masterNoteRadiology.description = '';
        }
        else
        {
            let noteRadiology = this.allRadiologies.find(s => s.radiologyTestId == radiologyTestId);
            let masterNoteRadiology = this.masterList.find(s => s.radiologyTestId == radiologyTestId);
            noteRadiology.isSelected = true;
            masterNoteRadiology.isSelected = true;
        }
    }

}
