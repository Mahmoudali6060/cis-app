import {Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/primeng';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

import {ClinicService} from '../../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-manage-diagnosis-group',
    templateUrl: 'clinic-manage-diagnosis-group.component.html'
})

export class ClinicManageDiagnosisGroupComponent implements OnInit, OnChanges {

    @Input() selectedDiagnosisGroupId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onDiagnosisGroupChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectedClinicId: number | undefined;
    selectDiagnosisTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedDiagnosisGroup: any = {};
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
        if (this.selectedDiagnosisGroupId && this.selectedDiagnosisGroupId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getDiagnosisGroupById(thisComponent.selectedDiagnosisGroupId)
                .subscribe(
                function (diagnosisGroup) {
                    thisComponent.selectedDiagnosisGroup = diagnosisGroup;
                    thisComponent.selectedParentGroupId = diagnosisGroup.parentGroupId;
                    if (thisComponent.selectedLang == 'ar')
                        thisComponent.selectedParentGroupName = diagnosisGroup.parentGroupName;
                    else
                        thisComponent.selectedParentGroupName = diagnosisGroup.parentGroupNameTranslation;
                },
                function (error:any) { 
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


saveDiagnosisGroup(): void {
    let thisComponent = this;
    thisComponent.showProgress = true;
    this.selectedDiagnosisGroup.parentGroupId = this.selectedParentGroupId;
    this.selectedDiagnosisGroup.clinicId = this.selectedClinicId
    if (this.selectedDiagnosisGroup.id > 0) {
    //Update
    this.clinicService.updateDiagnosisGroup(this.selectedDiagnosisGroup)
        .subscribe(
        function (response:any) {

          //  thisComponent.selectedDiagnosisGroup = response;
            thisComponent.onIsNew.emit(false);
            thisComponent.onDiagnosisGroupChanged.emit(response:any);
            let msg = thisComponent.translate.instant("SavedSuccessfully");
            thisComponent.toastr.success(msg, '');
            thisComponent.clearControl();
        },
        function (error:any) { 
            thisComponent.toastr.error(error, '');
            thisComponent.showProgress = false;
        },
        function () {
            thisComponent.showProgress = false;
        });

}
        else {
    //New
    this.clinicService.createDiagnosisGroup(this.selectedDiagnosisGroup)
        .subscribe(
        function (response:any) {

            //thisComponent.selectedDiagnosisGroup = response;
            thisComponent.onIsNew.emit(true);
            thisComponent.onDiagnosisGroupChanged.emit(response:any);
            let msg = thisComponent.translate.instant("SavedSuccessfully");
            thisComponent.toastr.success(msg, '');
            thisComponent.clearControl();
        },
        function (error:any) { 
            thisComponent.toastr.error(error, '');
            thisComponent.showProgress = false;
        },
        function () {
            thisComponent.showProgress = false;
        });
}
    }

clearControl(): void {
    this.selectedDiagnosisGroup = {};
    this.active = false;
    setTimeout(() => this.active = true, 0);
}

cancelDiagnosisGroup(): void
    {
    this.clearControl();
    this.onCancel.emit();
    }
}