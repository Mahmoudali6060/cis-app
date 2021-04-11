import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { TreeNode } from 'primeng/api';
import { ClinicService } from '../shared/clinic.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';

@Component({

    selector: 'clinic-laboratory-tests',
    templateUrl: './clinic-laboratory-tests.component.html'
})

export class ClinicLaboratoryTestsComponent implements OnInit {

    selectedLang = 'ar';
    filterString!:string;
    leafType: string = 'LaboratoryTest';
    groupName: string = '';
    childName: string = '';
    userType: string = '';
    isClinicAdmin: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddRootBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    constructor(public toastr: ToastrService
        , private localStorage: LocalStorageService
        , private clinicService: ClinicService
        , public translate: TranslateService
        , private accountService: AccountService) { }

    selectedClinicId!: number;
    selectLaboratoryTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;

    selectedNode!: TreeNode;

    isLaboratoryTestsGroupSelected = true;
    isLaboratoryTestSelected = false;
    rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    selectedAction = 1;
    txtHeaderModal = "";
    toSaveLaboratoryTestsGroupId = '';
    toSaveLaboratoryTestId = '';
    parentLaboratoryTestsGroupId = '';
    parentLaboratoryTestsGroupName = '';
    isRoot = false;
    enableCheckBox = false;
    selctedNode: any;
    isNew: boolean | undefined;
    toPrintDiv: string = "print-section";

    @ViewChild('btnAddLaboratoryTestsGroup') btnAddLaboratoryTestsGroup!: ElementRef;
    @ViewChild('btnClosePopup') btnClosePopup!: ElementRef;
    lstToTranslated: string[] = [];
    treeDataSourceItems!: any[];

    ngOnInit(): void {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.groupName = this.translate.instant("LaboratoryTestsGroup");
        this.childName = this.translate.instant("LaboratoryTests");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.groupName = this.translate.instant("LaboratoryTestsGroup");
            this.childName = this.translate.instant("LaboratoryTests");
        });
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
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

        this.getLaboratoryTestsGroupsForTree();
    }

    getLaboratoryTestsGroupsForTree() {
        this.toSaveLaboratoryTestsGroupId = '';
        this.toSaveLaboratoryTestId = '';
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getLaboratoryTestsGroupsForTree(this.selectedClinicId)
            .subscribe(
                function (laboratoryTestsGroups: any) {
                    thisComponent.treeDataSourceItems = laboratoryTestsGroups;
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
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }

    onCheckboxSelectionChange(value: any) {
        this.selectedAction = value;

        if (this.selectedAction == 1) {
            this.isLaboratoryTestsGroupSelected = true;
            this.isLaboratoryTestSelected = false;
            this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
            });

        }
        else if (this.selectedAction == 2) {
            this.isLaboratoryTestsGroupSelected = false;
            this.isLaboratoryTestSelected = true
            this.txtHeaderModal = this.translate.instant("LaboratoryTests");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("LaboratoryTests");
            });
        }
    }

    displayPopup(node: any) {
        if (node.type.toLocaleLowerCase() == "laboratorytest") {
            this.isLaboratoryTestsGroupSelected = false;
            this.isLaboratoryTestSelected = true;
            this.selectedAction = 2;

            this.txtHeaderModal = this.translate.instant("LaboratoryTest");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("LaboratoryTest");
                this.groupName = this.translate.instant("LaboratoryTestsGroup");
                this.childName = this.translate.instant("LaboratoryTests");
            });
            this.enableCheckBox = false;
            this.isRoot = false;

            this.toSaveLaboratoryTestId = node.data;
            this.btnAddLaboratoryTestsGroup.nativeElement.click();
        } else if (node.type.toLocaleLowerCase() == "laboratorytestsgroup") {
            this.isLaboratoryTestsGroupSelected = true;
            this.isLaboratoryTestSelected = false;
            this.enableCheckBox = false;
            this.isRoot = false;
            this.selectedAction = 1;
            this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
                this.groupName = this.translate.instant("LaboratoryTestsGroup");
                this.childName = this.translate.instant("LaboratoryTests");
            });

            this.toSaveLaboratoryTestsGroupId = node.data;
            this.btnAddLaboratoryTestsGroup.nativeElement.click();
        }
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        this.selctedNode = node;
    }

    passParentGroupInfo(node: any) {
        this.parentLaboratoryTestsGroupId = node.data;
        if (this.selectedLang == 'ar')
            this.parentLaboratoryTestsGroupName = node.label;
        else
            this.parentLaboratoryTestsGroupName = node.labelTranslation;
        this.isLaboratoryTestsGroupSelected = true;
        this.isLaboratoryTestSelected = false;
        this.selectedAction = 1;
        // this.txtHeaderModal = "LaboratoryTestsGroup";
        this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("LaboratoryTestsGroup");
            this.groupName = this.translate.instant("LaboratoryTestsGroup");
            this.childName = this.translate.instant("LaboratoryTests");
        });
        if (node.data == undefined) {
            this.enableCheckBox = false;
            this.isRoot = true;
        }
        else {
            this.enableCheckBox = true;
            this.isRoot = false;
        }
        this.isLaboratoryTestsGroupSelected = true;
        this.isLaboratoryTestSelected = false;

        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        this.selctedNode = node;
    }

    changeActivation(node: any, event: any) {
        let thisComponent = this;

        if (node.type.toLocaleLowerCase() == "laboratorytest") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateLaboratoryTestActiveState({ "id": node.id, "isActive": event.target.checked })
                .subscribe(
                    function (response: any) {
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
        } else if (node.type.toLocaleLowerCase() == "laboratorytestsgroup") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateLaboratoryTestsGroupActiveState({ "id": node.id, "isActive": event.target.checked })
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
    updateSelectedNode(node: any) {
        let vm = this;
        vm.toSaveLaboratoryTestsGroupId = '';
        vm.toSaveLaboratoryTestId = '';
        if (node.data > 0 && vm.isNew == false) {
            // vm.selctedNode = node;
            vm.selctedNode.label = node.label;
            vm.selctedNode.labelTranslation = node.labelTranslation;
        } else {
            if (vm.parentLaboratoryTestsGroupId == undefined) {
                vm.treeDataSourceItems.push(node);
            } else {
                vm.selctedNode.children.push(node);
            }
        }
    }
    setIsNewValue(val: any) {
        this.isNew = val;
    }
    closeLaboratoryTestsAndGroupsPopup() {
        this.toSaveLaboratoryTestsGroupId = '';
        this.toSaveLaboratoryTestId = '';
        this.selectedNode = {};

        this.btnClosePopup.nativeElement.click();
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
