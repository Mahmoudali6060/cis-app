import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClinicService } from '../shared/clinic.service';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { UtilityClass } from '../../shared/shared/utility.class';
import { TreeNode } from 'primeng/api';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { AccountService } from '../../security/shared/account.service';
import { UserPermissions } from '../../classes/user-permissions.class';
import { PermissionKeyEnum } from '../../shared/shared/permission-key.enum';
@Component({

    selector: 'clinic-organizationMaster',
    templateUrl: './clinic-organizationMaster.component.html'
})

export class ClinicOrganizationMasterComponent implements OnInit {
    selectedLang = 'ar';
    SelectedPersonName: string = '';
    selectOrganizationMasterTab: boolean = true;
    active: boolean = true;
    model: any = { id: 0 };
    showProgress: boolean = false;
    userPermisions: UserPermissions = new UserPermissions();
    key: PermissionKeyEnum = new PermissionKeyEnum();
    enableAddBtn: boolean = false;
    enableEditBtn: boolean = false;
    enableActivateBtn: boolean = false;
    enableSaveBtn: boolean = false;
    @ViewChild('AddNonMedicalDepartment') AddNonMedicalDepartment!: ElementRef;
    @ViewChild('AddMedicalDepartment') AddMedicalDepartment!: ElementRef;
    @ViewChild('AddDivision') AddDivision!: ElementRef;
    @ViewChild('AddPhysicalResource') AddPhysicalResource!: ElementRef;
    @ViewChild('AddHumanResource') AddHumanResource!: ElementRef;
    //@ViewChild('btnResetPassword') btnResetPassword: ElementRef;

    organizationStructure: any[] = [];
    clinicId!: number;
    departments: any[] = [];
    PhysicalResourceTypes: any[] = [];
    utilityClass: UtilityClass = new UtilityClass();

    selectedFile2!: TreeNode;
    selectedDepartmentsandDivisions: TreeNode[] = [];
    selectedNode: any;

    isEditMode: boolean = false;

    userIdToResetPassword = '';
    userType: string = '';
    isClinicAdmin: boolean = false;
    lstToTranslated: string[] = [];
    constructor(public router: Router,
        private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService,
        private _route: ActivatedRoute
        , public translate: TranslateService
        , public accountService: AccountService) { }

    ngOnInit(): void {
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        this.lstToTranslated = ['label', 'labelTranslation'];
        //this.clinicId = this._route.snapshot.params['id'];
        this.clinicId = this.storage.retrieve("ClinicID");
        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;
        // load organization structure
        this.loadOrganizationStructureTree();

        //load master departments and divisions
        this.loadOrganizationStructureWrapper();

        if (!this.isClinicAdmin) {
            if (this.accountService.userPermision._isScalar != undefined)
                this.accountService.userPermision.subscribe((item: any) => this.handleUserInterfaceViews(item));
            else
                this.handleUserInterfaceViews(this.accountService.userPermision);
        }
    }

