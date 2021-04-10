import { Component, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../shared/shared.service';

import { ToastrService } from 'ngx-toastr';

@Component({
   
    selector: 'file-uploader',
    templateUrl: 'file-uploader.component.html',
})

export class FileUploaderComponent implements OnChanges {

    @Output('change') attachmentChanged: any = new EventEmitter();
    @ViewChild("fileInput") fileInput: any;
    showProgress = false;
    @Input() attachment: any = {};
    hasFile: boolean = false;
    @Input() enableMyAccountBtn: boolean = false;
    constructor(private sharedService: SharedService
        , public toastr: ToastrService, public translate: TranslateService
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (this.attachment != null && this.attachment.name != '') {
            this.hasFile = true;
        }
    }

    addFile(): void {
        let vm = this;
        let attchmentInfo: any = {};
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            if (fileToUpload.size > 2097152) {
                let msg = this.translate.instant("FileSize2");
                this.toastr.error(msg, '');
                vm.attachmentChanged.emit(null);
                return;
            }

            this.sharedService.uploadFile(fileToUpload)
                .subscribe(
                    function (response: any) {
                        if (response != null) {
                            //vm.hasFile = true;
                            vm.attachmentChanged.emit(response);
                        }
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                    },
                    function () {

                    });
        }
    }

    deleteFile(id: any) {
        let vm = this;
        vm.showProgress = true;

        this.sharedService.deleteAttachment(id)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.attachment = {};
                    vm.hasFile = false;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

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
}