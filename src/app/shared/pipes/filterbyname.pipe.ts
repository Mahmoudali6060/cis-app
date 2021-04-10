import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

    transform(value: any[], filterBy: any): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((obj: any) =>
            obj.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || obj.nameTranslation.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
        // search by name or name translation 
    }
}
