import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatientService } from '../shared/patient.service'
import { ToastrService } from 'ngx-toastr';
import { UtilityClass } from '../../shared/shared/utility.class';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'patient-address',
    templateUrl: 'patient-address.component.html'
})

export class PatientAddressComponent implements OnInit, OnChanges {
    selectAddressTab: boolean = true;
    @Input() patientId: string = '';
    @Output() onModelUpdated = new EventEmitter<any>();
    @Input() model: any = {};
    @Input() title: string = '';
    utilityClass: UtilityClass = new UtilityClass();
    active = true;
    //model: any = {};
    showProgress = false;
    selectedClinicId: any;

    constructor(private patientService: PatientService,
        private localStorage: LocalStorageService,
        public toastr: ToastrService,
        private _route: ActivatedRoute
        , private router: Router, public translate: TranslateService

    ) { }

    ngOnInit(): void {
        let vm = this;
        //  let id = this._route.snapshot.params['id'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
    }
    ngOnChanges(): void {
        if (this.model.reachInfo == undefined || this.model.reachInfo == null) {
            this.model.reachInfo = {};
        }
    }

    clear(): void {
        //this.getOrganizationAddress(this);
        //this.model = {};
        //this.active = false;
        //this.model.id = 'new';
        //this.model.contact = {};
        //this.model.address = {};
        //setTimeout(() => this.active = true, 0);
    }

    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;
        //  this.model.clinicId = this.clinicId;
        this.patientService.saveorUpdateReachInformation(this.model)
            .subscribe(
                function (response: any) {
                    vm.model = response;
                    if (vm.model.birthDate)
                        vm.model.birthDate = vm.utilityClass.getUtcDateFromString(vm.model.birthDate);

                    vm.raiseModelUpdated(vm.model);
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }
    private navigateToPackages() {
        //routerLink="/receptionistPatients/1"
        this.router.navigate(['/receptionist/patients', this.selectedClinicId]);
    }
}