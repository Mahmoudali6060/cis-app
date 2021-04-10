import {Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output, ViewChild , ElementRef} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import {AdministrationService} from '../../administration/shared/administration.service';
enum EMRWizard {
    ChiefComplaint = 1,
    Diagnosis,
    Medication,
    Services,
    LabTests,
    RadiologyTests,
    Templates,
    Remarks
}
@Component({
   
    selector: 'patient-clinical-note',
    templateUrl: 'patient-clinical-note.component.html',

})

export class PatientClinicalNoteComponent implements OnChanges, OnInit {

    
    @ViewChild('patientVitalSignsComp') patientVitalSignsComp: any;
    @Input() activeTabIndex: number = 0;
    @Input() patientId = '1';
    @Input() noteId = '';
    @Input() departmentId: string | undefined;
    @Input() selectedAppointmentId: number | undefined;
    @Input() hasEditednote: boolean = false;
    appointmentId: number = 0;
    hasID: boolean = false;
    isDoctor: boolean = false;
    //@Output() onCheifComplaintSavedGetNoteId = new EventEmitter<any>();

    selectedClinicId: number | undefined;
    selectEMRWizardTab: boolean = true;
    selectAccountTab: boolean = true;
    clinicModel: any = { id: 0, isActive: true };
    clinicId: string = '';
    emrValue: string = '';
    concatEmrValue: string = '';
    selectClinicsTab: boolean = true;
    active: boolean = true;
    wizardItems: any;

    @Input() allowEditing: boolean = true;
    @Output() onNewNoteSaved = new EventEmitter<any>();

    //isBasicInfoSelected: boolean = false;
    //isSurgeriesSelected: boolean = false;
    //isAllergiesSelected: boolean = false;
    //isAttachmentsSelected: boolean = false;
    firstTab: string | undefined;
    secondTab: string | undefined;
    thirdTab: string | undefined;
    fourthTab: string | undefined;
    fifthTab: string | undefined;
    sixthTab: string | undefined;
    seventhTab: string | undefined;
    eightTab: string | undefined;

    firstTabValue: number | undefined;
    secondTabValue: number | undefined;
    thirdTabvalue: number | undefined;
    fourthTabValue: number | undefined;
    fifthTabValue: number | undefined;
    sixthTabValue: number | undefined;
    seventhTabvalue: number | undefined;

    isDiagnosisSelected: boolean = false;
    isMedicationSelected: boolean = false;
    isSurgeriesSelected: boolean = false;
    isAllergiesSelected: boolean = false;
    isServicesSelected: boolean = false;
    isLaboratorySelected: boolean = false;
    isRadiologySelected: boolean = false;
    isTemplatesSelected: boolean = false;
    isRemarksSelected: boolean = false;

    isVitalSignsSelected: boolean = true;
    isFirstSelected: boolean = false;
    isSecondSelected: boolean = false;
    isThirdSelected: boolean = false;
    isFourthSelected: boolean = false;
    isFifthSelected: boolean = false;
    isSixthSelected: boolean = false;
    isSeventhSelected: boolean = false;
    usedForClinicNote: boolean = true;
    showProgress = false;

    headerText: string = "ChiefComplaintVitalSigns";

    firstTabIcon: string = '';
    secondTabIcon: string = '';
    thirdTabIcon: string = '';
    fourthTabIcon: string = '';
    fifthTabIcon: string = '';
    sixthTabIcon: string = '';
    seventhTabIcon: string = '';
    


    constructor(private administrationService: AdministrationService,
        private localStorage: LocalStorageService,
        public toastr: ToastrService,
        private _route: ActivatedRoute, public translate: TranslateService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.isDoctor = this.localStorage.retrieve("IsDoctor");

        if (this.noteId == null || this.noteId == undefined || this.noteId == 'new' || this.noteId == '')
            this.hasID = false;
        else
            this.hasID = true;

        if (this.hasEditednote && this.hasEditednote == true)
            this.hasID = true;

    }

    ngOnInit(): void {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.initializeModel();

    }
    initializeModel(): void {
        //Initialize the mode
        //In case of Edit mode, load it from the DB
        let thisComp = this;
        if (this.selectedClinicId && this.selectedClinicId > 0) {
            this.showProgress = true;
            this.administrationService.getClinicById(thisComp.selectedClinicId)
                .subscribe(
                function (response:any) {

                    thisComp.clinicModel = response;
                    thisComp.wizardItems = thisComp.clinicModel.emrWizardList;
                    thisComp.firstTab = thisComp.wizardItems[0];
                    thisComp.secondTab = thisComp.wizardItems[1];
                    thisComp.thirdTab = thisComp.wizardItems[2];
                    thisComp.fourthTab = thisComp.wizardItems[3];
                    thisComp.fifthTab = thisComp.wizardItems[4];
                    thisComp.sixthTab = thisComp.wizardItems[5];
                    thisComp.seventhTab = thisComp.wizardItems[6];
                    thisComp.setTab();
                    thisComp.initializeTabIcons();
                    thisComp.showProgress = false;
                },
                function (error:any) { 
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                },
                function () {
                    thisComp.showProgress = false;
                });
        }
    }
    //var tempValue: EMRWizard = <EMRWizard>EMRWizard[this.emrValue];// used to vonvert string into enum integer value

    initializeTabIcons()
    {
        this.firstTabIcon = this.getTabIcon(this.firstTab);//(this.wizardItems[0]);
        this.secondTabIcon = this.getTabIcon(this.secondTab);//(this.wizardItems[1]);
        this.thirdTabIcon = this.getTabIcon(this.thirdTab);//(this.wizardItems[2]);
        this.fourthTabIcon = this.getTabIcon(this.fourthTab);//(this.wizardItems[3]);
        this.fifthTabIcon = this.getTabIcon(this.fifthTab);//(this.wizardItems[4]);
        this.sixthTabIcon = this.getTabIcon(this.sixthTab);//(this.wizardItems[5]);
        this.seventhTabIcon = this.getTabIcon(this.seventhTab);//(this.wizardItems[6]);
        

        //for (let entry of this.wizardItems) {
           
        //    this
        //}

        //for (var i in this.wizardItems)
        //{

        //}
    }

