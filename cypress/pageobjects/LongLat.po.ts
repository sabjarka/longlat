class LongLatPage {

  fillPlace(value: string) {
    cy.get('#place').type(value);
  }

  clickFind() {
    cy.get("#btnfind").click();
  }

  checkLat(lat: string) {
    cy.get("#lat").should("have.value", lat);
  }

  checkLng(lng: string) {
    cy.get("#lng").should("have.value", lng);
  }

  checkLatLng(latLng: string) {
    cy.get('#latlngspan').should('have.text', latLng);
  }

  checkCoordinatesUrl(url: string) {
    cy.get('#coordinatesurl').should('have.value', url);
  }

  clearPlace() {
    cy.get('input[name="place"]').clear();
  }
}

export default LongLatPage;