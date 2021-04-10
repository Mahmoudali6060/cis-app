import {Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/primeng';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {ClinicService} from '../../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-manage-drug',
    templateUrl: 'clinic-manage-drug.component.html'
})

export class ClinicManageDrugComponent implements OnChanges  {

    @Input() selectedDrugId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onDrugChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectDrugsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedDrug: any = {};
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , private localStorage: LocalStorageService) { }
    
    ngOnChanges(changes: SimpleChanges) {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        if (this.selectedDrugId && this.selectedDrugId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getDrugById(thisComponent.selectedDrugId)
                .subscribe(
                function (drug) {
                    thisComponent.selectedDrug = drug;
                    thisComponent.selectedParentGroupId = drug.parentGroupId;

                    if (thisComponent.selectedLang == 'ar')
                        thisComponent.selectedParentGroupName = drug.parentGroupName;
                    else
                        thisComponent.selectedParentGroupName = drug.parentGroupNameTranslation;
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

    saveDrug(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedDrug.parentGroupId = this.selectedParentGroupId;

        if (this.selectedDrug.id > 0) {
            //Update
            this.clinicService.updateDrug(this.selectedDrug)
                .subscribe(
                function (response:any) {

                   // thisComponent.selectedDrug = response;
                    thisComponent.onIsNew.emit(false);
                    thisComponent.onDrugChanged.emit(response:any);
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
            this.clinicService.createDrug(this.selectedDrug)
                .subscribe(
                function (response:any) {

                    //thisComponent.selectedDrug = response;
                    thisComponent.onIsNew.emit(true);
                    thisComponent.onDrugChanged.emit(response:any);
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
    }

    clearControl(): void {
        this.selectedDrug = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelDrug(): void {
        this.clearControl();
        this.onCancel.emit();
    }

}