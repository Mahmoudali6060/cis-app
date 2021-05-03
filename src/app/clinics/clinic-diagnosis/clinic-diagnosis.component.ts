import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { TreeNode } from "primeng/api";
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({

    selector: 'clinic-diagnosis',
    templateUrl: './clinic-diagnosis.component.html'
})

export class ClinicDiagnosisComponent implements OnInit {

    filterString!: string;
    leafType: string = 'Diagnose';
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    selectedLang = 'ar';

    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , public accountService: AccountService) { }

    selectedClinicId!: number;
    selectDiagnosisTab: boolean = true;
    active: boolean = true;
    showProgress = false;
    selectedNode!: TreeNode;
    isDiagnosisGroupSelected = true;
    isDiagnoseSelected = false;
    diagnosisGroup: string = '';
    diagnose: string = '';
    rbSelections = [{ value: 1, text: this.diagnosisGroup }, { value: 2, text: this.diagnose }];
    selectedAction: any = 1;
    txtHeaderModal: any = "";
    toSaveDiagnosisGroupId: any = '';
    toSaveDiagnoseId: any = '';
    parentDiagnosisGroupId: any = '';
    parentDiagnosisGroupName: any = '';
    isRoot = false;
    enableCheckBox = false;
    selctedNode: any;
    isNew: boolean | undefined;
    toPrintDiv: string = "print-section";

    @ViewChild('btnAddDiagnosisGroup') btnAddDiagnosisGroup!: ElementRef;
    @ViewChild('btnClosePopup') btnClosePopup!: ElementRef;

    treeDataSourceItems!: any[];
    lstToTranslated: string[] = [];
    userType: string = '';
    isClinicAdmin: boolean = false;
    ngOnInit(): void {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
        this.diagnose = this.translate.instant("Diagnose");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
            this.diagnose = this.translate.instant("Diagnose");
        });
        this.rbSelections = [{ value: 1, text: this.diagnosisGroup }, { value: 2, text: this.diagnose }];
        this.selectedClinicId = this.localStorage.retrieve("ClinicID");

        this.userType = this.localStorage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }

        this.getDiagnosisGroupsForTree();

    }

    getDiagnosisGroupsForTree() {
        this.toSaveDiagnosisGroupId = '';
        this.toSaveDiagnoseId = '';
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getDiagnosisGroupsForTree(this.selectedClinicId)
            .subscribe(
                function (diagnosisGroups: any) {
                    thisComponent.treeDataSourceItems = diagnosisGroups;
                },
                function (error: any) {
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    expandAll() {
        this.treeDataSourceItems.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.treeDataSourceItems.forEach(node => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }

    onCheckboxSelectionChange(value: any) {
        this.selectedAction = value;

        if (this.selectedAction == 1) {
            this.isDiagnosisGroupSelected = true;
            this.isDiagnoseSelected = false;
            this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
                this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
                this.diagnose = this.translate.instant("Diagnose");
            });
        }
        else if (this.selectedAction == 2) {
            this.isDiagnosisGroupSelected = false;
            this.isDiagnoseSelected = true
            this.txtHeaderModal = this.translate.instant("Diagnose");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
                this.diagnose = this.translate.instant("Diagnose");

                this.txtHeaderModal = this.translate.instant("Diagnose");
            });
        }
    }

    displayPopup(node: any) {
        if (node.type.toLocaleLowerCase() == "diagnose") {
            this.isDiagnosisGroupSelected = false;
            this.isDiagnoseSelected = true;
            this.selectedAction = 2;
            this.txtHeaderModal = this.translate.instant("Diagnose");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("Diagnose");
                this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
                this.diagnose = this.translate.instant("Diagnose");

            });
            this.enableCheckBox = false;
            this.isRoot = false;
            this.rbSelections = [{ value: 1, text: this.diagnosisGroup }, { value: 2, text: this.diagnose }];
            this.toSaveDiagnoseId = node.data;
            this.btnAddDiagnosisGroup.nativeElement.click();
        } else if (node.type.toLocaleLowerCase() == "diagnosisgroup") {
            this.isDiagnosisGroupSelected = true;
            this.isDiagnoseSelected = false;
            this.enableCheckBox = false;
            this.isRoot = false;
            this.selectedAction = 1;
            this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
                this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
                this.diagnose = this.translate.instant("Diagnose");
            });
            this.rbSelections = [{ value: 1, text: this.diagnosisGroup }, { value: 2, text: this.diagnose }];
            this.toSaveDiagnosisGroupId = node.data;
            this.btnAddDiagnosisGroup.nativeElement.click();
        }
        this.selctedNode = node;
    }

    passParentGroupInfo(node?: any) {
        this.parentDiagnosisGroupId = node.data;

        if (this.selectedLang == 'ar')
            this.parentDiagnosisGroupName = node.label;
        else
            this.parentDiagnosisGroupName = node.labelTranslation;

        this.isDiagnosisGroupSelected = true;
        this.isDiagnoseSelected = false;
        this.selectedAction = 1;
        this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("DiagnosisGroup");
            this.diagnosisGroup = this.translate.instant("DiagnosisGroup");
            this.diagnose = this.translate.instant("Diagnose");
        });
        this.rbSelections = [{ value: 1, text: this.diagnosisGroup }, { value: 2, text: this.diagnose }];
        if (node.data == undefined) {// in case of root parent
            this.enableCheckBox = false;
            this.isRoot = true;
        }
        else {
            this.enableCheckBox = true;
            this.isRoot = false;
        }
        this.isDiagnosisGroupSelected = true;
        this.isDiagnoseSelected = false;

        this.selctedNode = node;
    }

    changeActivation(node: any, event: any) {
        let thisComponent = this;

        if (node.type == "Diagnose") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateDiagnoseActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
                        // thisComponent.getDiagnosisGroupsForTree();
                        if (event.target.checked) {
                            thisComponent.activateParents(node);
                        }
                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        } else if (node.type.toLocaleLowerCase() == "diagnosisgroup") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateDiagnosisGroupActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
                        node.isActive = event.target.checked;
                        if (event.target.checked) {
                            if (node.parent != undefined)
                                thisComponent.activateParents(node.parent);
                        } else {

                            thisComponent.deActivateChildren(node, false);
                        }

                    },
                    function (error: any) {
                        thisComponent.toastr.error(error, '');
                        thisComponent.showProgress = false;
                    },
                    function () { // finally
                        thisComponent.showProgress = false;
                    });
        }
    }
    activateParents(node: any) {
        node.isActive = true;
        if (node.parent != undefined) {
            this.activateParents(node.parent);
        }
    }
    deActivateChildren(node: any, active: any) {
        node.isActive = active;
        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.deActivateChildren(childNode, active);
            });
        }
    }
    closeDiagnosisAndGroupsPopup() {
        this.toSaveDiagnosisGroupId = '';
        this.toSaveDiagnoseId = '';
        this.selectedNode = {};

        this.btnClosePopup.nativeElement.click();
    }
    updateSelectedNode(node: any) {
        let vm = this;
        vm.toSaveDiagnosisGroupId = '';
        vm.toSaveDiagnoseId = '';
        if (node.data > 0 && vm.isNew == false) {
            // vm.selctedNode = node;
            vm.selctedNode.label = node.label;
            vm.selctedNode.labelTranslation = node.labelTranslation;
        } else {
            if (vm.parentDiagnosisGroupId == undefined) {
                vm.treeDataSourceItems.push(node);
            } else {
                vm.selctedNode.children.push(node);
            }

        }
        //if (thisComponent.serviceGroupParentId == '') {
        //    thisComponent.treeDataSourceItems.push(response:any);
        //} else {
        //    thisComponent.selectedNode.children.push(response:any);
        //    //  thisComponent.displaySelectedParentGroupNode(thisComponent.selectedNode.data, "servicegroup")//type.toLocaleLowerCase() == "servicegroup"
        //}


    }
    setIsNewValue(val: any) {
        this.isNew = val;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.Coding) {
                    if (item.fullControl == true || item.add)
                        this.enableAddRootBtn = true;// then any add button should be enabled
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl == true || item.activate)
                        this.enableActivateBtn = true;
                    if (item.fullControl || item.add || item.edit)
                        this.enableSaveBtn = true;
                }

            }
        }

    }
}
