import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Table } from 'primeng/table';

@Component({

    selector: 'patient-servicesGrid',
    templateUrl: 'patient-servicesGrid.component.html',
})

export class PatientServicesGridComponent implements OnInit, OnChanges {

    @Input() services!: any[];
    @Input() noteServices!: any[];
    @Input() diagnosis: any[] = [];
    @Input() masterList!: any[];
    @Input() noteId!: number;

    allServices: any[] = [];
    lstToTranslated: string[] = ['serviceName', 'serviceNameTranslation'];
    @ViewChild('dt') table!: Table;
    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.services && this.noteServices && this.masterList) {
            this.allServices = [];
            // loop for all services 
            for (let service of this.services) {

                let bindedService: any = this.createClinicNoteService(service);
                this.allServices.push(bindedService);

                if (bindedService.id == 0) // new object
                {
                    let existedService = this.noteServices.find(s => s.serviceId == service.data);

                    if (existedService) {
                        bindedService.id = existedService.id;
                        bindedService.isSelected = true;
                        bindedService.clinicNoteId = this.noteId;
                        bindedService.serviceId = service.data;
                        bindedService.serviceCode = service.code;
                        bindedService.serviceName = service.label;
                        bindedService.quantity = existedService.quantity;
                        bindedService.discount = existedService.discount;
                        bindedService.diagnoseId = existedService.diagnoseId;
                        bindedService.description = existedService.description;
                        bindedService.serviceNameTranslation = existedService.serviceNameTranslation;

                    }
                }
            }
        }
    }

    createClinicNoteService(service: any): any {
        let bindedService: any;

        bindedService = this.masterList.find(s => s.serviceId == service.data);

        if (bindedService == undefined) {
            bindedService = { id: 0, isSelected: false, clinicNoteId: this.noteId, serviceId: service.data, serviceCode: service.code, serviceName: service.label, quantity: 1, discount: 0, serviceNameTranslation: service.labelTranslation };

            this.masterList.push(bindedService);
        }

        return bindedService;
    }

    updateSelectedService(serviceId: any, event: any) {
        if (!event.target.checked) {
            // if the item removed clear data
            let noteService = this.allServices.find(s => s.serviceId == serviceId);
            noteService.quantity = 1;
            noteService.discount = 0;
            noteService.isSelected = false;
            noteService.diagnoseId = 0;
            noteService.description = '';

            let masterNoteService = this.masterList.find(s => s.serviceId == serviceId);
            masterNoteService.quantity = 1;
            masterNoteService.discount = 0;
            masterNoteService.isSelected = false;
            masterNoteService.diagnoseId = 0;
            masterNoteService.description = '';
        }
        else {
            let noteService = this.allServices.find(s => s.serviceId == serviceId);
            let masterNoteService = this.masterList.find(s => s.serviceId == serviceId);
            noteService.isSelected = true;
            masterNoteService.isSelected = true;
        }
    }

}
