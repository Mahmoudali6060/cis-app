import { Component, OnInit, Input, AfterContentChecked, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SharedService } from '../shared/shared.service';

@Component({

    selector: 'address',
    templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit, AfterContentChecked {
    @Input() reachInfo: any = {};
    countries: any[] = [];
    filteredCities: any[] = [];
    filteredRegions: any[] = [];
    filteredLocations: any[] = [];
    showProgress = false;

    map: any;
    marker: any = {};
    markers: any[] = [];

    constructor(private sharedService: SharedService,
        public toastr: ToastrService
    ) { }

    ngOnInit(): void {

        //this.initializeDefaultMap();
        this.initializeMap();

        let vm = this;
        vm.showProgress = true;

        //get address wrapper
        this.sharedService.getAddressWrapper()
            .subscribe(
                function (response: any) {
                    vm.countries = response.countries;

                    vm.fillPageLists();
                },
                function (error: any) {
                    vm.toastr.error(error.error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
    }

    ngOnChanges(changes: SimpleChanges) {
        this.displayMarker();

        this.fillPageLists();
    }

    fillPageLists() {
        let vm = this;
        if (this.reachInfo != null && this.reachInfo != undefined) {
            if (vm.reachInfo.countryId != undefined && vm.reachInfo.countryId > 0) {
                vm.fillRegions(vm.reachInfo.countryId);
            }

            if (vm.reachInfo.regionId != undefined && vm.reachInfo.regionId > 0) {
                vm.fillCities(vm.reachInfo.regionId);
            }

            if (vm.reachInfo.cityId != undefined && vm.reachInfo.cityId > 0) {
                vm.fillLocations(vm.reachInfo.cityId);
            }
        }
    }

    ngAfterContentChecked(): void {

        //let vm = this;
        //if (vm != null && vm != undefined && vm.reachInfo != null) {
        //    if (vm.reachInfo.countryId != undefined && vm.reachInfo.countryId > 0) {
        //        vm.fillRegions(vm.reachInfo.countryId);
        //    }

        //    if (vm.reachInfo.regionId != undefined && vm.reachInfo.regionId > 0) {
        //        vm.fillCities(vm.reachInfo.regionId);
        //    }

        //    if (vm.reachInfo.cityId != undefined && vm.reachInfo.cityId > 0) {
        //        vm.fillLocations(vm.reachInfo.cityId);
        //    }

        //    //this.displayMarker();
        //}
    }

    fillRegions(id: string) {
        var country = this.countries.find(i => i.id == id);

        this.filteredRegions = [];
        this.filteredCities = [];
        this.filteredLocations = [];

        if (country != null && country.regions != null && country.regions != undefined)
            this.filteredRegions = country.regions;

        if (this.filteredRegions != null && this.filteredRegions != undefined && this.filteredRegions.length > 0) {
            this.filteredRegions.sort(function (a, b) {
                return a.name > b.name ? 1 : -1;
            });
        }
    }

    fillCities(id: string) {
        var region = this.filteredRegions.find(i => i.id == id);

        this.filteredCities = [];
        this.filteredLocations = [];

        if (region != null && region.cities != null && region.cities != undefined)
            this.filteredCities = region.cities;
    }

    fillLocations(id: string) {
        var city = this.filteredCities.find(i => i.id == id);

        this.filteredLocations = [];

        if (city != null && city.locations != null && city.locations != undefined)
            this.filteredLocations = city.locations;
    }

    displayMarker() {

        if (this.reachInfo && this.reachInfo.lat != null && this.reachInfo.lat != undefined && this.reachInfo.lat != '') {

            this.map.setZoom(this.reachInfo.zoom);

            this.addMarkeronMap(Number(this.reachInfo.lat), Number(this.reachInfo.lng));

            this.map.setCenter(this.marker.getPosition());
        }
    }

    initializeMap() {
        let vm = this;
        let markerPoint;
        let mapZoom;
        if (this.reachInfo.lat != null && this.reachInfo.lat != undefined && this.reachInfo.lat != '') {
            markerPoint = { lat: Number(this.reachInfo.lat), lng: Number(this.reachInfo.lng) };
            mapZoom = this.reachInfo.zoom;
        }
        else // default
        {
            markerPoint = { lat: 24.7580553814679, lng: 46.6991418600082 };
            mapZoom = 5;
        }
        let divMap: any = document.getElementById('divMap');
        this.map = new google.maps.Map(divMap, {
            zoom: mapZoom,
            center: markerPoint
        });

        // This event listener will call addMarker() when the map is clicked.
        this.map.addListener('click', function (event: any) {
            vm.addMarkeronMap(event.latLng.lat(), event.latLng.lng());
        });

        this.map.addListener('zoom_changed', function (event: any) {
            vm.reachInfo.zoom = vm.map.zoom;
        });


    }

    addMarkeronMap(lat: number, lng: number) {

        this.removeMarker();

        this.marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
        });

        this.markers.push(this.marker);

        let vm = this;
        this.marker.addListener('dragend', function () {
            vm.updateModelWithNewLocation(vm.marker.getPosition().lat(), vm.marker.getPosition().lng());
        });

        // update model with new location
        this.reachInfo.zoom = this.map.zoom;
        this.updateModelWithNewLocation(lat, lng);
    }

    updateModelWithNewLocation(lat: any, lng: any) {
        // update model with new location
        this.reachInfo.lat = lat;
        this.reachInfo.lng = lng;
    }

    removeMarker() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }

        this.markers = [];

        this.reachInfo.lat = '';
        this.reachInfo.lng = '';
    }

    refreshingMap() {
        this.initializeMap();
        this.displayMarker();
    }

    toggleBounce() {
        if (this.marker.getAnimation() !== null) {
            this.marker.setAnimation(null);
        } else {
            this.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}