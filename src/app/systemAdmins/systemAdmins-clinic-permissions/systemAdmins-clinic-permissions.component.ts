import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';

import { AdministrationService } from '../../administration/shared/administration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'systemAdmins-clinic-permissions',
    templateUrl: 'systemAdmins-clinic-permissions.component.html'
})

export class SystemAdminClinicPermissionsComponent implements OnInit, OnChanges {

    @Input() clinicModel!: any;
    @Output() onModelUpdated = new EventEmitter<any>();
    showProgress: boolean = false;
    modulesList!: any[];
    selectedModulesIDs: any = [];
    enableMyAccountBtn: boolean = false;
    constructor(
        private administrationService: AdministrationService,
        private toastr: ToastrService
        , public translate: TranslateService
        , public localStorage: LocalStorageService) { }


    ngOnInit(): void {

        this.showProgress = true;

        let thisComponent = this;
        this.administrationService.getAll('Cis.Core.AppModule')
            .subscribe(
                function (response: any) {
                    thisComponent.modulesList = response;

                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    ngOnChanges(): void {
        this.selectedModulesIDs = [];
        if (this.clinicModel.modules != undefined && this.clinicModel.modules != null) {
            for (var x = 0; x < this.clinicModel.modules.length; x++)
                this.selectedModulesIDs.push(this.clinicModel.modules[x].id);
        }
        else {
            this.clinicModel.modules = [];
        }
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        this.updateModelWithModules();
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
                function (response: any) {
                    thisComponent.clinicModel = response;
                    thisComponent.raiseModelUpdated(thisComponent.clinicModel);

                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

    updateSelectedModules(moduleId: any, event: any) {
        if (event.target.checked) {
            this.selectedModulesIDs.push(moduleId);
        }
        else {
            var index = this.selectedModulesIDs.indexOf(moduleId);
            if (index > -1)
                this.selectedModulesIDs.splice(index, 1);
        }

    }

    updateModelWithModules() {
        this.clinicModel.modules = [];
        for (var indx = 0; indx < this.selectedModulesIDs.length; indx++) {
            var selectedModule = this.modulesList.find(module => module.id == this.selectedModulesIDs[indx]);
            let appModule: AppModule = new AppModule();
            appModule.id = selectedModule.id;
            appModule.name = selectedModule.name;
            appModule.nameTranslation = selectedModule.nameTranslation;
            this.clinicModel.modules.push(appModule);
        }
    }
}

class AppModule {
    id: any;
    name: any;
    nameTranslation: any;
}