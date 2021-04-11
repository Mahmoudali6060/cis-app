import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {TranslateService} from '@ngx-translate/core';

@Component({
   
    selector: 'patient-remarks',
    templateUrl: 'patient-remarks.component.html',
})

export class PatientRemarksComponent implements OnInit {

    clinicNote: any = {};
    @Input() noteId!: number;
    @Output() onRemarksSaved = new EventEmitter<any>();

    constructor(public toastr: ToastrService
        , public patientService: PatientService
        , public storage: LocalStorageService
        , public translate: TranslateService
    )
    { }

    ngOnInit() {
        // get clinic note must be passed as a parameter
        let vm = this;
        if (this.noteId && this.noteId > 0){
            this.patientService.getClinicNoteById(vm.noteId)
                .subscribe(
                function (response:any) {
                    vm.clinicNote = response;
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                },
                function () {
                    //vm.showProgress = false;
                });
    }
    }

    saveNoteRemark()
    {
        let vm = this;

        this.patientService.saveClinicNoteRemarks(this.clinicNote)
            .subscribe(
            function (response:any) {
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');
                vm.clinicNote = response;
                vm.onRemarksSaved.emit();
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                //vm.showProgress = false;
            });
    }


}