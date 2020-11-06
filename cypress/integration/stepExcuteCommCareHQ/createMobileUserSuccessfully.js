import { Given, And, Then, When, } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

Given(/^User is at (.+)$/, (url) => {
    cy.OpenWebsite(url)
});

And(/^User is logged in successfully with (.+) and (.+)$/, (emailAddress, password) => {
    cy.LoginFunction(emailAddress, password)
});

When(/^User goes to Users or Mobile Users page$/, () => {
    cy.get('//div[4]/div/div[1]/a').click()
});

And(/^User clicks Create Mobile Worker button$/, () => {
    cy.get('//button[@id="new-user-modal-trigger"]').click()
});

And(/^User fills all the needed information in the appeared pop-up$/, () => {
    cy.get('//input[@id="id_username"]').click().type("thuhapham");
    cy.get('//input[@id="id_first_name"]').click().type("thuhapham");
})

And(/^User clicks Create button$/, () => {
    cy.get('#new-user-modal > div > form > div > div.modal-footer > button.btn.btn-primary"]').click()
})

Then(/^User sees the created mobile user in the list$/, () => {
    cy.get('//*[@id="new-users-list"]/div[2]/table/tbody')
        .last().should('contain', 'thuhapham')
});