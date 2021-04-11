import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../shared/clinic.service';
import { EMRObjectType } from '../shared/EMRObjectType.enum';

import { TreeNode } from 'primeng/api';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TreeHelerClass } from '../../shared/shared/treeHelper.class';

@Component({

    selector: 'clinic-EMRMaster-laboratoryTests',
    templateUrl: './clinic-EMRMaster-laboratoryTests.component.html'
})


export class ClinicEMRMasterLaboratoryTestsComponent implements OnInit, OnChanges {

    filterString!:string;
    leafType: string = 'LaboratoryTest';
    selectedLang = 'ar';

    active: boolean = true;
    selectedItem!: TreeNode;
    @Input() division: any = {};
    @Input() isClinicAdmin: boolean = false;
    @Input() enableAddRootBtn: boolean = false;
    @Input() enableEditBtn: boolean = false;
    @Input() enableActivateBtn: boolean = false;
    items: any[] = [];
    model: any = {};
    @ViewChild('AddEditLaboratoryTestGroup') AddEditLaboratoryTestGroup!: ElementRef;
    selectedNode: any;
    showProgress: boolean = false;
    laboratoryTestsTree!: any[];
    selectedLaboratoryTests: TreeNode[] = [];
    clinicId!: number;
    objectType: EMRObjectType = new EMRObjectType();
    lstToTranslated: string[] = [];
    treeHelper: TreeHelerClass = new TreeHelerClass();
    groupType = 'LaboratoryTestsGroup';
    selectedLaboratoryTestsIDs: any[] = [];
    allLaboratoryTests: any[] = [];

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService,
        public translate: TranslateService) { }


    ngOnInit(): void {
        // load laboratoryTests tree 
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        let vm = this;
        vm.showProgress = true;
        vm.clinicId = this.storage.retrieve("ClinicID");
        vm.lstToTranslated = ['label', 'labelTranslation'];
        this.clinicService.getLaboratoryTestsGroupsWithoutTestsForTree(vm.clinicId)
            .subscribe(
                function (laboratoryTestsGroups: any) {
                    //vm.laboratoryTestsTree = laboratoryTestsGroups;
                    vm.laboratoryTestsTree = laboratoryTestsGroups; //vm.treeHelper.getActiveNodesOnly(laboratoryTestsGroups);
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

        this.clinicService.getAllLaboratoryTests(vm.clinicId)
            .subscribe(
                function (laboratoryTests: any) {
                    vm.allLaboratoryTests = laboratoryTests;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    ngOnChanges(changes: SimpleChanges) {
        this.items = [];
        if (this.division) {
            this.items = [];
            this.items.push({
                'label': this.division.label,
                'labelTranslation': this.division.labelTranslation,
                'data': this.division.data,
                'type': this.division.type,
                'children': this.division.laboratoryTestsGroups
            });
        }
    }

    displayPopup(node: TreeNode) {

        this.AddEditLaboratoryTestGroup.nativeElement.click();

        this.model = { id: 0 };
        this.selectedNode = node;
        this.selectedLaboratoryTests = [];
        this.selectedLaboratoryTestsIDs = [];
    }

    changeActivation(node: any, event: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleEMRMasterItemActivation(node.data, event.target.checked, this.objectType.LaboratoryTests)
            .subscribe(
                function (response: any) {
                    // change the activation of the node
                    node.isActive = event.target.checked;
                },
                function (error: any) {
                    vm.toastr.error(error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }


    saveLaboratoryTestGroup() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;

        if (addNew)
            vm.prepareModel();

        this.model.relatedObjectsIDs = this.selectedLaboratoryTestsIDs;

        //this.extractSelectedLaboratoryTests();

        this.clinicService.saveorUpdateEMRMasterItem(vm.model)
            .subscribe(
                function (response: any) {
                    if (addNew) // attach new object to the selected node 
                        vm.selectedNode.children.push(response);
                    else // update node's name in case of updating 
                    {
                        vm.selectedNode.label = response.label;
                        vm.selectedNode.labelTranslation = response.nameTranslation;
                        vm.selectedNode.children = [];
                        vm.selectedNode.children = response.children;
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

    prepareModel() {
        this.model.id = 0;
        this.model.objectId = 0;
        this.model.divisionId = this.selectedNode.data;
        this.model.clinicId = this.clinicId;
        this.model.objectType = this.objectType.LaboratoryTests;
    }

    extractSelectedLaboratoryTests() {
        let relatedObjectsIDs = [];

        for (let item of this.selectedLaboratoryTests) {
            if (item.type == 'LaboratoryTest')
                relatedObjectsIDs.push(item.data);
        }

        this.model.relatedObjectsIDs = relatedObjectsIDs;
    }

    editLaboratoryTestGroup(node: any) {

        this.selectedNode = node;
        this.selectedLaboratoryTests = [];
        this.model = {};
        this.model.id = node.data;
        this.model.name = node.label;
        this.model.nameTranslation = node.labelTranslation;
        this.model.objectId = node.data;
        this.model.divisionId = node.parent.date;
        this.model.objectType = this.objectType.LaboratoryTests;
        this.selectedLaboratoryTestsIDs = [];

        for (let test of node.children) {
            this.selectedLaboratoryTestsIDs.push(test.id);
        }

        // get LaboratoryTests under selected LaboratoryTests group
        //for (let laboratoryTest of node.children) {
        //    for (let treeNode of this.laboratoryTestsTree) {
        //        this.highLightSelectedLaboratoryTests(treeNode, laboratoryTest.data, laboratoryTest.type);
        //    }
        //}

        //this.extractSelectedLaboratoryTests();

        // display popup
        this.AddEditLaboratoryTestGroup.nativeElement.click();
    }

    private highLightSelectedLaboratoryTests(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType) {
            this.selectedLaboratoryTests.push(node);
            this.expandParent(node);
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedLaboratoryTests(childNode, id, nodeType);
            });
        }
    }

    private expandParent(node: TreeNode) {
        if (node.parent) {
            node.parent.expanded = true;
            this.expandParent(node.parent);
        }
    }

    clear() {
        this.model = { id: 0 };
        this.active = false;
        this.selectedLaboratoryTests = [];
        setTimeout(() => this.active = true, 0);
        this.filterString = '';
    }
}