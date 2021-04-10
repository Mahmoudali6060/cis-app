import {Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

import { AdministrationService } from '../../administration/shared/administration.service';
import { UtilityClass } from '../../shared/shared/utility.class';
import {TranslateService} from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ToastrService } from 'ngx-toastr';
import {CalendarModule} from 'primeng/primeng';

@Component({
   
    selector: 'systemAdmins-clinic-smsCredit',
    templateUrl: 'systemAdmins-clinic-smsCredit.component.html'
})

export class SystemAdminClinicSMSCreditComponent implements OnChanges, OnInit {

    @Input() clinicModel: any = {}
    @Output() onModelUpdated = new EventEmitter<any>();
    @ViewChild('btnSmsCreditModalClose') btnSmsCreditModalClose: ElementRef;

    enableMyAccountBtn: boolean = false;
    smsCreditsList: any[] = [];
    currentCredit: any = { remaining: 0 };
    showProgress: boolean = false;

    newCredit: any = { id: 0};
    newCreditToSave: any = { id: 0 };
    todayDate: string = '';
    active: boolean = true;
    utilityClass: UtilityClass = new UtilityClass();

    public constructor(private administrationService: AdministrationService,
        private toastr: ToastrService
        , public translate: TranslateService
        , public localStorage: LocalStorageService) { }
    ngOnInit(): void {
        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;
    }


    ngOnChanges(): void {
        this.newCredit.clinicId = this.clinicModel.id;
        this.newCreditToSave.clinicId = this.clinicModel.id;

        this.todayDate = this.utilityClass.getUtcDateAsString(new Date());

        if (this.clinicModel.smsCredits != undefined && this.clinicModel.smsCredits != null) {
            this.smsCreditsList = this.clinicModel.smsCredits;
            this.smsCreditsList = this.smsCreditsList.sort(
                (a, b) => {
                    if (a.creationDate < b.creationDate)
                        return 1;
                    else
                        return -1;
                });

            if (this.smsCreditsList.length > 0)
                this.currentCredit = this.smsCreditsList[0];

            if (this.currentCredit == null || this.currentCredit == undefined)
                this.currentCredit = { remaining: 0 };
        }
        else {
            this.clinicModel.smsCredits = [];
        }
    }

    onSubmit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        // update
        this.newCreditToSave.credit = this.newCredit.credit;
        this.newCreditToSave.previousRemaining = this.currentCredit.remaining;

        this.clinicModel.smsCredits.push(this.newCreditToSave);
        this.administrationService.updateClinic(thisComponent.clinicModel)
            .subscribe(
            function (response:any) {
                thisComponent.clinicModel = response;
                thisComponent.raiseModelUpdated(thisComponent.clinicModel);
                thisComponent.newCredit = { id: 0 };
                thisComponent.newCreditToSave = { id: 0};

                thisComponent.closeSmsCreditModal();
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

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

    closeSmsCreditModal() {
        this.btnSmsCreditModalClose.nativeElement.click();
    }
}