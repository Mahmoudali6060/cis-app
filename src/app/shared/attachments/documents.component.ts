import { Component, Input, OnInit, EventEmitter, ViewChild, ElementRef, Output, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { SharedService } from '../shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';


@Component({

    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent implements OnInit, OnChanges {
    showProgress = false;
    attachmentUrl: string = '';
    @Input() allowEditing: boolean = true;
    isDetailsVisible: boolean = false;
    showSelectedTemplates: boolean = false;
    @Input() patientId: string = '';

    @Input() isTemplateExist: boolean = false;
    @Input() docDetailsUrl: string = '';
    @Input('details') documentdetailsUrl: string = '';
    patientAttachementId!: string;
    @Output() onModelUpdated = new EventEmitter<any>();
    @ViewChild('btnOpenDeleteAttachementPopup') btnOpenDeleteAttachementPopup: ElementRef | undefined;
    @ViewChild('btnOpenEditAttachmentPopup') btnOpenEditAttachmentPopup: ElementRef | undefined;
    @Input() title: string = '';
    @Input() fileType: boolean | undefined;
    @Input() showDocumentDetails: boolean | undefined;
    @Input() btnUploadText!: string;
    @Input() fileNameTxt!: string;
    @Input() fileNameUploadTxt!: string;
    @Input() parentType!: string;
    attachmentsList: any = [];
    @Input() parentId: string = '';
    imageData = null;
    model: any = { id: 0 };
    active = true;

    constructor(private sharedService: SharedService
        , public toastr: ToastrService
        , private router: Router
        , private _route: ActivatedRoute
        , public translate: TranslateService
        , public storage: LocalStorageService

    ) { }


    ngOnInit(): void {
        //let vm = this;
        //this.loadAttachementFiles();

    }
    ngOnChanges() {
        //let vm = this;
        //vm.parentId = vm.patientId;
        this.loadAttachementFiles();
    }
    downloadFile(id: any) {

        var url = this.sharedService.prepareDownloadUrl(id);

        try {
            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', url);

            var clickEvent = new MouseEvent("click", {
                "view": window,
                "bubbles": true,
                "cancelable": false
            });

            linkElement.dispatchEvent(clickEvent);
        }
        catch (ex) {
            console.log(ex);
        }
    }
    loadAttachementFiles() {
        let vm = this;
        if (vm.parentType == "TemplateFileType")
            this.parentId = this.storage.retrieve("ClinicID");
        //else
        //    this.parentId = this.patientId;
        vm.showProgress = true;
        if (vm.parentId != "" && vm.parentId != undefined && vm.parentType != undefined && this.parentId.toString().toLowerCase() != 'new') {
            this.sharedService.getAllAttachments(vm.parentId, vm.parentType)
                .subscribe(
                    function (response: any) {
                        vm.attachmentsList = response;
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    });
        }

    }

    addAttachment() {
        //navigate to current URL
        this.router.navigate(['/' + this.documentdetailsUrl, this.parentId, 'new']);
    }

    goBack() {
        //navigate to current URL
        this.router.navigate(['/' + this.docDetailsUrl, this.parentId, 'new']);
    }

    editAttachment(id: string): void {
        //navigate to current URL
        let vm = this;
        vm.patientAttachementId = id;
        this.getAttachmentObject();
        this.isDetailsVisible = true;
        if (vm.parentType == "TemplateFileType")
            this.showSelectedTemplates = false;
        else if (vm.parentType == "PatientFileType")
            this.showSelectedTemplates = false;
        else
            this.showSelectedTemplates = true;

        //this.btnOpenEditAttachmentPopup.nativeElement.click();
    }
    getAttachmentObject() {
        let vm = this;
        vm.model.id = vm.patientAttachementId;

        // get attachment object in case of update
        if (this.model.id != undefined) {
            if (this.model.id.toString().toLowerCase() != 'new' && this.model.id != "") {
                vm.showProgress = true;
                this.sharedService.getAttachmentObject(vm.model.id)
                    .subscribe(
                        function (response: any) {
                            vm.model = response;
                        },
                        function (error: any) {
                            vm.toastr.error(error, '');
                            vm.showProgress = false;
                        },
                        function () {
                            vm.showProgress = false;
                        });
            }

        }
    }
    ShowDocumentsDetails(): void {
        this.isDetailsVisible = true;
        //this.showSelectedTemplates = false;
        this.model = {};
        this.active = false;
        this.model.parentId = '';
        this.model.parentType = '';
        setTimeout(() => this.active = true, 0);

    }

    deletePatientAttachment(id?: any): void {
        let msg = this.translate.instant("AreYouSureDelete");
        let result = confirm(msg);
        if (result == true)
            this.deleteAttachment(id);
    }

    hideDetails(updatedSurgery: any) {

        this.isDetailsVisible = false;

    }
    deleteAttachment(id: any): void {
        let vm = this;

        if (id == undefined || isNaN(id)) {
            let msg = vm.translate.instant("NoFileToDelete");
            vm.toastr.warning(msg, '');
            return;
        }

        vm.showProgress = true;
        this.sharedService.deleteAttachment(id)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.showProgress = false;
                    vm.loadAttachementFiles();
                },
                function (error: any) {
                    //console.log("Error happened" + error)
                    vm.toastr.error(error, '');
                },
                function () {
                    vm.showProgress = false;
                });
    }

    raiseModelUpdated(model: any) {
        this.onModelUpdated.emit(model);
    }

}
