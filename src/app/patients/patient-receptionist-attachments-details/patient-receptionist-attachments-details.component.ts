import {Component} from '@angular/core';

@Component({
   
    selector: 'patient-receptionist-attachments-details',
    templateUrl: 'patient-receptionist-attachments-details.component.html'

})

export class PatientReceptionistAttachmentsDetailsComponent {
    selectedAttachmenTab: boolean = true;
    type = 'PatientFileType';
    detailsUrl = "PatientReceptionistAttachmentsDetails";

    documentDetailsUrl: string = "patientAttachments";

}