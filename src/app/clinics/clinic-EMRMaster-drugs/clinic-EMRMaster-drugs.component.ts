import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {ClinicService} from '../shared/clinic.service';
import { EMRObjectType } from '../shared/EMRObjectType.enum';

import { TreeNode } from 'primeng/primeng';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { TreeHelerClass } from '../../shared/shared/treeHelper.class';

@Component({
   
    selector: 'clinic-EMRMaster-drugs',
    templateUrl: 'clinic-EMRMaster-drugs.component.html'
})

export class ClinicEMRMasterDrugsComponent implements OnInit, OnChanges {

    filterString: string | undefined;
    leafType: string = 'Drug';

    active: boolean = true;
    selectedItem: TreeNode;
    @Input() division: any = {};
    @Input() isClinicAdmin: boolean = false;
    @Input() enableAddRootBtn: boolean = false;
    @Input() enableEditBtn: boolean = false;
    @Input() enableActivateBtn: boolean = false;
    items: any[] = [];
    model: any = {};
    @ViewChild('AddEditDrugGroup') AddEditDrugGroup: ElementRef;
    selectedNode: any;
    showProgress: boolean = false;
    drugsTree: any[];
    selectedDrugs: TreeNode[] = [];
    clinicId: number | undefined;
    objectType: EMRObjectType = new EMRObjectType();
    selectedLang = 'ar';
    lstToTranslated: string[] = [];
    treeHelper: TreeHelerClass = new TreeHelerClass();
    groupType = 'DrugsGroup';
    selectedDrugsIDs: any[] = [];
    allDrugs: any[] = [];

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService
        , public translate: TranslateService) { }
   
    ngOnInit(): void {
        // load drugs tree 
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        let vm = this;
        vm.showProgress = true;
        vm.lstToTranslated = ['label', 'labelTranslation'];
        vm.clinicId = this.storage.retrieve("ClinicID");

        this.clinicService.getDrugsGroupsWithoutDrugsForTree(vm.clinicId)
            .subscribe(
            function (drugsGroups) {
                vm.drugsTree = drugsGroups;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });

        this.clinicService.getAllDrugs(vm.clinicId)
            .subscribe(
            function (drugs) {
                vm.allDrugs = drugs;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
            },
            function () {
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
                'children': this.division.drugsGroups
            });
        }
    }

    displayPopup(node: TreeNode) {

        this.AddEditDrugGroup.nativeElement.click();

        this.model = { id: 0 };
        this.selectedNode = node;
        this.selectedDrugs = [];
        this.selectedDrugsIDs = [];
    }

    changeActivation(node, event) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleEMRMasterItemActivation(node.data, event.target.checked, this.objectType.Drugs)
            .subscribe(
            function (response:any) {
                // change the activation of the node
                node.isActive = event.target.checked;
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }


    saveDrugGroup() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;

        if (addNew)
            vm.prepareModel();

        //this.extractSelectedDrugs();
        this.model.relatedObjectsIDs = this.selectedDrugsIDs;

        this.clinicService.saveorUpdateEMRMasterItem(vm.model)
            .subscribe(
            function (response:any) {
                if (addNew) // attach new object to the selected node 
                    vm.selectedNode.children.push(response:any);
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
            function (error:any) { 
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
        this.model.objectType = this.objectType.Drugs;
    }

    extractSelectedDrugs() {
        let relatedObjectsIDs = [];

        for (let item of this.selectedDrugs) {
            if (item.type == 'Drug')
                relatedObjectsIDs.push(item.data);
        }

        this.model.relatedObjectsIDs = relatedObjectsIDs;
    }

    editDrugGroup(node: any) {

        this.selectedNode = node;
        this.selectedDrugs = [];
        this.model = {};
        this.model.id = node.data;
        this.model.name = node.label;
        this.model.nameTranslation = node.labelTranslation;
        this.model.objectId = node.data;
        this.model.divisionId = node.parent.date;
        this.model.objectType = this.objectType.Drugs;
        this.selectedDrugsIDs = [];

        for (let drug of node.children) {
            this.selectedDrugsIDs.push(drug.id);
        }

        // get Drugs under selected Drugs group
        //for (let drug of node.children) {
        //    for (let treeNode of this.drugsTree) {
        //        this.highLightSelectedDrugs(treeNode, drug.data, drug.type);
        //    }
        //}

        //this.extractSelectedDrugs();

        // display popup
        this.AddEditDrugGroup.nativeElement.click();
    }

    private highLightSelectedDrugs(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType) {
            this.selectedDrugs.push(node);
            this.expandParent(node);
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedDrugs(childNode, id, nodeType);
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
        this.selectedDrugs = [];
        setTimeout(() => this.active = true, 0);
        this.filterString = '';
    }
}