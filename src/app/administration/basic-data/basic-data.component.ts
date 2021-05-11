import { Component, Input, OnChanges, SimpleChanges, OnInit, ViewChild } from '@angular/core';
import { AdministrationService } from '../shared/administration.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({

    selector: 'basic-data',
    templateUrl: './basic-data.component.html'
})

export class BasicDataComponent implements OnChanges {

    @Input() objectType: string = '';
    @Input() title: string = '';
    //  @Input() isRegion: boolean ;
    enableMyAccountBtn: boolean = false;
    model: any = { id: 0, isActive: true };
    showProgress = false;
    active = true;
    allObjects!: any[];
    itemToDeleteId: string = '';
    toPrintDiv: string = "print-section";
    lstToTranslated: string[] = [];
    isExempted: boolean = false;
    loading: boolean = true;
    @ViewChild('dt') table!: Table;
    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        private _route: ActivatedRoute,
        public localStorage: LocalStorageService,
        public translate: TranslateService) { }

    ngOnInit(): void {
        this.lstToTranslated = ['name', 'nameTranslation'];
        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

        if (this.objectType.toLocaleLowerCase() == 'cis.core.nationality')
            this.isExempted = true;
        // this.primengConfig.ripple = true;
    }

    //get data according to selected type
    ngOnChanges(changes: SimpleChanges) {
        if (this.objectType.toLocaleLowerCase() == 'cis.core.nationality')
            this.isExempted = true;
        else
            this.isExempted = false;

        this.loadTable();
    }

    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;
        vm.model.ObjectType = this.objectType;

        this.administrationService.saveObject(this.model)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');

                    // add object to collection in case of add new
                    if (vm.model.id == 0) {
                        vm.allObjects.push(response);
                    }

                    vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    loadTable(): void {
        let vm = this;
        vm.model = { id: 0, isActive: true };
        vm.showProgress = true;
        this.administrationService.getAll(vm.objectType)
            .subscribe(
                function (response: any) {
                    vm.allObjects = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                    vm.loading = false;
                },
                function () {
                    vm.showProgress = false;
                    vm.loading = false;
                });
    }

    editItem(id: string): void {
        var selectedObject = this.allObjects.find(o => o.id == id);

        if (selectedObject != null || selectedObject != undefined) {
            this.model = selectedObject;
        }
    }

    selectItemToDelete(id: string): void {
        this.itemToDeleteId = id;
    }

    deleteSelectedItem(): void {

        let vm = this;
        if (this.itemToDeleteId == '') {
            let msg = vm.translate.instant("NoItemSelected");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.administrationService.deleteItem(this.itemToDeleteId, this.objectType)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');

                    // remove delete object from collection
                    var selectedObject = vm.allObjects.find(o => o.id == vm.itemToDeleteId);
                    var index = vm.allObjects.indexOf(selectedObject);
                    if (index > -1)
                        vm.allObjects.splice(index, 1);

                    // clear fields
                    vm.clear();
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    clear(): void {
        this.model = { id: 0, isActive: true };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    changeActivation(id: any, event: any) {

        this.editItem(id);
        this.model.isActive = event.target.checked;
        this.onSubmit();
    }


    onActivityChange(event: any) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value: any) {
        this.table.filter(this.formatDate(value), 'date', 'equals')
    }

    formatDate(date: any) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event: any) {
        this.table.filter(event.value, 'representative', 'in')
    }

}