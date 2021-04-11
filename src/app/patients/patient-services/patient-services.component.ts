import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';

@Component({
    selector: 'patient-services',
    templateUrl: 'patient-services.component.html',
})

export class PatientServicesComponent implements OnInit {
    selectBasicTab: boolean = true;

    isDetailsVisible: boolean = false;
    lstToTranslated: string[] = [];
    @Input() allowEditing: boolean = true;
    @Input() noteId!: number;
    @Input() divisionId!: string;
    active = true;
    model: any = {};

    services = [];
    servicePackages = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    noteServicesList: any[] = [];
    isDoctor: boolean = false;
    previousTab: string = '';
    nextTab: string = '';

    noteServiceToBeDeleted!: any;
    noteServiceId!: any;
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService

    ) { }

    ngOnInit(): void {
        //this.noteId = "1";
        this.lstToTranslated = ['serviceName', 'serviceNameTranslation', 'diagnoseName', 'diagnoseNameTranslation', 'servicePackageName', 'servicePackageNameTranslation', 'recorderName', 'recorderNameTranslation'];
        this.isDoctor = this.storage.retrieve("IsDoctor");

        if (this.isDoctor) {
            this.previousTab = '/patient/allergies/1';
            this.nextTab = '/patient/laboratory/1';
        }
        else {
            this.previousTab = '/patient/medication/1';
            this.nextTab = '/patient/attachments/1';
        }

        let vm = this;
        //   this.clinicId = this.storage.retrieve("ClinicID");
        vm.loadNoteServicesList();
    }
    loadNoteServicesList() {
        let vm = this;
        if (vm.noteId && vm.noteId > 0) {
            vm.showProgress = true;

            this.doctorService.getNoteServicesList(vm.noteId).subscribe(
                function (response: any) {
                    vm.noteServicesList = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () { // finally
                    vm.showProgress = false;
                });
        }
    }

    selectNoteServiceToDelete(id: string) {
        this.noteServiceToBeDeleted = id;
    }
    deleteSelectedItem(id: any): void {

        let vm = this;
        if (this.noteServiceToBeDeleted == '') {
            let msg = vm.translate.instant("ItemToBeDeleted");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.doctorService.deleteNoteService(id)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    // remove delete object from collection
                    var selectedObject = vm.noteServicesList.find(o => o.id == id);
                    var index = vm.noteServicesList.indexOf(selectedObject);
                    if (index > -1)
                        vm.noteServicesList.splice(index, 1);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }


    showDetails(id: string) {
        this.isDetailsVisible = true;
        this.noteServiceId = id;
    }

    hideDetails() {
        this.isDetailsVisible = false;
        this.loadNoteServicesList();
    }
    editItem(id: string): void {
        //this.isForm = true;
        this.isDetailsVisible = true;
        this.noteServiceId = id;

    }
}