import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClinicService} from '../../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-inventory-list',
    templateUrl: 'clinic-inventory-list.component.html'
})

export class ClinicInventoryList implements OnInit, OnChanges{
    @Input() getUpdatedProduct: boolean = false;
    @Input() updateAfterAdjust: boolean = false;
    @Output() onAmountUpdatedAfterAdjust = new EventEmitter<any>();
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    inventoriesListDiv: string = 'InventoriesPrintingArea';
    activeProduct: any;
    selectedClinicId: number | undefined;
    showProgress = false;
    isActiveItem: boolean = null;
    isNullQuantity: boolean = null;
    clinicInventoriesList: any[] = [];
    lstToTranslated: string[] = [];
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
    getAllProducts()
    {
        this.lstToTranslated = ['name', 'nameTranslation', 'unitName','unitNameTranslation'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.clinicService.GetClinicProducts(this.selectedClinicId, thisComponent.isActiveItem, thisComponent.isNullQuantity)
            .subscribe(
            function (response:any) {
                thisComponent.clinicInventoriesList = response;

                    thisComponent.onAmountUpdatedAfterAdjust.emit(false);
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });


    }
    getAllActiveProducts(activeProduct) {
        if (activeProduct.checked == false) {
            this.isActiveItem = null;
            this.getAllProducts();
        }
        else
        {
            this.isActiveItem = true;
            this.getAllProducts();
        }
    }
    getAlluantityNulls(quantity) {
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