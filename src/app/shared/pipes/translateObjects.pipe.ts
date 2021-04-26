import { PipeTransform, Pipe } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Pipe({
    name: 'translateObjects',
})
export class TranslateObjectsPipe implements PipeTransform {

    public constructor(
        private storage: LocalStorageService
    ) { }

    transform(value: any, primaryProperty: string | null, secondaryProperty: any | null, lstToTranslated: any[] | undefined): any {
        let selectedLanguage = this.storage.retrieve("selectedLanguage");

        if (selectedLanguage == null || selectedLanguage == undefined)
            selectedLanguage = 'en';

        //|| primaryProperty.trim() === ''
        //|| secondaryProperty.trim() === ''
        if (primaryProperty === undefined || primaryProperty === null || primaryProperty === '')
            primaryProperty = "name";

        if (secondaryProperty === undefined || secondaryProperty === null || secondaryProperty === '')
            secondaryProperty = "nameTranslation";
        if (value != undefined) {

            if (value.constructor === Array) {
                value.forEach(obj => {
                    if (selectedLanguage) {
                        if (selectedLanguage == "en") {
                            if (lstToTranslated != undefined && lstToTranslated != null && lstToTranslated.length > 0) {
                                for (let i = 0; i < lstToTranslated.length; i++) {
                                    let arabicItem = lstToTranslated[i];
                                    let englishItem = '';
                                    let j = i + 1;
                                    let max = lstToTranslated.length - 1;

                                    if (j <= max)
                                        englishItem = lstToTranslated[j];
                                    else
                                        englishItem = arabicItem;

                                    if (englishItem != undefined && englishItem != '' && englishItem != null) {

                                        if (obj[englishItem] != undefined && obj[englishItem] != '' && obj[englishItem] != null)
                                            obj[arabicItem] = obj[englishItem];
                                        else
                                            obj[arabicItem] = obj[arabicItem];
                                    }


                                    i = i + 1;
                                }
                            }
                            else if (primaryProperty != undefined && primaryProperty != null && primaryProperty != '' && secondaryProperty != undefined && secondaryProperty != null && secondaryProperty != '') {
                                if (obj[secondaryProperty] != undefined && obj[secondaryProperty] != '' && obj[secondaryProperty] != null) {
                                    obj[primaryProperty] = obj[secondaryProperty];
                                }
                            }


                        } else {

                            if (lstToTranslated != undefined && lstToTranslated != null && lstToTranslated.length > 0) {
                                for (let i = 0; i < lstToTranslated.length; i++) {
                                    let arabicItem = lstToTranslated[i];
                                    obj[arabicItem] = obj[arabicItem];

                                    i = i + 1;
                                }
                            }
                            else if (primaryProperty != undefined && primaryProperty != null && primaryProperty != '' && secondaryProperty != undefined && secondaryProperty != null && secondaryProperty != '')
                                obj[primaryProperty] = obj[primaryProperty];


                        }
                        if (obj.children != null) {
                            this.transform(obj.children, primaryProperty, secondaryProperty, lstToTranslated);

                        }

                    }
                });
            }
            else {
                if (selectedLanguage && value) {
                    if (selectedLanguage == "en") {
                        if (value[secondaryProperty] != undefined && value[secondaryProperty] != '' && value[secondaryProperty] != null) {
                            value[primaryProperty] = value[secondaryProperty];
                        }
                    }
                    else {
                        value[primaryProperty] = value[primaryProperty];
                    }
                }
            }
        }

        return value;
    }
}
