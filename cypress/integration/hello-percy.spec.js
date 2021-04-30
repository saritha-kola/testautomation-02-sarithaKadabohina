/// <reference types = "cypress" / >

describe('Visual Test', () => {

    it ('Test snapshot', () => {

        cy.visit('http://localhost:3000/login') 
        cy.title().should('eq', 'Testers Hotel')
        cy.contains('Login')
        // ->> we are at index (login) page!!
        cy.log('At login page!')
        cy.percySnapshot('login-page')
        cy.get(':nth-child(1) > input').type('tester02')
        cy.get(':nth-child(2) > input').type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
        cy.get('.btn').click()
        cy.contains('Welcome tester02')
        cy.wait(3000)
        
       // ->> we are at dashboard page!
        cy.log('At dashboard page!')
        cy.percySnapshot('dashboard-page')
        cy.wait(3000)
         // ->>We are at client page !
         cy.log('At client page')
         cy.get('.blocks > :nth-child(2) > .btn').click()
         cy.percySnapshot('client-page')
         
        
         cy.wait(3000)
       
    })
})