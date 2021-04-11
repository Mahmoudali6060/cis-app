import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
    selector: 'patient-lab-details',
    templateUrl: 'patient-lab-details.component.html',
})

export class PatientLabDetailsComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;
    selectedMedicationNode: any;
    @Output() onBack = new EventEmitter();
    @Input() noteId: string = '';
    @Input() noteLabTestId!: string;
    selectedAction = 1;
    active = true;
    labTestToSave: any = { id: 0, quantity: 1 };
    filterString!: string;
    labTreeDataSourceItems: any[] = [];
    leafType: string = 'LaboratoryTest';
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    selectedLabNode: any;
    selectedNode!: TreeNode;
    isLabTest = true;
    selectedFiles!: TreeNode;
    labTests: any[] = [];
    noteDiagnosis: any[] = [];
    //needed to be inputs
    divisionId = "";
    clinicId = "";
    selectedGroupNode!: TreeNode;
    labTestCode = '';
    isAll = true;
    getAllLabs = true;

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        let vm = this;
        this.selectedMedicationNode = null;
        this.clinicId = this.storage.retrieve("ClinicID");
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getAllLabTestsGroupsForTreeView(false);
        vm.getClinicDepartmentLaboratoryTestsGroupsForTreeView();
        //get note diagnosis
        this.doctorService.getNoteDiagnosis(vm.noteId)
            .subscribe(
                function (response: any) {
                    vm.noteDiagnosis = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                })
    }

    ngOnChanges(changes: SimpleChanges) {
        let vm = this;
        //get organization in case of update
        if (this.noteLabTestId == 'new') {
            vm.showProgress = true;
            if (this.noteLabTestId && this.noteLabTestId != undefined) {
                this.doctorService.getClinicNoteLabTestById(this.noteLabTestId)
                    .subscribe(
                        function (response: any) {
                            vm.labTestToSave = response;
                            vm.displaySelectedParentGroupNode(vm.labTestToSave.labTestId);
                        },
                        function (error: any) {
                            vm.toastr.error(error, '');
                            vm.showProgress = false;
                        },
                        function () {
                            vm.showProgress = false;
                        });
            }
        }
        if (this.noteLabTestId != 'new') {
            vm.showProgress = true;
            if (this.noteLabTestId && this.noteLabTestId != "undefined") {
                this.doctorService.getClinicNoteLabTestById(this.noteLabTestId)
                    .subscribe(
                        function (response: any) {
                            vm.labTestToSave = response;
                        },
                        function (error: any) {
                            vm.toastr.error(error, '');
                            vm.showProgress = false;
                        },
                        function () {
                            vm.showProgress = false;
                        });
            }
        }
    }

    getClinicDepartmentLaboratoryTestsGroupsForTreeView() {
        let vm = this;
        vm.isAll = true;
        //get department services groups
        this.doctorService.getClinicDivisionLaboratoryTestsGroupsForTreeView(vm.divisionId)
            .subscribe(
                function (response: any) {
                    vm.labTests = response;
                    if (vm.labTestToSave) {
                        vm.addModelToServicesList(vm.labTestToSave)
                        vm.expandAll();
                    }

                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    displaySelectedParentGroupNode(labTestId: string) {
        let vm = this
        vm.labTests.forEach(node => {
            vm.displaySelectedNodeRecursive(node, labTestId);
        });
    }
    getAllLabTestsGroupsForTreeView(needAll: boolean) {
        let vm = this;
        vm.isAll = false;
        /////////////////////////get all services groups
        this.doctorService.getLaboratoryTestsGroupsForTreeView(vm.clinicId)
            .subscribe(
                function (response: any) {
                    vm.labTests = response;
                    if (needAll) {
                        vm.getAllLabs = false;
                        vm.labTreeDataSourceItems = response;
                        vm.expandAll();
                    }

                },
                function (error: any) {
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }
    private displaySelectedNodeRecursive(node: TreeNode, labTestId: string) {
        let vm = this;
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.displaySelectedNodeRecursive(childNode, labTestId);

                if (childNode.data == labTestId && childNode.type.toLocaleLowerCase() == "laboratorytest")
                    this.selectedNode = childNode;

            });
        }
    }
    nodeSelect(event: any) {
        this.labTestToSave.labTestId = event.node.data;
        this.labTestToSave.labTestCode = event.node.code;
        this.labTestToSave.labTestName = event.node.name;

    }
    nodeUnselect(event: any) {
        this.labTestToSave.labTestId = '';
    }
    expandAll() {
        this.labTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.labTreeDataSourceItems.forEach(node => {
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
        vm.showProgress = true;
        vm.labTestToSave.clinicNoteId = vm.noteId;
        if (!(this.labTestToSave.id > 0)) {
            // Add new
            this.doctorService.createClinicNoteLabTest(this.labTestToSave)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.labTestToSave = response;
                        vm.noteLabTestId = vm.labTestToSave.id;
                        vm.onBack.emit();

                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    }
                );
        }
        else {
            // update
            this.doctorService.updateClinicNoteLabTest(this.labTestToSave)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.labTestToSave = response;
                        vm.onBack.emit();

                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }

    clear(): void {
        this.labTestToSave = { quantity: 1 };
        this.noteLabTestId = 'new';
        this.selectedNode = {};
        this.labTestToSave.labTestId = '';
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    goBack() {
        this.onBack.emit();

    }

    addModelToServicesList(returnedModel: any) {
        //  var existElement = this.services.find(o => o.serviceId == vm.returnedModel.serviceId);
        // we have tree source not flat source
        this.displaySelectedNode(returnedModel.labTestId, this.labTreeDataSourceItems);
        if (this.selectedLabNode == undefined) {
            this.displaySelectedNode(returnedModel.labTestId, this.labTests)
            if (this.selectedLabNode != undefined)
                this.addServiceToDepartmentList(this.selectedLabNode);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        // var parentNode = this.services[0];
        this.labTreeDataSourceItems[0].children.push(node);
        this.selectedLabNode = node;
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this
        services.forEach(node => {
            if (node.data == nodeId && node.type == "LaboratoryTest")
                vm.selectedLabNode = node;

            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "LaboratoryTest") {
                    this.selectedMedicationNode = childNode;
                }
            });
        }
    }



}