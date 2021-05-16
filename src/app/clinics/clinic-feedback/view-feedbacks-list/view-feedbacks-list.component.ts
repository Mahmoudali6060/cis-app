import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';

import { Reply } from '../../../classes/reply.class';
import { Feedback } from '../../../classes/feedback.class';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Table } from 'primeng/table';

@Component({
    selector: 'view-feedbacks-list',
    templateUrl: './view-feedbacks-list.component.html'
})


export class ViewfeedbacksListComponent implements OnInit {

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    @ViewChild('btnReplyToFeedBack') btnReplyToFeedBack!: ElementRef;
    @ViewChild('btnClosePopup') btnClosePopup!: ElementRef;

    selectFeedbackTab: boolean = true;

    active: boolean = true;
    showProgress = false;
    toReplyFeedBackId!:string;
    clinicFeedbacksList: Feedback[] = [];
    lstToTranslated: string[] = [];
    selectedClinicId!: number;
    userType: string = '';
    isClinicAdmin: boolean = false;
    loading: boolean = true;
    @ViewChild('dt') table!: Table;
    ngOnInit(): void {
        this.lstToTranslated = ['patientName', 'patientNameTranslation', 'lastReplyingUserName', 'lastReplyingUserNameTranslation'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getClinicFeedbacks(this.selectedClinicId)
            .subscribe(
                function (feedbacksList: any) {
                    thisComponent.clinicFeedbacksList = feedbacksList;
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
}