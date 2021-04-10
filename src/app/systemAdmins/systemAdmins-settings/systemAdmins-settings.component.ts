import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AdministrationService } from '../../administration/shared/administration.service';

@Component({
   
    selector: 'systemAdmins-settings',
    templateUrl: 'systemAdmins-settings.component.html'
})

export class SystemAdminSettingsComponent implements OnInit {

    selectSettingsTab: boolean = true;
    model: any = {};
    active: boolean = true;
    showProgress = false;
    languagesList: any[] = [{ text: "English", value: "English" }, { text: "Arabic", value: "Arabic" }];

    enableMyAccountBtn: boolean = false;
    constructor(public toastr: ToastrService
        , private storage: LocalStorageService
        , private router: Router
        , private administrationService: AdministrationService
        , public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.showProgress = true;
        let thisComponent = this;
        this.administrationService.getSystemSetting()
            .subscribe(
            function (response:any) {
                thisComponent.model = response;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

        let userType = this.storage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }

    onSubmit(): void {

        this.showProgress = true;

        let thisComponent = this;
        this.administrationService.updateSystemSetting(this.model)
            .subscribe(
            function (response:any) {
                thisComponent.model = response;
                let msg = thisComponent.translate.instant("SavedSuccessfully");
                thisComponent.toastr.success(msg, '');
            },
            function (error:any) { 
                //console.log("Error happened" + error)
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () {
                thisComponent.showProgress = false;
            });
    }

    cancel() {
        this.ngOnInit();
    }

    selectLanguage(value) {
        this.model.language = value;
    }
}