import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

import {ClinicService} from '../../shared/clinic.service';

import {ClinicNews} from '../../../classes/clinicNews.class';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
   
    selector: 'view-news-list',
    templateUrl: 'view-news-list.component.html'
})

export class ViewNewsListComponent implements OnInit {
    constructor(public toastr: ToastrService
        , private router: Router
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    @ViewChild('btnReplyToFeedBack') btnReplyToFeedBack: ElementRef;
    @ViewChild('btnClosePopup') btnClosePopup: ElementRef;

    selectNewsTab: boolean = true;

    selectedClinicId: number | undefined;
    selectedClinicNewsId: string | undefined;
    active: boolean = true;
    showProgress = false;
    clinicNewsList: ClinicNews[] = [];
    lstToTranslated: string[] = [];
    
    isDetailsVisible: boolean = false;
    userType: string = '';
    isClinicAdmin: boolean = false;
    ngOnInit(): void {
        this.lstToTranslated = ['name', 'nameTranslation'];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getClinicNews(this.selectedClinicId)
            .subscribe(
            function (newsList) {
                thisComponent.clinicNewsList = newsList;
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });

    }

    changeClinicNewsActivationState(id, event) {
        let thisComponent = this;

        thisComponent.showProgress = true;
        thisComponent.clinicService.changeClinicNewsActivationState({ "id": id, "isActive": event.target.checked })
            .subscribe(
            function (response:any) {
                let msg = thisComponent.translate.instant("SavedSuccessfully");
                thisComponent.toastr.success(msg, '');
            },
            function (error:any) { 
                thisComponent.toastr.error(error, '');
                thisComponent.showProgress = false;
            },
            function () { // finally
                thisComponent.showProgress = false;
            });
    }

    showNewsDetails(clinicNewsId) {
        this.selectedClinicNewsId = clinicNewsId;
        this.isDetailsVisible = true;
    }

    getNewsImage(clinicNewsImageData): string {
        if (clinicNewsImageData && clinicNewsImageData != null)
            return 'data:image/JPG;base64,' + clinicNewsImageData;
        return '';
    }

    addNewClinicNews() {
        this.selectedClinicNewsId ='new';
        this.isDetailsVisible = true;
    }

    hideDetails(updatedClinicNews) {
        if (updatedClinicNews) {
            let thisComponent = this;
            thisComponent.clinicNewsList.forEach(clinicNews => {
                if (clinicNews.id == updatedClinicNews.id)
                    thisComponent.clinicNewsList.splice(thisComponent.clinicNewsList.indexOf(clinicNews), 1);
            });

            this.clinicNewsList.push(updatedClinicNews);
        }

        this.isDetailsVisible = false;
    }
}