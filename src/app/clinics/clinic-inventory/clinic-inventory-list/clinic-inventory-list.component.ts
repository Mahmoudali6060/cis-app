import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Table } from 'primeng/table';
@Component({

    selector: 'clinic-inventory-list',
    templateUrl: './clinic-inventory-list.component.html'
})

export class ClinicInventoryList implements OnInit, OnChanges {
    @Input() getUpdatedProduct: boolean = false;
    @Input() updateAfterAdjust: boolean = false;
    @Output() onAmountUpdatedAfterAdjust = new EventEmitter<any>();
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    inventoriesListDiv: string = 'InventoriesPrintingArea';
    activeProduct: any;
    selectedClinicId!: number;
    showProgress = false;
    isActiveItem: any = null;
    isNullQuantity: any = null;
    clinicInventoriesList: any[] = [];
    lstToTranslated: string[] = [];
    loading: boolean = true;
    @ViewChild('dt') table!: Table;

    ngOnInit(): void {
        this.getAllProducts();
    }
    ngOnChanges(): void {
        let vm = this;
        if (vm.getUpdatedProduct && vm.getUpdatedProduct == true) {
            vm.getUpdatedProduct = false;

            vm.getAllProducts();
        }

        if (vm.updateAfterAdjust && vm.updateAfterAdjust == true) {
            vm.updateAfterAdjust = false;

            vm.getAllProducts();
        }
    }
    getAllProducts() {
        this.lstToTranslated = ['name', 'nameTranslation', 'unitName', 'unitNameTranslation'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.clinicService.GetClinicProducts(this.selectedClinicId, thisComponent.isActiveItem, thisComponent.isNullQuantity)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicInventoriesList = response;

                    thisComponent.onAmountUpdatedAfterAdjust.emit(false);
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                    thisComponent.loading = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                    thisComponent.loading = false;
                });


    }
    getAllActiveProducts(activeProduct: any) {
        if (activeProduct.checked == false) {
            this.isActiveItem = null;
            this.getAllProducts();
        }
        else {
            this.isActiveItem = true;
            this.getAllProducts();
        }
    }
    getAlluantityNulls(quantity: any) {
        if (quantity.checked == false) {
            this.isNullQuantity = null;
            this.getAllProducts();
        }
        else {
            this.isNullQuantity = true;
            this.getAllProducts();
        }
    }

}