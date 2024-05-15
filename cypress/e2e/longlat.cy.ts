import LongLatPage from "../pageobjects/LongLat.po";
import { locationsFixture } from '../fixtures/locations'
describe("Long Lat", () => {

  it('should find the coordinates for each place and verify the results', function() {
    const longLatPage = new LongLatPage();
    cy.login("angelovskimario95@gmail.com", "Test123!");
    cy.visit("/");
    
    locationsFixture.forEach((location) => {
        longLatPage.fillPlace(location.place);
        longLatPage.clickFind();
        
        longLatPage.checkLat(location.latitude)
        longLatPage.checkLng(location.longitude);
        longLatPage.checkLatLng(location.latLngText);
        longLatPage.checkCoordinatesUrl(location.coordinatesUrl);
        
        longLatPage.clearPlace();
    });
  });
});
