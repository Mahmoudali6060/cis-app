import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterbynameorcode'
})
export class FilterByNameOrCodePipe implements PipeTransform {
    results: any[] = [];
    matchedNodes: any[] = [];
    leafType: string = '';

    transform(value: any[], filterString: string , leafType: string): any[] {

        this.results = [];
        this.matchedNodes = [];
        this.leafType = leafType;

        if (filterString == '' || filterString == null || filterString == undefined) {
            return value;
        }

        for (let node of value)
            this.extractMatchedNodes(node, filterString, null);


        if (this.matchedNodes.length == 0)
            return [];

        return this.results;
    }

    private extractMatchedNodes(node: any, filterString: string, parentNode: any) {

        var tempNode: any = {};
        tempNode = { data: node.data, label: node.label, labelTranslation: node.labelTranslation, type: node.type, isActive: node.isActive, expanded: true, parent: node.parent };
        tempNode.children = [];

        if (parentNode == null) {
            this.results.push(tempNode);
        }
        else {
            if (parentNode.type != this.leafType && node.type != this.leafType)
                parentNode.children.push(tempNode)
        }

        if (node.type == this.leafType) {
            if (node.label.toString().toLowerCase().includes(filterString.toString().toLowerCase())
                || node.labelTranslation.toString().toLowerCase().includes(filterString.toString().toLowerCase())
                || node.code.toString().toLowerCase().includes(filterString.toString().toLowerCase())
            )
            {
                this.matchedNodes.push(node);

                // if (parentNode.type != 'Diagnose')
                parentNode.children.push(node);
            }
        }

        if (node.children) {
            node.children.forEach((childNode: any) => {
                this.extractMatchedNodes(childNode, filterString, tempNode);
            });
        }
    }
}
