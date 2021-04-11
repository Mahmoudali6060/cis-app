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
    selector: 'clinic-radiology-tests',
    templateUrl: './clinic-radiology-tests.component.html'
})

export class ClinicRadiologyTestsComponent implements OnInit {
    selectedLang = 'ar';
    filterString!:string;
    leafType: string = 'RadiologyTest';
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
    selectRadiologyTestsTab: boolean = true;
    active: boolean = true;
    showProgress = false;

    selectedNode!: TreeNode;

    isRadiologyTestsGroupSelected = true;
    isRadiologyTestSelected = false;
    // rbSelections = [{ value: 1, text: 'RadiologyTestsGroup' }, { value: 2, text: 'RadiologyTest' }];
    groupName: string = '';
    childName: string = '';
    rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    selectedAction = 1;
    txtHeaderModal = "";
    toSaveRadiologyTestsGroupId = '';
    toSaveRadiologyTestId = '';
    parentRadiologyTestsGroupId = '';
    parentRadiologyTestsGroupName = '';
    isRoot = false;
    enableCheckBox = false;
    selctedNode: any;
    isNew: boolean | undefined;
    toPrintDiv: string = "print-section";
    @ViewChild('btnAddRadiologyTestsGroup') btnAddRadiologyTestsGroup!: ElementRef;
    @ViewChild('btnClosePopup') btnClosePopup!: ElementRef;
    treeDataSourceItems!: any[];
    lstToTranslated: string[] = [];

    ngOnInit(): void {
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        this.groupName = this.translate.instant("RadiologyTestsGroup");
        this.childName = this.translate.instant("RadiologyTest");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.groupName = this.translate.instant("RadiologyTestsGroup");
            this.childName = this.translate.instant("RadiologyTest");
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

        this.getRadiologyTestsGroupsForTree();
    }

    getRadiologyTestsGroupsForTree() {
        this.toSaveRadiologyTestsGroupId = '';
        this.toSaveRadiologyTestId = '';
        let thisComponent = this;
        thisComponent.showProgress = true;
        this.clinicService.getRadiologyTestsGroupsForTree(this.selectedClinicId)
            .subscribe(
                function (radiologyTestsGroups: any) {
                    thisComponent.treeDataSourceItems = radiologyTestsGroups;
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
            this.isRadiologyTestsGroupSelected = true;
            this.isRadiologyTestSelected = false;
            // this.txtHeaderModal = " RadiologyTestsGroup";
            this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");

            });

        }
        else if (this.selectedAction == 2) {
            this.isRadiologyTestsGroupSelected = false;
            this.isRadiologyTestSelected = true
            // this.txtHeaderModal = "RadiologyTest";
            this.txtHeaderModal = this.translate.instant("RadiologyTest");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("RadiologyTest");
            });
        }
    }

    displayPopup(node: any) {
        if (node.type.toLocaleLowerCase() == "radiologytest") {
            this.isRadiologyTestsGroupSelected = false;
            this.isRadiologyTestSelected = true;
            this.selectedAction = 2;
            this.txtHeaderModal = this.translate.instant("RadiologyTest");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("RadiologyTest");
                this.groupName = this.translate.instant("RadiologyTestsGroup");
                this.childName = this.translate.instant("RadiologyTest");
            });
            this.enableCheckBox = false;
            this.isRoot = false;

            this.toSaveRadiologyTestId = node.data;
            this.btnAddRadiologyTestsGroup.nativeElement.click();
        } else if (node.type.toLocaleLowerCase() == "radiologytestsgroup") {
            this.isRadiologyTestsGroupSelected = true;
            this.isRadiologyTestSelected = false;
            this.enableCheckBox = false;
            this.isRoot = false;
            this.selectedAction = 1;
            this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

                this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");
                this.groupName = this.translate.instant("RadiologyTestsGroup");
                this.childName = this.translate.instant("RadiologyTest");
            });

            this.toSaveRadiologyTestsGroupId = node.data;
            this.btnAddRadiologyTestsGroup.nativeElement.click();
        }
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
        this.selctedNode = node;
    }

    passParentGroupInfo(node: any) {
        this.parentRadiologyTestsGroupId = node.data;
        if (this.selectedLang == 'ar')
            this.parentRadiologyTestsGroupName = node.label;
        else
            this.parentRadiologyTestsGroupName = node.labelTranslation;
        this.isRadiologyTestsGroupSelected = true;
        this.isRadiologyTestSelected = false;
        this.selectedAction = 1;
        this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.txtHeaderModal = this.translate.instant("RadiologyTestsGroup");
            this.groupName = this.translate.instant("RadiologyTestsGroup");
            this.childName = this.translate.instant("RadiologyTest");
        });
        if (node.data == undefined) {
            this.enableCheckBox = false;
            this.isRoot = true;
        }
        else {
            this.enableCheckBox = true;
            this.isRoot = false;
        }
        this.isRadiologyTestsGroupSelected = true;
        this.isRadiologyTestSelected = false;

        this.selctedNode = node;
        this.rbSelections = [{ value: 1, text: this.groupName }, { value: 2, text: this.childName }];
    }

    changeActivation(node: any, event: any) {
        let thisComponent = this;

        if (node.type.toLocaleLowerCase() == "radiologytest") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateRadiologyTestActiveState({ "id": node.id, "isActive": event.target.checked })
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
        } else if (node.type.toLocaleLowerCase() == "radiologytestsgroup") {
            thisComponent.showProgress = true;
            thisComponent.clinicService.updateRadiologyTestsGroupActiveState({ "id": node.id, "isActive": event.target.checked })
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
        vm.toSaveRadiologyTestsGroupId = '';
        vm.toSaveRadiologyTestId = '';
        if (node.data > 0 && vm.isNew == false) {
            // vm.selctedNode = node;
            vm.selctedNode.label = node.label;
            vm.selctedNode.labelTranslation = node.labelTranslation;
        } else {
            if (vm.parentRadiologyTestsGroupId == undefined) {
                vm.treeDataSourceItems.push(node);
            } else {
                vm.selctedNode.children.push(node);
            }
        }
    }
    setIsNewValue(val: any) {
        this.isNew = val;
    }
    closeRadiologyTestsAndGroupsPopup() {
        this.toSaveRadiologyTestsGroupId = '';
        this.toSaveRadiologyTestId = '';
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