    getTabIcon(nodeName: string)
    {
        if (nodeName == 'Diagnosis')
            return 'fa fa-stethoscope';
        else if (nodeName == 'Medication')
            return 'fa fa-glass';
        else if (nodeName == 'Services')
            return 'fa fa-heartbeat';
        else if (nodeName == 'LabTests')
            return 'fa fa-flask';
        else if (nodeName == 'RadiologyTests')
            return 'fa fa-bed';
        else if (nodeName == 'Templates')
            return 'fa fa-file-word-o';
        else if (nodeName == 'Remarks')
            return 'fa fa-edit';

        return '';
    }

    setTab() {
        this.firstTabValue = this.wizardItems.indexOf(this.firstTab) + 1;
        this.secondTabValue = this.wizardItems.indexOf(this.secondTab) + 1;
        this.thirdTabvalue = this.wizardItems.indexOf(this.thirdTab) + 1;
        this.fourthTabValue = this.wizardItems.indexOf(this.fourthTab) + 1;
        this.fifthTabValue = this.wizardItems.indexOf(this.fifthTab) + 1;
        this.sixthTabValue = this.wizardItems.indexOf(this.sixthTab) + 1;
        this.seventhTabvalue = this.wizardItems.indexOf(this.seventhTab) + 1;
    }

    setSelectedTab(tabNameId: any ) {
        //tabNameId = +tabNameId;

        this.isVitalSignsSelected = false;

        this.isDiagnosisSelected = this.wizardItems[tabNameId - 1] == "Diagnosis";
        this.isMedicationSelected = this.wizardItems[tabNameId - 1] == "Medication";
        this.isServicesSelected = this.wizardItems[tabNameId - 1] == "Services";
        this.isLaboratorySelected = this.wizardItems[tabNameId - 1] == "LabTests";
        this.isRadiologySelected = this.wizardItems[tabNameId - 1] == "RadiologyTests";
        this.isTemplatesSelected = this.wizardItems[tabNameId - 1] == "Templates";
        this.isRemarksSelected = this.wizardItems[tabNameId - 1] == "Remarks";

        this.isFirstSelected = tabNameId == 1;
        this.isSecondSelected = tabNameId == 2;
        this.isThirdSelected = tabNameId == 3;
        this.isFourthSelected = tabNameId == 4;
        this.isFifthSelected = tabNameId == 5;
        this.isSixthSelected = tabNameId == 6;
        this.isSeventhSelected = tabNameId == 7;

        if (tabNameId == 0) {
            this.isVitalSignsSelected = true;
            if (this.isDoctor)
                this.headerText = this.translate.instant("ChiefComplaintVitalSigns");
            else
                this.headerText = this.translate.instant("VitalSigns");
        }
        else if (this.isDiagnosisSelected) {
            this.headerText = "Diagnosis";
            this.firstTabIcon = 'fa fa-stethoscope';
        }
        else if (this.isMedicationSelected) {
            this.headerText = "Medication";
        }
        else if (this.isServicesSelected) {
            this.headerText = "Services";
        }
        else if (this.isLaboratorySelected) {
            this.headerText = "LabTests";
        }
        else if (this.isRadiologySelected) {
            this.headerText = "RadiologyTests";
        }
        else if (this.isTemplatesSelected) {
            this.headerText = "Templates";
        }
        else if (this.isRemarksSelected) {
            this.headerText = "Remarks";
        }

    }

    nextTab() {
        if (this.isVitalSignsSelected) {
            this.setSelectedTab(1)
        }
        else if (this.isDiagnosisSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Diagnosis");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isMedicationSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Medication");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isServicesSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Services");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isLaboratorySelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("LabTests");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isRadiologySelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("RadiologyTests");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isTemplatesSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Templates");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
        else if (this.isRemarksSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Remarks");
            if (selectedTabIndex + 2 < 8)
                this.setSelectedTab(selectedTabIndex + 2);
        }
    }

    /* No longer needed
    previousTab() {

        if (this.isFirstSelected) {

            this.isVitalSignsSelected = true;
            if (this.isDoctor)
                this.headerText = this.translate.instant("ChiefComplaintVitalSigns");
            else
                this.headerText = this.translate.instant("VitalSigns");
            this.setSelectedTab(0);

        }
        else if (this.isRemarksSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Remarks");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isTemplatesSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Templates");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isRadiologySelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("RadiologyTests");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isLaboratorySelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("LabTests");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isServicesSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Services");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isMedicationSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Medication");
            this.setSelectedTab(selectedTabIndex);
        }
        else if (this.isDiagnosisSelected) {
            let selectedTabIndex: number = this.wizardItems.indexOf("Diagnosis");
            this.setSelectedTab(selectedTabIndex);
        }
    }
    */

    handleCheifComplaintSaved(eventArgs) {
        if (eventArgs != undefined) {

            this.setClinicNoteId(eventArgs.clinicNoteId)
            if (eventArgs.moveNext)
                this.nextTab();
        }
    }

    setClinicNoteId(noteID) {
        let vm = this;
        vm.noteId = noteID;
        if (this.noteId == null || this.noteId == undefined || this.noteId == 'new' || this.noteId == '')
            this.hasID = false;
        else
            this.hasID = true;

        vm.onNewNoteSaved.emit(true);
    }
    

}