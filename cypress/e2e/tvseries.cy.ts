import LongLatPage from "../pageobjects/LongLat.po";
import { locationsFixture } from "../../fixtures/locations";
describe("Long Lat", () => {
  it("should show tvseries", () => {
    cy.visit("/");

    cy.get('a[href="/tv-series-locations"]').first().click();
    cy.contains("h1", "TV Series Locations").should("be.visible");
    cy.get(".locationdiv").should("have.length.at.least", 1);
    cy.get(".locationdiv").first().should("not.be.empty");
  });

  it("should show tvseries details", () => {
    cy.visit("/tv-series-locations");

    cy.get(".locationdiv")
      .first()
      .then((location) => {
        const locationName: string = location.text();
        cy.wrap(location).click();
        cy.get("h1").should("have.text", `${locationName} Locations`);
        cy.get('#mapid').should('be.visible')
        cy.get('table > tbody > tr').should('have.length.at.least', 1)
      });
  });
});
