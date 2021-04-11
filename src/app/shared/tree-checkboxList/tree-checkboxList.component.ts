import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
    selector: 'tree-checkboxList',
    templateUrl: 'tree-checkboxList.component.html'
})

export class TreeCheckboxListComponent implements OnInit, OnChanges {

    selectedLang = 'ar';
    @Input() treeList: any[] = [];
    @Input() items: any[] = [];
    @Input() selectedItemsIDs: any[] = [];
    @Input() groupType: string = '';
    leafList: any[] = [];
    lstToTranslated = ['label', 'labelTranslation', 'name', 'nameTranslation'];
    //@Output() onItemChanged = new EventEmitter<any[]>();
    filterString!:string;
    selectedGroup: any;
    showProgress = false;
    selectedItems: any[] = [];

    constructor(public toastr: ToastrService,
        private storage: LocalStorageService
    ) { }

    ngOnInit(): void {

        this.selectedLang = this.storage.retrieve("selectedLanguage");

    }

    ngOnChanges(): void {
        this.selectedItems = [];
        let vm = this;
        if (this.selectedItemsIDs && this.selectedItemsIDs.length > 0 && vm.items && vm.items.length > 0) {
            for (let id of this.selectedItemsIDs) {
                let selectedItem = vm.items.find((item :any)=> item.id == id);
                if (selectedItem)
                    vm.selectedItems.push(vm.items.find((item :any)=> item.id == id));
            }
        }
    }

    nodeSelect(event: any) {

        this.leafList = [];
        if (this.items && this.items.length > 0) {
            this.leafList = this.items.filter((item: any) => item.parentGroupId === event.node.id);
        }
    }

    updateSelectedItems(itemId: any, event: any) {
        if (event.target.checked) {
            this.selectedItemsIDs.push(itemId);

            // add item to selected items list
            this.selectedItems.push(this.items.find((item :any)=> item.id == itemId));
        }
        else {
            var index = this.selectedItemsIDs.indexOf(itemId);
            if (index > -1)
                this.selectedItemsIDs.splice(index, 1);

            // remove item to selected items list
            var obj = this.selectedItems.find((item :any)=> item.id == itemId);
            var itemIndex = this.selectedItems.indexOf(obj);
            if (itemIndex > -1)
                this.selectedItems.splice(itemIndex, 1);
        }
    }

    deleteItem(itemId: any) {
        var index = this.selectedItemsIDs.indexOf(itemId);
        if (index > -1)
            this.selectedItemsIDs.splice(index, 1);

        // remove item to selected items list
        var itemIndex = this.selectedItems.findIndex(x => x.id == itemId);
        if (itemIndex > -1)
            this.selectedItems.splice(itemIndex, 1);
    }

}