import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
    selector: 'clinic-manage-radiology-tests-group',
    templateUrl: './clinic-manage-radiology-tests-group.component.html'
})

export class ClinicManageRadiologyTestsGroupComponent implements OnInit, OnChanges {

    @Input() selectedRadiologyTestsGroupId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onRadiologyTestsGroupChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectedClinicId!: number;
    selectRadiologyTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedRadiologyTestsGroup: any = {};
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
        if (this.selectedRadiologyTestsGroupId && this.selectedRadiologyTestsGroupId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getRadiologyTestsGroupById(thisComponent.selectedRadiologyTestsGroupId)
                .subscribe(
                    function (radiologyTestsGroup: any) {
                        thisComponent.selectedRadiologyTestsGroup = radiologyTestsGroup;
                        thisComponent.selectedParentGroupId = radiologyTestsGroup.parentGroupId;
                        if (thisComponent.selectedLang == 'ar')
                            thisComponent.selectedParentGroupName = radiologyTestsGroup.parentGroupName;
                        else
                            thisComponent.selectedParentGroupName = radiologyTestsGroup.parentGroupNameTranslation;

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
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


    saveRadiologyTestsGroup(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedRadiologyTestsGroup.parentGroupId = this.selectedParentGroupId;
        this.selectedRadiologyTestsGroup.clinicId = this.selectedClinicId
        if (this.selectedRadiologyTestsGroup.id > 0) {
            //Update
            this.clinicService.updateRadiologyTestsGroup(this.selectedRadiologyTestsGroup)
                .subscribe(
                    function (response: any) {

                        thisComponent.onIsNew.emit(false);
                        thisComponent.onRadiologyTestsGroupChanged.emit(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearControl();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.clearControl();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });

        }
        else {
            //New
            this.clinicService.createRadiologyTestsGroup(this.selectedRadiologyTestsGroup)
                .subscribe(
                    function (response: any) {

                        thisComponent.onIsNew.emit(true);
                        thisComponent.onRadiologyTestsGroupChanged.emit(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearControl();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.clearControl();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clearControl(): void {
        this.selectedRadiologyTestsGroup = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelRadiologyTestsGroup(): void {
        this.clearControl();
        this.onCancel.emit();
    }
}