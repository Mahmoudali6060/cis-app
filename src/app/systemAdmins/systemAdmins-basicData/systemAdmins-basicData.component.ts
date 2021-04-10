import {Component, Input} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
   
    selector: 'systemAdmins-basicData',
    templateUrl: 'systemAdmins-basicData.component.html'
})

export class SystemAdminsBasicDataComponent {
    public constructor(
        public storage: LocalStorageService
       ) { }
    // default selected object
    objectType: string = 'Cis.Core.Country';
    title: string = 'Countries';
    selected: number = 1;
    isRegion: boolean | undefined;
    isCity: boolean | undefined;
    isLocation: boolean | undefined;
    isOther: boolean = true;
    isDrugUnit: boolean | undefined;
    isDrugFrequency: boolean | undefined;
    selectDemoghraphicTab: boolean = true;


    setObjectType(value: string,  title: string) {
        this.objectType = 'Cis.Core.' + value;
        // this.selected = tabNo;
        //this.title = title;
        this.getObjectTitle(value);

        if (value == "Region") {
            this.isRegion = true;
            this.isOther = false;
            this.isCity = false;
            this.isLocation = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
        } else if (value == "City") {
            this.isCity = true;
            this.isLocation = false;
            this.isOther = false;
            this.isRegion = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
        }
        else if (value == 'DrugUnit') {
            this.isOther = false;
            this.isRegion = false;
            this.isCity = false;
            this.isLocation = false;
            this.isDrugUnit = true;
            this.isDrugFrequency = false;
        }
        else if (value =='DrugFrequency')
        {
            this.isOther = false;
            this.isRegion = false;
            this.isCity = false;
            this.isLocation = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = true;
        }
        else if (value == "Location") {
            this.isCity = false;
            this.isLocation = true;
            this.isOther = false;
            this.isRegion = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
        }
        else {
            this.isOther = true;
            this.isRegion = false;
            this.isCity = false;
            this.isLocation = false;
            this.isDrugUnit = false;
            this.isDrugFrequency = false;
        }

    }

    getObjectTitle(selectedValue)
    {
        var selectedObject = this.objectsList.find(obj => obj.value == selectedValue);

        this.title = selectedObject.name;
    }

    objectsList: any[] = [
        { 'value': 'Country', 'name': 'الدول', 'nameTranslation': 'Countries'},
        { 'value': 'Region', 'name': 'المناطق', 'nameTranslation': 'Regions'},
        { 'value': 'City', 'name': 'المدن', 'nameTranslation': 'Cities' },
        { 'value': 'Location', 'name': 'الموقع', 'nameTranslation': 'Location'},
        { 'value': 'Nationality', 'name': 'الجنسيات', 'nameTranslation': 'Nationalities' },
        { 'value': 'Religion', 'name': 'الديانات', 'nameTranslation': 'Religions' },
        { 'value': 'MaritalStatus', 'name': 'الحالة الاجتماعية ', 'nameTranslation': 'Marital Status' },
        { 'value': 'AttachmentType', 'name': 'نوع المرفق', 'nameTranslation': 'Attachment Type'},
        { 'value': 'VendorCategory', 'name': 'تصنيف المورد', 'nameTranslation': 'Vendor Category' },
        { 'value': 'PhysicalResourceType', 'name': 'أنواع الموارد غير البشرية', 'nameTranslation': 'Physical Resources Type'},
        { 'value': 'HumanResourceType', 'name': 'أنواع الموارد البشرية', 'nameTranslation': 'Human Resource Types' },
        { 'value': 'EducationLevel', 'name': 'المستوى التعليمي', 'nameTranslation': 'Education Level'},
        { 'value': 'VolumeUnit', 'name': 'وحدة الحجم', 'nameTranslation': 'Volume Unit' },
        { 'value': 'HeightUnit', 'name': 'وحدة الطول', 'nameTranslation': 'Height Unit' },
        { 'value': 'WeightUnit', 'name': 'وحدة الوزن', 'nameTranslation': 'Weight Unit'},
        { 'value': 'DrugUnit', 'name': 'وحدة العقار', 'nameTranslation': 'Drug Unit'},
        { 'value': 'DrugFrequency', 'name': 'تكرارية العقار ', 'nameTranslation': 'Drug Frequency'},
        { 'value': 'IDType', 'name': 'نوع الهوية', 'nameTranslation': 'ID Type'},
        { 'value': 'ClinicLevel', 'name': 'مستويات العيادة', 'nameTranslation': 'Clinic Levels' }];
}