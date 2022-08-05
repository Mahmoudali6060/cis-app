import { Component, OnChanges, OnInit, ViewChild, Output, Input, SimpleChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'patient-radiology-details',
    templateUrl: 'patient-radiology-details.component.html',
})

export class PatientRadiologyDetailsComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;
    selectedMedicationNode: any;

    @Output() onBack = new EventEmitter();
    @Input() noteId: string = '';
    @Input() noteRadTestId!: string;
    active = true;
    radTestToSave: any = { id: 0, quantity: 1 };
    filterString!: string;
    leafType: string = 'RadiologyTest';
    selectedAction = 1;
    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    isRadTest = true;
    radTests: any | undefined;
    noteDiagnosis: any[] = [];
    selectedGroupNode!: TreeNode;
    radTestCode = '';
    isAll = true;
    divisionId = "";
    clinicId = "";
    selectedLabNode: any;
    selectedNode!: TreeNode;
    selectedFiles!: TreeNode;
    radTreeDataSourceItems: any[] = [];
    getAllRads = true;

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService

    ) { }


    ngOnChanges(changes: SimpleChanges) {
        let vm = this;
        //get organization in case of update
        if (this.noteRadTestId == 'new') {
            vm.showProgress = true;
            if (this.noteRadTestId && this.noteRadTestId != undefined) {
                this.doctorService.getClinicNoteRadTestById(this.noteRadTestId)
                    .subscribe(
                        function (response: any) {
                            vm.radTestToSave = response;
                            vm.displaySelectedParentGroupNode(vm.radTestToSave.radiologyTestId);
                        },
                        function (error: any) {
                            vm.toastr.error(error.error, '');
                            vm.showProgress = false;
                        },
                        function () {
                            vm.showProgress = false;
                        });
            }
        }
        if (this.noteRadTestId != 'new') {
            vm.showProgress = true;
            if (this.noteRadTestId && this.noteRadTestId != "undefined") {
                this.doctorService.getClinicNoteRadTestById(this.noteRadTestId)
                    .subscribe(
                        function (response: any) {
                            vm.radTestToSave = response;
                        },
                        function (error: any) {
                            vm.toastr.error(error.error, '');
                            vm.showProgress = false;
                        },
                        function () {
                            vm.showProgress = false;
                        });
            }
        }
    }

    ngOnInit(): void {
        let vm = this;
        this.selectedMedicationNode = null;
        this.clinicId = this.storage.retrieve("ClinicID");
        this.divisionId = this._route.snapshot.params['divisionId'];
        //let id = this._route.snapshot.params['id'];
        //this.model.id = `${id}`;
        //vm.showProgress = true;
        vm.getClinicDepartmentRadiologyTestsGroups();
        //get note diagnosis
        this.doctorService.getNoteDiagnosis(vm.noteId)
            .subscribe(
                function (response: any) {
                    vm.noteDiagnosis = response;
                    // vm.servicePackages = res

                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                })
    }

    clear(): void {
        this.radTestToSave = { quantity: 1 };
        this.radTestToSave.radiologyTestId = '';
        this.noteRadTestId = 'new';
        this.selectedNode = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    getClinicDepartmentRadiologyTestsGroups() {
        let vm = this;
        vm.isAll = true;
        //get department services groups
        this.doctorService.getClinicDivisionRadiologyTestsGroups(vm.divisionId)
            .subscribe(
                function (response: any) {
                    vm.radTests = response;
                    if (vm.radTestToSave) {
                        vm.addModelToServicesList(vm.radTestToSave)
                        vm.expandAll();
                    }

                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }
    displaySelectedParentGroupNode(radTestId: string) {
        let vm = this
        vm.radTests.forEach((node: any) => {
            vm.displaySelectedNodeRecursive(node, radTestId);

            //if (node.data == parentId)
            //    vm.selectedFile = node;
        });
    }
    getRadiologyTestsGroupsForTreeView(needAll?: boolean | undefined) {
        let vm = this;
        vm.isAll = false;
        /////////////////////////get all services groups
        this.doctorService.getRadiologyTestsGroupsForTreeView(vm.clinicId)
            .subscribe(
                function (response: any) {
                    vm.radTests = response;
                    if (needAll) {
                        vm.getAllRads = false;
                        vm.radTreeDataSourceItems = response;
                        vm.expandAll();
                    }
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
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

                if (childNode.data == labTestId && childNode.type.toLocaleLowerCase() == "radiologytest")
                    this.selectedNode = childNode;

            });
        }
    }
    nodeSelect(event: any) {
        this.radTestToSave.radiologyTestId = event.node.data;
        this.radTestToSave.radTestCode = event.node.code;
        this.radTestToSave.radTestName = event.node.name;

    }
    nodeUnselect(event: any) {
        this.radTestToSave.labTestId = '';
    }
    expandAll() {
        this.radTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }
    collapseAll() {
        this.radTreeDataSourceItems.forEach(node => {
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
        vm.radTestToSave.clinicNoteId = vm.noteId;
        if (!(this.radTestToSave.id > 0)) {
            // Add new
            this.doctorService.createClinicNoteRadTest(this.radTestToSave)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.radTestToSave = response;
                        vm.noteRadTestId = vm.radTestToSave.id;
                        vm.onBack.emit();

                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error.error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    }
                );
        }
        else {
            // update
            this.doctorService.updateClinicNoteRadTest(this.radTestToSave)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.radTestToSave = response;
                        vm.onBack.emit();

                    },
                    function (error: any) {
                        //console.log("Error happened" + error)
                        vm.toastr.error(error.error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }


    goBack() {
        this.onBack.emit();
    }
    addModelToServicesList(returnedModel: any) {
        //  var existElement = this.services.find(o => o.serviceId == vm.returnedModel.serviceId);
        // we have tree source not flat source
        this.displaySelectedNode(returnedModel.radiologyTestId, this.radTreeDataSourceItems);
        if (this.selectedLabNode == undefined) {
            this.displaySelectedNode(returnedModel.labTestId, this.radTests)
            if (this.selectedLabNode != undefined)
                this.addServiceToDepartmentList(this.selectedLabNode);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        // var parentNode = this.services[0];
        this.radTreeDataSourceItems[0].children.push(node);
        this.selectedLabNode = node;
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this
        services.forEach(node => {
            if (node.data == nodeId && node.type == "RadiologyTest")
                vm.selectedLabNode = node;

            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "RadiologyTest") {
                    this.selectedMedicationNode = childNode;
                }
            });
        }
    }

}