import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


import { AccountService } from '../../security/shared/account.service';
import { AdministrationService } from '../../administration/shared/administration.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { Table } from 'primeng/table/table';

@Component({

    selector: 'systemAdmins-divisions',
    templateUrl: 'systemAdmins-divisions.component.html'
})

export class SystemAdminDivisionsComponent implements OnInit {
    lstToTranslated: string[] = [];
    objectType: string = 'Cis.Core.Division';
    model: any = { id: 0, isActive: true };
    showProgress = false;
    active = true;
    allObjects!: any[];
    itemToDeleteId: string = '';
    departmentsList!: any[];
    selectDivisionsTab: boolean = true;
    enableMyAccountBtn: boolean = false;
    loading: boolean = true;
    @ViewChild('dt') table!: Table;
    
    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        let thisComponent = this;
        this.lstToTranslated = ['departmentName', 'departmentNameTranslation'];
        thisComponent.showProgress = true;
        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

        this.loadTable();
        this.administrationService.getDivisionsWrapper()
            .subscribe(
                function (response: any) {
                    thisComponent.departmentsList = response.departments;

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

        this.administrationService.saveDivision(this.model)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');

                    vm.loadTable();

                    vm.clear();
                },
                function (error: any) {
                    let msg = vm.translate.instant("ErrorSaving");
                    vm.toastr.error(msg, '');

                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

    }

    loadTable(): void {
        let vm = this;
        //  vm.model = { id: 0 };
        vm.showProgress = true;
        this.administrationService.getAllDivisions()
            .subscribe(
                function (response: any) {
                    vm.allObjects = response;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
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
            let msg = vm.translate.instant("NotSelectItem");
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
                    let msg = vm.translate.instant("ErrorHappened");
                    vm.toastr.error(msg, '');
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

}