describe('Open Website', function () {
    it('Verify open website successfully', function () {
        cy.visit("https://www.commcarehq.org/")
        cy.title().should('eq', 'Log In :: CommCare HQ - CommCare HQ')
    })

    it('Verify open website unsuccessfully', function () {
        cy.visit("https://www.commcarehq.org/")
        cy.title().should('eq', 'CommCare HQ')
    })
})