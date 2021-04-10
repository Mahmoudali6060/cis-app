import {Component, OnInit, ViewChild, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeNode } from 'primeng/primeng';
import {TranslateService} from '@ngx-translate/core';
import { DoctorService } from '../../doctors/shared/doctor.service';
import {ClinicService} from '../../clinics/shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-diagnose-details',
    templateUrl: 'patient-diagnose-details.component.html',
})

export class PatientDiagnoseDetailsComponent implements OnInit {
    selectBasicTab: boolean = true;

    filterString: string | undefined;
    leafType: string = 'Diagnose';
    divisionId;

    @Input() patientId: number | undefined;
    @Input() clinicNoteId: number | undefined;
    @Input() toSaveClinicNoteDiagnose: any;
    active = true;
    selectedDiagnoseNode: any;
    clinicId;
    diagnosisTreeDataSourceItems: any[] = [];
    getAllDiagnosis = true;
    showProgress = false;
    allDiagnosis = [];
    @Output() onBack = new EventEmitter<any>();
    ttt = "ss";
    constructor(private doctorService: DoctorService
        , private clinicService: ClinicService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public localStorage: LocalStorageService
        , public translate: TranslateService

    )
    { }

    ngOnInit(): void {
        this.divisionId = this._route.snapshot.params['divisionId'];
        // this.toSaveClinicNoteDiagnose = {};
        this.clinicId = this.localStorage.retrieve("ClinicID");
        // this.selectedDiagnoseNode = undefined;
        this.getAllDiagnoseGroupsForTreeView(false);
        this.getClinicDepartmentDiagnoseGroupsForTreeView();

    }

    getClinicDepartmentDiagnoseGroupsForTreeView() {
        let vm = this;
        vm.getAllDiagnosis = true;
        //get department diagnose groups
        this.doctorService.getClinicDivisionDiagnoseGroupsForTreeView(vm.divisionId)
            .subscribe(
            function (response:any) {
                vm.diagnosisTreeDataSourceItems = response;
                if (vm.toSaveClinicNoteDiagnose) {
                    vm.getModelToDisplay(vm.toSaveClinicNoteDiagnose);
                    // vm.displaySelectedNode(vm.toSaveClinicNoteDiagnose.diagnoseId, "Diagnose");
                    vm.expandAll();
                }
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }
    getAllDiagnoseGroupsForTreeView(needAll: boolean) {
        let vm = this;

        /////////////////////////get all diagnose groups
        this.clinicService.getDiagnosisGroupsForTree(vm.clinicId)
            .subscribe(
            function (response:any) {
                vm.allDiagnosis = response;
                if (needAll) {
                    vm.diagnosisTreeDataSourceItems = response;
                    vm.getAllDiagnosis = false;
                    vm.expandAll();
                }

            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }
    getModelToDisplay(returnedModel: any) {

        this.displaySelectedNode(returnedModel.diagnoseId, "Diagnose", this.diagnosisTreeDataSourceItems);
        if (this.selectedDiagnoseNode == undefined) {
            this.displaySelectedNode(returnedModel.diagnoseId, "Diagnose", this.allDiagnosis)
            if (this.selectedDiagnoseNode != undefined)
                this.addDiagnoseToDepartmentTree(this.selectedDiagnoseNode);
        }

    }
    addDiagnoseToDepartmentTree(node: TreeNode) {
        // var parentNode = this.services[0];
        this.diagnosisTreeDataSourceItems[0].children.push(node);
        this.selectedDiagnoseNode = node;
        this.ttt = "bbbb";
    }

    displaySelectedNode(nodeId: string, nodeType: string, dataSource: any[]) {
        let vm = this
        vm.diagnosisTreeDataSourceItems.forEach(node => {
            if (node.data == nodeId && node.type == nodeType)
                vm.selectedDiagnoseNode = node;

            vm.displaySelectedNodeRecursive(node, nodeId, nodeType);

        });
    }

    private displaySelectedNodeRecursive(node: TreeNode, nodeId: string, nodeType: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displaySelectedNodeRecursive(childNode, nodeId, nodeType);

                if (childNode.data == nodeId && childNode.type == nodeType) {
                    this.selectedDiagnoseNode = childNode;
                }
            });
        }
    }

    expandAll() {
        this.diagnosisTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.diagnosisTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }

    onSubmit(): void {
        let vm = this;
        if (!this.toSaveClinicNoteDiagnose.diagnoseCode || this.toSaveClinicNoteDiagnose.diagnoseCode == '')
            return;

        vm.showProgress = true;
        vm.toSaveClinicNoteDiagnose.patientId = vm.patientId;
        vm.toSaveClinicNoteDiagnose.clinicNoteId = vm.clinicNoteId;
        vm.toSaveClinicNoteDiagnose.isCurrent = true;
        if (vm.selectedDiagnoseNode)
            vm.toSaveClinicNoteDiagnose.diagnoseId = vm.selectedDiagnoseNode.data;
        if (!this.toSaveClinicNoteDiagnose.hasOwnProperty('id') || this.toSaveClinicNoteDiagnose.id.toString().toLowerCase() == 'new') {
            //Add new
            this.doctorService.createClinicNoteDiagnose(this.toSaveClinicNoteDiagnose)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveClinicNoteDiagnose = response;
                    vm.clear();
                    vm.onBack.emit(response:any);
                },
                function (error:any) { 
                    vm.toastr.error(  error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
        else {
            //update
            this.doctorService.updateClinicNoteDiagnose(this.toSaveClinicNoteDiagnose)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveClinicNoteDiagnose = response;
                    vm.clear();
                    vm.onBack.emit(response:any);
                },
                function (error:any) { 

                    vm.toastr.error( error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    isClinicNoteDiagnoseConfirmed(): boolean {
        return this.toSaveClinicNoteDiagnose && this.toSaveClinicNoteDiagnose.status && (this.toSaveClinicNoteDiagnose.status == '1' || this.toSaveClinicNoteDiagnose.status.toLowerCase() == 'confirmed');
    }
    isClinicNoteDiagnoseSuspected(): boolean {
        return this.toSaveClinicNoteDiagnose && this.toSaveClinicNoteDiagnose.status && (this.toSaveClinicNoteDiagnose.status == '2' || this.toSaveClinicNoteDiagnose.status.toLowerCase() == 'suspicious');
    }

    clear(): void {
        this.toSaveClinicNoteDiagnose = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }


    treeNodeSelected(event:any) {
        if (event && event.node && event.node.code && event.node.code != '') {
            this.toSaveClinicNoteDiagnose.diagnoseCode = event.node.code;
        }
        else {
            this.toSaveClinicNoteDiagnose.diagnoseCode = '';
        }
    }

    goBack() {
        this.onBack.emit();
    }

}