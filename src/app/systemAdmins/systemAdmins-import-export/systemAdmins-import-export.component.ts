import {Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import {AdministrationService} from '../../administration/shared/administration.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'systemAdmins-import-export',
    templateUrl: 'systemAdmins-import-export.component.html'
})

export class SystemAdminImportExportComponent implements OnInit  {

    selectImportExportTab: boolean = true;
    model: any = {};
    showProgress = false;
    active = true;
    attachment: any;
    sheetName: string = "";
    filesPathList: any[];
    keyName: string | undefined;
    fileType: string | undefined;
    selectedName: string | undefined;
    impStr: string = '';
    expStr: string = '';
   // rbSelections = [{ value: '1', text: this.impStr }, { value: '2', text: this.expStr }];
    rbSelections = [{ value: '1', text: 'Import' }, { value: '2', text: 'Export' }];
    selectedAction = '1';
    isImport = true;
    exportResult: any;
    importResult: any;
    isFileSelected = false;
    enableMyAccountBtn: boolean = false;
    description = "";
    logFile = "";
    isLogFile = false;
    exportedFileName = "";
    newFileName = "";
   // txtImportOrExport = " What Imported";
    txtImportOrExport = this.translate.instant("ImportText");
    constructor(private administrationService: AdministrationService,
        public toastr: ToastrService,
        private _route: ActivatedRoute,
        public localStorage: LocalStorageService
        , public translate: TranslateService) {

    }

    ngOnInit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;
        //thisComponent.impStr = thisComponent.translate.instant("Import");
        //thisComponent.expStr = thisComponent.translate.instant("Export");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            //thisComponent.impStr = thisComponent.translate.instant("Import");
            //thisComponent.expStr = thisComponent.translate.instant("Export");
            thisComponent.txtImportOrExport = this.translate.instant("ImportText");
        });
        //thisComponent.rbSelections = [{ value: '1', text: this.impStr }, { value: '2', text: this.expStr }];
        if (thisComponent.selectedAction == '1')
            thisComponent.fillConfigFilesDropDownList();
        else if (thisComponent.selectedAction == '2')
            thisComponent.fillExportConfigFilesDropDownList();

        let userType = this.localStorage.retrieve("UserType");
        if (userType != undefined && userType == "SysAdmin")
            this.enableMyAccountBtn = true;

    }
    onSubmit(): void {
        let vm = this;
        vm.showProgress = true;
        //import
        if (vm.selectedAction == '1') {
            this.administrationService.import(this.keyName, this.fileType, this.sheetName, this.selectedName)
                .subscribe(
                function (response:any) {
                    vm.importResult = response.result
                    if (vm.importResult == "Succeeded") {
                        let msg = vm.translate.instant("ImportedSuccessfully");
                        vm.toastr.success(msg, '');
                       // vm.clear();
                    } else if (vm.importResult == "PartiallySucceded") {
                        let msg = vm.translate.instant("PartiallySucceded");
                        vm.toastr.success(msg, '');
                    } else {
                        vm.isLogFile = true;
                        vm.logFile = response.logFile;
                    }

                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        } else if (vm.selectedAction == '2') {

            this.administrationService.export(this.selectedName)
                .subscribe(
                function (response:any) {
                    vm.exportResult = response.result;
                    if (vm.exportResult == "Succeeded") {
                        vm.exportedFileName = response.exportedFileName;
                        var index = vm.exportedFileName.lastIndexOf("\\");
                        vm.newFileName = vm.exportedFileName.substring(index + 1, vm.exportedFileName.length);
                        vm.downloadFile(vm.newFileName, vm.selectedName);
                    } else {
                        vm.logFile = response.logFile;
                        vm.isLogFile = true;
                    }
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }

    }

    downloadFile(exportedFileName: string, selectedFileName: string) {
        let vm = this;
        var url = this.administrationService.prepareDownloadUrl(exportedFileName, selectedFileName);

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
    fillConfigFilesDropDownList() {
        let vm = this;
        this.administrationService.fillConfigFilesDropDownList()
            .subscribe(
            function (response:any) {
                vm.filesPathList = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                vm.showProgress = false;
            });
    }

    attachmentChanged(response:any) {
        let attchmentInfo: any = {};

        if (response != null) {

            if (response.originalName == undefined) {
                //  this.model.attachmentInfo = null;
                this.attachment = null;
                return;
            }

            //  this.model.attachmentInfo = attchmentInfo;
            //   this.model.attachmentInfo.originalName = response.originalName;
            //   this.model.attachmentInfo.keyName = response.keyName;
            this.keyName = response.keyName;
            this.fileType = response.fileType;
            //  this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            //  this.model.attachmentInfo = null;
            this.attachment = null;
        }
    }
    onChange(value: string) {
        let vm = this;
        if (value.includes(".xml"))
        {
            var selected = this.filesPathList.find(f => f.filePath == value);
            vm.selectedName = selected.fileName;
        }
        vm.isFileSelected = true;
        vm.isLogFile = false;
        if (value != "") {
            this.administrationService.getfileDescription(vm.selectedName, vm.selectedAction)
                .subscribe(
                function (response:any) {
                    vm.description = response;
                },
                function (error:any) { 
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }

    onSelectionChange(value: string) {
        this.selectedAction = value;
        this.isFileSelected = false;
        this.isLogFile = false;
        if (this.selectedAction == '1') {
            this.isImport = true;
            this.fillConfigFilesDropDownList();
            this.txtImportOrExport = this.translate.instant("ImportText");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtImportOrExport = this.translate.instant("ImportText");
            });
        }
        else if (this.selectedAction == '2') {
            this.isImport = false;
            this.fillExportConfigFilesDropDownList();
            this.txtImportOrExport = this.translate.instant("ExportText");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtImportOrExport = this.translate.instant("ExportText");
            });
        }
    }

    fillExportConfigFilesDropDownList() {

        let vm = this;
        this.administrationService.fillExportConfigFilesDropDownList()
            .subscribe(
            function (response:any) {
                vm.filesPathList = response;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
                vm.showProgress = false;
            });

    }

    onClick() {
        let vm = this;
            vm.downloadLogFile(vm.selectedAction);
    }
    downloadLogFile(selAction: string) {
        let vm = this;
        var url = this.administrationService.prepareDownloadLogFileUrl(selAction);

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
    clear()
    {
       // this.filesPathList = [];
        this.sheetName = "";
    }
}