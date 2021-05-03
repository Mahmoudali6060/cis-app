import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityClass } from '../../shared/shared/utility.class';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { TreeNode } from 'primeng/api';
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
@Component({

    selector: 'clinic-products',
    templateUrl: './clinic-products.component.html'
})

export class ClinicProductsComponent implements OnInit {
    constructor(public toastr: ToastrService,
        private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService
        //, private translateObjects: TranslateObjectsPipe
    ) { }

    selectedLang = 'ar';
    filterString!:string;
    leafType: string = 'Product';
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;

    @Output() onCancel = new EventEmitter();

    selectProductstTab: boolean = true;
    selectedClinicId: string = "0";
    hideUnit: boolean = true;
    active: boolean = true;
    showProgress = false;
    isSelectedGroupNode = false;
    isProductGroupSeleced = true;
    isProductSeleced = false;
    //rbSelections = [{ value: 1, text: 'ProductsGroup' }, { value: 2, text: 'Product' }];
    groupName: string = '';
    childName: string = '';
    rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    selectedAction = 1;
    txtHeaderModal = "";
    productGroupId = 'new';
    productId = 'new';
    @ViewChild('btnServicesGroup') btnServicesGroup!: ElementRef;
    @ViewChild('btnCloseProductsGroup') btnCloseProductsGroup!: ElementRef;

    @ViewChild('btnCloseProduct') btnCloseProduct!: ElementRef;
    @ViewChild('btnServices') btnServices!: ElementRef;
    @ViewChild('tree') tree: any;
    utilityClass: UtilityClass = new UtilityClass();

    @ViewChild('i') rbselection!: ElementRef;
    @ViewChild('d') selection!: ElementRef;


    selectedFile2!: TreeNode;
    selectedGroup!: TreeNode;

    selectedGroupNode!: TreeNode;
    titl: string = '';
    model: any = {};
    productGroupModel: any = {};
    hideModal = false;

    treeDataSourceItems: any[] = [];
    groupsOnlyTreeDataSourceItems: any[] = [];
    productGroupParentId = '';
    productType = "";

    productGroupParentlabel = '';
    isRoot = false;
    checkParentChildren = true;
    totalFees!: number;
    isEdit = false;
    selctedNode: any;
    toPrintDiv: string = "print-section";

    heightList: any[] = [];
    weightList: any[] = [];
    volumeList: any[] = [];

    measuringId!: any;

    unitList: any[] = [];
    vendors: any[] = [];

    csList: any[] = [];


    Medical: any = {
        label: "المنتجات الطبية",
        labelTranslation: "Medical Products",
        value: "Medical",
        type: "Medical",
        productGroupType: "Medical",
        parentGroupId: 1,
        parentName: "Medical Product",
        children: []
    };
    NonMedical: any = {
        label: "المنتجات غير الطبية",
        labelTranslation: "Non Medical Products",
        value: "NonMedical",
        type: "NonMedical",
        productGroupType: "NonMedical",
        parentGroupId: 2,
        parentName: "NonMedical Product",

        children: []

    };
    userType: string = '';
    isClinicAdmin: boolean = false;
    lstToTranslated: string[] = [];
    //pip =new  TranslateObjectsPipe(); 
    translateObjects = new TranslateObjectsPipe(this.localStorage);

