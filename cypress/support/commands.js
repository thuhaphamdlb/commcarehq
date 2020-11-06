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

Cypress.Commands.add('OpenWebsite', (url) => {
    cy.visit(url);
    cy.wait(3000);
})

Cypress.Commands.add('LoginFunction', (emailAddress, password) => {
    cy.get('#id_auth-username').click().type(emailAddress)
    cy.get('#id_auth-password').click().type(password)
    cy.get('#hs-eu-confirmation-button').click();
    cy.get('.form-bubble-actions > .btn').click();
})