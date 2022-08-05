import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { SharedService } from '../../../shared/shared/shared.service';
import { UtilityClass } from '../../../shared/shared/utility.class';
import { ClinicService } from '../../shared/clinic.service';
import { ClinicNews } from '../../../classes/clinicNews.class';
import { AttachmentInfo } from '../../../classes/attachmentInfo.class';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({

    selector: 'clinic-add-news',
    templateUrl: './add-news.component.html'
})

export class AddNewsComponent {

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , private sharedService: SharedService
        , private _route: ActivatedRoute
        , public translate: TranslateService) { }

    @ViewChild("fileInput") fileInput: any;
    @ViewChild("newsImage") newsImage: any;

    utilityClass: UtilityClass = new UtilityClass();
    @Input() selectedClinicNewsId!: number;
    @Output() onBack = new EventEmitter<any>();
    selectedClinicNews: ClinicNews = new ClinicNews();
    selectNewsTab: boolean = true;
    recorderId!: number;
    selectedClinicId!: number;
    active: boolean = true;
    showProgress = false;
    imageSource: string = '';
    userType: string = '';
    isClinicAdmin: boolean = false;



    ngOnInit(): void {
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");
        this.recorderId = this.localStorage.retrieve("UserID");

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        if (this.selectedClinicNewsId && this.selectedClinicNewsId > 0) {
            let thisComponent = this;
            thisComponent.showProgress = true;
            this.clinicService.getClinicNewsById(thisComponent.selectedClinicNewsId)
                .subscribe(
                    function (clinicNews: any) {
                        thisComponent.selectedClinicNews = clinicNews;

                        if (thisComponent.selectedClinicNews.creationDate)
                            thisComponent.selectedClinicNews.creationDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.selectedClinicNews.creationDate.toString());
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

    saveClinicNews(): void {
        let thisComponent = this;
        let fi = thisComponent.fileInput.nativeElement;
        this.selectedClinicNews.clinicId = this.selectedClinicId;

        if (this.selectedClinicNews.creationDate)
            this.selectedClinicNews.creationDate = this.utilityClass.getUtcDateTime(this.selectedClinicNews.creationDate);

        let dtNow: Date = new Date();

        if (this.selectedClinicNews.creationDate > dtNow) {
            //this.toastr.error('Clinic news date cannot be later than the current date', '');
            let msg = thisComponent.translate.instant("NewsDateValidation");
            thisComponent.toastr.error(msg, '');
            return;
        }
        thisComponent.showProgress = true;
        if (this.selectedClinicNews.id > 0) {
            //Update
            this.clinicService.updateClinicNews(this.selectedClinicNews)
                .subscribe(
                    function (response: any) {
                        thisComponent.selectedClinicNews = response;
                        if (thisComponent.selectedClinicNews && thisComponent.selectedClinicNews.creationDate)
                            thisComponent.selectedClinicNews.creationDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.selectedClinicNews.creationDate.toString());
                        fi.value = '';
                        thisComponent.onBack.emit(thisComponent.selectedClinicNews);
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
        else {
            //New
            this.clinicService.createClinicNews(this.selectedClinicNews)
                .subscribe(
                    function (response: any) {
                        thisComponent.selectedClinicNews = response;
                        if (thisComponent.selectedClinicNews && thisComponent.selectedClinicNews.creationDate)
                            thisComponent.selectedClinicNews.creationDate = thisComponent.utilityClass.getDateTimeFromString(thisComponent.selectedClinicNews.creationDate.toString());
                        fi.value = '';
                        thisComponent.onBack.emit(thisComponent.selectedClinicNews);
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

    addFile(fileName: string): void {

        let vm = this;
        let attchmentInfo: AttachmentInfo = new AttachmentInfo();
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            if (!fileToUpload.type.startsWith("image/")) {
                // vm.toastr.error('Clinic image file must be of type images only.');
                let msg = vm.translate.instant("FileTypeValidation");
                vm.toastr.error(msg, '');
                fi.value = '';
                return;
            }


            if (fileToUpload.size > 5242880) {
                let msg = vm.translate.instant("FileSizeMsg");
                vm.toastr.error(msg, '');
                return;
            }

            let reader = new FileReader();
            reader.onload = (e: any) => {
                vm.newsImage.nativeElement.src = e.target.result;
            };
            reader.readAsDataURL(fileToUpload);

            this.sharedService.uploadFile(fileToUpload)
                .subscribe(
                    function (response: any) {
                        if (response != null) {
                            vm.selectedClinicNews.attachmentInfo = attchmentInfo;
                            vm.selectedClinicNews.attachmentInfo.originalName = response.originalName;
                            vm.selectedClinicNews.attachmentInfo.keyName = response.keyName;
                            vm.selectedClinicNews.attachmentInfo.fullPath = response.fullPath;
                            vm.selectedClinicNews.attachmentInfo.fileType = response.fileType;
                        }
                    },
                    function (error: any) {
                        vm.toastr.error(error.error, '');
                    },
                    function () {

                    });
        }
    }
    goBack() {
        this.clearControl();
        this.onBack.emit();
    }

    clearControl(): void {
        this.selectedClinicNews = new ClinicNews();
        let fi = this.fileInput.nativeElement;
        fi.value = '';
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}