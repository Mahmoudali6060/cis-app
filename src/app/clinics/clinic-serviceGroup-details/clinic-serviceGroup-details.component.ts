import {Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';

import { TreeNode } from 'primeng/primeng';
import {ClinicService} from '../shared/clinic.service';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
@Component({
   
    selector: 'clinic-serviceGroup-details',
    templateUrl: 'clinic-serviceGroup-details.component.html'
})

export class ClinicServiceGroupDetailsComponent implements OnChanges {
    @Input() serviceGroupId: string = '';
    @Input() treeDataSourceItems: any[] = [];
    @Output() onServiceGroupChanged = new EventEmitter();
    @Output() serviceGroupIdValue: EventEmitter<string> = new EventEmitter<string>();
    @Output() selectedGroupNodeValue: EventEmitter<string> = new EventEmitter<string>();

    selectServicesTab: boolean = true;
    active: boolean = true;
    model: any = {};
    selectedGroupNode: TreeNode;
    tempSelectedGroupNode: TreeNode;
    showProgress: boolean = false;

    constructor(public toastr: ToastrService
        , private clinicService: ClinicService
        , public translate: TranslateService) { }

    ngOnChanges(changes: SimpleChanges) {
        let thisComponent = this;
        // thisComponent.showProgress = true;
        if (this.serviceGroupId.toString().toLowerCase() != 'new') {
            this.clinicService.getServiceGroupById(this.serviceGroupId)
                .subscribe(
                function (response:any) {
                    thisComponent.model = response;
                    if (thisComponent.model.parentGroupId > 0) {
                        thisComponent.displaySelectedParentGroupNode(response.parentGroupId);
                    }
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
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

            if (node.data == parentGroupId) {
                vm.selectedGroupNode = node;
            }

            //if (node.data == vm.serviceGroupId) {
            //    vm.tempSelectedGroupNode = node;
            //}

        });
    }

    private displaySelectedNodeRecursive(node: TreeNode, parentGroupId: string) {
        if (node.children) {
            node.children.forEach(childNode => {
                this.displaySelectedNodeRecursive(childNode, parentGroupId);

                if (childNode.data == parentGroupId) {
                    this.selectedGroupNode = childNode;
                }

                //if (childNode.data == this.serviceGroupId) {
                //    this.tempSelectedGroupNode = node;
                //}


            });
        }
    }
    saveServiceGroup(): void {
        let thisComponent = this;
        //if (thisComponent.selectedGroupNode.data > 0)
        //{
        //    thisComponent.model.parentGroupId = thisComponent.selectedGroupNode.data;
        //}
        if (this.model.id > 0) {
            //Update
            this.clinicService.updateServiceGroup(this.model)
                .subscribe(
                function (response:any) {

                    thisComponent.model = response;
                    thisComponent.onServiceGroupChanged.emit();
                    thisComponent.serviceGroupIdValue.emit(thisComponent.serviceGroupId);
                    thisComponent.selectedGroupNodeValue.emit(thisComponent.serviceGroupId);
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.clear();
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });

        }
        else {
            this.clinicService.createServiceGroup(this.model)
                .subscribe(
                function (response:any) {

                    thisComponent.model = response;
                    let msg = thisComponent.translate.instant("SavedSuccessfully");
                    thisComponent.toastr.success(msg, '');
                    thisComponent.onServiceGroupChanged.emit();
                    thisComponent.serviceGroupIdValue.emit(thisComponent.serviceGroupId);
                    thisComponent.clear();
                },
                function (error:any) { 
                    thisComponent.toastr.error(error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
        }
    }

    nodeSelect(event:any) {
        this.model.parentGroupId = event.node.data;
    }
    nodeUnselect(event:any) {
        this.model.parentGroupId = '';
    }

    clear() {
        this.model = {};
        this.serviceGroupId = 'new';
        this.selectedGroupNode = null;
        this.active = false;
        this.serviceGroupIdValue.emit(this.serviceGroupId);
        setTimeout(() => this.active = true, 0);
    }
}