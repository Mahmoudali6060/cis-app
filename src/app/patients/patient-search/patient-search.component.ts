import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReceptionistService } from '../../receptionists/shared/receptionist.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({

    selector: 'patient-search',
    templateUrl: 'patient-search.component.html'
})

export class PatienSearchComponent implements OnInit {

    selectBasicTab: boolean = true;
    filterString!: string;
    searchCriteria: any = {};

    matchedPatients = [];
    selectedClinicId: string = "0";

    active = true;
    @Input() showActive: boolean = true;
    @Input() showEdit: boolean = true;
    @Input() showSelect: boolean = false;
    @Input() showClose: boolean = false;
    @Output() patientSelected = new EventEmitter<any>();

    @Input() patientAccountTitle: boolean = true;
    display: boolean = false;

    patientId = '';
    mrn = '';

    showProgress = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableEditPatientBtn: boolean = false;
    enableActivatePatientBtn: boolean = false;
    constructor(private receptionistService: ReceptionistService
        , private sharedService: SharedService
        , private localStorage: LocalStorageService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }

    getAllPatients() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        thisComponent.receptionistService.SearchForPatient(thisComponent.searchCriteria)
            .subscribe(
                function (response: any) {
                    thisComponent.matchedPatients = [];
                    thisComponent.matchedPatients = response;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                    thisComponent.matchedPatients = [];
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    changePatientActivation(type: any, id: any, event: any) {
        let thisComponent = this;

        thisComponent.showProgress = true;
        thisComponent.receptionistService.updatePatientActiveState({ "id": id, "isActive": event.target.checked })
            .subscribe(
                function (response: any) {
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }
    showDialog() {
        this.display = true;
    }

    selectPatientForSearch(patientId: string) {
        let thisComponent = this;
        this.patientId = patientId;
        if (this.patientId.toString().toLowerCase() != 'new') {
            thisComponent.showProgress = true;
            this.receptionistService.getPatientById(this.patientId)
                .subscribe(
                    function (response: any) {//ClinicMRN
                        thisComponent.mrn = response.clinicMRN;
                        thisComponent.patientSelected.emit(thisComponent.mrn);
                        thisComponent.showProgress = false;
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    handleUserInterfaceViews(user: any) {
        if (this.showActive && this.showEdit) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.PatientRegistration && (item.edit == true || item.fullControl == true))
                    this.enableEditPatientBtn = true;
                if (item.permission.key == this.key.MRN && (item.activate == true))
                    this.enableActivatePatientBtn = true;
            }
        }

    }
}