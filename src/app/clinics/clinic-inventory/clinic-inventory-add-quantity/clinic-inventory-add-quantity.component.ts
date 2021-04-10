import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/primeng';
import {ClinicService} from '../../../clinics/shared/clinic.service';
import { SharedService } from '../../../shared/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { TranslateObjectsPipe } from '../../../shared/pipes/translateObjects.pipe';
@Component({
   
    selector: 'clinic-inventory-add-quantity',
    templateUrl: 'clinic-inventory-add-quantity.component.html'
})

export class ClinicInventoryAddQuantity implements OnInit {
    @Input() enableSaveBtn: boolean = false;
    @Input() isClinicAdmin: boolean = false;
    selectInventoryTab: boolean = true;
    constructor(private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
    )
    { }

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
        labelTranslation: "NonMedical Products",
        value: "NonMedical",
        type: "NonMedical",
        productGroupType: "NonMedical",
        parentGroupId: 2,
        parentName: "NonMedical Product",
        children: []
    };
    selectedClinicId: string | undefined;
    //isSelectedGroupNode = false;
    hideOnHandQuantity = true;
    showOnHandQuantity = false;
    model: any = {};
    inventoryRequestModel: any = {};
    active = true;
    clinicInventoryObject: any = {};
    productObject: any = {};
    classifications = [];
    showProgress = false;
    productList: any[] = [];
    treeDataSourceItems: any[] = [];
    selectedGroup: TreeNode;
    doctorId: string | undefined;
    doctorName: string = "";
    //unitName: string = "";
    filterString: string | undefined;
    leafType: string = 'Product';
    code: string = "";
    productName: string = "";
    lstToTranslated: string[] = [];
    translateObjects = new TranslateObjectsPipe(this.storage);
    ngOnInit(): void {
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.treeDataSourceItems.push(this.Medical);
        this.treeDataSourceItems.push(this.NonMedical);
        this.selectedClinicId = this.storage.retrieve("ClinicID");
        this.getProductsGroupsForTree();
        this.doctorId = this.storage.retrieve("UserID");
        this.clinicInventoryObject.recorderId = this.doctorId;
        this.clinicInventoryObject.clinicId = this.selectedClinicId;
    }

    getProductsGroupsForTree() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getActiveProductsGroupsForTreeView(thisComponent.selectedClinicId)
            .subscribe(
            function (response:any) {

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
                thisComponent.translateObjects.transform(thisComponent.treeDataSourceItems, null, null, thisComponent.lstToTranslated);
                //thisComponent.treeDataSourceItems = response;

            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

    }
    onSubmit(): void {
        let thisComponent = this;
        if (this.clinicInventoryObject.productId > 0) {
            //Update

            this.clinicService.updateClinicQuantity(thisComponent.clinicInventoryObject)
                .subscribe(
                function (response:any) {
                    thisComponent.clinicInventoryObject = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.clear();
                    thisComponent.getProductsGroupsForTree()
                    this.hideOnHandQuantity = false;
                    this.showOnHandQuantity = true;
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
        }
    }

    clear(): void {
        this.clinicInventoryObject = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    nodeSelect(event:any) {
        this.clear();
        this.showOnHandQuantity = false;
        this.hideOnHandQuantity = true;
        if (event.node.type == "Product") {
            if (event.node.id && event.node.onHandQuantity > 0) {
                this.clinicInventoryObject.onHandQuantity = event.node.onHandQuantity;
                this.hideOnHandQuantity = false;
                this.showOnHandQuantity = true;
                let msg = this.translate.instant( "OnhandQuantityExist");
                this.toastr.warning(msg,event.node.name);
            }

            let thisComponent = this;
            this.clinicInventoryObject.itemName = event.node.name;
            this.clinicInventoryObject.id = event.node.id;
            this.clinicInventoryObject.productId = event.node.data;
            this.clinicInventoryObject.code = event.node.code;
            this.clinicInventoryObject.description = event.node.description;
            this.doctorName = event.node.label;
            if (event.node.heightUnit != null) {
                this.clinicInventoryObject.unitName = event.node.heightUnit.name;
            }
            else if (event.node.weightUnit != null) {

                this.clinicInventoryObject.unitName = event.node.weightUnit.name;

            }
            else if (event.node.volumeUnit != null) {
                this.clinicInventoryObject.unitName = event.node.volumeUnit.name;

            }
            else {
                this.clinicInventoryObject.unitName = "Number Unit";

            }
            //if ()
            //{

            //}
            // this.clear();
        }
    }
}