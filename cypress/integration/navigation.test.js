/// <reference types="cypress" />
import { login } from './helper/common_functions'
//import { locators } from './helper/locators'
import { credentials } from './helper/credentials'
import { errors } from './helper/errors'

describe ('Login Test', () => {
    context('Test Login Module', () => {
        it('Connect Set up MetaMask', () => {
            cy.setupMetamask(
                    credentials.metaMask.secretCode, 
                    credentials.metaMask.network, 
                    credentials.metaMask.password)
                .then(setupFinished => {
                    expect(setupFinished).to.be.true
                })
            cy.changeMetamaskNetwork(credentials.metaMask.network).then(networkChanged => {
                    expect(networkChanged).to.be.true
                })
        });
    
        it('C31 Navigate to Home Page', () => {
            cy.visit({
                    url: 'https://superworldapp.com/#/home',
                    method: 'GET',
            })
            cy.get('a.navItemHeader').contains('Marketplace').should('be.visible').click()
            
            cy.get('.filter__status').contains('Status').should('be.visible').click()
            cy.wait(3000)
            cy.get('.filter__status-body-item').contains('On Auction').should('be.visible').click()
            cy.get('.nft-card__body-action__action-btn').contains('BID').should('be.visible')
            cy.get('.filter__status-body-item__checked').contains('On Auction').should('be.visible').click()

            cy.get('.filter__status-body-item').contains('Buy Now').should('be.visible').click()
            cy.get('.nft-card__body-action__action-btn').contains('PURCHASE').should('be.visible')
            cy.get('.filter__status-body-item__checked').contains('Buy Now').should('be.visible').click()


            cy.get('.filter__status-body-item').contains('Lazy Minting').should('be.visible').click()
            cy.get('.nft-card__body-action__action-btn').contains('PURCHASE').should('be.visible')
            cy.get('.filter__status-body-item__checked').contains('Lazy Minting').should('be.visible').click()
            
            cy.get('.filter__status').contains('Status').should('be.visible').click()

            cy.get('h1').contains('Marketplace').should('be.visible')

            cy.get('.filter__type-item').contains('Image').should('be.visible').click()
            cy.get('.filter__type-checked').contains('Image').should('be.visible').click()

            cy.get('.filter__type-item').contains('GIF').should('be.visible').click()
            cy.get('.filter__type-checked').contains('GIF').should('be.visible').click()

            cy.get('.filter__type-item').contains('Video').should('be.visible').click()
            cy.get('.filter__type-checked').contains('Video').should('be.visible').click()

            cy.get('.filter__type-item').contains('Audio').should('be.visible').click()
            cy.get('.filter__type-checked').contains('Audio').should('be.visible').click()

            cy.get('.filter__type-item').contains('AR').should('be.visible').click()
            cy.get('.filter__type-checked').contains('AR').should('be.visible').click()


            cy.get('.input-group').type('MONOGRAMA')

            // cy.get('p').should(($p) => {
            //     // should have found 3 elements
            //     expect($p).to.have.length(91)
              
            //     // make sure the first contains some text content
            //     expect($p.first()).to.contain('LIVE PIGMENT')
              
            //     // use jquery's map to grab all of their classes
            //     // jquery's map returns a new jquery object
            //     const classes = $p.map((i, el) => {
            //       return Cypress.$(el).attr('class')
            //     })
              
            //     // call classes.get() to make this a plain array
            //     expect(classes.get()).to.deep.eq([
            //       '-walletlink-css-reset'
            //     ])
            //   })
        })
    })
})