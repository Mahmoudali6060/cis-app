import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

import { ClinicService } from '../shared/clinic.service';

@Component({

    selector: 'clinic-humanResource',
    templateUrl: './clinic-humanResource.component.html'
})

export class ClinicHumanResourceComponent implements OnInit {

    @Input() isEditMode: boolean = false;
    @Input() selectedNode: any;
    @Input() isClinicAdmin: boolean = false;
    @Input() enableSaveBtn: boolean = false;
    @Output() onModelUpdated = new EventEmitter<any>();
    @ViewChild('basicDataLink') basicDataLink!: ElementRef;
    selectedUserToEdit: any;
    departmentName = '';
    divisionName = '';
    divisionId = '';
    isNonMedicalDepartment: boolean = false;
    clinicId = '';
    humanResourceWrapper: any;
    showProgress: boolean = false;

    constructor(private clinicService: ClinicService,
        public toastr: ToastrService,
        public localStorage: LocalStorageService) { }

    ngOnChanges(): void {

        if (this.isEditMode)//Human Resource Node
        {
            if (this.selectedNode != undefined) {
                if (this.selectedNode.parent != undefined) {
                    this.divisionName = this.selectedNode.parent.label;

                    if (this.selectedNode.parent.parent != undefined) {
                        this.departmentName = this.selectedNode.parent.parent.label;

                        if (this.selectedNode.parent.parent.parent != undefined)
                            this.isNonMedicalDepartment = (this.selectedNode.parent.parent.parent.type == 'NonMedical') ? true : false;
                    }

                }

                let userToEditId = this.selectedNode.data;
                this.loadUserToEdit(userToEditId);
            }
        }
        else//Divsion Node
        {
            this.selectedUserToEdit = undefined;

            if (this.selectedNode != undefined) {

                this.divisionId = this.selectedNode.data;
                this.divisionName = this.selectedNode.label;

                if (this.selectedNode.parent != undefined) {
                    this.departmentName = this.selectedNode.parent.label;

                    if (this.selectedNode.parent.parent != undefined)
                        this.isNonMedicalDepartment = (this.selectedNode.parent.parent.type == 'NonMedical') ? true : false;
                }
            }

        }

        this.basicDataLink.nativeElement.click();
    }

    ngOnInit(): void {
        this.clinicId = this.localStorage.retrieve("ClinicID");

        this.loadHumanResourcesWrapper();


    }

    loadHumanResourcesWrapper() {
        this.showProgress = true;
        let thisComponent = this;
        this.clinicService.getHumanResourcesWrapper(this.clinicId)
            .subscribe(
                function (response: any) {
                    thisComponent.humanResourceWrapper = response;
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    loadUserToEdit(userToEditId: any) {
        this.showProgress = true;
        let thisComponent = this;
        this.clinicService.getHumanResourceById(userToEditId)
            .subscribe(
                function (response: any) {
                    thisComponent.selectedUserToEdit = response;

                    if (thisComponent.selectedUserToEdit.reachInfo == undefined)
                        thisComponent.selectedUserToEdit.reachInfo = {};

                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () { // finally
                    thisComponent.showProgress = false;
                });
    }

    updateModel(updatedModel: any) {
        this.selectedUserToEdit = updatedModel;

        if (!this.isEditMode)//Add new node to the tree
        {
            let newNode = {
                label: updatedModel.name,
                labelTranslation: updatedModel.nameTranslation,
                data: updatedModel.id,
                isActive: updatedModel.isActive,
                type: 'SecurityUser'
            }
            this.selectedNode.children.push(newNode);
            //this.isEditMode = true;
            this.raiseModelUpdated(newNode);
        }
        else//Update existing node
        {
            this.selectedNode.label = updatedModel.name;
            this.selectedNode.labelTranslation = updatedModel.nameTranslation;
        }
    }

    raiseModelUpdated(node: any) {
        this.onModelUpdated.emit(node);
    }

    isDoctorEditing(): boolean {
        if (this.selectedUserToEdit != undefined && this.selectedUserToEdit.type == 'Doctor')
            return true;

        return false;
    }

}