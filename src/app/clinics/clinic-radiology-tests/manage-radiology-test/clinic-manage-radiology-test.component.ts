import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({

    selector: 'clinic-manage-radiology-test',
    templateUrl: './clinic-manage-radiology-test.component.html'
})

export class ClinicManageRadiologyTestComponent implements OnChanges {

    @Input() selectedRadiologyTestId: string = '';
    @Input() selectedParentGroupId: string = '';
    @Input() selectedParentGroupName: string = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onRadiologyTestChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() onIsNew: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onCancel = new EventEmitter();

    selectRadiologyTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedRadiologyTest: any = {};
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private clinicService: ClinicService
        , private localStorage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        if (this.selectedRadiologyTestId && this.selectedRadiologyTestId != '') {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getRadiologyTestById(thisComponent.selectedRadiologyTestId)
                .subscribe(
                    function (radiologyTest: any) {
                        thisComponent.selectedRadiologyTest = radiologyTest;
                        thisComponent.selectedParentGroupId = radiologyTest.parentGroupId;
                        if (thisComponent.selectedLang == 'ar')
                            thisComponent.selectedParentGroupName = radiologyTest.parentGroupName;
                        else
                            thisComponent.selectedParentGroupName = radiologyTest.parentGroupNameTranslation;

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

    saveRadiologyTest(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.selectedRadiologyTest.parentGroupId = this.selectedParentGroupId;

        if (this.selectedRadiologyTest.id > 0) {
            //Update
            this.clinicService.updateRadiologyTest(this.selectedRadiologyTest)
                .subscribe(
                    function (response: any) {

                        //thisComponent.selectedRadiologyTest = response;
                        thisComponent.onIsNew.emit(false);
                        thisComponent.onRadiologyTestChanged.emit(response);
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
            this.clinicService.createRadiologyTest(this.selectedRadiologyTest)
                .subscribe(
                    function (response: any) {

                        // thisComponent.selectedRadiologyTest = response;
                        thisComponent.onIsNew.emit(true);
                        thisComponent.onRadiologyTestChanged.emit(response);
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
        this.selectedRadiologyTest = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    cancelRadiologyTest(): void {
        this.clearControl();
        this.onCancel.emit();
    }

}