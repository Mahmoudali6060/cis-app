import {Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/primeng';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {ClinicService} from '../../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-manage-diagnose',
    templateUrl: 'clinic-manage-diagnose.component.html'
})

export class ClinicManageDiagnoseComponent implements OnChanges  {

    @Input() selectedDiagnoseId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onDiagnoseChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectDiagnosisTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedDiagnose: any = { id: 0};
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , private localStorage: LocalStorageService) { }
    
    ngOnChanges(changes: SimpleChanges) {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        if (this.selectedDiagnoseId && this.selectedDiagnoseId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getDiagnoseById(thisComponent.selectedDiagnoseId)
                .subscribe(
                function (diagnose) {
                    thisComponent.selectedDiagnose = diagnose;
                    thisComponent.selectedParentGroupId = diagnose.parentGroupId;

                    if (thisComponent.selectedLang == 'ar')
                        thisComponent.selectedParentGroupName = diagnose.parentGroupName;
                    else
                        thisComponent.selectedParentGroupName = diagnose.parentGroupNameTranslation;
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

    saveDiagnosis(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedDiagnose.parentGroupId = this.selectedParentGroupId;

        if (this.selectedDiagnose.id > 0) {
            //Update
            this.clinicService.updateDiagnose(this.selectedDiagnose)
                .subscribe(
                function (response:any) {

                    //  thisComponent.selectedDiagnose = response;
                    thisComponent.onIsNew.emit(false);
                    thisComponent.onDiagnoseChanged.emit(response:any);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.clearControl();
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                    thisComponent.clearControl();
                },
                function () {
                    thisComponent.showProgress = false;
                });

        }
        else {
            //New
            this.clinicService.createDiagnose(this.selectedDiagnose)
                .subscribe(
                function (response:any) {

                  //  thisComponent.selectedDiagnose = response;
                    thisComponent.onIsNew.emit(true);
                    thisComponent.onDiagnoseChanged.emit(response:any);
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
        this.selectedDiagnose = { id:0};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelDiagnose(): void {
        this.clearControl();
        this.onCancel.emit();
    }

}