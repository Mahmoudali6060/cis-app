import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'clinic-manage-laboratory-test',
    templateUrl: './clinic-manage-laboratory-test.component.html'
})

export class ClinicManageLaboratoryTestComponent implements OnChanges {

    @Input() selectedLaboratoryTestId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onLaboratoryTestChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectLaboratoryTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedLaboratoryTest: any = {};
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        if (this.selectedLaboratoryTestId && this.selectedLaboratoryTestId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getLaboratoryTestById(thisComponent.selectedLaboratoryTestId)
                .subscribe(
                    function (laboratoryTest: any) {
                        thisComponent.selectedLaboratoryTest = laboratoryTest;
                        thisComponent.selectedParentGroupId = laboratoryTest.parentGroupId;
                        if (thisComponent.selectedLang == 'ar')
                            thisComponent.selectedParentGroupName = laboratoryTest.parentGroupName;
                        else
                            thisComponent.selectedParentGroupName = laboratoryTest.parentGroupNameTranslation;
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

    saveLaboratoryTest(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedLaboratoryTest.parentGroupId = this.selectedParentGroupId;

        if (this.selectedLaboratoryTest.id > 0) {
            //Update
            this.clinicService.updateLaboratoryTest(this.selectedLaboratoryTest)
                .subscribe(
                    function (response: any) {

                        //thisComponent.selectedLaboratoryTest = response;
                        thisComponent.onIsNew.emit(false);
                        thisComponent.onLaboratoryTestChanged.emit(response);
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
            this.clinicService.createLaboratoryTest(this.selectedLaboratoryTest)
                .subscribe(
                    function (response: any) {

                        // thisComponent.selectedLaboratoryTest = response;
                        thisComponent.onIsNew.emit(true);
                        thisComponent.onLaboratoryTestChanged.emit(response);
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
        this.selectedLaboratoryTest = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelLaboratoryTest(): void {
        this.clearControl();
        this.onCancel.emit();
    }

}