import { Component, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { ClinicService } from '../shared/clinic.service';
import { TreeNode } from 'primeng/api';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Table } from 'primeng/table';

@Component({
    selector: 'clinic-humanResource-serviceFees',
    templateUrl: './clinic-humanResource-serviceFees.component.html'
})

export class ClinicHumanResourceServiceFeesComponent implements OnChanges {

    filterString!:string;
    leafType: string = 'Service';

    @Input() humanResourceWrapper: any;
    @Input() selectedUserToEdit: any;
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onModelUpdated = new EventEmitter<any>();

    active: boolean = true;
    showProgress: boolean = false;
    servicesTree: any[] = [];
    selectedNode!: TreeNode;
    userServiceFees: any[] = [];
    serviceFeeModel: any = { id: 0 };
    isEditMode: boolean = false;
    lstToTranslated: string[] = [];
    lstToBeTranslated: string[] = [];
    @ViewChild('dt') table!: Table;
    
    constructor(private clinicService: ClinicService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService
        , public translate: TranslateService) { }
    ngOnInit(): void {

        this.lstToTranslated = ['serviceName', 'serviceNameTranslation'];
        this.lstToBeTranslated = ['label', 'labelTranslation'];
    }
    ngOnChanges(): void {

        if (this.humanResourceWrapper != undefined) {
            this.servicesTree = this.humanResourceWrapper.serviceGroups;

            if (this.servicesTree == undefined)
                this.servicesTree = [];

        }

        if (this.selectedUserToEdit != undefined) {
            this.userServiceFees = this.selectedUserToEdit.serviceFees;
        }

    }

    saveServiceFees(): void {

        if (this.selectedNode != undefined && this.selectedNode.type == 'Service') {
            if (!this.isServiceDuplicated(this.selectedNode.data, this.serviceFeeModel.id)) {
                let thisComponent = this;
                thisComponent.showProgress = true;

                if (!this.isEditMode) {

                    this.serviceFeeModel.securityUserId = this.selectedUserToEdit.id;
                    this.selectedUserToEdit.serviceFees.push(this.serviceFeeModel);
                }

                this.serviceFeeModel.serviceId = this.selectedNode.data;
                this.clinicService.updateHumanResource(thisComponent.selectedUserToEdit)
                    .subscribe(
                        function (response: any) {

                            //thisComponent.selectedUserToEdit = response;
                            //thisComponent.userServiceFees = response.serviceFees;
                            thisComponent.raiseModelUpdated(response);
                            thisComponent.clear();

                            let msg = thisComponent.translate.instant("SavedSuccessfully");
                            thisComponent.toastr.success(msg, '');
                        },
                        function (error: any) {
                            //console.log("Error happened" + error)
                           thisComponent.toastr.error(error.error, '');
                            thisComponent.showProgress = false;
                        },
                        function () {
                            thisComponent.showProgress = false;
                        });
            }
            else {
                let msg = this.translate.instant("DuplicatedService");
                this.toastr.error(msg, '');
            }
        }
        else {
            let msg = this.translate.instant("EmptyService");
            this.toastr.error(msg, '');
        }
    }

    editServiceFee(id: any) {
        this.isEditMode = true;
        this.serviceFeeModel = this.selectedUserToEdit.serviceFees.find((itm: any) => itm.id == id);
        if (this.serviceFeeModel != undefined)
            this.selectServiceNode(this.serviceFeeModel.serviceId);
    }

    isServiceDuplicated(serviceId: any, serviceFeeId: any): boolean {
        if (this.selectedUserToEdit != undefined) {
            let duplicatedItem = this.selectedUserToEdit.serviceFees.find((itm: any) => itm.serviceId == serviceId && itm.id != serviceFeeId);
            if (duplicatedItem != undefined)
                return true;
        }

        return false;
    }

    clear() {
        this.serviceFeeModel = { id: 0 };
        this.isEditMode = false;
        this.selectedNode = {};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    raiseModelUpdated(updatedModel: any) {
        this.onModelUpdated.emit(updatedModel);
    }

    private selectServiceNode(serviceId: number) {
        for (let nod of this.servicesTree) {
            this.checkChildNodes(nod, serviceId);
        }
    }

    private checkChildNodes(node: TreeNode, serviceId: number) {

        if (node.data == serviceId && node.type == "Service") {
            this.selectedNode = node;

            return;
        }

        if (node.children) {
            node.children.forEach(childNode => {
                this.checkChildNodes(childNode, serviceId);
            });
        }

    }

}