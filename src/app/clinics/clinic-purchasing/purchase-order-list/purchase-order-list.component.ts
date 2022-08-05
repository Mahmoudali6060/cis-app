import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../../security/shared/account.service';
import { UserPermissions } from '../../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../../shared/shared/permission-key.enum';
import { Table } from 'primeng/table';
@Component({

    selector: 'purchase-order-list',
    templateUrl: './purchase-order-list.component.html'
})

export class PurchaseOrderList {
    purchasingOrderListDiv: string = 'purchasingOrderListPrintDiv'
    selectPurchasingTab: boolean = true;
    filterString!: string;
    clinicId = "0";
    ordersList!: any[];
    showProgress = false;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableNewBtn: boolean = false;
    enableDetailsLink: boolean = false;
    enableResendLink: boolean = false;
    enableReceiveLink: boolean = false;
    lstToTranslated: string[] = [];
    itemsMsge = '';
    isEqualed: boolean | undefined;
    model: any = {};
    @ViewChild('btnConfirm') btnConfirm!: ElementRef;
    display: boolean = false;
    @ViewChild('dt') table!: Table;
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService
    ) { }

    ngOnInit(): void {
        this.lstToTranslated = ['vendorName', 'vendorNameTranslation', 'userName', 'userNameTranslation'];
        let vm = this;
        this.clinicId = this.storage.retrieve("ClinicID");
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;
        vm.showProgress = true;
        vm.loadOrdersList();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    viewOrderDetails(id: string): void {

        // store selected company ID
        this.storage.store("OrderId", id);

        //navigate to current URL routerLink="/clinicPurchasing/orderDetails/1"
        this.router.navigate(['/clinic/purchasing/orderDetails', id]);
    }

    //addServicePackage(): void {
    //     store selected company ID
    //    this.storage.store("ServicePackageID", 'new');

    //    navigate to current URL
    //    this.router.navigate(['/clinicServicePackageDetails', 'new']);
    //}

    loadOrdersList() {
        let vm = this;
        this.clinicService.getAllPurchasingOrders(vm.clinicId).subscribe(
            function (response: any) {
                vm.ordersList = response;
            },
            function (error: any) {
                vm.toastr.error(error.error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    resend(order: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.sendOrderToVendor(order).subscribe(
            function (response: any) {
                if (response == "True") {
                    let msg = vm.translate.instant("SentSuccessfully");
                    vm.toastr.success(msg, '');

                } else {
                    //vm.toastr.warning('Order status should be pending.', '');
                    let msg = vm.translate.instant("OrderStatusValidation");
                    vm.toastr.warning(msg, '');
                }

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if ((item.permission.key == this.key.InternalPurchaseRequest
                    || item.permission.key == this.key.ExternalPurchaseRequest)
                    && (item.fullControl || item.add))
                    this.enableNewBtn = true;

                if ((item.permission.key == this.key.InternalPurchaseRequest
                    || item.permission.key == this.key.ExternalPurchaseRequest)
                    && (item.fullControl || item.view))
                    this.enableDetailsLink = true;

                if (item.permission.key == this.key.ExternalPurchaseRequest && (item.fullControl))
                    this.enableResendLink = true;

                if (item.permission.key == this.key.ReceiveExternalPurchaseRequest && (item.allow))
                    this.enableReceiveLink = true;



            }
        }

    }

    selectOrderToDelete(id: string) {
        this.deleteSelectedItem(id);
    }
    deleteSelectedItem(id: string): void {

        let vm = this;
        if (id == '') {
            let msg = vm.translate.instant("NoItemSelected");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.clinicService.deletePurchaseOrder(id)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    var selectedObject = vm.ordersList.find(o => o.id == id);
                    var index = vm.ordersList.indexOf(selectedObject);
                    if (index > -1)
                        vm.ordersList.splice(index, 1);

                    // clear fields
                    //  vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    ///
    checkProductsInItemsList(id: any) {
        debugger;
        let vm = this;
        let itemsList = [];
        let order = vm.ordersList.find(o => o.id == id);
        if (order != undefined) {
            vm.model = order;
            itemsList = order.purchaseItems;
        }

        for (let item of itemsList) {
            vm.checkItem(item);

        }
        if (vm.itemsMsge != '') {
            vm.itemsMsge += "Do you want to use the desired orderd quantities instead these orderd quantities that the order has. ";
            this.btnConfirm.nativeElement.click();
            this.display = true;
        }

    }

    checkItem(purchaseItem: any) {
        let vm = this;
        if (purchaseItem.currentOrderedQuantity == purchaseItem.orderedQuantity) {
            vm.isEqualed = true;
            //vm.router.navigate(['/clinic/purchasing/createOrder', vm.model.id, 0, 0]);
            // there are items that have equaled values in item ordered quantity and current product ordered quantity .
            vm.itemsMsge += purchaseItem.productName + " , ";
        } else {

            if (purchaseItem.currentOrderedQuantity > purchaseItem.orderedQuantity) {
                vm.isEqualed = false;
                // " has orderd quantity that less than the current order quantity"
                vm.itemsMsge += purchaseItem.productName + " , ";
            } else if (purchaseItem.currentOrderedQuantity < purchaseItem.orderedQuantity) {
                vm.isEqualed = false;
                vm.itemsMsge += purchaseItem.productName + " , ";
            }

        }

    }
    useCurrentOrderdQuantity() {
        this.model.useCurrent = true;
        this.display = false;
        this.router.navigate(['/clinic/purchasing/createOrder', this.model.id, 1, 0]);

    }
    useItemOrderdQuantity() {
        this.display = false;
        this.router.navigate(['/clinic/purchasing/createOrder', this.model.id, 0, 0]);
    }
    closeOrder(orderId: string) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.closeOrder(orderId).subscribe(
            function (response: any) {
                let order = vm.ordersList.find(o => o.id == response.id);
                order.orderStatus = response.orderStatus;

            },
            function (error: any) {
                vm.toastr.error(error.error, '');
                vm.showProgress = false;
            },
            function () { // finally
                vm.showProgress = false;
            });
    }

    clearMsg() {
        this.itemsMsge = '';
        this.display = false;
    }
}