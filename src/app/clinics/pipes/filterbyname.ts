//import { Pipe, PipeTransform } from '@angular/core';
////import { TreeNode } from 'angular2-tree-component';

//@Pipe({ name: 'filterTreePipe' })
//export class FilterTreePipe implements PipeTransform {
//    transform(nodes: any, filter: string): any {
//        if (filter !== undefined && filter != "") {
//            return filterNodeArray(nodes, filter);
//        } else
//            return nodes;
//    }
//}

//function filterNodeArray(nodes, filter) {
//    if (nodes)
//        return nodes.filter((node) => filterNodeRecursively(node, filter));
//}

//function filterNodeRecursively(node, filter) {
//    if (node.children) {
//        return filterNodeArray(node.children, filter).length > 0;
//    } else {
//        return matches(node, filter);
//    }
//}

//function matches(node, filter) {
//    return node.name.toUpperCase().startsWith(filter.toUpperCase()) || node.id.toUpperCase().startsWith(filter.toUpperCase());
//}