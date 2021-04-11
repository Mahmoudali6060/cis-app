import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';

import { SharedService } from '../shared/shared.service';
import { DoctorService } from '../../doctors/shared/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { UtilityClass } from '../../shared/shared/utility.class';

@Component({
    selector: 'document-details',
    templateUrl: './document-details.component.html'
})

export class DocumentDetailsComponent implements OnChanges {
    @ViewChild("fileInput") fileInput: any;
    showProgress = false;
    //@Input() documentlistsUrl: string = '';
    //@Input() destUrl: string = '';
    @Input() docDetailsUrl: string = '';
    @Input('details') documentdetailsUrl: string = '';
    @Input() parentId: string = '';
    @Input() noteId!: number;
    @Input() allowEditing: boolean = false;
    selectedTemplateId: any;

    fileName!:string;
    AttachmentTypes: any[] = [];
    patientFiles: any[] = [];
    @Output() onBack = new EventEmitter();
    @Input() attachementId!:string;
    @Input() fileType: boolean | undefined;
    @Input() showBackBtn: boolean = true;
    @Input() showSelectedTemplates: boolean = false;
    @Input() isTemplateExist: boolean = false;
    @Input() parentType!:string;
    @Input() fileNameTxt!:string;
    @Input() fileNameUploadTxt!:string;
    @Input() model: any = { id: 0 };
    active = true;
    @Output() onAttachementSaved = new EventEmitter<any>();
    @Output() onAttachementUpdated = new EventEmitter<any>();
    cliniParentType!:string;
    attachmentsList: any = [];
    clinicParentId: string = '';
    @Input() title: string = '';
    fileTypeExtension!:string;
    utilityClass: UtilityClass = new UtilityClass();

    userType: string = '';
    isClinicAdmin: boolean = false;
    constructor(private sharedService: SharedService
        , private doctorService: DoctorService
        , public toastr: ToastrService
        , private router: Router
        , private _route: ActivatedRoute
        , private storage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnChanges(): void {
        let vm = this;
        this.clinicParentId = this.storage.retrieve("ClinicID");

        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.cliniParentType = "TemplateFileType";
        vm.model.parentType = this.parentType;

        if (!this.isClinicAdmin)
            this.loadPatientWrapper();

        if (this.showSelectedTemplates)
            this.loadAttachementFiles();

    }


    addFile(fileName: string): void {
        let vm = this;
        vm.model.name = fileName.split('\\').pop();
        let attchmentInfo: any = {};
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            if (fileToUpload.size > 5242880) {
                let msg = this.translate.instant("FileSize");
                this.toastr.error(msg, '');
                return;
            }

            this.sharedService.uploadFile(fileToUpload)
                .subscribe(
                    function (response: any) {
                        if (response != null) {
                            vm.model.attachmentInfo = attchmentInfo;
                            vm.model.attachmentInfo.originalName = response.originalName;
                            vm.model.attachmentInfo.keyName = response.keyName;
                            vm.model.attachmentInfo.fullPath = response.fullPath;
                            vm.model.attachmentInfo.fileType = response.fileType;
                            vm.fileTypeExtension = response.fileType;
                            //vm.model.attachmentInfo.contentType = response.contentType;
                        }
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                    },
                    function () {

                    });
        }
    }

    updateModel(updatedModel: any) {
        this.model = updatedModel;
    };

    loadPatientWrapper() {
        let thisComponent = this;
        this.sharedService.getPatientType()
            .subscribe(
                function (wrappe: any) {

                    thisComponent.patientFiles = wrappe.attachmentType;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }
    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;


        vm.model.parentType = vm.parentType;
        if (vm.parentType == "TemplateFileType") {
            if (vm.fileTypeExtension == ".doc" || vm.fileTypeExtension == ".dot" || vm.fileTypeExtension == ".docx" || vm.fileTypeExtension == ".docm " || vm.fileTypeExtension == ".dotx" || vm.fileTypeExtension == ".dotm" || vm.model.fileType == "word") {
                vm.model.parentId = vm.storage.retrieve("ClinicID");
                vm.saveOrUpdateAttachement();
            }
            else {
                let msg = vm.translate.instant("fileExtensionError");
                vm.toastr.error(msg, '');

            }
        }
        else {
            vm.model.parentId = vm.parentId;
            vm.saveOrUpdateAttachement();
            //vm.clear();

        }
    }


    saveOrUpdateAttachement() {
        let vm = this;

        if (!this.model.hasOwnProperty('id') || this.model.id == undefined || this.model.id == 0) {

            // check file availability
            let fi = this.fileInput.nativeElement;
            if (!fi.files || !fi.files[0]) {
                let msg = this.translate.instant("RequiredField");
                this.toastr.error(msg, '');
                return;
            }

            // Add new
            this.sharedService.saveAttachment(vm.model)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.onAttachementSaved.emit();
                        vm.clear();
                        vm.goBack();
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                        vm.showProgress = false;
                    },
                    function () {
                        vm.showProgress = false;
                    }
                );
        }
        else {
            this.sharedService.updateAttachment(this.model)
                .subscribe(
                    function (response: any) {
                        let msg = vm.translate.instant("SavedSuccessfully");
                        vm.toastr.success(msg, '');
                        vm.onAttachementSaved.emit();
                        vm.clear();
                        vm.goBack();
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

    clear(): void {
        this.model = {};
        this.active = false;
        this.model.parentId = '';
        this.model.parentType = '';
        setTimeout(() => this.active = true, 0);
    }



    addAttachment() {
        //navigate to current URL
        this.router.navigate(['/' + this.documentdetailsUrl, this.parentId, 'new']);
    }
    goBack() {
        this.onBack.emit();
        this.clear();
    }
    editAttachment(id: string): void {
        //navigate to current URL
        this.router.navigate(['/' + this.documentdetailsUrl, this.parentId, id]);
    }

    loadAttachementFiles() {
        let vm = this;
        vm.showProgress = true;
        if (vm.clinicParentId != "" && vm.cliniParentType != undefined) {
            this.sharedService.getAllAttachments(vm.clinicParentId, vm.cliniParentType)
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
    FillTemplate(selectedTemplateId: any) {
        let vm: any = this;
        var template = this.doctorService.fillTemplate(selectedTemplateId, vm.noteId);
        try {
            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', template);

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


}