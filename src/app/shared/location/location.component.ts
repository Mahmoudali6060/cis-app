import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SharedService } from '../shared/shared.service';

@Component({

    selector: 'location',
    templateUrl: 'location.component.html'
})

export class LocationComponent implements OnInit {
    @Input() location: any;
    countriesList: any[] = [];
    filteredCitiesList: any[] = [];
    filteredRegionsList: any[] = [];
    showProgress = false;

    constructor(private sharedService: SharedService,
        public toastr: ToastrService
    ) { }

    ngOnInit(): void {
        let thisComponent = this;
        thisComponent.showProgress = true;

        //get address wrapper 
        this.sharedService.getAddressWrapper()
            .subscribe(
                function (response: any) {
                    thisComponent.countriesList = response.countries;
                    if (thisComponent.location.countryId > 0) {
                        thisComponent.fillRegions(thisComponent.location.countryId);
                    }

                    if (thisComponent.location.regionId > 0) {
                        thisComponent.fillCities(thisComponent.location.regionId);
                    }
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error, '');
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });
    }

    fillRegions(id: string) {
        var country = this.countriesList.find(i => i.id == id);

        if (country != null) {
            this.filteredRegionsList = country.regions;
            this.filteredCitiesList = [];
        }
        else {
            this.filteredRegionsList = [];
            this.filteredCitiesList = [];
        }
    }

    fillCities(id: string) {
        var region = this.filteredRegionsList.find(i => i.id == id);

        if (region != null)
            this.filteredCitiesList = region.cities;
        else
            this.filteredCitiesList = [];
    }

}