export class TreeHelerClass {

    getActiveNodesOnly(originalList: any[]) {
        let activeList: any[] = [];

        if (originalList) {
            for (let node of originalList) {

                if (node.parent == undefined && node.isActive) {
                    // create temp node for root node
                    var tempNode: any = {};
                    tempNode = { data: node.data, label: node.label, labelTranslation: node.labelTranslation, type: node.type, isActive: node.isActive, expanded: true, parent: node.parent };
                    tempNode.children = [];
                    // add active root node to the list
                    activeList.push(tempNode);
                    //get active children
                    this.getActiveChildNodes(node, tempNode);
                }
            }
        }

        return activeList;
    }

    private getActiveChildNodes(node: any, ParentTempNode: any) {

        if (node.children) {
            node.children.forEach((childNode:any) => {
                if (childNode.isActive) {
                    var tempNode: any = {};
                    tempNode = { data: childNode.data, label: childNode.label, labelTranslation: childNode.labelTranslation, type: childNode.type, isActive: childNode.isActive, expanded: true, parent: childNode.parent };
                    tempNode.children = [];
                    ParentTempNode.children.push(tempNode);
                }

                this.getActiveChildNodes(childNode, tempNode);
            });
        }
    }
}