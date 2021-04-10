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
   
    selector: 'clinic-EMRMaster-services',
    templateUrl: 'clinic-EMRMaster-services.component.html'
})

export class ClinicEMRMasterServicesComponent implements OnInit, OnChanges {

    filterString: string | undefined;
    leafType: string = 'Service';
    selectedLang = 'ar';

    active: boolean = true;
    selectedGroup: TreeNode;
    @Input() division: any = {};
    @Input() isClinicAdmin: boolean = false;
    @Input() enableAddRootBtn: boolean = false;
    @Input() enableEditBtn: boolean = false;
    @Input() enableActivateBtn: boolean = false;
    items: any[] = [];
    model: any = {};
    @ViewChild('AddEditServiceGroup') AddEditServiceGroup: ElementRef;
    selectedNode: any;
    showProgress: boolean = false;
    servicesTree: any[] = [];
    allservices: any[] = [];
    groupServicesList: any[] = [];
    selectedServices: TreeNode[] = [];
    clinicId: number | undefined;
    objectType: EMRObjectType = new EMRObjectType();
    lstToTranslated: string[] = [];
    treeHelper: TreeHelerClass = new TreeHelerClass();
    selectedServicesIDs: any[] = [];
    groupType = 'ServiceGroup';

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        private toastr: ToastrService,
        public translate: TranslateService) { }

    ngOnInit(): void {
        // load services tree 
        this.selectedLang = this.storage.retrieve("selectedLanguage");
        let vm = this;
        vm.showProgress = true;
        vm.clinicId = this.storage.retrieve("ClinicID");
        vm.lstToTranslated = ['label', 'labelTranslation'];

        this.clinicService.getAllServiceGroupsWithoutServicesForTreeView(vm.clinicId.toString())
            .subscribe(
            function (servicesGroups) {
                vm.servicesTree = servicesGroups; 
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                //vm.showProgress = false;
            },
            function () {
                //vm.showProgress = false;
            });

        this.clinicService.getAllServices(vm.clinicId.toString())
            .subscribe(
            function (services) {
                vm.allservices = services;
            },
            function (error:any) { 
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
                'children': this.division.servicesGroups
            });
        }
    }

    displayPopup(node: TreeNode) {

        this.AddEditServiceGroup.nativeElement.click();

        this.model = { id: 0 };
        this.selectedNode = node;
        this.selectedServices = [];
        this.selectedServicesIDs = [];
    }

    changeActivation(node, event) {
        let vm = this;
        vm.showProgress = true;
        this.clinicService.toggleEMRMasterItemActivation(node.data, event.target.checked, this.objectType.Services)
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


    saveServiceGroup() {
        let vm = this;
        let addNew = true;
        if (vm.model.id > 0)
            addNew = false;
        vm.showProgress = true;

        if (addNew)
            vm.prepareModel();


        this.model.relatedObjectsIDs = this.selectedServicesIDs;
        //this.extractSelectedServices();

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
        this.model.objectType = this.objectType.Services;
    }

    extractSelectedServices() {
        let relatedObjectsIDs = [];

        for (let item of this.selectedServices) {
            if (item.type == 'Service')
                relatedObjectsIDs.push(item.data);
        }

        this.model.relatedObjectsIDs = relatedObjectsIDs;
    }

    editServiceGroup(node: any) {

        this.selectedNode = node;
        this.selectedServices = [];
        this.selectedServicesIDs = [];
        this.model = {};
        this.model.id = node.data;
        this.model.name = node.label;
        this.model.nameTranslation = node.labelTranslation;
        this.model.objectId = node.data;
        this.model.divisionId = node.parent.date;
        this.model.objectType = this.objectType.Services;

        for (let service of node.children) {
            this.selectedServicesIDs.push(service.id);
        }

        //// get Services under selected Services group
        //for (let service of node.children) {
        //    for (let treeNode of this.servicesTree) {
        //        this.highLightSelectedServices(treeNode, service.data, service.type);
        //    }
        //}

        //this.extractSelectedServices();

        // display popup
        this.AddEditServiceGroup.nativeElement.click();
    }

    private highLightSelectedServices(node: TreeNode, id: number, nodeType: string) {
        if (node.data == id && node.type == nodeType) {
            this.selectedServices.push(node);
            this.expandParent(node);
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.highLightSelectedServices(childNode, id, nodeType);
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
        this.selectedServices = [];
        setTimeout(() => this.active = true, 0);
        this.filterString = '';
    }
   
}