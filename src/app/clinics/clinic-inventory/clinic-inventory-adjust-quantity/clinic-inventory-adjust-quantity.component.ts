import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../../clinics/shared/clinic.service';
import { SharedService } from '../../../shared/shared/shared.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslateObjectsPipe } from '../../../shared/pipes/translateObjects.pipe';
@Component({
    selector: 'clinic-inventory-adjust-quantity',
    templateUrl: './clinic-inventory-adjust-quantity.component.html'
})

export class ClinicInventoryAdjustQuantity {
    selectInventoryTab: boolean = true;
    @Input() title: string = '';
    @Output() onAmountUpdated = new EventEmitter<any>();

    constructor(private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
    ) { }


    Medical: any = {
        label: "المنتجات الطبية",
        labelTranslation: "Medical Products",
        value: "Medical",
        type: "Medical",
        productGroupType: "Medical",
        parentGroupId: 1,
        parentName: "Medical Products",
        children: []
    };
    NonMedical: any = {
        label: "المنتجات غير الطبية",
        labelTranslation: "NonMedical Products",
        value: "NonMedical",
        type: "NonMedical",
        productGroupType: "NonMedical",
        parentGroupId: 2,
        parentName: "NonMedical Products",

        children: []


    };
    selectedClinicId!: string;
    //isSelectedGroupNode = false;
    model: any = {};
    inventoryRequestModel: any = {};
    active = true;
    clinicInventoryObject: any = { product: {} };
    productObject: any = {};
    classifications = [];
    showProgress = false;
    productList: any[] = [];
    treeDataSourceItems: any[] = [];
    selectedGroup!: TreeNode;
    recordedId!:string;
    doctorName: string = "";
    //unitName: string = "";
    filterString!:string;
    leafType: string = 'Product';
    code: string = "";
    productName: string = "";
    clinicIdReq!:string;
    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    ngOnInit(): void {
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.selectedClinicId = this.storage.retrieve("ClinicID");
        this.recordedId = this.storage.retrieve("UserID");
        this.treeDataSourceItems.push(this.Medical);
        this.treeDataSourceItems.push(this.NonMedical);
        this.getProductsGroupsForTree();

        if (this.clinicInventoryObject.product == null || this.clinicInventoryObject.product == undefined) {
            let product: any = {};
            this.clinicInventoryObject.product = product;
        }

    }
    getProductsGroupsForTree() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getActiveProductsGroupsForTreeView(thisComponent.selectedClinicId)
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
                    thisComponent.translateObjects.transform(thisComponent.treeDataSourceItems, '', null, thisComponent.lstToTranslated);
                    //thisComponent.treeDataSourceItems = response;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

    }

    onSubmit(): void {
        let thisComponent = this;
        this.clinicInventoryObject.clinicId = this.selectedClinicId;
        this.clinicInventoryObject.recorderId = this.recordedId;

        if (this.clinicInventoryObject.productId > 0) {
            //Update
            this.clinicService.CreateClinicQuantityAdjustment(this.clinicInventoryObject)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.clinicInventoryObject = response;
                        thisComponent.onAmountUpdated.emit(true);
                        thisComponent.clear();
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    clear(): void {
        this.clinicInventoryObject = { product: {} };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    nodeSelect(event: any) {
        this.clear();
        if (event.node.type == "Product") {
            let thisComponent = this;

            this.clinicInventoryObject.itemName = event.node.name;
            this.clinicInventoryObject.id = event.node.id;
            this.clinicInventoryObject.productId = event.node.data;
            this.clinicInventoryObject.code = event.node.code;
            this.doctorName = event.node.label;

            if (this.clinicInventoryObject.id > 0) {
                this.clinicService.getProductById(this.clinicInventoryObject.id)
                    .subscribe(
                        function (response: any) {
                            thisComponent.productObject = response;
                            thisComponent.clinicInventoryObject.product.onHandQuantity = thisComponent.productObject.onHandQuantity;
                        });
            }
        }

        // this.clear();

    }
}