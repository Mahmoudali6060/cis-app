import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { SharedService } from '../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { DoctorService } from '../../doctors/shared/doctor.service';

@Component({

    selector: 'patient-service-details',
    templateUrl: 'patient-service-details.component.html',
})

export class PatientServiceDetailsComponent implements OnInit, OnChanges {
    selectBasicTab: boolean = true;
    @Input() noteId = '0';
    filterString!: string;
    leafType: string = 'service';
    @Input() noteServiceId!: string;
    @Input() divisionId!: string;
    @Output() onBack = new EventEmitter();

    active = true;
    model: any = { id: 0, quantity: 1 };

    classifications = [];
    showProgress = false;
    @ViewChild("fileInput") fileInput!: any;
    selectedNode!: TreeNode;

    rbSelections = [{ value: 1, text: 'Service' }, { value: 2, text: 'ServicePackage' }];
    selectedAction = 1;
    selectedFiles!: TreeNode;
    services: any[] = [];
    Medical: any = {
        label: "Medical Department",
        value: "Medical",
        type: "Medical",
        productGroupType: "Medical Department",
        parentGroupId: 1,
        parentName: "Medical Department",
        children: []
    };
    noteDiagnosis: any[] = [];
    //needed to be inputs
    clinicId!: any;
    selectedGroupNode!: TreeNode;
    serviceCode = '';
    isAll = true;
    isService = true;
    servicePackages = [];
    allServices = [];
    recorderId!: any;
    nodeToAdded!: TreeNode;
    deptId!: any;
    ttt = "aaa";
    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        let vm = this;
        this.recorderId = this.storage.retrieve("UserID");
        this.clinicId = this.storage.retrieve("ClinicID");
        this.divisionId = this._route.snapshot.params['divisionId'];
        this.getAllServiceGroupsForTreeView(false);
        this.getClinicDepartmentServiceGroupsForTreeView();

        //let id = this._route.snapshot.params['id'];
        //this.model.id = `${id}`;
        //vm.showProgress = true;

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
                });
        this.doctorService.getAllservicePackages(vm.clinicId)
            .subscribe(
                function (response: any) {
                    // vm.noteDiagnosis = response;
                    vm.servicePackages = response;

                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
        // get organization in case of update
        if (this.noteServiceId.toString().toLowerCase() != 'new') {
            vm.showProgress = true;
            this.doctorService.getNoteServiceById(this.noteServiceId)
                .subscribe(
                    function (response: any) {
                        vm.model = response;
                        vm.addModelToServicesList(vm.model);
                        if (vm.model.serviceId > 0) {
                            vm.selectedAction = 1;
                            vm.isService = true;
                            //  vm.displaySelectedParentGroupNode(vm.model.serviceId);
                        } else if (vm.model.servicePackageId > 0) {
                            vm.selectedAction = 2;
                            vm.isService = false;
                        }

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
    ngOnChanges(): void {

    }
    addModelToServicesList(returnedModel: any) {
        this.displaySelectedNode(returnedModel.serviceId, this.services);
        if (this.selectedNode == undefined) {
            this.displaySelectedNode(returnedModel.serviceId, this.allServices)
            if (this.selectedNode != undefined)
                this.addServiceToDepartmentList(this.selectedNode);
        }

    }
    addServiceToDepartmentList(node: TreeNode) {
        // var parentNode = this.services[0];
        this.services[0].children.push(node);
        this.selectedNode = node;
        //this.ttt = "bbbb";
    }
    displaySelectedNode(nodeId: string, services: any[]) {
        let vm = this;
        services.forEach(node => {
            if (node.data == nodeId && node.type == "Service")
                vm.selectedNode = node;

            vm.displayNodeRecursive(node, nodeId);

        });
    }

    private displayNodeRecursive(node: TreeNode, nodeId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displayNodeRecursive(childNode, nodeId);

                if (childNode.data == nodeId && childNode.type == "Service") {
                    this.selectedNode = childNode;
                }
            });
        }
    }

    expandAll() {
        this.services.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.services.forEach(node => {
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
    getClinicDepartmentServiceGroupsForTreeView() {
        let vm = this;
        vm.isAll = true;
        //get department services groups
        this.doctorService.getClinicDivisionServiceGroupsForTreeView(vm.divisionId)
            .subscribe(
                function (response: any) {
                    vm.services = response;
                    vm.expandAll();
                    // vm.servicePackages = res

                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }
    getAllServiceGroupsForTreeView(needAll: boolean) {
        let vm = this;

        /////////////////////////get all services groups
        this.doctorService.getServiceGroupsForTreeView(vm.clinicId)
            .subscribe(
                function (response: any) {
                    // vm.services = response;
                    vm.allServices = response;
                    if (needAll) {
                        vm.isAll = false;
                        vm.services = response;
                        vm.expandAll();
                    }
                    // vm.servicePackages = res

                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }
    displaySelectedParentGroupNode(serviceId: string) {
        let vm = this
        vm.services.forEach(node => {
            vm.displaySelectedNodeRecursive(node, serviceId);

            //if (node.data == parentId)
            //    vm.selectedFile = node;
        });
    }

    private displaySelectedNodeRecursive(node: TreeNode, serviceId: string) {
        let vm = this;
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.displaySelectedNodeRecursive(childNode, serviceId);

                if (childNode.data == serviceId && childNode.type.toLocaleLowerCase() == "service")
                    this.selectedNode = childNode;

            });
        }
    }
    onSelectionChange(value: any) {
        this.selectedAction = value;

        if (this.selectedAction == 1) {
            this.isService = true;
        }
        else if (this.selectedAction == 2) {
            this.isService = false;
        }
    }
    nodeSelect(event: any) {
        this.model.serviceId = event.node.data;
        this.model.serviceCode = event.node.code;
        this.model.isService = this.isService;
        let me = "I";
    }
    nodeUnselect(event: any) {
        this.model.serviceId = '';
    }
    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;
        //vm.noteId = "1";
        vm.model.clinicNoteId = vm.noteId;
        if (this.noteServiceId.toString().toLowerCase() == 'new') {
            // Add new
            vm.model.recorderID = vm.recorderId;
            this.doctorService.createClinicNoteService(this.model)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.model = response;
                        vm.noteServiceId = vm.model.id;
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
            this.doctorService.updateNoteService(this.model)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.model = response;
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

    clear(): void {
        this.model = { quantity: 1 };
        this.model.serviceId = '';
        this.noteServiceId = 'new';
        this.selectedNode = {};
        this.active = false;
        // store selected Organization ID
        //  this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }
    getServicePackageCode(value: any) {
        let vm = this;
        var selObject: any = this.servicePackages.find((o: any) => o.id == value);
        if (selObject != undefined)
            vm.model.servicePackageCode = selObject.code;

        vm.model.isService = this.isService;
    }

    goBack() {
        this.onBack.emit();
    }

}