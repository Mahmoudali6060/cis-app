import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../../shared/clinic.service';
import { Reply } from '../../../classes/reply.class';
import { Feedback } from '../../../classes/feedback.class';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({

    selector: 'reply-to-feedback',
    templateUrl: './reply-to-feedback.component.html'
})

export class ReplyToFeedbackComponent {
    selectFeedbackTab: boolean = true;
    recorderId!: number;
    selectedFeedbackId!: number;
    selectedClinicId!: number;
    active: boolean = true;
    showProgress = false;
    selectedFeedback: Feedback = new Feedback();
    toSaveReply: Reply = new Reply();
    feedbackReplies: Reply[] = [];
    userType: string = '';
    isClinicAdmin: boolean = false;
    lstToTranslated: string[] = [];
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , private _route: ActivatedRoute
        , public translate: TranslateService) { }

    ngOnInit(): void {
        this.lstToTranslated = ['repliedByName', 'repliedByNameTranslation'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.recorderId = this.localStorage.retrieve("UserID");
        this.selectedFeedbackId = this._route.snapshot.params['id'];

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        if (this.selectedFeedbackId && this.selectedFeedbackId > 0) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getFeedbackById(thisComponent.selectedFeedbackId)
                .subscribe(
                    function (feedback: any) {
                        thisComponent.selectedFeedback = feedback;
                        thisComponent.feedbackReplies = feedback.replies;
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }

    saveReply(): void {
        let thisComponent = this;
        if (!this.toSaveReply.message || this.toSaveReply.message == '' || this.toSaveReply.message.trim() == '') {
            //this.toastr.error('Cannot reply to a feedback with an empty reply ', '');
            let msg = thisComponent.translate.instant("CannotReplyWithEmptyReply");
            thisComponent.toastr.error(msg, '');
            return;
        }
        if (this.selectedFeedbackId && this.selectedFeedbackId > 0) {
            thisComponent.showProgress = true;
            this.toSaveReply.feedbackId = this.selectedFeedbackId;
            this.toSaveReply.repliedById = this.recorderId;
            if (this.selectedFeedback)
                this.toSaveReply.status = this.selectedFeedback.status;

            this.clinicService.saveReply(this.toSaveReply)
                .subscribe(
                    function (response: any) {
                        thisComponent.feedbackReplies.push(response);
                        thisComponent.toSaveReply = new Reply();
                        if (thisComponent.selectedFeedback) {
                            if (thisComponent.selectedFeedback.status && thisComponent.selectedFeedback.status != '') {
                                if (thisComponent.selectedFeedback.status.toString().toLowerCase() != "completed") {
                                    thisComponent.selectedFeedback.status = "Replied"
                                }
                            }
                            else {
                                thisComponent.selectedFeedback.status = "Replied"
                            }
                        }
                        let msg = thisComponent.translate.instant("SavedAndSentSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    saveFeedback(): void {
        let thisComponent = this;
        if (this.selectedFeedback) {
            thisComponent.showProgress = true;
            this.clinicService.updateFeedback(this.selectedFeedback)
                .subscribe(
                    function (response: any) {
                        let msg = thisComponent.translate.instant("SavedSuccessfully");
                        thisComponent.toastr.success(msg, '');
                    },
                    function (error: any) {
                       thisComponent.toastr.error(error.error, '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }


}