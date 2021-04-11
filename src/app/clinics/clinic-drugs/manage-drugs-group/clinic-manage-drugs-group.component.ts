import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({

    selector: 'clinic-manage-drugs-group',
    templateUrl: './clinic-manage-drugs-group.component.html'
})

export class ClinicManageDrugsGroupComponent implements OnInit, OnChanges {

    @Input() selectedDrugsGroupId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onDrugsGroupChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();
    selectedClinicId!: number;
    selectDrugsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedDrugsGroup: any = {};
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
        if (this.selectedDrugsGroupId && this.selectedDrugsGroupId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getDrugsGroupById(thisComponent.selectedDrugsGroupId)
                .subscribe(
                    function (drugsGroup: any) {
                        thisComponent.selectedDrugsGroup = drugsGroup;
                        thisComponent.selectedParentGroupId = drugsGroup.parentGroupId;
                        if (thisComponent.selectedLang == 'ar')
                            thisComponent.selectedParentGroupName = drugsGroup.parentGroupName;
                        else
                            thisComponent.selectedParentGroupName = drugsGroup.parentGroupNameTranslation;
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


    saveDrugsGroup(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedDrugsGroup.parentGroupId = this.selectedParentGroupId;
        this.selectedDrugsGroup.clinicId = this.selectedClinicId
        if (this.selectedDrugsGroup.id > 0) {
            //Update
            this.clinicService.updateDrugsGroup(this.selectedDrugsGroup)
                .subscribe(
                    function (response: any) {

                        //thisComponent.selectedDrugsGroup = response;
                        thisComponent.onIsNew.emit(false);
                        thisComponent.onDrugsGroupChanged.emit(response);
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
            this.clinicService.createDrugsGroup(this.selectedDrugsGroup)
                .subscribe(
                    function (response: any) {

                        //thisComponent.selectedDrugsGroup = response;
                        thisComponent.onIsNew.emit(true);
                        thisComponent.onDrugsGroupChanged.emit(response);
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
        this.selectedDrugsGroup = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelDrugsGroup(): void {
        this.clearControl();
        this.onCancel.emit();
    }
}