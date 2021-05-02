import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { TreeNode } from 'primeng/api';
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
@Component({

    selector: 'clinic-servicePackage-details',
    templateUrl: './clinic-servicePackage-details.component.html'
})

export class ClinicServicePackageDetailsComponent implements OnInit {

    filterString!:string;
    leafType: string = 'Service';

    selectServicePackagesTab: boolean = true;
    selectedClinicId: string = "0";
    selectedFile!: TreeNode;
    model: any = {};
    serviceModel: any = {};
    tempServiceModel: any = {};
    showProgress = false;
    teamMembersList!: any[];
    servicesList: any[] = [];
    active = true;
    servicePackageId!: any;
    nodeType = "";
    selectedObject: any = {};
    treeDataSourceItems: any[] = [];
    itemToDeleteId!: any;//servicemodel to be deleted
    isGroupSelected = false;
    isNew = true;
    idToBeEdited!: any;
    totalFees: number = 0;
    servicesCost: number = 0;
    @ViewChild('btnServicesGroup') btnServicesGroup!: ElementRef;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableSaveBtn: boolean = false;
    lstToTranslated: string[] = [];
    lstToBeTranslated: string[] = [];
    constructor(private clinicService: ClinicService,
        private localStorage: LocalStorageService
        , public toastr: ToastrService,
        private router: Router,
        private _route: ActivatedRoute
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        let thisComponent = this;
        this.lstToTranslated = ['serviceName', 'serviceNameTranslation'];
        this.lstToBeTranslated = ['label', 'labelTranslation'];
        //     thisComponent.showProgress = true;
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        let id = this._route.snapshot.params['id'];
        this.servicePackageId = `${id}`;

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        thisComponent.getServiceGroupsForTree();
        // get team member to be updated 
        if (thisComponent.servicePackageId.toLowerCase() != 'new') {

            thisComponent.loadServicePackageModel();
        }

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    getServiceGroupsForTree() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getServiceGroupsForTreeView(thisComponent.selectedClinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.treeDataSourceItems = response;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }
    //on submit 
    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        thisComponent.updateModelWithServices();
        thisComponent.model.clinicId = thisComponent.selectedClinicId;
        // check if team member id is string "new"
        if (isNaN(thisComponent.servicePackageId) && thisComponent.servicePackageId.toLowerCase() == 'new') {
            // Add new
            //  thisComponent.model.projectId = thisComponent.projectId;
            if (thisComponent.servicesList.length > 0) {
                this.clinicService.createServicePackage(thisComponent.model)
                    .subscribe(
                        function (response: any) {
                            let msg = thisComponent.translate.instant("SavedSuccessfully");
                            thisComponent.toastr.success(msg, '');
                            thisComponent.model = response;
                            thisComponent.totalFees = thisComponent.model.totalCost;
                            thisComponent.servicesCost = thisComponent.model.servicesCost;
                            thisComponent.servicePackageId = response.id;

                            // thisComponent.servicesList = response.services;
                            thisComponent.loadServicePackageModel();
                            thisComponent.navigateToPackages();

                            thisComponent.filterString = '';
                        },
                        function (error: any) {
                            //console.log("Error happened" + error)
                            thisComponent.toastr.error(error, '');
                            thisComponent.showProgress = false;
                        },
                        function () {
                            thisComponent.showProgress = false;
                        }
                    );

            } else {

                let msg = thisComponent.translate.instant("Package_ServiceValidation");
                thisComponent.toastr.error(msg, '');
                thisComponent.showProgress = false;

            }

        }
        else {
            // update 
            if (thisComponent.servicesList.length > 0) {
                this.clinicService.updateServicePackage(thisComponent.model)
                    .subscribe(
                        function (response: any) {
                            let msg = thisComponent.translate.instant("SavedSuccessfully");
                            thisComponent.toastr.success(msg, '');
                            thisComponent.model = response;
                            thisComponent.totalFees = thisComponent.model.totalCost;
                            thisComponent.servicesCost = thisComponent.model.servicesCost;
                            thisComponent.loadServicePackageModel();
                            thisComponent.filterString = '';
                            //  thisComponent.servicesList = response.services;
                        },
                        function (error: any) {
                            //console.log("Error happened" + error)
                            thisComponent.toastr.error(error, '');
                            thisComponent.showProgress = false;
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });

            }
            else {
                let msg = thisComponent.translate.instant("Package_ServiceValidation");
                thisComponent.toastr.error(msg, '');
                thisComponent.showProgress = false;
            }

        }
    }

    //clear
    clear(): void {
        if (this.servicePackageId > 0)
            this.loadServicePackageModel();

        this.active = false;
        setTimeout(() => this.active = true, 0);
        //this.filterString = '';
    }

