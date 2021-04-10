import {Component, Input} from '@angular/core';

@Component({
   
    selector: 'administration-tabs',
    templateUrl: 'administration-tabs.component.html'
})

export class AdministrationTabsComponent {

    // default selected object
    objectType: string = 'Cis.Core.Country';
    title: string = 'Countries';
    selected: number = 1;
    isRegion: boolean | undefined;
    isCity: boolean | undefined;
    isOther: boolean = true;
    isDistrict: boolean | undefined;
    isDrugUnit: boolean | undefined;
    isDrugFrequency: boolean | undefined;
    selectDempghraphicTab: boolean = true;

    // will be removed in implementation
    underConstruction: boolean = false;

    setObjectType(value: string,  title: string) {
        this.objectType = 'Cis.Core.' + value;
       // this.selected = tabNo;
        this.title = title;

        if (value == "Region") {
            this.isRegion = true;
            this.isOther = false;
            this.isCity = false;
            this.isDistrict = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
            this.underConstruction = false;
        } else if (value == "City") {
            this.isCity = true;
            this.isOther = false;
            this.isRegion = false;
            this.isDistrict = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
            this.underConstruction = false;
        }
        else if (value == 'DrugUnit') {
            this.underConstruction = false;
            this.isOther = false;
            this.isRegion = false;
            this.isCity = false;
            this.isDistrict = false;
            this.isDrugUnit = true;
            this.isDrugFrequency = false;
        }
        else if (value =='DrugFrequency')
        {
            this.underConstruction = true;
            this.isOther = false;
            this.isRegion = false;
            this.isCity = false;
            this.isDistrict = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = true;
        }
        else {
            this.isOther = true;
            this.isRegion = false;
            this.isCity = false;
            this.isDistrict = false;
            this.underConstruction = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
        }
       
    }
}