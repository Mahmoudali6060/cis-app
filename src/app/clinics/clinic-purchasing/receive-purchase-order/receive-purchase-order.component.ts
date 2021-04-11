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

    selector: 'receive-purchase-order',
    templateUrl: './receive-purchase-order.component.html'
})

export class ReceivePurchaseOrder {
    selectPurchasingTab: boolean = true;
    orderId!: any;
    showProgress = false;
    itemsList: any[] = [];
    model: any = {};
    isSent = true;
    clinicAdminId!: any;
    active = true;
    clinicId!: any;
    isReceived = false;
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableReceiveLink: boolean = false;
    lstToTranslated: string[] = [];
    isClosed = false;
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private _route: ActivatedRoute
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , private accountService: AccountService
    ) { }

    ngOnInit(): void {
        let vm = this;
        this.lstToTranslated = ['productName', 'productNameTranslation'];
        vm.showProgress = true;
        let id = this._route.snapshot.params['id'];
        vm.orderId = `${id}`;
        vm.clinicAdminId = vm.localStorage.retrieve("UserID");
        vm.clinicId = vm.localStorage.retrieve("ClinicID");
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        vm.loadPurchasingOrder();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }

    }

    navigateToOrderdetails() {
        this.router.navigate(['/clinic/purchasing/orderDetails', this.orderId]);
    }

    loadPurchasingOrder() {
        let vm = this;
        this.clinicService.getPurchasingOrderById(vm.orderId).subscribe(
            function (response: any) {
                vm.model = response;
                vm.itemsList = vm.model.purchaseItems;
                if (vm.model.orderStatus == "Received") {
                    vm.isReceived = true;
                } else if (vm.model.orderStatus == "Closed") {
                    vm.isClosed = true;
                }
            },
            function (error: any) {
                vm.toastr.error(error, '');
            },
            function () { // finally
                vm.showProgress = false;
            });

    }
    updatePurchasingOrderWithUser(source: any[]) {
        let vm = this;
        for (let item of source) {
            item.securityUserId = vm.clinicAdminId;
        }
    }
    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        // thisComponent.model.securityUserId = thisComponent.clinicAdminId;
        thisComponent.updatePurchasingOrderWithUser(thisComponent.itemsList);
        thisComponent.model.purchaseItems = thisComponent.itemsList;
        if (thisComponent.itemsList.length > 0) {


            this.clinicService.receivePurchasingOrder(thisComponent.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.itemsList = thisComponent.model.purchaseItems;
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

            ////Update
            //this.clinicService.updateAppointmentSchedule(this.model)
            //    .subscribe(
            //    function (response:any) {

            //        thisComponent.model = response;
            //        thisComponent.toastr.success('Saved successfully', '');

            //        thisComponent.sessionsList = thisComponent.model.sessions;
            //        thisComponent.updateSessionsTime(thisComponent.sessionsList);

            //        thisComponent.model.startDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.startDate);
            //        thisComponent.model.endDate = thisComponent.utilityClass.getUtcDateFromString(thisComponent.model.endDate);

            //    },
            //    function (error:any) { 
            //        thisComponent.toastr.error('Error occured during saving ' + error, '');

            //        thisComponent.showProgress = false;
            //    },
            //    function () {
            //        thisComponent.showProgress = false;
            //    });
        }
    }
    navigateToOrdersList() {
        this.router.navigate(['/clinic/purchasing/all', this.clinicId]);
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {

                if (item.permission.key == this.key.ReceiveExternalPurchaseRequest && (item.allow))
                    this.enableReceiveLink = true;



            }
        }

    }
}