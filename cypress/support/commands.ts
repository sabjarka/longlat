// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("login", (email: string, password: string) => {
    cy.session(email, () => {
      cy.visit("/user/login");
      cy.get("#email").type(email);
      cy.get("#password1").type(password);
      cy.contains("button", "Login").click();
      cy.contains("a", "My Account Information").should("be.visible");
    });
  });
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
  