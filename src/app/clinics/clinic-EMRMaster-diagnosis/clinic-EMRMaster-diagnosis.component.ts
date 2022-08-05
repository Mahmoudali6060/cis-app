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

    selector: 'clinic-EMRMaster-diagnosis',
    templateUrl: './clinic-EMRMaster-diagnosis.component.html'
})

export class ClinicEMRMasterDiagnosisComponent implements OnInit, OnChanges {

    filterString!:string;
    leafType: string = 'Diagnose';
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
    @ViewChild('AddEditDiagnoseGroup') AddEditDiagnoseGroup!: ElementRef;
    selectedNode: any;
    showProgress: boolean = false;
    diagnosisTree: any[] = [];
    selectedDiagnosis: TreeNode[] = [];
    clinicId!: number;
    objectType: EMRObjectType = new EMRObjectType();
    lstToTranslated: string[] = [];
    treeHelper: TreeHelerClass = new TreeHelerClass();

    allDiagnosis: any[] = [];
    selectedDiagnosisIDs: any[] = [];
    groupType = 'DiagnosisGroup';

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService,
        private localStorage: LocalStorageService
        , public translate: TranslateService) { }

    ngOnInit(): void {
        // load diagnoses tree 
        this.selectedLang = this.localStorage.retrieve("selectedLanguage");
        let vm = this;
        vm.showProgress = true;
        vm.lstToTranslated = ['label', 'labelTranslation'];
        vm.clinicId = this.storage.retrieve("ClinicID");

        this.clinicService.getDiagnosisGroupsWithoutServicesForTreeView(vm.clinicId.toString())
            .subscribe(
                function (diagnosisGroups: any) {
                    // vm.diagnosisTree = vm.treeHelper.getActiveNodesOnly(diagnosisGroups);
                    vm.diagnosisTree = diagnosisGroups;
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    //vm.showProgress = false;
                },
                function () {
                    //vm.showProgress = false;
                });

        this.clinicService.getAllDiagnosis(vm.clinicId.toString())
            .subscribe(
                function (diagnosis: any) {
                    vm.allDiagnosis = diagnosis;
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
                'children': this.division.diagnosisGroups
            });
        }
    }

    displayPopup(node: TreeNode) {

        this.AddEditDiagnoseGroup.nativeElement.click();

        this.model = { id: 0 };
        this.selectedNode = node;
        this.selectedDiagnosis = [];
        this.selectedDiagnosisIDs = [];
    }

    changeActivation(node: any, event: any) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleEMRMasterItemActivation(node.data, event.target.checked, this.objectType.Diagnosis)
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


    saveDiagnoseGroup() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;

        if (addNew)
            vm.prepareModel();

        this.model.relatedObjectsIDs = this.selectedDiagnosisIDs;

        //this.extractSelectedDiagnosis();

        this.clinicService.saveorUpdateEMRMasterItem(vm.model)
            .subscribe(
                function (response: any) {
                    if (addNew) // attach new object to the selected node 
                        vm.selectedNode.children.push(response);
                    else // update node's name in case of updating 
                    {
                        vm.selectedNode.label = response.label;
                        vm.selectedNode.nameTranslation = response.nameTranslation;
                        vm.selectedNode.labelTranslation = response.labelTranslation;
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
        this.model.objectType = this.objectType.Diagnosis;
    }

    extractSelectedDiagnosis() {
        let relatedObjectsIDs = [];

        for (let item of this.selectedDiagnosis) {
            if (item.type == 'Diagnose')
                relatedObjectsIDs.push(item.data);
        }

        this.model.relatedObjectsIDs = relatedObjectsIDs;
    }

    editDiagnoseGroup(node: any) {

        this.selectedNode = node;
        this.selectedDiagnosis = [];
        this.model = {};
        this.model.id = node.data;
        this.model.name = node.label;
        this.model.nameTranslation = node.nameTranslation;
        this.model.objectId = node.data;
        this.model.divisionId = node.parent.date;
        this.model.objectType = this.objectType.Diagnosis;
        this.selectedDiagnosisIDs = [];

        for (let diagnose of node.children) {
            this.selectedDiagnosisIDs.push(diagnose.id);
        }

        // get diagnosis under selected diagnosis group
        for (let diagnose of node.children) {
            for (let treeNode of this.diagnosisTree) {
                this.highLightSelectedDiagnosis(treeNode, diagnose.data, diagnose.type);
            }
        }

        this.extractSelectedDiagnosis();

        // display popup
        this.AddEditDiagnoseGroup.nativeElement.click();
    }

    private highLightSelectedDiagnosis(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType) {
            this.selectedDiagnosis.push(node);
            this.expandParent(node);
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedDiagnosis(childNode, id, nodeType);
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
        this.selectedDiagnosis = [];
        setTimeout(() => this.active = true, 0);
        this.filterString = '';
    }
}