    ngOnInit(): void {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.groupName = this.translate.instant("ProductsGroup");
        this.childName = this.translate.instant("Product");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.groupName = this.translate.instant("ProductsGroup");
            this.childName = this.translate.instant("Product");
        });
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;


        this.getProductsGroupsForTree();
        this.loadProductWrapper();
        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }

    }

    loadProductWrapper() {
        let thisComponent = this;
        this.clinicService.getProductUnits()
            .subscribe(
                function (wrapper: any) {
                    thisComponent.heightList = wrapper.heights;
                    thisComponent.weightList = wrapper.weights;
                    thisComponent.volumeList = wrapper.volumes;
                    thisComponent.unitList = wrapper.unites;
                    thisComponent.vendors = wrapper.vendors;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

    }
    fillUnits(erd: string) {
        if (erd == "HeightsUnit") {
            this.csList = this.heightList;
            this.hideUnit = true;

        }
        else if (erd == "WeightsUnit") {
            this.csList = this.weightList;
            this.hideUnit = true;

        }
        else if (erd == "VolumesUnit") {
            this.csList = this.volumeList;
            this.hideUnit = true;

        }
        else if (erd == "NumbersUnit") {
            this.hideUnit = false;
        }

    }
    fillMesauringUnits(response: any, meunit: any) {
        if (response == "HeightsUnit") {
            this.csList = this.heightList;
            this.measuringId = meunit.heightUnitId;
        }
        else if (response == "WeightsUnit") {
            this.csList = this.weightList;
            this.measuringId = meunit.weightUnitId;
        }

        else {
            this.csList = this.volumeList;
            this.measuringId = meunit.volumeUnitId;
        }

    }
    updateModelWithMeasuringID(): void {
        if (this.model.unitType == "VolumesUnit") {
            this.model.volumeUnitId = this.measuringId;
        }
        else if (this.model.unitType == "HeightsUnit") {
            this.model.heightUnitId = this.measuringId;

        }
        else {
            this.model.weightUnitId = this.measuringId;
        }


    }
    getModelWithMeasuringID(): any {
        if (this.model.unitType == "VolumesUnit") {
            this.model.volumeUnitId = this.measuringId;
            return this.model.volumeUnitId;
        }
        else if (this.model.unitType == "HeightsUnit") {
            this.model.heightUnitId = this.measuringId;
            return this.model.heightUnitId;
        }
        else {
            this.model.weightUnitId = this.measuringId;
            return this.model.weightUnitId;
        }
    }

    getProductsGroupsForTree() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getProductsGroupsForTreeView(thisComponent.selectedClinicId)
            .subscribe(
                function (response: any) {

                    thisComponent.Medical.children = [];
                    thisComponent.NonMedical.children = [];

                    for (let product of response) {
                        if (product.parent == undefined && product.productGroupType == "Medical") {
                            thisComponent.Medical.children.push(product);
                        }
                        else if (product.parent == undefined && product.productGroupType == "NonMedical") {
                            thisComponent.NonMedical.children.push(product);
                        }

                    }
                    thisComponent.treeDataSourceItems.push(thisComponent.Medical);
                    thisComponent.treeDataSourceItems.push(thisComponent.NonMedical);
                    thisComponent.translateObjects.transform(thisComponent.treeDataSourceItems, '', null, thisComponent.lstToTranslated);

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

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
    }
    displayPopup(node: any) {
        let thisComponent = this;
        if (node.type.toLocaleLowerCase() == "productsgroup") {
            this.productGroupId = node.data;
            this.isProductGroupSeleced = true;
            this.isProductSeleced = false;
            this.isRoot = true;
            this.isEdit = true;
            thisComponent.selectedAction = 1;
            // thisComponent.txtHeaderModal = "ProductGroup";
            this.txtHeaderModal = this.translate.instant("ProductGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("ProductGroup");
                this.groupName = this.translate.instant("ProductsGroup");
                this.childName = this.translate.instant("Product")
            });
            this.btnServicesGroup.nativeElement.click();
            if (this.productGroupId.toString().toLowerCase() != 'new') {
                this.clinicService.getProductGroupById(this.productGroupId, this.checkParentChildren)
                    .subscribe(
                        function (response: any) {
                            thisComponent.productGroupModel = response;
                            thisComponent.productGroupParentId = thisComponent.productGroupModel.parentGroupId;
                            if (thisComponent.productGroupModel.parentName == "undefined") {
                                thisComponent.productGroupParentlabel = thisComponent.productGroupModel.productGroupType;
                            }
                            else if (thisComponent.productGroupModel.parentName != null) {
                                if (thisComponent.selectedLang == 'ar')
                                    thisComponent.productGroupParentlabel = thisComponent.productGroupModel.parentName;
                                else
                                    thisComponent.productGroupParentlabel = thisComponent.productGroupModel.parentNameTranslation;

                            }
                        },
                        function (error: any) {
                            thisComponent.toastr.error(error, '');
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });
            }

        } else if (node.type.toLocaleLowerCase() == "product") {
            this.isProductGroupSeleced = false;
            this.isProductSeleced = true;
            this.productId = node.data;
            thisComponent.selectedAction = 2;
            //thisComponent.txtHeaderModal = "Product";
            this.txtHeaderModal = this.translate.instant("Product");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("Product");
                this.groupName = this.translate.instant("ProductsGroup");
                this.childName = this.translate.instant("Product");
            });
            this.isRoot = true;
            this.isEdit = true;
            this.btnServicesGroup.nativeElement.click();
            ////////////////get service by id
            if (this.productId.toString().toLowerCase() != 'new') {
                this.clinicService.getProductById(this.productId)
                    .subscribe(
                        function (response: any) {
                            thisComponent.model = response;
                            thisComponent.model.unitName == "NumbersUnit" ? thisComponent.hideUnit = false : thisComponent.hideUnit = true;
                            if (thisComponent.model.expiryDate)
                                thisComponent.model.expiryDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.expiryDate);
                            if (thisComponent.model.manufacturingDate)
                                thisComponent.model.manufacturingDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.manufacturingDate);

                            thisComponent.productGroupParentId = thisComponent.model.parentGroupId;
                            thisComponent.fillMesauringUnits(response.unitType, response);

                            if (thisComponent.selectedLang == 'ar')
                                thisComponent.productGroupParentlabel = thisComponent.model.parentGroupName;
                            else
                                thisComponent.productGroupParentlabel = thisComponent.model.parentGroupNameTranslation;
                        },
                        function (error: any) {
                            thisComponent.toastr.error(error, '');
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });
            }


        }
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        thisComponent.selctedNode = node;
    }

    passServiceGroupValue(node: any) {

        let thisComp = this;
        thisComp.clearProductGroupWithParent();
        this.productGroupModel.productGroupType = node.productGroupType;
        this.productType = node.productGroupType;
        thisComp.productGroupParentId = node.data;
        thisComp.productGroupParentlabel = node.label;
        this.selectedAction = 1;
        // thisComp.txtHeaderModal = "Product Group";
        this.txtHeaderModal = this.translate.instant("ProductGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("ProductGroup");
            this.groupName = this.translate.instant("ProductsGroup");
            this.childName = this.translate.instant("Product");
        });
        thisComp.isRoot = false;
        this.isProductGroupSeleced = true;
        this.isProductSeleced = false;

        thisComp.selctedNode = node;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    }
    passInitialServiceGroupValue(node: any) {
        let thisComp = this;
        thisComp.clearProductGroupWithParent()
        this.productGroupModel.productGroupType = node.productGroupType;
        this.productType = node.productGroupType;

        thisComp.productGroupParentId = node.data;
        thisComp.productGroupParentlabel = node.label;
        this.selectedAction = 1;
        //thisComp.txtHeaderModal = "Product Group";
        this.txtHeaderModal = this.translate.instant("ProductGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("ProductGroup");
            this.groupName = this.translate.instant("ProductsGroup");
            this.childName = this.translate.instant("Product");
        });
        thisComp.isRoot = true;
        this.isProductGroupSeleced = true;
        this.isProductSeleced = false;

        thisComp.selctedNode = node;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    }

    changeActivation(node: any, event: any) {
        let thisComponent = this;

        if (node.type.toLocaleLowerCase() == "product") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateProductActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
                        if (event.target.checked) {
                            thisComponent.activateParents(node);
                        }

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        } else if (node.type.toLocaleLowerCase() == "productsgroup") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateProductsGroupActiveState({ "id": node.id, "isActive": event.target.checked }, thisComponent.checkParentChildren)
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
                        thisComponent.toastr.error(error, '');
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
    onproductGroupIdValue(value: string): void {
        //this.productGroupId = value;
    }
    onproductIdValue(value: string): void {
        this.productId = value;
    }
    onSelectionChange(value: any) {
        this.selectedAction = value;
        if (this.selectedAction == 1) {
            this.isProductGroupSeleced = true;
            this.isProductSeleced = false;
            this.txtHeaderModal = this.translate.instant("ProductGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("ProductGroup");
            });
        }
        else if (this.selectedAction == 2) {
            this.isProductGroupSeleced = false;
            this.isProductSeleced = true
            //this.txtHeaderModal = " Product";
            this.txtHeaderModal = this.translate.instant("Product");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("Product");
            });
        }
    }

    saveProductGroup(): void {
        let thisComponent = this;
        thisComponent.productGroupModel.parentGroupId = thisComponent.productGroupParentId;
        thisComponent.productGroupModel.clinicId = thisComponent.selectedClinicId;
        if (this.productGroupModel.id > 0) {
            //Update
            this.clinicService.updateProductGroup(this.productGroupModel)
                .subscribe(
                    function (response: any) {
                        //  thisComponent.productGroupModel = response;
                        thisComponent.selctedNode.label = response.name;
                        thisComponent.selctedNode.labelTranslation = response.nameTranslation;
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearProductGroupWithParent();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else {
            this.clinicService.createProductGroup(this.productGroupModel)
                .subscribe(
                    function (response: any) {
                        // thisComponent.productGroupModel = response;
                        if (thisComponent.productGroupParentId == '') {
                            thisComponent.treeDataSourceItems.push(response);
                        } else {
                            thisComponent.selctedNode.children.push(response);
                        }
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearProductGroupWithParent();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');

                        thisComponent.clearProductGroupWithParent();

                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }
    clearProductGroupWithParent() {
        this.productGroupModel = {};
        this.productGroupId = 'new';
        this.productGroupParentId = '';
        this.productGroupParentlabel = '';
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ///////////////////////////////////////////////////Product
    saveProduct(): void {
        let thisComponent = this;
        thisComponent.model.parentGroupId = thisComponent.productGroupParentId;
        if (this.model.expiryDate)
            this.model.expiryDate = this.utilityClass.getUtcDate(this.model.expiryDate);
        if (this.model.manufacturingDate)
            this.model.manufacturingDate = this.utilityClass.getUtcDate(this.model.manufacturingDate);
        if (this.model.id > 0) {
            //Update
            this.updateModelWithMeasuringID();

            this.clinicService.updateProduct(this.model)
                .subscribe(
                    function (response: any) {
                        thisComponent.model = response;
                        thisComponent.selctedNode.label = response.name;
                        thisComponent.selctedNode.labelTranslation = response.nameTranslation;
                        thisComponent.model.expiryDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.expiryDate)

                        thisComponent.model.manufacturingDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.manufacturingDate)
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearWithParent();
                        thisComponent.btnCloseProduct.nativeElement.click();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                        thisComponent.clearWithParent();
                        thisComponent.btnCloseProduct.nativeElement.click();
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
        else {
            //if return for edit so it will be reurn measureId
            this.updateModelWithMeasuringID();
            this.clinicService.createProduct(this.model)
                .subscribe(
                    function (response: any) {
                        thisComponent.selctedNode.children.push(response);
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clearWithParent();
                        thisComponent.btnCloseProduct.nativeElement.click();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                        thisComponent.clearWithParent();
                        thisComponent.btnCloseProduct.nativeElement.click();
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clearWithParent() {
        this.model = {};
        this.csList = [];
        this.measuringId = '';
        this.productType = 'new';
        this.productGroupParentId = '';
        this.productGroupParentlabel = '';
        setTimeout(() => this.active = true, 0);
        //this.btnCloseProduct.nativeElement.click();
    }
    cancelProductGroup(): void {
        this.clearProductGroupWithParent();
        this.btnCloseProductsGroup.nativeElement.click();
    }
    cancelProduct(): void {
        this.clearWithParent();
        this.btnCloseProduct.nativeElement.click();

    }
    close() {
        this.clearProductGroupWithParent();
        this.clearWithParent();
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

            }
        }

    }
}