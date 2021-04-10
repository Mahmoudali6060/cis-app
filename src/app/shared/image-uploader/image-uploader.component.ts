import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { SharedService } from '../shared/shared.service';
import { TranslateService } from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';

@Component({
   
    selector: 'image-uploader',
    templateUrl: 'image-uploader.component.html',
})

export class ImageUploaderComponent implements OnChanges {

    @Input() imageData: any;
    @Input() imageId: string = '';
    @Output('change') imageChanged: any = new EventEmitter();
    @ViewChild("fileInput") fileInput: any;
    data: any = null;
    showProgress = false;

    constructor(private sharedService: SharedService
        , public toastr: ToastrService
        , public translate: TranslateService) { }

    //ngOnInit(): void {
    //    this.data = this.imageData;
    //}

    ngOnChanges(changes: SimpleChanges) {
        this.data = this.imageData;
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
                vm.imageChanged.emit(null);
                return;
            }

            this.sharedService.uploadFile(fileToUpload)
                .subscribe(
                    function (response: any) {
                        if (response != null) {
                            vm.imageChanged.emit(response);
                        }
                    },
                    function (error: any) {
                        vm.toastr.error(error, '');
                    },
                    function () {

                    });
        }
    }

    deleteImage(id: any) {
        let vm = this;
        vm.showProgress = true;

        this.sharedService.deleteAttachment(id)
            .subscribe(
                function (response: any) {
                    let msg = vm.translate.instant("DeletedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.data = null;
                    vm.imageChanged.emit(null);
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