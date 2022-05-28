import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TreeNode } from 'primeng/api';
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({
    selector: 'clinic-services',
    templateUrl: './clinic-services.component.html'
})

export class ClinicServicesComponent implements OnInit {
    constructor(public toastr: ToastrService,
        private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    selectedLang = 'ar';
    filterString!:string;
    leafType: string = 'Service';
    lstToTranslated: string[] = [];
    selectServicesTab: boolean = true;
    selectedClinicId: string = "0";
    active: boolean = true;
    showProgress = false;
    isSelectedGroupNode = false;
    isServiceGroupSeleced = true;
    isServiceSeleced = false;
    groupName: string = '';
    childName: string = '';
    rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    selectedAction = 1;
    txtHeaderModal = "";
    serviceGroupId = 'new';
    serviceId = 'new';
    @ViewChild('btnServicesGroup') btnServicesGroup!: ElementRef;
    @ViewChild('btnCloseServicesGroup') btnCloseServicesGroup!: ElementRef;
    @ViewChild('btnCloseService') btnCloseService!: ElementRef;
    //btnCloseService
    @ViewChild('btnServices') btnServices!: ElementRef;
    @ViewChild('tree') tree: any;

    @ViewChild('i') rbselection!: ElementRef;
    selectedFile2!: TreeNode;
    selectedGroup!: TreeNode;

    selectedGroupNode: any;
    titl: string = '';
    model: any = {};
    serviceGroupModel: any = {};
    hideModal = false;
    selectedNode: any;
    treeDataSourceItems: any[] = [];
    groupsOnlyTreeDataSourceItems: any[] = [];
    serviceGroupParentId = '';
    serviceGroupParentlabel = '';
    isRoot = false;
    totalFees: number = 0;
    isEdit = false;
    toPrintDiv: string = "print-section";
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    enableServiceInput: boolean = false;
    ngOnInit(): void {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.groupName = this.translate.instant("ServiceGroup");
        this.childName = this.translate.instant("Service");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.groupName = this.translate.instant("ServiceGroup");
            this.childName = this.translate.instant("Service");
        });
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.getServiceGroupsForTree();

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
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
        //this.clinicService.getServiceGroupsOnlyForTreeView()
        //    .subscribe(
        //    function (response:any) {
        //        thisComponent.groupsOnlyTreeDataSourceItems = response;
        //    },
        //    function (error:any) { 
        //        thisComponent.toastr.error('Failed to Load Data - ' + error, '');
        //        thisComponent.showProgress = false;
        //    },
        //    function () { // finally
        //        thisComponent.showProgress = false;
        //    });
    }

    expandAll() {
        this.treeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.treeDataSourceItems.forEach(node => {
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

    nodeSelect(event?: any) {
        event.node.label;
    }

    nodeUnselect(event: any) {
        //event.node.label
    }
    displayPopup(node: any) {
        let thisComponent = this;
        if (node.type.toLocaleLowerCase() == "servicegroup") {
            //  thisComponent.showProgress = true;
            this.serviceGroupId = node.data;
            this.isServiceGroupSeleced = true;
            this.isServiceSeleced = false;
            this.isRoot = true;
            this.isEdit = true;
            thisComponent.selectedAction = 1;
            this.txtHeaderModal = this.translate.instant("ServiceGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("ServiceGroup");
                this.groupName = this.translate.instant("ServiceGroup");
                this.childName = this.translate.instant("Service");
            });
            this.btnServicesGroup.nativeElement.click();
            if (this.serviceGroupId.toString().toLowerCase() != 'new') {
                this.clinicService.getServiceGroupById(this.serviceGroupId)
                    .subscribe(
                        function (response: any) {
                            thisComponent.serviceGroupModel = response;
                            thisComponent.serviceGroupParentId = thisComponent.serviceGroupModel.parentGroupId;

                            if (thisComponent.selectedLang == 'ar')
                                thisComponent.serviceGroupParentlabel = thisComponent.serviceGroupModel.parentName;
                            else
                                thisComponent.serviceGroupParentlabel = thisComponent.serviceGroupModel.parentNameTranslation;

                        },
                        function (error: any) {
                           thisComponent.toastr.error(error.error, '');
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });
            }

        } else if (node.type.toLocaleLowerCase() == "service") {
            //  thisComponent.showProgress = true;
            this.isServiceGroupSeleced = false;
            this.isServiceSeleced = true;
            this.serviceId = node.data;
            thisComponent.selectedAction = 2;
            //thisComponent.txtHeaderModal = "Service";
            this.txtHeaderModal = this.translate.instant("Service");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("Service");
                this.groupName = this.translate.instant("ServiceGroup");
                this.childName = this.translate.instant("Service");
            });
            this.isRoot = true;
            this.isEdit = true;
            this.btnServicesGroup.nativeElement.click();
            this.totalFees = thisComponent.model.resourceFee + thisComponent.model.clinicFee;
            ////////////////get service by id
            if (this.serviceId.toString().toLowerCase() != 'new') {
                this.clinicService.getServiceById(this.serviceId)
                    .subscribe(
                        function (response: any) {
                            thisComponent.model = response;
                            thisComponent.serviceGroupParentId = thisComponent.model.parentId;
                            if (thisComponent.selectedLang == 'ar')
                                thisComponent.serviceGroupParentlabel = thisComponent.model.parentName;
                            else
                                thisComponent.serviceGroupParentlabel = thisComponent.model.parentNameTranslation;


                            thisComponent.totalFees = thisComponent.model.resourceFee + thisComponent.model.clinicFee;
                        },
                        function (error: any) {
                           thisComponent.toastr.error(error.error, '');
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });
            }
        }
        thisComponent.selectedNode = node;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    }

    passServiceGroupValue(node: any) {
        let thisComp = this;
        thisComp.clearServiceGroupWithParent();
        thisComp.serviceGroupParentId = node.data;
        thisComp.serviceGroupParentlabel = node.label;

        if (thisComp.selectedLang == 'ar')
            thisComp.serviceGroupParentlabel = node.label;
        else
            thisComp.serviceGroupParentlabel = node.labelTranslation;

        //thisComp.titl = "sgdfgd";
        this.selectedAction = 1;
        this.txtHeaderModal = this.translate.instant("ServiceGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("ServiceGroup");
            this.groupName = this.translate.instant("ServiceGroup");
            this.childName = this.translate.instant("Service");
        });
        thisComp.isRoot = false;
        this.isServiceGroupSeleced = true;
        this.isServiceSeleced = false;
        //   this.isEdit = false;
        this.selectedNode = node;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];

    }
    passInitialServiceGroupValue(value: string) {
        let thisComp = this;
        thisComp.clearServiceGroupWithParent();
        thisComp.serviceGroupParentId = '';
        thisComp.isRoot = true;
        //    thisComp.titl = "iniit";
        this.txtHeaderModal = this.translate.instant("ServiceGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("ServiceGroup");
            this.groupName = this.translate.instant("ServiceGroup");
            this.childName = this.translate.instant("Service");
        });
        this.isServiceGroupSeleced = true;
        this.isServiceSeleced = false;
        this.isEdit = true;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    }
    onselectedGroupNodeValue(value: string): void {
        let vm = this;
        //this.selectedGroupNode = value;
        //this.nodeSelect(event:any);
        //this.selectedGroupNode.icon = "style";
        //this.selectedGroupNode
        // this.titl = value;
        //vm.isSelectedGroupNode = true;
        //vm.displaySelectedParentGroupNode(value);
        //vm.selectedFile2 = this.selectedGroupNode;
        //vm.expandAll() ;
        //vm.titl = 'helllo';
    }

    //onGetServiceGroupsForTree() {
    //    this.getServiceGroupsForTree();
    //}
    changeActivation(node: any, event: any) {
        let thisComponent = this;

        if (node.type == "Service") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateServiceActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
                        if (event.target.checked) {
                            thisComponent.activateParents(node);
                        }
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        } else if (node.type == "ServiceGroup") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateServiceGroupActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
                        node.isActive = event.target.checked;
                        if (event.target.checked) {
                            if (node.parent != undefined)
                                thisComponent.activateParents(node.parent);
                        } else {

                            thisComponent.deActivateChildren(node, false);
                        }

                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }
    activateParents(node: any) {
        node.isActive = true;
        if (node.parent != undefined) {
            this.activateParents(node.parent);
        }
    }
    deActivateChildren(node: any, active: any) {
        node.isActive = active;
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.deActivateChildren(childNode, active);
            });
        }
    }

    onSelectionChange(value: any) {
        this.selectedAction = value;

        if (this.selectedAction == 1) {
            this.isServiceGroupSeleced = true;
            this.isServiceSeleced = false;
            this.txtHeaderModal = this.translate.instant("ServiceGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("ServiceGroup");
            });

        }
        else if (this.selectedAction == 2) {
            this.isServiceGroupSeleced = false;
            this.isServiceSeleced = true
            this.txtHeaderModal = this.translate.instant("Service");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("Service");
            });
            // this.totalFees = this.model.resourceFee + this.model.clinicFee;
        }
    }

    saveServiceGroup(): void {
        let thisComponent = this;
        thisComponent.serviceGroupModel.parentGroupId = thisComponent.serviceGroupParentId;
        thisComponent.serviceGroupModel.clinicId = thisComponent.selectedClinicId;
        if (this.serviceGroupModel.id > 0) {
            //Update
            this.clinicService.updateServiceGroup(this.serviceGroupModel)
                .subscribe(
                    function (response: any) {

                        // thisComponent.serviceGroupModel = response;
                        thisComponent.selectedNode.label = response.name;
                        thisComponent.selectedNode.labelTranslation = response.nameTranslation;
                        //thisComponent.displaySelectedParentGroupNode(thisComponent.selectedNode.data, "servicegroup")//type.toLocaleLowerCase() == "servicegroup"
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearServiceGroupWithParent();
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearServiceGroupWithParent();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });

        }
        else {
            this.clinicService.createServiceGroup(this.serviceGroupModel)
                .subscribe(
                    function (response: any) {

                        //  thisComponent.serviceGroupModel = response;
                        if (thisComponent.serviceGroupParentId == '') {
                            thisComponent.treeDataSourceItems.push(response);
                        } else {
                            thisComponent.selectedNode.children.push(response);
                            //thisComponent.selectedNode.children.sort(function (a, b) {
                            //    return a.type && b.type == "ServiceGroup" ? 1 : -1;
                            //});
                            //  thisComponent.displaySelectedParentGroupNode(thisComponent.selectedNode.data, "servicegroup")//type.toLocaleLowerCase() == "servicegroup"
                        }

                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearServiceGroupWithParent();
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearServiceGroupWithParent();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    /////////we need to find the node that have id and type
    //private
    displaySelectedParentGroupNode(id: string, type: string) {
        let vm = this
        vm.treeDataSourceItems.forEach(node => {
            vm.displaySelectedNodeRecursive(node, id, type);

            if (node.data == id && node.type.toLocaleLowerCase() == type) {
                node = vm.selectedNode;
            }

        });
    }

    private displaySelectedNodeRecursive(node: any, parentGroupId: string, type: string) {
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.displaySelectedNodeRecursive(childNode, parentGroupId, type);

                if (childNode.data == parentGroupId && node.type.toLocaleLowerCase() == type) {
                    childNode = this.selectedNode;
                }

            });
        }
    }
    clearServiceGroupWithParent() {
        this.serviceGroupModel = {};
        this.serviceGroupId = 'new';
        this.serviceGroupParentId = '';
        this.serviceGroupParentlabel = '';
        this.selectedNode = null;
        this.isServiceGroupSeleced = true;
        //  this.txtHeaderModal = '';
        // this.selectedGroupNode = null;
        this.active = false;
        //this.serviceGroupIdValue.emit(this.serviceGroupId);
        setTimeout(() => this.active = true, 0);
    }
    clearServiceGroupWithOutParent() {
        this.serviceGroupModel = {};
        this.serviceGroupId = 'new';
        // this.serviceGroupParentId = '';
        // this.serviceGroupParentlabel = '';
        //  this.txtHeaderModal = '';
        // this.selectedGroupNode = null;
        this.active = false;
        //this.serviceGroupIdValue.emit(this.serviceGroupId);
        setTimeout(() => this.active = true, 0);
    }

    ///////////////////////////////////////////////////service
    saveService(): void {
        let thisComponent = this;
        thisComponent.model.parentId = thisComponent.serviceGroupParentId;
        if (this.model.id > 0) {
            //Update
            this.clinicService.updateService(this.model)
                .subscribe(
                    function (response: any) {
                        // thisComponent.model = response;
                        thisComponent.selectedNode.label = response.name;
                        thisComponent.selectedNode.labelTranslation = response.nameTranslation;
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearWithParent();
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearWithParent();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });

        }
        else {
            this.clinicService.createService(this.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.selectedNode.children.push(response);
                        thisComponent.selectedNode.children.sort(function (a: { type: any; }, b: { type: string; }) {
                            return a.type && b.type == "Service" ? 1 : -1;
                        });
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearWithParent();

                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.clearWithParent();
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clearWithParent() {
        this.model = {};
        this.serviceId = 'new';
        this.serviceGroupParentId = '';
        this.serviceGroupParentlabel = '';
        this.totalFees = 0;
        this.selectedNode = null;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    clearWithOutParent() {
        this.model = {};
        this.serviceId = 'new';
        this.totalFees = 0;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    close() {
        this.clearServiceGroupWithParent();
        this.clearWithParent();
    }
    cancelService(): void {
        this.clearWithParent();
        this.btnCloseService.nativeElement.click();
    }
    cancelServiceGroup(): void {
        this.clearServiceGroupWithParent();
        this.btnCloseServicesGroup.nativeElement.click();
    }
    ///////////////////////filtering
    filterNodes(text: any, tree: any) {
        //tree.treeModel.filterNodes("text", true);
        // this.treeDataSourceItems.treeModel.filterNodes("text", true);
        //tree.treeModel.filterNodes((node) => {
        //    return !node.data.name.startsWith(text);
        //});
    }
    sum() {
        let c = Number(this.model.clinicFee);
        let r = Number(this.model.resourceFee);
        this.totalFees = c + r;
    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.Coding) {
                    if (item.fullControl == true || item.add)
                        this.enableAddRootBtn = true;// then any add button should be enabled
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl == true || item.activate)
                        this.enableActivateBtn = true;
                    if (item.fullControl || item.add || item.edit)
                        this.enableSaveBtn = true;
                }

                if (item.permission.key == this.key.UpdateServicePrice)
                    this.enableServiceInput = true;

            }
        }

    }
}