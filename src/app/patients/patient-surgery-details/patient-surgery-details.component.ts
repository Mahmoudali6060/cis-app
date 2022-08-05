import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeNode } from 'primeng/api';

import { DoctorService } from '../../doctors/shared/doctor.service';
import { ClinicService } from '../../clinics/shared/clinic.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import { TranslateService } from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({

    selector: 'patient-surgery-details',
    templateUrl: 'patient-surgery-details.component.html',
})

export class PatientSurgeryDetailsComponent implements OnInit {
    selectBasicTab: boolean = true;
    filterString!: string;
    leafType: string = 'Service';
    divisionId!: any;
    @Input() toSaveSurgery!: any;
    @Input() patientId!: number;
    @Input() patientDOB: Date | undefined;
    @Output() onBack = new EventEmitter<any>();
    @Input() allServices: any[] = [];
    utilityClass: UtilityClass = new UtilityClass();
    active = true;
    selectedSurgeryNode: any;
    tempSelectedSurgeryNode: any;
    clinicId!: any;
    servicesTreeDataSourceItems!: any[];
    getAllServices = true;

    showProgress = false;
    // allServices = [];
    nodeToAdded!: TreeNode;
    ttt = "aaa";
    isExist: boolean = false;
    constructor(private doctorService: DoctorService
        , private clinicService: ClinicService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public localStorage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.toSaveSurgery = {};
        this.clinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        this.showProgress = true;
        //  this.selectedSurgeryNode = null;hh
        this.getAllServiceGroupsForTreeView(false, false);
        this.getClinicDepartmentServiceGroupsForTreeView();

    }

    getClinicDepartmentServiceGroupsForTreeView() {
        let vm = this;
        vm.getAllServices = true;
        //get department services groups
        this.doctorService.getClinicDivisionServiceGroupsForTreeView(vm.divisionId)
            .subscribe(
                function (response: any) {
                    vm.servicesTreeDataSourceItems = response;
                    if (vm.toSaveSurgery) {
                        vm.addModelToServicesList(vm.toSaveSurgery);
                        //  this.displaySelectedNode(thisComponent.toSaveSurgery.serviceId, "Service");
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
    getAllServiceGroupsForTreeView(needAll: boolean, displayNode: boolean) {
        let vm = this;

        /////////////////////////get all services groups
        this.doctorService.getServiceGroupsForTreeView(vm.clinicId)
            .subscribe(
                function (response: any) {

                    vm.allServices = response;
                    if (needAll) {
                        vm.getAllServices = false;
                        vm.servicesTreeDataSourceItems = response;
                        if (displayNode || vm.selectedSurgeryNode != undefined)
                            vm.displaySelectedNode(vm.toSaveSurgery.serviceId, vm.servicesTreeDataSourceItems);


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
    addModelToServicesList(returnedModel: any) {
        if (this.servicesTreeDataSourceItems != null && this.servicesTreeDataSourceItems != undefined && this.servicesTreeDataSourceItems.length > 0) {
            this.displaySelectedNode(returnedModel.serviceId, this.servicesTreeDataSourceItems);
            if (this.selectedSurgeryNode == undefined) {
                this.displaySelectedNode(returnedModel.serviceId, this.allServices)
                if (this.selectedSurgeryNode != undefined)
                    this.addServiceToDepartmentList(this.selectedSurgeryNode);
            }// else {
            //        this.addServiceToDepartmentList(this.selectedSurgeryNode);
            //}

        } else {
            this.getAllServiceGroupsForTreeView(true, true);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        this.servicesTreeDataSourceItems[0].children.push(node);
        this.selectedSurgeryNode = node;
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this

        services.forEach(node => {
            if (node.data == nodeId && node.type == "Service") {
                vm.selectedSurgeryNode = node;

            }


            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "Service") {
                    this.selectedSurgeryNode = childNode;
                }
            });
        }
    }
    //displaySelectedNode(nodeId: string, nodeType: string) {
    //    let vm = this
    //    vm.servicesTreeDataSourceItems.forEach(node => {
    //        if (node.data == nodeId && node.type == nodeType)
    //            vm.selectedSurgeryNode = node;

    //        vm.displaySelectedNodeRecursive(node, nodeId, nodeType);

    //    });
    //}

    //private displaySelectedNodeRecursive(node: TreeNode, nodeId: string, nodeType: string) {
    //    if (node.children) {
    //        node.children.forEach(childNode => {
    //            this.displaySelectedNodeRecursive(childNode, nodeId, nodeType);

    //            if (childNode.data == nodeId && childNode.type == nodeType) {
    //                this.selectedSurgeryNode = childNode;
    //            }
    //        });
    //    }
    //}

    expandAll() {
        this.servicesTreeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.servicesTreeDataSourceItems.forEach(node => {
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

        if (!this.toSaveSurgery.surgeryCode || this.toSaveSurgery.surgeryCode == '')
            return;

        this.toSaveSurgery.dateTime = this.utilityClass.getUtcDateTime(this.toSaveSurgery.dateTime);

        if (this.toSaveSurgery && this.toSaveSurgery.dateTime) {
            if (this.toSaveSurgery.dateTime > Date.now()) {
                let msg = this.translate.instant("SurgeryDateValidation");
                this.toastr.error(msg, '');
                return;
            }

            if (this.patientDOB && this.toSaveSurgery.dateTime < this.utilityClass.getDateTimeFromString(this.patientDOB.toString())) {
                let msg = this.translate.instant("SurgeryBirthDate");
                this.toastr.error(msg, '');
                return;
            }
        }

        vm.showProgress = true;
        vm.toSaveSurgery.patientId = vm.patientId;
        if (vm.selectedSurgeryNode)
            vm.toSaveSurgery.serviceId = vm.selectedSurgeryNode.data;


        if (!this.toSaveSurgery.hasOwnProperty('id') || this.toSaveSurgery.id.toString().toLowerCase() == 'new') {
            //Add new
            this.doctorService.createSurgery(this.toSaveSurgery)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.toSaveSurgery = response;
                        vm.clear();
                        vm.onBack.emit(response);
                    },
                    function (error: any) {
                        console.log(error)
                        vm.toastr.error(error.error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
        else {
            //update
            this.doctorService.updateSurgery(this.toSaveSurgery)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.toSaveSurgery = response;
                        vm.clear();
                        vm.onBack.emit(response);
                    },
                    function (error: any) {
                        console.log(error)
                        vm.toastr.error(error.error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }
    }

    clear(): void {
        this.toSaveSurgery = {};
        this.selectedSurgeryNode = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    treeNodeSelected(event: any) {
        if (event && event.node && event.node.code && event.node.code != '') {
            this.toSaveSurgery.surgeryCode = event.node.code;
        }
        else {
            this.toSaveSurgery.surgeryCode = '';
        }
    }


    goBack() {
        this.onBack.emit();
    }
}