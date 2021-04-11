import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';

@Component({

    selector: 'patient-servicePackages-grid',
    templateUrl: 'patient-servicePackages-grid.component.html',
})

export class PatientServicePackagesGridComponent implements OnInit, OnChanges {

    @Input() packages!: any[];
    @Input() notePackages!: any[];
    @Input() diagnosis: any[] = [];
    @Input() masterList!: any[];
    @Input() noteId!: number;

    allPackages: any[] = [];
    lstToTranslated: string[] = ['servicePackageName', 'servicePackageNameTranslation'];

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.packages && this.notePackages && this.masterList) {
            this.allPackages = [];
            // loop for all services 
            for (let packge of this.packages) {

                let bindedPackage: any = this.createClinicNoteService(packge);
                this.allPackages.push(bindedPackage);

                if (bindedPackage.id == 0) // new object
                {
                    let existedPackage = this.notePackages.find(s => s.servicePackageId == packge.data);

                    if (existedPackage) {
                        bindedPackage.id = existedPackage.id;
                        bindedPackage.isSelected = true;
                        bindedPackage.clinicNoteId = this.noteId;
                        bindedPackage.servicePackageId = packge.data;
                        bindedPackage.servicePackageCode = packge.code;
                        bindedPackage.servicePackageName = packge.label;
                        bindedPackage.quantity = existedPackage.quantity;
                        bindedPackage.discount = existedPackage.discount;
                        bindedPackage.diagnoseId = existedPackage.diagnoseId;
                        bindedPackage.description = existedPackage.description;
                        bindedPackage.servicePackageNameTranslation = existedPackage.servicePackageNameTranslation;

                    }
                }
            }
        }
    }

    createClinicNoteService(packge: any): any {
        let bindedService: any;

        bindedService = this.masterList.find(s => s.servicePackageId == packge.data);

        if (bindedService == undefined) {
            bindedService = { id: 0, isSelected: false, clinicNoteId: this.noteId, servicePackageId: packge.data, servicePackageCode: packge.code, servicePackageName: packge.label, quantity: 1, discount: 0, servicePackageNameTranslation: packge.labelTranslation };

            this.masterList.push(bindedService);
        }

        return bindedService;
    }

    updateSelectedService(servicePackageId: any, event: any) {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteService = this.allPackages.find(s => s.servicePackageId == servicePackageId);
            noteService.quantity = 1;
            noteService.discount = 0;
            noteService.isSelected = false;
            noteService.diagnoseId = 0;
            noteService.description = '';

            let masterNoteService = this.masterList.find(s => s.servicePackageId == servicePackageId);
            masterNoteService.quantity = 1;
            masterNoteService.discount = 0;
            masterNoteService.isSelected = false;
            masterNoteService.diagnoseId = 0;
            masterNoteService.description = '';
        }
        else {
            let noteService = this.allPackages.find(s => s.servicePackageId == servicePackageId);
            let masterNoteService = this.masterList.find(s => s.servicePackageId == servicePackageId);
            noteService.isSelected = true;
            masterNoteService.isSelected = true;
        }
    }

}
