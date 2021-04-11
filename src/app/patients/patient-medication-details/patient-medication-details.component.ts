import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeNode } from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

import { DoctorService } from '../../doctors/shared/doctor.service';
import {ClinicService} from '../../clinics/shared/clinic.service';
import { UtilityClass } from '../../shared/shared/utility.class';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-medication-details',
    templateUrl: 'patient-medication-details.component.html',
})

export class PatientMedicationDetailsComponent implements OnInit {
    active = true;
    showProgress = false;
    selectBasicTab: boolean = true;

    filterString!:string;
    leafType: string = 'Drug';

    clinicId!:any;
    divisionId!:any;
    recorderId!:any;

    selectedMedicationNode: any;
    @Input() patientId!: number;
    @Input() clinicNoteId!: number;
    @Input() toSaveClinicNoteMedication: any;
    @Output() onBack = new EventEmitter<any>();
    medicationTreeDataSourceItems: any[] = [];
    drugDosageUnitsList: any[] = [];
    drugFrequenciesList: any[] = [];
    durationUnitsList: any[] = [];
    clinicNoteDiagnosisList: any[] = [];
    getAllMedications = true;
    allDrugs = [];
    nodeToAdded!: TreeNode;
    ttt = "aaa";
    utilityClass: UtilityClass = new UtilityClass();

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
        this.toSaveClinicNoteMedication = {};
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.recorderId = this.localStorage.retrieve("UserID");
        this.selectedMedicationNode = null;
        this.getAllDrugGroupsForTreeView(false);
        this.getClinicDepartmentDrugGroupsForTreeView();

        let vm = this;
        //get drop down lists initial values
        this.doctorService.getClinicNoteMedicationWrapper(vm.clinicNoteId)
            .subscribe(
            function (response:any) {
                vm.drugDosageUnitsList = response.drugUnits;
                vm.drugFrequenciesList = response.drugFrequencies;
                vm.durationUnitsList = response.durationUnits;
                vm.clinicNoteDiagnosisList = response.clinicNoteDiagnosis;
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }

    getClinicDepartmentDrugGroupsForTreeView() {
        let vm = this;
        vm.getAllMedications = true;
        //get department drug groups
        this.doctorService.getClinicDivisionDrugGroupsForTreeView(vm.divisionId)
            .subscribe(
            function (response:any) {
                vm.medicationTreeDataSourceItems = response;
                if (vm.toSaveClinicNoteMedication) {
                    vm.addModelToServicesList(vm.toSaveClinicNoteMedication)
                   // vm.displaySelectedNode(vm.toSaveClinicNoteMedication.drugId, "Drug");
                    vm.expandAll();
                }
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }
    getAllDrugGroupsForTreeView(needAll: boolean) {
        let vm = this;

        /////////////////////////get all drug groups
        this.clinicService.getDrugsGroupsForTree(vm.clinicId)
            .subscribe(
            function (response:any) {

                vm.allDrugs = response;
                if (needAll) {
                    vm.getAllMedications = false;
                    vm.medicationTreeDataSourceItems = response;
                    vm.expandAll();
                }
            },
            function (error:any) { 
                vm.toastr.error( error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }

    addModelToServicesList(returnedModel: any) {
        //  var existElement = this.services.find(o => o.serviceId == vm.returnedModel.serviceId);
        // we have tree source not flat source
        this.displaySelectedNode(returnedModel.drugId, this.medicationTreeDataSourceItems);
        if (this.selectedMedicationNode == undefined) {
            this.displaySelectedNode(returnedModel.drugId, this.allDrugs)
            if (this.selectedMedicationNode != undefined)
                this.addServiceToDepartmentList(this.selectedMedicationNode);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        // var parentNode = this.services[0];
        this.medicationTreeDataSourceItems[0].children.push(node);
        this.selectedMedicationNode = node;
        this.ttt = "bbbb";
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this
        services.forEach(node => {
            if (node.data == nodeId && node.type == "Drug")
                vm.selectedMedicationNode = node;

            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "Drug") {
                    this.selectedMedicationNode = childNode;
                }
            });
        }
    }
     expandAll() {
        this.medicationTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.medicationTreeDataSourceItems.forEach(node => {
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
        if (!this.toSaveClinicNoteMedication.drugCode || this.toSaveClinicNoteMedication.drugCode == '')
            return;

        this.toSaveClinicNoteMedication.startDate = this.utilityClass.getUtcDateTime(this.toSaveClinicNoteMedication.startDate);

        vm.showProgress = true;
        vm.toSaveClinicNoteMedication.patientId = vm.patientId;
        vm.toSaveClinicNoteMedication.clinicNoteId = vm.clinicNoteId;
        vm.toSaveClinicNoteMedication.isCurrent = true;
        if (vm.selectedMedicationNode)
            vm.toSaveClinicNoteMedication.drugId = vm.selectedMedicationNode.data;
        if (!this.toSaveClinicNoteMedication.hasOwnProperty('id') || this.toSaveClinicNoteMedication.id.toString().toLowerCase() == 'new') {
            //Add new
            vm.toSaveClinicNoteMedication.recorderId = vm.recorderId;
            this.doctorService.createClinicNoteMedication(this.toSaveClinicNoteMedication)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveClinicNoteMedication = response;
                    vm.clear();
                    vm.onBack.emit(response);
                },
                function (error:any) { 
                    console.log( error)
                    vm.toastr.error( error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
        else {
            //update
            this.doctorService.updateClinicNoteMedication(this.toSaveClinicNoteMedication)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveClinicNoteMedication = response;
                    vm.clear();
                    vm.onBack.emit(response);
                },
                function (error:any) { 
                    console.log(error)
                    vm.toastr.error( error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    clear(): void {
        this.toSaveClinicNoteMedication = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }


    treeNodeSelected(event:any) {
        if (event && event.node && event.node.code && event.node.code != '') {
            this.toSaveClinicNoteMedication.drugCode = event.node.code;
        }
        else {
            this.toSaveClinicNoteMedication.drugCode = '';
        }
    }

    goBack() {
        this.onBack.emit();
    }


}