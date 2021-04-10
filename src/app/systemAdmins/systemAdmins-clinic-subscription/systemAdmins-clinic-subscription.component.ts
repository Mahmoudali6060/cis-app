import {Component, OnChanges, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { AdministrationService } from '../../administration/shared/administration.service';
import { UtilityClass } from '../../shared/shared/utility.class';

import { ToastrService } from 'ngx-toastr';
import {CalendarModule} from 'primeng/primeng';

@Component({
   
    selector: 'systemAdmins-clinic-subscription',
    templateUrl: 'systemAdmins-clinic-subscription.component.html'
})

export class SystemAdminClinicSubscriptionComponent implements OnChanges, OnInit {

    @Input() clinicModel: any = {}
    @Output() onModelUpdated = new EventEmitter<any>();
    @ViewChild('btnSubscriptionModalClose') btnSubscriptionModalClose: ElementRef;

    subscriptionsList: any[] = [];
    currentSubscription: any = {};
    showProgress: boolean = false;

    enableMyAccountBtn: boolean = false;
    newSubscription: any = { id: 0};
    newSubscriptionToSave: any = { id: 0};
    active: boolean = true;
    utilityClass: UtilityClass = new UtilityClass();

    public constructor(private administrationService: AdministrationService,
        private toastr: ToastrService
        , public translate: TranslateService
        , public localStorage: LocalStorageService) { }

    ngOnChanges(): void {
        this.newSubscription.clinicId = this.clinicModel.id;
        this.newSubscriptionToSave.clinicId = this.clinicModel.id;

        if (this.clinicModel.subscriptions != undefined && this.clinicModel.subscriptions != null) {
            this.subscriptionsList = this.clinicModel.subscriptions;
            this.subscriptionsList = this.subscriptionsList.sort(
                (a, b) => {
                    if (a.creationDate < b.creationDate)
                        return 1;
                    else
                        return -1;
                });

            this.currentSubscription = this.subscriptionsList.find(i => i.isCurrent == true);

            if (this.currentSubscription == null || this.currentSubscription == undefined)
                this.currentSubscription = {};
        }
        else
        {
            this.clinicModel.subscriptions = [];
        }
    }
    ngOnInit(): void {
        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }


    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        // update
        //this.resetIsCurrent();
        this.newSubscriptionToSave.startDate = this.utilityClass.getUtcDate(this.newSubscription.startDate);
        this.newSubscriptionToSave.endDate = this.utilityClass.getUtcDate(this.newSubscription.endDate);
        this.newSubscriptionToSave.numberOfUsers = this.newSubscription.numberOfUsers;
        if (this.newSubscriptionToSave.startTime >= this.newSubscriptionToSave.endTime) {
            let msg = this.translate.instant("SubscriptionCretiria");
            thisComponent.toastr.error(msg, '');
            return;
        }
        this.clinicModel.subscriptions.push(this.newSubscriptionToSave);
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
            function (response:any) {
                thisComponent.clinicModel = response;
                thisComponent.raiseModelUpdated(thisComponent.clinicModel);
                thisComponent.newSubscription = { id: 0};
                thisComponent.newSubscriptionToSave = { id: 0};

                thisComponent.closeSubscriptionModal();
                let msg = thisComponent.translate.instant("SavedSuccessfully");
                thisComponent.toastr.success(msg, '');
            },
            function (error:any) { 
                thisComponent.clinicModel.subscriptions.pop(thisComponent.newSubscriptionToSave);
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () {
                thisComponent.showProgress = false;
            });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

    resetIsCurrent()
    {
        for (let item of this.clinicModel.subscriptions) {
            item.isCurrent = false;
        }
    }

    closeSubscriptionModal() {
        this.btnSubscriptionModalClose.nativeElement.click();
    }

}