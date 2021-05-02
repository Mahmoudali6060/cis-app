import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../../security/shared/account.service';
import { UserPermissions } from '../../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../../shared/shared/permission-key.enum';
@Component({

    selector: 'create-purchase-order',
    templateUrl: './create-purchase-order.component.html'
})



export class CreatePurchaseOrder implements OnInit {

    lang: string = 'ar';
    selectPurchasingTab: boolean = true;
    purchaseOrderList: any[] = [];
    showProgress = false;
    controlsCount: number = 1;
    model: any = {};
    productsList: any = [];
    vendorsList = [];
    clinicId!: any;
    clinicAdminId!: any;
    active = true;
    purchaseItem: any = {};
    orderId!: any;
    useCurrent!: any;
    isCurrent = false;
    productId!: any;
    product: any;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableSaveBtn: boolean = false;
    enableSaveAndSendBtn: boolean = false;
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , private router: Router
        , private _route: ActivatedRoute
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {

        this.lang = this.localStorage.retrieve('selectedlanguage');

        let thisComponent = this;
        this.purchaseOrderList = [];
        let id = this._route.snapshot.params['id'];
        thisComponent.orderId = `${id}`;
        let current = this._route.snapshot.params['bool'];
        let proId = this._route.snapshot.params['proId'];
        thisComponent.productId = proId;
        thisComponent.useCurrent = current;
        thisComponent.clinicId = thisComponent.localStorage.retrieve("ClinicID");
        thisComponent.clinicAdminId = thisComponent.localStorage.retrieve("UserID");
        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        thisComponent.getPurchasingOrderWrapper();
        thisComponent.getProductsUnderClinic();
        //   thisComponent.getProductById();
        if (thisComponent.orderId.toLowerCase() != 'new') {
            thisComponent.loadPurchasingOrderModel();
        }

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
        //this.getProductsUnderClinic();
    }
    loadPurchasingOrderModel() {
        let thisComponent = this;
        this.clinicService.getPurchasingOrderById(thisComponent.orderId)
            .subscribe(
                function (response: any) {
                    thisComponent.model = response;
                    thisComponent.purchaseOrderList = thisComponent.model.purchaseItems;
                    if (thisComponent.useCurrent == 1) {
                        thisComponent.updateOrderdQuantitywithCurrent();
                    }
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    updateOrderdQuantitywithCurrent() {
        let vm = this;

        for (let item of vm.purchaseOrderList) {
            item.onHandQuantity = item.currentOnHandQuantity;
            item.orderedQuantity = item.currentOrderedQuantity;
            if (item.orderedQuantity < 0)
                item.orderedQuantity = 0;

            item.maxLevel = item.currentMaxLevel;
            item.orderOutQuantity = item.currentOrderOutQuantity;

        }
    }

    getPurchasingOrderWrapper() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getPurchasingOrderWrapper(thisComponent.clinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.vendorsList = response.vendors;
                    // thisComponent.productsList = response.products;

                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    getProductsUnderClinic() {
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getProductsUnderClinic(thisComponent.clinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.productsList = response;
                    if (thisComponent.productId > 0) {
                        var product = thisComponent.productsList.find((p: any) => p.id == thisComponent.productId)
                        if (thisComponent.model != undefined) {
                            thisComponent.model.vendorId = product.vendorId;
                            thisComponent.purchaseItem.productId = product.id;
                            thisComponent.purchaseItem.onHandQuantity = product.onHandQuantity;
                            thisComponent.purchaseItem.unit = thisComponent.getProductUnitType(product);//check unit val unitName
                            thisComponent.purchaseItem.orderedQuantity = product.orderedQuantity;
                            thisComponent.purchaseOrderList.push(thisComponent.purchaseItem);
                        }

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
    addPurchaseOrder() {
        this.purchaseItem = {};
        this.purchaseOrderList.push(this.purchaseItem);
        this.controlsCount++;
    }
    getControlNumber() {
        return this.controlsCount; // GUID.newGuid();
    }
    deleteServiceBeneficiary(index: number, itemId: string): void {
        this.purchaseOrderList.splice(index, 1);

        if (itemId != null && itemId != undefined && itemId != '')
            this.deletePurchaseItemFromDB(itemId);

    }
    deletePurchaseItemFromDB(itemId: string) {
        let vm = this;
        this.clinicService.deletePurchaseItem(itemId)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    //var selectedObject = vm.sessionsList.find(o => o.id == vm.selectSessionToDelete);
                    //var index = vm.appointmentsList.indexOf(selectedObject);
                    //if (index > -1)
                    //    vm.appointmentsList.splice(index, 1);

                    // clear fields
                    //  vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

    }
    updatePurchasingOrderWithUser(source: any[]) {
        let vm = this;
        let total = 0;
        for (let item of source) {
            item.securityUserId = vm.clinicAdminId;
            item.net = item.purchasingPrice * item.orderedQuantity;
            //item.product = null;
            total += item.net
        }
        vm.model.totalPrice = total;

    }
    setOldOrderdQuantity(item: any) {
        if (this.orderId.toLowerCase() == 'new')
            item.oldOrderedQuantity = item.orderedQuantity;
    }
    createOrder(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        // thisComponent.model.securityUserId = thisComponent.clinicAdminId;
        thisComponent.updatePurchasingOrderWithUser(thisComponent.purchaseOrderList);
        thisComponent.model.purchaseItems = thisComponent.purchaseOrderList;
        thisComponent.model.securityUserId = thisComponent.clinicAdminId;
        thisComponent.model.clinicId = thisComponent.clinicId;
        if (thisComponent.purchaseOrderList.length > 0 &&
            isNaN(thisComponent.orderId) && thisComponent.orderId.toLowerCase() == 'new') {

            this.clinicService.createPurchasingOrder(thisComponent.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.purchaseOrderList = thisComponent.model.purchaseItems;
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.navigateToOrdersList();

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

            //Update

            this.clinicService.editPurchasingOrder(thisComponent.model)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.model = response;
                        thisComponent.purchaseOrderList = thisComponent.model.purchaseItems;
                        thisComponent.navigateToOrdersList();

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
    createAndSendOrder(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        // thisComponent.model.securityUserId = thisComponent.clinicAdminId;
        thisComponent.updatePurchasingOrderWithUser(thisComponent.purchaseOrderList);
        thisComponent.model.purchaseItems = thisComponent.purchaseOrderList;
        thisComponent.model.securityUserId = thisComponent.clinicAdminId;
        thisComponent.model.clinicId = thisComponent.clinicId;
        if (thisComponent.purchaseOrderList.length > 0 &&
            isNaN(thisComponent.orderId) && thisComponent.orderId.toLowerCase() == 'new') {

            this.clinicService.createAndSendPurchasingOrder(thisComponent.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.purchaseOrderList = thisComponent.model.purchaseItems;
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.navigateToOrdersList();
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

            //Update
            this.clinicService.editAndSendPurchasingOrder(thisComponent.model)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                        thisComponent.model = response;
                        thisComponent.purchaseOrderList = thisComponent.model.purchaseItems;
                        thisComponent.navigateToOrdersList();

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

    getProductUnitType(product: any): string {
        let unitType = '';
        if (product) {
            if (product.unitName || product.unitNameTranslation) {
                if (this.lang == 'ar')
                    unitType = product.unitName;
                else
                    unitType = product.unitNameTranslation;
            }
            else {
                unitType = this.translate.instant(product.unitType);
            }
        }
        return unitType;
    }

    setOtherAttribute(value: any, index: any) {
        let vm = this;
        var product = vm.productsList.find((p: any) => p.id == value);
        vm.purchaseOrderList[index].onHandQuantity = product.onHandQuantity;

        vm.purchaseOrderList[index].unit = this.getProductUnitType(product);
        vm.purchaseOrderList[index].orderedQuantity = product.orderedQuantity;
        vm.purchaseOrderList[index].orderOutQuantity = product.orderOutQuantity;
        vm.purchaseOrderList[index].maxLevel = product.maxLevel;
    }

    navigateToOrdersList() {
        this.router.navigate(['/clinic/purchasing/all', this.clinicId]);
    }

    calculateNet(index: any) {
        let vm = this;
        if (vm.purchaseOrderList[index].orderedQuantity > 0)
            vm.purchaseOrderList[index].net = vm.purchaseOrderList[index].orderedQuantity * vm.purchaseOrderList[index].purchasingPrice;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if ((item.permission.key == this.key.InternalPurchaseRequest
                    || item.permission.key == this.key.ExternalPurchaseRequest)
                    && (item.fullControl || item.add || item.edit))
                    this.enableSaveBtn = true;

                if (item.permission.key == this.key.ExternalPurchaseRequest && (item.fullControl || item.add || item.edit))
                    this.enableSaveAndSendBtn = true;

            }
        }

    }
}

