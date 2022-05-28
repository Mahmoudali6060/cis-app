import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'clinic-manage-laboratory-tests-group',
    templateUrl: './clinic-manage-laboratory-tests-group.component.html'
})

export class ClinicManageLaboratoryTestsGroupComponent implements OnInit, OnChanges {

    @Input() selectedLaboratoryTestsGroupId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onLaboratoryTestsGroupChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectedClinicId!: number;
    selectLaboratoryTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedLaboratoryTestsGroup: any = {};
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
    }

    //get data according to selected type 
    ngOnChanges(changes: SimpleChanges) {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        if (this.selectedLaboratoryTestsGroupId && this.selectedLaboratoryTestsGroupId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getLaboratoryTestsGroupById(thisComponent.selectedLaboratoryTestsGroupId)
                .subscribe(
                    function (laboratoryTestsGroup: any) {
                        thisComponent.selectedLaboratoryTestsGroup = laboratoryTestsGroup;
                        thisComponent.selectedParentGroupId = laboratoryTestsGroup.parentGroupId;
                        if (thisComponent.selectedLang == 'ar')
                            thisComponent.selectedParentGroupName = laboratoryTestsGroup.parentGroupName;
                        else
                            thisComponent.selectedParentGroupName = laboratoryTestsGroup.parentGroupNameTranslation;

                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
        else {
            this.clearControl();
        }
    }


    saveLaboratoryTestsGroup(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedLaboratoryTestsGroup.parentGroupId = this.selectedParentGroupId;
        this.selectedLaboratoryTestsGroup.clinicId = this.selectedClinicId
        if (this.selectedLaboratoryTestsGroup.id > 0) {
            //Update
            this.clinicService.updateLaboratoryTestsGroup(this.selectedLaboratoryTestsGroup)
                .subscribe(
                    function (response: any) {

                        thisComponent.onIsNew.emit(false);
                        thisComponent.onLaboratoryTestsGroupChanged.emit(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearControl();
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearControl();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });

        }
        else {
            //New
            this.clinicService.createLaboratoryTestsGroup(this.selectedLaboratoryTestsGroup)
                .subscribe(
                    function (response: any) {

                        thisComponent.onIsNew.emit(true);
                        thisComponent.onLaboratoryTestsGroupChanged.emit(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearControl();
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearControl();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clearControl(): void {
        this.selectedLaboratoryTestsGroup = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelLaboratoryTestsGroup(): void {
        this.clearControl();
        this.onCancel.emit();
    }
}