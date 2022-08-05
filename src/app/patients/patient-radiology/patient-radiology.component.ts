import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { Table } from 'primeng/table';

@Component({
    selector: 'patient-radiology',
    templateUrl: 'patient-radiology.component.html',
})

export class PatientRadiologyComponent implements OnInit {
    selectBasicTab: boolean = true;
    lstToTranslated: string[] = [];
    isDetailsVisible: boolean = false;
    @Input() allowEditing: boolean = true;
    @Input() noteId!: any;
    active = true;
    radTests: any[] = [];
    radTestToBeDeleted: any;
    noteRadtId: any;
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    filterString!: any;
    @ViewChild('dt') table!: Table;
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['radTestName', 'radTestNameTranslation', 'diagnoseName', 'diagnoseNameTranslation'];
        let vm = this;
        vm.showProgress = true;
        vm.loadNoteRadTestList();
    }
    selectRadTestToDelete(id: string) {
        this.radTestToBeDeleted = id;
    }
    deleteSelectedItem(): void {
        let vm = this;
        if (this.radTestToBeDeleted == '') {
            let msg = vm.translate.instant("ItemToBeDeleted");
            vm.toastr.warning(msg, '');
            return;
        }
        vm.showProgress = true;
        this.doctorService.deleteClinicNoteRadTest(this.radTestToBeDeleted)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    // remove delete object from collection
                    var selectedObject = vm.radTests.find(o => o.id == vm.radTestToBeDeleted);
                    var index = vm.radTests.indexOf(selectedObject);
                    if (index > -1)
                        vm.radTests.splice(index, 1);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }
    loadNoteRadTestList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            this.doctorService.getClinicNoteRadTests(vm.noteId).subscribe(
                function (response: any) {
                    vm.radTests = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }

    }

    showDetails(id?: string) {
        this.isDetailsVisible = true;
        this.noteRadtId = id;
    }
    hideDetails() {
        this.isDetailsVisible = false;
        this.loadNoteRadTestList();
    }
    editItem(id: string): void {
        this.isDetailsVisible = true;
        this.noteRadtId = id;
    }

}