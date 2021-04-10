
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import {EditorModule, SharedModule as SharedModuleNg} from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

//import { routing } from '../app.routing';
import { PatientRoutingModule } from './patients.routing';

import { PatientTabsComponent }   from './patient-tabs/patient-tabs.component';
import { PatientBasicComponent }   from './patient-basic/patient-basic.component';
import { PatientVitalSignsComponent }   from './patient-vital-signs/patient-vital-signs.component';
import { PatientDiagnosisComponent }   from './patient-diagnosis/patient-diagnosis.component';
import { PatientMedicationComponent }   from './patient-medication/patient-medication.component';
import { PatientSurgeriesComponent }   from './patient-surgeries/patient-surgeries.component';
import { PatientAllergiesComponent }   from './patient-allergies/patient-allergies.component';
//import { PatientServicesComponent }   from './patient-services/patient-services.component';
import { PatientLaboratoryComponent } from './patient-laboratory/patient-laboratory.component';
import { PatientRadiologyComponent } from './patient-radiology/patient-radiology.component';
import { PatientAttachmentsComponent } from './patient-attachments/patient-attachments.component';
import { PatientDiagnoseDetailsComponent } from './patient-diagnose-details/patient-diagnose-details.component';
import { PatientMedicationDetailsComponent } from './patient-medication-details/patient-medication-details.component';
import { PatientSurgeryDetailsComponent } from './patient-surgery-details/patient-surgery-details.component';
import { PatientAllergyDetailsComponent } from './patient-allergy-details/patient-allergy-details.component';
import { PatientLabDetailsComponent } from './patient-lab-details/patient-lab-details.component';
import { PatientRadiologyDetailsComponent } from './patient-radiology-details/patient-radiology-details.component';
import { PatientAttachmentDetailsComponent } from './patient-attachment-details/patient-attachment-details.component';
import { DateHijriGregorian} from './date-hijri-gregorian/date-hijri-gregorian.component';


//import { PatientServiceDetailsComponent } from './patient-service-details/patient-service-details.component';
import { PatientReceptionistTabsComponent } from './patient-receptionist-tabs/patient-receptionist-tabs.component';
import { PatientAccountComponent } from './patient-account/patient-account.component';
import { PatientPersonalComponent } from './patient-personal/patient-personal.component';
import { PatientAddressComponent } from './patient-address/patient-address.component';
import { PatientInsuranceComponent } from './patient-insurance/patient-insurance.component';
import { PatientInsuranceDetailsComponent } from './patient-insurance-details/patient-insurance-details.component';
import { PatientMrfComponent } from './patient-mrf/patient-mrf.component';
import { PatientSnapshotComponent } from './patient-snapshot/patient-snapshot.component';
import { PatientClinicalNoteComponent } from './patient-clinical-note/patient-clinical-note.component';
import { PatientNotesComponent } from './patient-notes/patient-notes.component';
import { PatientTemplatesComponent } from './patient-templates/patient-templates.component';
import { PatientTemplateDetailsComponent } from './patient-template-details/patient-template-details.component';
import { PatientReceptionistAttachmentsComponent } from './patient-receptionist-attachments/patient-receptionist-attachments.component';
import { PatientReceptionistAttachmentsDetailsComponent } from './patient-receptionist-attachments-details/patient-receptionist-attachments-details.component';
import { PatientNoteViewComponent } from './patient-note-view/patient-note-view.component';
import { PatientRemarksComponent } from './patient-remarks/patient-remarks.component';
import { PatientFileComponent } from './patient-file/patient-file.component';
import { PatienSearchComponent } from './patient-search/patient-search.component';
import { PatientServicesGridComponent } from './Patient-ServicesGrid/Patient-ServicesGrid.Component';
import { PatientServicePackagesGridComponent } from './patient-servicePackages-grid/patient-servicePackages-grid.Component';
import { PatientNoteServicesComponent } from './patient-note-services/patient-note-services.component';

import { PatientDiagnosisGridComponent } from './Patient-diagnosisGrid/Patient-diagnosisGrid.Component';
import { PatientNoteDiagnosisComponent } from './patient-note-diagnosis/patient-note-diagnosis.component';

import { PatientNoteRadiologyComponent } from './patient-note-radiology/patient-note-radiology.component';
import { PatientRadiologyGridComponent } from './patient-radiologyGrid/patient-radiologyGrid.component';

import { PatientLaboratoryGridComponent } from './Patient-laboratoryGrid/Patient-laboratoryGrid.Component';
import { PatientNoteLaboratoryComponent } from './patient-note-laboratory/patient-note-laboratory.component';

