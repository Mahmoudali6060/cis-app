import {Component, OnInit} from '@angular/core';


@Component({
   
    selector: 'mobile-map',
    templateUrl: 'mobile-map.component.html',
})

export class MobileMapComponent implements OnInit {
   
    selectNews: boolean = true;
    options: any;

    overlays!: any[];

    ngOnInit() {
        this.options = {
            center: { lat: 24.7580553814679, lng: 46.6991418600082  },
            zoom: 12
        };

        this.overlays = [
            new google.maps.Marker({ position: { lat: 24.7580553814679, lng: 46.6991418600082 }, title: "Clinic1" }),
        ];
    }
}