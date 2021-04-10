import {Component, Input, OnChanges, SimpleChanges, OnInit, AfterContentChecked} from '@angular/core';
import {AdministrationService} from '../shared/administration.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'district',
    templateUrl: 'districts.component.html'
})

export class DistrictsComponent implements OnChanges, OnInit, AfterContentChecked {
    enableMyAccountBtn: boolean = false;
    @Input() objectType: string = '';
    @Input() title: string = '';
    //  @Input() isRegion: boolean | undefined;
    // @Input() isCity: boolean | undefined;

    model: any = { id: 0 };
    showProgress = false;
    active = true;
    allObjects: any[];
    itemToDeleteId: string = '';
    citiesList: any[];
    regionsList: any[];
    toPrintDiv: string = "print-section";
    lstToTranslated: string[] = [];
    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        private _route: ActivatedRoute,
        public localStorage: LocalStorageService
        , public translate: TranslateService) { }

    //get data according to selected type
    ngOnChanges(changes: SimpleChanges) {
        this.loadTable();
    }

    ngOnInit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        thisComponent.lstToTranslated = ['name', 'nameTranslation', 'countryName', 'countryNameTranslation'];

        this.administrationService.getDistrictWrapper()
            .subscribe(
            function (response:any) {
                //   thisComponent.countriesList = response.countries;
                thisComponent.regionsList = response.regions;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    ngAfterContentChecked(): void {

        let vm = this;
        if (vm != null && vm != undefined && vm.model != null) {
            if (vm.model.regionId != undefined && vm.model.regionId > 0) {
                vm.fillCities(vm.model.regionId);
            }
        }
    }
    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;
        // vm.model.ObjectType = this.objectType;

        this.administrationService.saveDistrict(this.model)
            .subscribe(
            function (response:any) {
                let msg = vm.translate.instant("SavedSuccessfully");
                vm.toastr.success(msg, '');

                // add object to collection in case of add new
                //if (vm.model.id == 0) {
                //    vm.allObjects.push(response:any);
                //}
                vm.loadTable();
                vm.clear();
            },
            function (error:any) { 
                vm.toastr.error(error, '');
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
        this.administrationService.getAllDistricts()
            .subscribe(
            function (response:any) {
                vm.allObjects = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
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
        this.administrationService.deleteDistrict(this.itemToDeleteId)
            .subscribe(
            function (response:any) {
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
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    clear(): void {
        this.model = { id: 0 };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    fillCities(id: string) {
        var region = this.regionsList.find(i => i.id == id);

        this.citiesList = [];

        if (region != null) {
            this.citiesList = region.cities;
            //  this.filteredCities = [];
        }
    }
}