import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
    selector: 'patient-laboratory',
    templateUrl: 'patient-laboratory.component.html',
})

export class PatientLaboratoryComponent implements OnInit {
    selectBasicTab: boolean = true;
    @Input() noteId!: any;
    isDetailsVisible: boolean = false;
    @Input() allowEditing: boolean = true;
    @Input() usedInClinicNoteMedications: boolean = false;
    lstToTranslated: string[] = [];
    active = true;
    labTests: any[] = [];
    labTestToBeDeleted: any;
    noteLabTestId: any;
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    filterString: any;
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        let vm = this;
        //   this.clinicId = this.storage.retrieve("ClinicID");

        vm.loadNoteLabTestList();

        this.lstToTranslated = ['diagnoseName', 'diagnoseNameTranslation', 'labTestName', 'labTestNameTranslation'];
    }

    loadNoteLabTestList() {
        if (this.noteId && this.noteId > 0) {
            let vm = this;
            vm.showProgress = true;
            this.doctorService.getClinicNoteLabTests(vm.noteId).subscribe(
                function (response: any) {
                    vm.labTests = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });

        }
    }

    selectLabTestToDelete(id: string) {
        this.labTestToBeDeleted = id;
    }
    deleteSelectedItem(): void {
        let vm = this;
        if (this.labTestToBeDeleted == '') {
            let msg = vm.translate.instant("ItemToBeDeleted");
            vm.toastr.warning(msg, '');
            return;
        }
        vm.showProgress = true;
        this.doctorService.deleteClinicNoteLabTest(this.labTestToBeDeleted)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    // remove delete object from collection
                    var selectedObject = vm.labTests.find(o => o.id == vm.labTestToBeDeleted);
                    var index = vm.labTests.indexOf(selectedObject);
                    if (index > -1)
                        vm.labTests.splice(index, 1);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    showDetails(id?: string) {
        this.isDetailsVisible = true;
        this.noteLabTestId = id;
    }

    hideDetails() {
        this.isDetailsVisible = false;
        this.loadNoteLabTestList();
    }
    editItem(id: string): void {
        //this.isForm = true;
        this.isDetailsVisible = true;
        this.noteLabTestId = id;

    }

}