import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {ClinicService} from '../../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

import { AccountService } from '../../../security/shared/account.service';
import {UserPermissions} from '../../../classes/user-permissions.class';
import {PermissionKeyEnum} from '../../../shared/shared/permission-key.enum';
@Component({
   
    selector: 'purchase-order-view-details',
    templateUrl: 'purchase-order-view-details.component.html'
})

export class PurchaseOrderViewDetails {
    selectPurchasingTab: boolean = true;
    orderId;
    showProgress = false;
    itemsList: any[] = [];
    model: any = {};
    isSent = true;
    isClosed = false;
    isEqualed: boolean | undefined;
    itemsMsge: string = '';
    @ViewChild('btnConfirm') btnConfirm: ElementRef;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableEditBtn: boolean = false;
    enableReceiveLink: boolean = false;
    lstToTranslated: string[] = [];
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private _route: ActivatedRoute
        , private clinicService: ClinicService
        , public translate: TranslateService
        , private accountService: AccountService
    ) { }

    ngOnInit(): void {
        let vm = this;
        this.lstToTranslated = ['productName', 'productNameTranslation', 'userName', 'userNameTranslation', 'unit','unitTranslation'];
        vm.showProgress = true;
        let id = this._route.snapshot.params['id'];
        this.orderId = `${id}`;
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        vm.loadPurchasingOrder();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe(item => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    navigateToOrdersList() {
        this.router.navigate(['/clinic/purchasing/all', this.storage.retrieve('ClinicId')]);
    }

    loadPurchasingOrder() {
        let vm = this;
        this.clinicService.getPurchasingOrderById(vm.orderId).subscribe(
            function (response:any) {
                vm.model = response;
                vm.itemsList = vm.model.purchaseItems;
                //vm.checkProductsInItemsList();
                if (vm.model.orderStatus == "Prepared") {
                    vm.isSent = false;
                } else if (vm.model.orderStatus == "Closed") {
                    vm.isClosed = true;
                }
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    viewOrderDetails(id: string): void {

        // store selected company ID
        this.storage.store("OrderId", id);
        //routerLink="/clinicPurchasing/receiveOrder/1"
        //navigate to current URL routerLink="/clinicPurchasing/orderDetails/1"
        this.router.navigate(['/clinic/purchasing/receiveOrder', id]);
    }
    checkProductsInItemsList(id:any) {
        let vm = this;
        for (let item of vm.itemsList) {
            vm.checkItem(item);

        }
        if (vm.itemsMsge != '')
        {
            vm.itemsMsge += "Do you want to usethe desired orderd quantities instead these orderd quantities that the order has. ";
            this.btnConfirm.nativeElement.click();
        }

    }
    checkItem(purchaseItem: any) {
        let vm = this;
        if (purchaseItem.currentOrderedQuantity == purchaseItem.orderedQuantity) {
            vm.isEqualed = true;
            //vm.router.navigate(['/clinic/purchasing/createOrder', vm.model.id, 0, 0]);
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
        this.router.navigate(['/clinic/purchasing/createOrder', this.model.id,1,0]);
    }
    useItemOrderdQuantity() {
        this.router.navigate(['/clinic/purchasing/createOrder', this.model.id,0,0]);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if ((item.permission.key == this.key.InternalPurchaseRequest
                    || item.permission.key == this.key.ExternalPurchaseRequest)
                    && (item.fullControl || item.edit))
                    this.enableEditBtn = true;

                if (item.permission.key == this.key.ReceiveExternalPurchaseRequest && (item.allow))
                    this.enableReceiveLink = true;



            }
        }

    }
}