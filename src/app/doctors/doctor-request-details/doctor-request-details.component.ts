import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service'
import { SharedService } from '../../shared/shared/shared.service';
import { ClinicService } from '../../clinics/shared/clinic.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
import { TranslateObjectsPipe } from '../../shared/pipes/translateObjects.pipe';
import { TreeNode } from 'primeng/api';
@Component({

    selector: 'doctor-request-details',
    templateUrl: './doctor-request-details.component.html',
})

export class DoctorRequestDetailsComponent implements OnInit {
    selectBasicTab: boolean = true;
    isDetailsVisible:any=true;
    Medical: any = {
        label: "المنتجات الطبية ",
        labelTranslation: "Medical Products",
        value: "Medical",
        type: "Medical",
        productGroupType: "Medical",
        parentGroupId: 1,
        parentName: "Medical Products",
        children: []
    };
    NonMedical: any = {
        label: "المنتجات غير الطبية ",
        labelTranslation: "NonMedical Products",
        value: "NonMedical",
        type: "NonMedical",
        productGroupType: "NonMedical",
        parentGroupId: 2,
        parentName: "NonMedical Products",

        children: []


    };
    translateObjects = new TranslateObjectsPipe(this.storage);
    selectedClinicId!: string;
    isSelectedGroupNode:any = false;
    product: any = {};
    inventoryRequestModel: any = {};
    active = true;
    inventoryRequestObject: any = {};
    classifications = [];
    showProgress = false;
    productList: any[] = [];
    treeDataSourceItems: any[] = [];
    @ViewChild("fileInput") fileInput!: any;
    selectedGroup!: TreeNode;
    doctorId!: string;
    unitType!: string;
    doctorName: string = "";
    //unitName: string = "";
    filterString!: string;
    leafType: string = 'Product';
    code: string = "";
    productName: string = "";
    enableFormButtons: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    hasEMRPermission: boolean = false;
    hasCodingPermission: boolean = false;
    lstToTranslated: string[] = [];

    constructor(private doctorService: DoctorService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , public storage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }


    ngOnInit(): void {
        
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.treeDataSourceItems.push(this.Medical);
        this.treeDataSourceItems.push(this.NonMedical);
        this.selectedClinicId = this._route.snapshot.params['id'];
        this.getProductsGroupsForTree();
        this.inventoryRequestObject.clinicId = this.selectedClinicId;

        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);

    }
    //nodeSelect(event:any) {
    //    event.node.label;

    //}

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
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });

    }
    onSubmit(): void {

        let vm = this;
        vm.showProgress = true;
        vm.inventoryRequestObject.doctorUserId = vm.storage.retrieve("UserID");
        vm.inventoryRequestObject.clinicId = vm._route.snapshot.params['id'];
        this.inventoryRequestObject.inventoryRequestStatus = 1;
        this.doctorService.createInventoryRequest(this.inventoryRequestObject)
            .subscribe(
                function (response: any) {

                    vm.inventoryRequestModel = response;
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    clear(): void {
        this.inventoryRequestObject = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    nodeSelect(event: any) {
        this.clear();
        this.inventoryRequestObject.unitName = null;
        if (event.node.type == "Product") {
            this.inventoryRequestObject.itemName = event.node.name;
            this.inventoryRequestObject.productId = event.node.data;
            this.inventoryRequestObject.inventoryCode = event.node.code;
            this.doctorName = event.node.label;
            if (event.node.heightUnit != null) {
                this.inventoryRequestObject.unitName = event.node.heightUnit.name;
            }
            else if (event.node.weightUnit != null) {

                this.inventoryRequestObject.unitName = event.node.weightUnit.name;

            }
            else if (event.node.volumeUnit != null) {
                this.inventoryRequestObject.unitName = event.node.volumeUnit.name;

            }
            else {
                this.inventoryRequestObject.unitName = "NumbersUnit";
            }
        }
        // this.clear();

    }
    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.EMR && (item.fullControl == true))
                    this.enableFormButtons = true;
                else if (item.permission.key == this.key.Coding && (item.view == true))
                    this.hasCodingPermission = true;

                // what about permission key that use with products group tree

            }
        }

        if (this.hasEMRPermission && this.hasCodingPermission)
            this.enableFormButtons;
    }
}