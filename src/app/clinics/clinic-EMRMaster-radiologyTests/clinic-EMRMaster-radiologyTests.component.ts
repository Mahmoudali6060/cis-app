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

    selector: 'clinic-EMRMaster-radiologyTests',
    templateUrl: './clinic-EMRMaster-radiologyTests.component.html'
})

export class ClinicEMRMasterRadiologyTestsComponent implements OnInit, OnChanges {

    filterString!:string;
    leafType: string = 'RadiologyTest';
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
    @ViewChild('AddEditRadiologyTestGroup') AddEditRadiologyTestGroup!: ElementRef;
    selectedNode: any;
    showProgress: boolean = false;
    radiologyTestsTree!: any[];
    selectedRadiologyTests: TreeNode[] = [];
    clinicId!: number;
    objectType: EMRObjectType = new EMRObjectType();
    lstToTranslated: string[] = [];
    treeHelper: TreeHelerClass = new TreeHelerClass();
    groupType = 'RadiologyTestsGroup';
    selectedRadiologyTestsIDs: any[] = [];
    allRadiologyTests: any[] = [];

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService,
        public translate: TranslateService) { }


    ngOnInit(): void {
        // load radiologyTests tree 
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        let vm = this;
        vm.showProgress = true;
        vm.clinicId = this.storage.retrieve("ClinicID");
        vm.lstToTranslated = ['label', 'labelTranslation'];
        this.clinicService.getRadiologyTestsGroupsOnlyForTreeView(vm.clinicId)
            .subscribe(
                function (radiologyTestsGroups: any) {
                    vm.radiologyTestsTree = radiologyTestsGroups; //vm.treeHelper.getActiveNodesOnly(radiologyTestsGroups);
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });

        this.clinicService.getAllRadiologyTests(vm.clinicId)
            .subscribe(
                function (Tests: any) {
                    vm.allRadiologyTests = Tests;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
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
                'children': this.division.radiologyTestsGroups
            });
        }
    }

    displayPopup(node: TreeNode) {

        this.AddEditRadiologyTestGroup.nativeElement.click();

        this.model = { id: 0 };
        this.selectedNode = node;
        this.selectedRadiologyTests = [];
        this.selectedRadiologyTestsIDs = [];
    }

    changeActivation(node: any, event: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleEMRMasterItemActivation(node.data, event.target.checked, this.objectType.RadiologyTests)
            .subscribe(
                function (response: any) {
                    // change the activation of the node
                    node.isActive = event.target.checked;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }


    saveRadiologyTestGroup() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;

        if (addNew)
            vm.prepareModel();

        this.model.relatedObjectsIDs = this.selectedRadiologyTestsIDs;
        //this.extractSelectedRadiologyTests();

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
                    vm.toastr.error(error.error, '');
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
        this.model.objectType = this.objectType.RadiologyTests;
    }

    extractSelectedRadiologyTests() {
        let relatedObjectsIDs = [];

        for (let item of this.selectedRadiologyTests) {
            if (item.type == 'RadiologyTest')
                relatedObjectsIDs.push(item.data);
        }

        this.model.relatedObjectsIDs = relatedObjectsIDs;
    }

    editRadiologyTestGroup(node: any) {

        this.selectedNode = node;
        this.selectedRadiologyTests = [];
        this.model = {};
        this.model.id = node.data;
        this.model.name = node.label;
        this.model.nameTranslation = node.labelTranslation;
        this.model.objectId = node.data;
        this.model.divisionId = node.parent.date;
        this.model.objectType = this.objectType.RadiologyTests;
        this.selectedRadiologyTestsIDs = [];

        for (let test of node.children) {
            this.selectedRadiologyTestsIDs.push(test.id);
        }

        // get RadiologyTests under selected RadiologyTests group
        //for (let radiologyTest of node.children) {
        //    for (let treeNode of this.radiologyTestsTree) {
        //        this.highLightSelectedRadiologyTests(treeNode, radiologyTest.data, radiologyTest.type);
        //    }
        //}

        //this.extractSelectedRadiologyTests();

        // display popup
        this.AddEditRadiologyTestGroup.nativeElement.click();
    }

    private highLightSelectedRadiologyTests(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType) {
            this.selectedRadiologyTests.push(node);
            this.expandParent(node);
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedRadiologyTests(childNode, id, nodeType);
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
        this.selectedRadiologyTests = [];
        setTimeout(() => this.active = true, 0);
        this.filterString = '';
    }
}