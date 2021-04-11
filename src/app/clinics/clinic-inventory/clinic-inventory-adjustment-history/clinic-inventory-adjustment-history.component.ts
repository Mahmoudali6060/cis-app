import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'clinic-inventory-adjustment-history',
    templateUrl: './clinic-inventory-adjustment-history.component.html'
})

export class ClinicInventoryAdjustmentHistory implements OnInit {

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }
    clinicInventoriesHistoryList: any[] = [];
    showProgress = false;
    selectInventoryTab: boolean = true;
    selectedClinicId!: number;
    @Input() updates: string = '';
    lstToTranslated: string[] = [];
    ngOnInit(): void {
        this.lstToTranslated = ['productName', 'productNameTranslation', 'recordedBy', 'recordedByTranslation'];
        this.getAllAdjustmentHistory();
    }
    ngOnChanges(changes: SimpleChanges) {
        this.getAllAdjustmentHistory();
    }
    getAllAdjustmentHistory() {

        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getAllQuantityAdjustment(this.selectedClinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicInventoriesHistoryList = response;
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