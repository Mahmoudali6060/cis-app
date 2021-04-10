import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientBasicComponent } from './patient-basic/patient-basic.component';
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
//import { PatientServiceDetailsComponent } from './patient-service-details/patient-service-details.component';
import { PatientAccountComponent } from './patient-account/patient-account.component';
import { PatientPersonalComponent } from './patient-personal/patient-personal.component';
import { PatientAddressComponent } from './patient-address/patient-address.component';
import { PatientInsuranceComponent } from './patient-insurance/patient-insurance.component';
import { PatientInsuranceDetailsComponent } from './patient-insurance-details/patient-insurance-details.component';
import { PatientMrfComponent } from './patient-mrf/patient-mrf.component';
import { PatientReceptionistAttachmentsComponent } from './patient-receptionist-attachments/patient-receptionist-attachments.component';
import { PatientReceptionistAttachmentsDetailsComponent } from './patient-receptionist-attachments-details/patient-receptionist-attachments-details.component';
import { PatientFileComponent } from './patient-file/patient-file.component';


const patientRoutes: Routes = [

    //Patients
    { path: 'basic/:id', component: PatientBasicComponent },
    { path: 'vitalSigns/:id', component: PatientVitalSignsComponent },
    { path: 'diagnosis/:id', component: PatientDiagnosisComponent },
    { path: 'medication/:id', component: PatientMedicationComponent },
    { path: 'surgeries/:id', component: PatientSurgeriesComponent },
    { path: 'allergies/:id', component: PatientAllergiesComponent },
    //{ path: 'services/:id', component: PatientServicesComponent },
    { path: 'laboratory/:id', component: PatientLaboratoryComponent },
    { path: 'radiology/:id', component: PatientRadiologyComponent },
    { path: 'attachments/:id', component: PatientReceptionistAttachmentsComponent },
    { path: 'patientDiagnoseDetails/:id', component: PatientDiagnoseDetailsComponent },
    { path: 'patientMedicationDetails/:id', component: PatientMedicationDetailsComponent },
    { path: 'patientSurgeryDetails/:id', component: PatientSurgeryDetailsComponent },
    { path: 'patientAllergyDetails/:id', component: PatientAllergyDetailsComponent },
    { path: 'patientLabDetails/:id', component: PatientLabDetailsComponent },
    { path: 'patientRadiologyDetails/:id', component: PatientRadiologyDetailsComponent },
    { path: 'PatientReceptionistAttachmentsDetails/:parentId/:id', component: PatientReceptionistAttachmentsDetailsComponent },
    //{ path: 'patientServiceDetails/:id', component: PatientServiceDetailsComponent },
    { path: 'patientAccount/:id', component: PatientAccountComponent },
    { path: 'patientPersonal/:id', component: PatientPersonalComponent },
    { path: 'patientAddress/:id', component: PatientAddressComponent },
    { path: 'patientInsurance/:id', component: PatientInsuranceComponent },
    { path: 'patientInsuranceDetails/:id', component: PatientInsuranceDetailsComponent },
    { path: 'mrf/:id/:appointmentId/:divisionId', component: PatientMrfComponent },
    { path: 'file/:id', component: PatientFileComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(patientRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PatientRoutingModule { }