import { PatientMedicationsGridComponent } from './Patient-medicationsGrid/Patient-medicationsGrid.Component';
import { PatientNoteMedicationsComponent } from './patient-note-medications/patient-note-medications.component';


import { SharedModule } from '../shared/shared.module';

import { PatientService }   from './shared/patient.service';
import { SharedService }   from '../shared/shared/shared.service';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PatientRoutingModule,
        SharedModule,  
        EditorModule,
        SharedModuleNg,      
        TreeModule,        
        //routing,  
        DataTableModule,
        CalendarModule,
        DialogModule,

    ],
    declarations: [        
        PatientTabsComponent,
        PatientBasicComponent,
        PatientVitalSignsComponent,
        PatientDiagnosisComponent,
        PatientMedicationComponent,
        PatientSurgeriesComponent,
        PatientAllergiesComponent,
        //PatientServicesComponent,
        PatientLaboratoryComponent,
        PatientRadiologyComponent,
        PatientAttachmentsComponent,
        PatientDiagnoseDetailsComponent,
        PatientMedicationDetailsComponent,
        PatientSurgeryDetailsComponent,
        PatientAllergyDetailsComponent,
        PatientLabDetailsComponent,
        PatientRadiologyDetailsComponent,
        PatientAttachmentDetailsComponent,
        DateHijriGregorian,
        //PatientServiceDetailsComponent,
        PatientReceptionistTabsComponent,
        PatientAccountComponent,
        PatientPersonalComponent,
        PatientAddressComponent,
        PatientInsuranceComponent,
        PatientInsuranceDetailsComponent,
        PatientMrfComponent,
        PatientSnapshotComponent,
        PatientClinicalNoteComponent,
        PatientNotesComponent,
        PatientTemplatesComponent,
        PatientTemplateDetailsComponent,
        PatientReceptionistAttachmentsComponent,
        PatientReceptionistAttachmentsDetailsComponent,
        PatientNoteViewComponent,
        PatientRemarksComponent,
        PatientFileComponent,
        PatienSearchComponent,
        PatientNoteServicesComponent,
        PatientServicesGridComponent,
        PatientDiagnosisGridComponent,
        PatientNoteDiagnosisComponent,
        PatientRadiologyGridComponent,
        PatientNoteRadiologyComponent,
        PatientLaboratoryGridComponent,
        PatientNoteLaboratoryComponent,
        PatientNoteMedicationsComponent,
        PatientMedicationsGridComponent,
        PatientServicePackagesGridComponent

       
    ],
    providers: [],
    exports:[
        PatientTabsComponent,
        PatientBasicComponent,
        PatientVitalSignsComponent,
        PatientDiagnosisComponent,
        PatientMedicationComponent,
        PatientSurgeriesComponent,
        PatientAllergiesComponent,
        //PatientServicesComponent,
        PatientLaboratoryComponent,
        PatientRadiologyComponent,
        PatientAttachmentsComponent,
        PatientDiagnoseDetailsComponent,
        PatientMedicationDetailsComponent,
        PatientSurgeryDetailsComponent,
        PatientAllergyDetailsComponent,
        PatientLabDetailsComponent,
        PatientRadiologyDetailsComponent,
        PatientAttachmentDetailsComponent,
        DateHijriGregorian,
        //PatientServiceDetailsComponent,
        PatientReceptionistTabsComponent,
        PatientAccountComponent,
        PatientPersonalComponent,
        PatientAddressComponent,
        PatientInsuranceComponent,
        PatientInsuranceDetailsComponent,
        PatientMrfComponent,
        PatientSnapshotComponent,
        PatientClinicalNoteComponent,
        PatientNotesComponent,
        PatientTemplatesComponent,
        PatientTemplateDetailsComponent,
        PatientReceptionistAttachmentsComponent,
        PatientNoteViewComponent,
        PatientRemarksComponent,
        PatientFileComponent,
        PatienSearchComponent,
        PatientNoteServicesComponent,
        PatientServicesGridComponent,
        PatientDiagnosisGridComponent,
        PatientNoteDiagnosisComponent,
        PatientRadiologyGridComponent,
        PatientNoteRadiologyComponent,
        PatientLaboratoryGridComponent,
        PatientNoteLaboratoryComponent,
        PatientNoteMedicationsComponent,
        PatientMedicationsGridComponent,
        PatientServicePackagesGridComponent
       
    ]
})
export class PatientsModule { }
