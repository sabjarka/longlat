interface Location {
  place: string;
  latitude: string;
  longitude: string;
  latLngText: string;
  coordinatesUrl: string;
}

export const locationsFixture: Location[] = [
  {
    place: "Belgrade",
    latitude: "44.786568",
    longitude: "20.448921",
    latLngText: "(44.786568, 20.448921)",
    coordinatesUrl: "https://www.latlong.net/c/?lat=44.786568&long=20.448921",
  },
  {
    place: "Skopje",
    latitude: "41.997345",
    longitude: "21.427996",
    latLngText: "(41.997345, 21.427996)",
    coordinatesUrl: "https://www.latlong.net/c/?lat=41.997345&long=21.427996",
  },
];
