import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

//COMMCAREHQ WEBSITE URL
const url = 'https://www.commcarehq.org/'

const accountVerification = {
    account: {
        displayName: 'PhamThiThuHa'
    }
}

//Verify login successfully with valid Email Address and Password
Given(/^I open website$/, () => {
    cy.visit(url)
    cy.wait(5000)
});

And(/^I type (.+) in the email address field$/, (emailAddress) => {
    cy.get('#id_auth-username').click().type(emailAddress)
});

And(/^I type (.+) in the password field$/, (password) => {
    cy.get('#id_auth-password').click().type(password)
});

And(/^I click the confirmation button$/, () => {
    cy.get('#hs-eu-confirmation-button').click();
});

And(/^I click login button$/, () => {
    cy.get('.form-bubble-actions > .btn').click()
});

Then(/^I verify user login successfully$/, () => {
    cy.get(':nth-child(1) > .panel > .panel-heading > span').should("have.text", "Applications")
        .get(':nth-child(2) > .panel > .panel-heading > a').should("have.text", "Reports")
        .get('#settingsmenu-project > .dropdown-toggle').contains(accountVerification.account.displayName)
});