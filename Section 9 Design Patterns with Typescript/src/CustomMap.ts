import { Company } from "./Company";
import { User } from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapapble: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapapble.location.lat,
        lng: mapapble.location.lng,
      },
    });

    marker.addListener("click", function () {
      new google.maps.InfoWindow({
        content: mapapble.markerContent(),
      }).open(this.googleMap, marker);
    });
  }
}
