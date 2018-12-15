import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styles: [`
    agm-map {
      height: 100%;
    }
  `]
})
export class ContactusComponent implements OnInit {
 lat = 26.2026091;
 lng = 78.2044118;

  constructor() {}

  ngOnInit() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showTrackingPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
   }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
   }

}
