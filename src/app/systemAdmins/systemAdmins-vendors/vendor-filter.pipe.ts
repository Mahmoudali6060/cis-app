import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vendorFilter'
})
export class VendorFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: any): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((vendor: any) =>
            vendor.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
