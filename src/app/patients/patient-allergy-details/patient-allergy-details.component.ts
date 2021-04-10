import {Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeNode } from 'primeng/primeng';

import { DoctorService } from '../../doctors/shared/doctor.service';
import {ClinicService} from '../../clinics/shared/clinic.service';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'patient-allergy-details',
    templateUrl: 'patient-allergy-details.component.html',
})

export class PatientAllergyDetailsComponent implements OnInit {
    selectBasicTab: boolean = true;
    filterString: string | undefined;
    leafType: string = 'Drug';
    divisionId;
    @Input() toSaveDrugAllergy: any;
    @Input() patientId: number | undefined;
    @Output() onBack = new EventEmitter<any>();

    active = true;
    selectedDrugNode: any;
    recorderId;
    clinicId;
    drugsTreeDataSourceItems: any[] = [];
    getAllDrugs = true;

    showProgress = false;
    allDrugs = [];
    nodeToAdded: TreeNode;
    ttt = "aaa";
    constructor(private doctorService: DoctorService
        , private clinicService: ClinicService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public localStorage: LocalStorageService, public translate: TranslateService
    )
    { }

    ngOnInit(): void {
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.toSaveDrugAllergy = {};
        this.selectedDrugNode = null;
        this.recorderId = this.localStorage.retrieve("UserID");
        this.clinicId = this.localStorage.retrieve("ClinicID");
        this.getAllDrugGroupsForTreeView(false,false);
        this.getClinicDepartmentDrugGroupsForTreeView();

    }

    getClinicDepartmentDrugGroupsForTreeView() {
        let vm = this;
        vm.getAllDrugs = true;
        //get department drug groups
        this.doctorService.getClinicDivisionDrugGroupsForTreeView(vm.divisionId)
            .subscribe(
            function (response:any) {
                vm.drugsTreeDataSourceItems = response;
                if (vm.toSaveDrugAllergy) {
                    vm.addModelToServicesList(vm.toSaveDrugAllergy);
                    //   vm.displaySelectedNode(vm.toSaveDrugAllergy.drugId, "Drug");
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
    getAllDrugGroupsForTreeView(needAll: boolean, displayNode: boolean) {
        let vm = this;

        /////////////////////////get all drug groups
        this.clinicService.getDrugsGroupsForTree(vm.clinicId)
            .subscribe(
            function (response:any) {
                vm.allDrugs = response;
                if (needAll) {
                    vm.getAllDrugs = false;
                    vm.drugsTreeDataSourceItems = response;

                    if (displayNode || vm.selectedDrugNode != undefined)
                        vm.displaySelectedNode(vm.toSaveDrugAllergy.drugId, vm.drugsTreeDataSourceItems);

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
    addModelToServicesList(returnedModel: any) {
        if (this.drugsTreeDataSourceItems != null && this.drugsTreeDataSourceItems != undefined && this.drugsTreeDataSourceItems.length > 0) {
            this.displaySelectedNode(returnedModel.drugId, this.drugsTreeDataSourceItems);
            if (this.selectedDrugNode == undefined) {
                this.displaySelectedNode(returnedModel.drugId, this.allDrugs)
                if (this.selectedDrugNode != undefined)
                    this.addServiceToDepartmentList(this.selectedDrugNode);
            }
        } else {
            this.getAllDrugGroupsForTreeView(true, true);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        // var parentNode = this.services[0];
        this.drugsTreeDataSourceItems[0].children.push(node);
        this.selectedDrugNode = node;
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this
        services.forEach(node => {
            if (node.data == nodeId && node.type == "Drug")
                vm.selectedDrugNode = node;

            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "Drug") {
                    this.selectedDrugNode = childNode;
                }
            });
        }
    }

    //displaySelectedNode(nodeId: string, nodeType:string) {
    //    let vm = this
    //    vm.drugsTreeDataSourceItems.forEach(node => {
    //        if (node.data == nodeId && node.type == nodeType)
    //            vm.selectedDrugNode = node;

    //        vm.displaySelectedNodeRecursive(node, nodeId, nodeType);

    //    });
    //}

    //private displaySelectedNodeRecursive(node: TreeNode, nodeId: string, nodeType: string) {
    //    if (node.children) {
    //        node.children.forEach(childNode => {
    //            this.displaySelectedNodeRecursive(childNode, nodeId, nodeType);

    //            if (childNode.data == nodeId && childNode.type == nodeType) {
    //                this.selectedDrugNode = childNode;
    //            }
    //        });
    //    }
    //}

    expandAll() {
        this.drugsTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.drugsTreeDataSourceItems.forEach(node => {
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
        if (!this.toSaveDrugAllergy.drugCode || this.toSaveDrugAllergy.drugCode == '')
            return;

        vm.showProgress = true;
        vm.toSaveDrugAllergy.patientId = vm.patientId;
        if (vm.selectedDrugNode)
            vm.toSaveDrugAllergy.drugId = vm.selectedDrugNode.data;
        if (!this.toSaveDrugAllergy.hasOwnProperty('id') || this.toSaveDrugAllergy.id.toString().toLowerCase() == 'new') {
            //Add new
            vm.toSaveDrugAllergy.recorderID = vm.recorderId;
            this.doctorService.createDrugAllergy(this.toSaveDrugAllergy)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveDrugAllergy = response;
                    vm.clear();
                    vm.onBack.emit(response:any);
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
        else {
            //update
            this.doctorService.updateDrugAllergy(this.toSaveDrugAllergy)
                .subscribe(
                function (response:any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.toSaveDrugAllergy = response;
                    vm.clear();
                    vm.onBack.emit(response:any);
                },
                function (error:any) { 

                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    clear(): void {
        this.selectedDrugNode = {}
        this.toSaveDrugAllergy = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }


    treeNodeSelected(event:any) {
        if (event && event.node && event.node.code && event.node.code != '') {
            this.toSaveDrugAllergy.drugCode = event.node.code;
        }
        else {
            this.toSaveDrugAllergy.drugCode = '';
        }
    }

    goBack() {
        this.onBack.emit();
    }

}