    loadServicePackageModel() {
        let thisComponent = this;
        this.clinicService.getServicePackageById(thisComponent.servicePackageId)
            .subscribe(
                function (response: any) {
                    thisComponent.model = response;
                    thisComponent.servicesList = response.services;
                    thisComponent.totalFees = thisComponent.model.totalCost;
                    thisComponent.servicesCost = thisComponent.model.servicesCost;
                    for (let item of thisComponent.servicesList) {
                        item.nodeType = "Service";

                        //thisComponent.strm = 'aaaaa';
                    }
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }
    nodeSelect(event: any) {
        this.serviceModel.serviceId = event.node.data;
        this.serviceModel.serviceName = event.node.label;
        this.serviceModel.nodeType = event.node.type
        this.serviceModel.serviceTotalCost = event.node.serviceCost;
        this.selectedFile = event.node;

        //    this.nodeType = event.node.type;
        this.showProgress = false;
    }
    nodeUnselect(event: any) {
        this.serviceModel.serviceId = '';
    }

    fillServicesList() {
        let vm = this;
        vm.isNew = true;

        if (this.serviceModel.nodeType.toLocaleLowerCase() == "service") {
            //  vm.serviceModel.servicePackageId = vm.servicePackageId;//relation converted to many to many 
            vm.tempServiceModel = vm.servicesList.find(srv => srv.serviceId == vm.serviceModel.serviceId);
            if (vm.tempServiceModel == undefined) {
                vm.servicesList.push(vm.serviceModel);
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');

            } else {

                //vm.toastr.warning('Saved before.');
                let msg = vm.translate.instant("ServiceDuplication");
                vm.toastr.warning(msg, '');
                //vm.deleteItem(vm.serviceModel.serviceId);
                //if (vm.selectedObject != null)
                //{
                //    vm.servicesList.push(vm.selectedObject);
                //}
            }

            // vm.clearServiceModel();
            vm.updateModelWithServices();
            //  vm.isGroupSelected = false;
        } else {

            //   vm.toastr.error('you must select service not service group.');
            // vm.RemoveServiceModelFromlist(vm.serviceModel.serviceId);
            //vm.deleteItem(vm.serviceModel.serviceId);
            let msg = vm.translate.instant("SelectServiceNotServiceGroup");
            vm.toastr.warning(msg, '');
            vm.updateModelWithServices();
            //  vm.isGroupSelected = true;
            vm.clearServiceModel();

        }


    }
    updateServicesList() {
        let vm = this;
        vm.isNew = false;
        let count = 0;
        var existElement = this.servicesList.find(o => o.serviceId == vm.serviceModel.serviceId);

        if (existElement.serviceId == vm.idToBeEdited) {

            vm.serviceModel = existElement;
            // vm.clearServiceModel();
            vm.updateModelWithServices();
            //vm.toastr.success('Serviceupdated.');
            let msg = vm.translate.instant("Serviceupdated");
            vm.toastr.warning(msg, '');
        } else {//(existElement.serviceId != vm.idToBeEdited) {
            for (let item of vm.servicesList) {
                if (existElement.serviceId == item.serviceId) {
                    count++;
                }


            }
            if (count >= 2) {

                vm.deleteItem(vm.serviceModel.serviceId);
                //vm.clearServiceModel()
                vm.updateModelWithServices();
                //vm.toastr.warning('Service is already exist.');
                let msg = vm.translate.instant("ServiceDuplication");
                vm.toastr.warning(msg, '');
            } else {


                vm.serviceModel = existElement;
                // vm.clearServiceModel();
                vm.updateModelWithServices();
                //vm.toastr.success('Service updated.');
                let msg = vm.translate.instant("Serviceupdated");
                vm.toastr.warning(msg, '');

            }
        }
    }

    clearServiceModel() {

        this.serviceModel = {};
        this.selectedFile = {};
        this.filterString = '';
    }
    initialize() {
        this.serviceModel = {};
        this.selectedFile = {};
        this.isNew = true;
    }
    updateModelWithServices() {
        ////
        let vm = this;
        vm.servicesCost = 0;
        for (let item of vm.servicesList) {
            //cost of service to be shown in control.
            vm.servicesCost += (item.serviceTotalCost) * (item.quantity);
        }
        this.model.services = vm.servicesList;

    }
    editItem(serviceId: string): void {
        let vm = this;
        vm.isNew = false;
        vm.selectedObject = {};
        vm.selectedObject = this.servicesList.find(o => o.serviceId == serviceId);

        if (vm.selectedObject != null || vm.selectedObject != undefined) {
            vm.idToBeEdited = vm.selectedObject.serviceId;
            this.serviceModel = vm.selectedObject;
            vm.displaySelectedParentGroupNode(serviceId);
        }
        //  vm.nodeType = "service";
        this.btnServicesGroup.nativeElement.click();
    }

    deleteItem(id: string): void {
        let vm = this;
        vm.itemToDeleteId = id;
        var selectedObject = vm.servicesList.find(o => o.serviceId == id);
        var index = vm.servicesList.indexOf(selectedObject);
        if (index > -1) {
            vm.servicesList.splice(index, 1);
        }

    }

    displaySelectedParentGroupNode(serviceId: string) {
        let vm = this
        vm.treeDataSourceItems.forEach(node => {
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
                    this.selectedFile = childNode;

            });
        }
    }
    public navigateToPackages() {
        this.router.navigate(['/clinic/servicePackages', this.selectedClinicId]);
    }
    sum() {
        let c = Number(this.model.clinicCharge);
        let r = Number(this.model.resourceCharge);
        this.totalFees = c + r;
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.Coding) {
                    if (item.fullControl || item.add || item.edit)
                        this.enableSaveBtn = true;
                }

            }
        }

    }
}