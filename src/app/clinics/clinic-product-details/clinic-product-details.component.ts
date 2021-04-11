import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { TreeNode } from 'primeng/api';
import { ClinicService } from '../shared/clinic.service';

@Component({

    selector: 'clinic-service-details',
    templateUrl: './clinic-service-details.component.html'
})

export class ClinicServiceDetailsComponent implements OnChanges {
    @Input() serviceId: string = '';
    @Input() treeDataSourceItems: any[] = [];
    @Output() onServiceChanged = new EventEmitter();
    @Output() serviceIdValue: EventEmitter<string> = new EventEmitter<string>();

    selectServicesTab: boolean = true;
    active: boolean = true;
    model: any = {};
    showProgress = false;
    selectedGroupNode!: TreeNode;
    parentId!: any;
    @ViewChild('btnAddDiagnoseGroup') btnAddDiagnoseGroup!: ElementRef;
    @ViewChild('btnAddDiagnose') btnAddDiagnose!: ElementRef;


    constructor(public toastr: ToastrService
        , private clinicService: ClinicService) { }

    ngOnChanges(changes: SimpleChanges) {
        let thisComponent = this;
        // thisComponent.showProgress = true;
        if (this.serviceId.toString().toLowerCase() != 'new') {
            this.clinicService.getServiceById(this.serviceId)
                .subscribe(
                    function (response: any) {
                        thisComponent.model = response;
                        thisComponent.parentId = thisComponent.model.parentId;
                        if (thisComponent.parentId > 0)
                            thisComponent.displaySelectedParentGroupNode(thisComponent.parentId);
                    },
                    function (error: any) {
                        thisComponent.toastr.error('Failed to get service - ' + error, '');
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    //private
    displaySelectedParentGroupNode(parentGroupId: string) {
        let vm = this
        vm.treeDataSourceItems.forEach(node => {
            vm.displaySelectedNodeRecursive(node, parentGroupId);

            if (node.data == parentGroupId)
                vm.selectedGroupNode = node;
        });
    }

    private displaySelectedNodeRecursive(node: TreeNode, parentGroupId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displaySelectedNodeRecursive(childNode, parentGroupId);

                if (childNode.data == parentGroupId)
                    this.selectedGroupNode = childNode;

            });
        }
    }
    saveService(): void {
        let thisComponent = this;

        if (this.model.id > 0) {
            //Update
            this.clinicService.updateService(this.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.toastr.success('Saved successfully', '');
                        thisComponent.onServiceChanged.emit();
                        thisComponent.serviceIdValue.emit(thisComponent.serviceId);
                        thisComponent.clear();
                    },
                    function (error: any) {
                        thisComponent.toastr.error('Error occured during saving ', '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });

        }
        else {
            this.clinicService.createService(this.model)
                .subscribe(
                    function (response: any) {

                        thisComponent.model = response;
                        thisComponent.toastr.success('Saved successfully', '');
                        thisComponent.onServiceChanged.emit();
                        thisComponent.serviceIdValue.emit(thisComponent.serviceId);
                        thisComponent.clear();
                    },
                    function (error: any) {
                        thisComponent.toastr.error('Error occured during saving ', '');
                        thisComponent.showProgress = false;
                    },
                    function () {
                        thisComponent.showProgress = false;
                    });
        }
    }

    nodeSelect(event: any) {
        this.model.parentId = event.node.data;
    }
    nodeUnselect(event: any) {
        this.model.parentId = '';
    }

    clear() {
        this.model = {};
        this.serviceId = 'new';
        this.selectedGroupNode = {};
        this.serviceIdValue.emit(this.serviceId);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}