    loadOrganizationStructureTree() {
        let vm = this;
        vm.showProgress = true;
        //let userId = this.storage.retrieve("UserID");
        this.clinicService.getOrganizationStructureTree(this.clinicId)
            .subscribe(
                function (response: any) {
                    vm.organizationStructure = response;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    loadOrganizationStructureWrapper() {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.getOrganizationStructureWrapper()
            .subscribe(
                function (response: any) {
                    vm.departments = response.departments;
                    vm.PhysicalResourceTypes = response.physicalResourceTypes;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    SaveDepartmentsandDivisions() {
        // extract selected departments and divisions
        let selectedDepartments: any[] = [];
        this.model.divisionsIDs = [];
        this.model.clinicId = this.clinicId;
        let vm = this;

        this.selectedDepartmentsandDivisions.forEach(node => {
            if (node.type == "Division")
                vm.model.divisionsIDs.push(node.data);
        });

        vm.showProgress = true;
        this.clinicService.saveMedicalDepartmentsandDivisions(vm.model)
            .subscribe(
                function (response: any) {
                    vm.organizationStructure = response;
                    vm.model = { id: 0 };
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                    vm.organizationStructure[0].expand;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    expandAll() {
        this.organizationStructure.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.organizationStructure.forEach(node => {
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

    displayPopup(node: any) {
        this.model = { id: 0 };

        if (node.type.toString() == "Medical") {
            this.AddMedicalDepartment.nativeElement.click();
            this.displaySelectedDivisions();
        }
        else if (node.type.toString() == "NonMedical") {
            this.AddNonMedicalDepartment.nativeElement.click();
            this.model.departmentCategoryId = node.data;
            this.model.clinicId = this.clinicId;
        }
        else if (node.type == "ClinicDepartment") {
            this.AddDivision.nativeElement.click();
            this.model = { id: 0 };
            this.model.departmentName = node.label;
            this.model.clinicDepartmentId = node.data;
        }
        else if (node.type.includes("Human")) {
            this.router.navigateByUrl("/humanResource/1");
        }

        this.selectedNode = node;
    }

    displaySelectedDivisions() {
        this.selectedDepartmentsandDivisions = [];

        for (let orgStructure of this.organizationStructure) {
            if (orgStructure.type == "Medical") {
                for (let department of orgStructure.children) {
                    this.departments.forEach(node => {
                        this.highLightSelectedNodes(node, department.masterDepartmentId, 'Department');
                    });

                    for (let division of department.children) {
                        this.departments.forEach(node => {
                            this.highLightSelectedNodes(node, division.masterDivisionId, 'Division');
                        });
                    }
                }
            }
        }
    }

    private highLightSelectedNodes(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType)
            this.selectedDepartmentsandDivisions.push(node);
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedNodes(childNode, id, nodeType);
            });
        }
    }

    displayPhysicalResourcePopup(node: any) {
        this.AddPhysicalResource.nativeElement.click();
        this.model = { id: 0 };
        this.model.departmentName = node.parent.label;
        this.model.divisionName = node.label;
        this.model.clinicDivisionId = node.data;

        this.selectedNode = node;
    }

    clear() {
        this.model = { id: 0 };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // Non Medical Department 
    saveNonMedicalDepartment() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;
        this.clinicService.saveNonMedicalDepartment(vm.model)
            .subscribe(
                function (response: any) {
                    if (addNew) // attach new object to the selected node 
                        vm.selectedNode.children.push(response);
                    else // update node's name in case of updating 
                    {
                        vm.selectedNode.label = response.label;
                        vm.selectedNode.labelTranslation = response.labelTranslation;
                    }
                    vm.clear();
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    editDepartment(node: TreeNode) {
        let vm = this;
        vm.showProgress = true;
        vm.selectedNode = node;
        this.clinicService.getNonMedicalDepartmentById(node.data)
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

        // display popup
        this.AddNonMedicalDepartment.nativeElement.click();
    }

    // Non Medical Division
    saveNonMedicalDivision() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;
        this.clinicService.saveNonMedicalDivision(vm.model)
            .subscribe(
                function (response: any) {
                    if (addNew) // attach new object to the selected node 
                        vm.selectedNode.children.push(response);
                    else // update node's name in case of updating 
                    {
                        vm.selectedNode.label = response.label;
                        vm.selectedNode.labelTranslation = response.labelTranslation;
                    }
                    //vm.loadOrganizationStructureTree();
                    vm.clear();
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    editDivision(node: any) {
        let vm = this;
        vm.showProgress = true;
        vm.selectedNode = node;
        this.clinicService.getNonMedicalDivisionById(node.data)
            .subscribe(
                function (response: any) {
                    vm.model = response;
                    vm.model.departmentName = node.parent.label;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

        // display popup
        this.AddDivision.nativeElement.click();
    }

    // Physical Resource 
    savePhysicalResource() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;
        if (this.model.startDate)
            this.model.startDate = this.utilityClass.getUtcDate(this.model.startDate);
        if (this.model.endDate)
            this.model.endDate = this.utilityClass.getUtcDate(this.model.endDate);

        this.clinicService.savePhysicalResource(vm.model)
            .subscribe(
                function (response: any) {
                    if (addNew) // attach new object to the selected node 
                        vm.selectedNode.children.push(response);
                    else // update node's name in case of updating 
                    {
                        vm.selectedNode.label = response.label;
                        vm.selectedNode.labelTranslation = response.labelTranslation;
                    }

                    vm.clear();
                    let msg = vm.translate.instant("SavedSuccessfully");
                    vm.toastr.success(msg, '');
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    editPhysicalResource(node: any) {
        let vm = this;
        vm.showProgress = true;
        vm.selectedNode = node;
        this.clinicService.getPhysicalResourceById(node.data)
            .subscribe(
                function (response: any) {
                    vm.model = response;

                    if (vm.model.startDate)
                        vm.model.startDate = vm.utilityClass.getUtcDateFromString(vm.model.startDate);
                    if (vm.model.endDate)
                        vm.model.endDate = vm.utilityClass.getUtcDateFromString(vm.model.endDate);

                    vm.model.departmentName = node.parent.parent.label;
                    vm.model.divisionName = node.parent.label;

                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

        // display popup
        this.AddPhysicalResource.nativeElement.click();
    }

    changeActivation(node: any, event: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleOrganizationStructureActivation(node.data, event.target.checked, node.type)
            .subscribe(
                function (response: any) {
                    //change the activation of the node and all of it's children 
                    vm.toggleActivationForNodeandSubs(node, event.target.checked);

                    // activate parents 
                    if (node.type == 'PhysicalResource' && event.target.checked) {
                        node.parent.isActive = true;
                        node.parent.parent.isActive = true;
                    }
                    if (node.type == 'ClinicDivision' && event.target.checked) {
                        node.parent.isActive = true;
                    }
                    if (node.type == 'SecurityUser' && event.target.checked) {
                        node.parent.isActive = true;
                        node.parent.parent.isActive = true;
                    }

                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    private toggleActivationForNodeandSubs(node: any, active: boolean) {
        node.isActive = active;

        if (active == false) {
            if (node.children) {
                node.children.forEach((childNode: any) => {
                    this.toggleActivationForNodeandSubs(childNode, active);
                });
            }
        }

    }

    addNewHumanResource(node: TreeNode) {
        this.isEditMode = false;
        this.selectedNode = node;
        this.SelectedPersonName = '';

        this.AddHumanResource.nativeElement.click();
    }

    editHumanResource(node: any) {
        this.isEditMode = true;
        this.selectedNode = node;
        if (this.selectedLang == 'ar')
            this.SelectedPersonName = '- ' + node.label;
        else
            this.SelectedPersonName = '- ' + node.labelTranslation;

        this.AddHumanResource.nativeElement.click();
    }

    updateModel(newNode: any) {
        this.isEditMode = true;
        this.selectedNode = newNode;

        if (this.selectedLang == 'ar')
            this.SelectedPersonName = '- ' + this.selectedNode.label;
        else
            this.SelectedPersonName = '- ' + this.selectedNode.labelTranslation;
    }

    handleUserInterfaceViews(user: any) {
        if (user.permissions != undefined) {

            for (let item of user.permissions) {
                if (item.permission.key == this.key.OrganizationStructure) {
                    if (item.fullControl == true || item.add)
                        this.enableAddBtn = true;// then any add button should be enabled
                    if (item.fullControl == true || item.edit)
                        this.enableEditBtn = true;
                    if (item.fullControl == true || item.activate)
                        this.enableActivateBtn = true;
                    //if (item.fullControl || item.add || item.edit)
                    //    this.enableSaveBtn = true;
                }

            }
        }

    }
    //openResetPasswordModal(node: TreeNode) {        
    //    this.userIdToResetPassword = node.data;

    //    this.btnResetPassword.nativeElement.click();
    //}
}