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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const url = ' https://www.commcarehq.org/'

Cypress.Commands.add('LoginFunction', (emailAddress, password) => {
    cy.visit(url);
    cy.get('#id_auth-username').click().type(emailAddress);
    cy.get('#id_auth-password').click().type(password);
    cy.get('//button[@type="submit"]').click();
    cy.wait(3000);
})