/// <reference types="cypress" />

import { metaMaskConnect } from './helper/common_functions'
import { login } from './helper/common_functions'
import { locators } from './helper/locators'
import { credentials } from './helper/credentials'


describe ('Login Test to marketplace', () => {
     context('Test Login Module', () => {
        it('Connect Set up MetaMask marketplace', () => {
            Cypress.on('uncaught:exception', () => {
                // returning false here prevents Cypress from
                // failing the test     
                return false;
              });
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

                // cy.visit('/')
                // cy.contains(locators.enter.enterMap).click({ force: true })
            
                //login to the app
                login(credentials.user.email, credentials.user.password)
                //user connect metamask wallet, wallet should be connected by this time
                // we are only selecting the metamask wallet connect
                metaMaskConnect(metaMaskConnect)
                cy.get('span[class="connectionDot online"]').should('have.css', 'background-color', 'rgb(6, 148, 79)')

                //opens marketplace from side window
                
                cy.get(locators.marketPLace.marketPlaceCartbtn).should('be.visible').click()
                cy.contains(locators.marketPLace.recentPurchased).should('be.visible').click({ force: true })
                cy.contains(locators.marketPLace.forSale).click({force: true})
                cy.get(locators.marketPLace.expandMap).should('be.visible').click()
                //sort by
                cy.contains('Sort by').should('be.visible').click()
                cy.contains('Date: Old to new').click({ force: true })
                cy.contains('Sort by').should('be.visible').click()
                cy.contains('Date: New to old').should('be.visible').click({ force: true })
                cy.contains('Sort by').should('be.visible').click()
                cy.contains('Price: High to low').should('be.visible').click({ force: true })
                cy.contains('Sort by').should('be.visible').click()
                cy.contains('Price: Low to high').should('be.visible').click({ force: true })
                //close expanded window
                cy.get('[class="close-map-icon"]').should('be.visible').click({ force: true })
                cy.contains('Marketplace').should('be.visible').click({ force: true })
                cy.contains('Marketplace').should('be.visible').click({ force: true })
                //validate whislist, my properties and referrals
                cy.get('[class="btn-wrapper"]').eq(0).should('be.visible').click({ force: true })
                cy.get('[class="dropdown-item"]').eq(0).should('not.be.visible', "You don't own any properties. Search the map and start your collection!")
                cy.get('[class="btn-wrapper"]').eq(0).should('be.visible').click({ force: true })
                cy.get('[class="btn-wrapper"]').eq(1).should('contain', 'Wishlist').click({ force: true })
                cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]').should('not.be.visible', "You don't have any whislisted properties. Go to the map to wishlist some.")
                cy.get('[class="btn-wrapper"]').eq(1).should('contain', 'Wishlist').click({ force: true })
        }); 
    });
});