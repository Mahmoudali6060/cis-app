import {Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import {ClinicService} from '../shared/clinic.service';

import { TreeNode } from 'primeng/primeng';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-humanResource-basic',
    templateUrl: 'clinic-humanResource-basic.component.html'
})

export class ClinicHumanResourceBasicComponent implements OnChanges {

    @Input() humanResourceWrapper: any;
    @Input() departmentName = '';
    @Input() divisionName = '';
    @Input() divisionId = '';
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Input() selectedUserToEdit: any;
    @Input() isNonMedicalDepartment: boolean = false;
    @Output() onModelUpdated = new EventEmitter<any>();

    selectedClinicId: string | undefined;

    active: boolean = true;
    showProgress: boolean = false;
    user: any = { id: 0, divisions: [], reachInfo: {} };
    userTypesList: any[] = [];
    gendersList: any[] = [];
    nationalitiesList: any[] = [];


    constructor(private clinicService: ClinicService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnChanges(): void {

        this.clear();

        if (this.humanResourceWrapper != undefined) {
            this.userTypesList = this.humanResourceWrapper.humanResourceTypes;
            this.gendersList = this.humanResourceWrapper.genders;
            this.nationalitiesList = this.humanResourceWrapper.nationalities;

            if (this.userTypesList == undefined)
                this.userTypesList = [];

            if (this.gendersList == undefined)
                this.gendersList = [];

            if (this.nationalitiesList == undefined)
                this.nationalitiesList = [];
        }

        if (this.selectedUserToEdit != undefined) {
            this.user = this.selectedUserToEdit;
        }
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");

    }

    saveHumanResource(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        if (this.user.id == 0)//New
        {
            this.user.clinicId = this.selectedClinicId;
            //if (this.isPasswordValid()) {
            this.user.divisions.push({ id: this.divisionId });
            this.clinicService.saveHumanResource(this.user)
                .subscribe(
                function (response:any) {

                    thisComponent.user = response;
                    //Update the tree
                    thisComponent.raiseModelUpdated(response:any);

                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
            //}
            //else {
            //    thisComponent.showProgress = false;
            //}
        }
        else//Update
        {
            this.clinicService.updateHumanResource(this.user)
                .subscribe(
                function (response:any) {
                    thisComponent.user = response;
                    thisComponent.raiseModelUpdated(response:any);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
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

    clear() {
        this.user = { id: 0, divisions: [], reachInfo: {} };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    /*
    isPasswordValid(): boolean {
        let valid: boolean = true;

        if (this.user.password != this.user.confirmPassword) {
            this.toastr.error('Password and confirm password must be the same', '');
            valid = false
        }

        return valid;
    }
    */
    raiseModelUpdated(updatedModel) {
        this.onModelUpdated.emit(updatedModel);
    }
}