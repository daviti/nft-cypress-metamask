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
            });
            it('C70 Buy from marketplace', () => {
                cy.visit('/')
                window.onbeforeunload = function () {
                    return true;
                  }
                cy.contains(locators.enter.enterMap).click({ force: true })
            
                //login to the app
                login(credentials.user.email, credentials.user.password)
                //user connect metamask wallet, wallet should be connected by this time
                // we are only selecting the metamask wallet connect
                metaMaskConnect(metaMaskConnect)
                cy.get('span[class="connectionDot online"]').should('have.css', 'background-color', 'rgb(7, 148, 79)')

                //opens marketplace from side window
                
                cy.get(locators.marketPLace.marketPlaceCartbtn).should('be.visible').click()
                cy.contains(locators.marketPLace.recentPurchased).should('be.visible').click({ force: true })
                cy.contains(locators.marketPLace.forSale).click({force: true})
            
                // Buy
                cy.get("[class='pricing']").last().click()
                //confirms metamask button from extension
                cy.confirmMetamaskTransaction().then(confirmed => {
                expect(confirmed).to.be.true;
            }) 
        }); 
    });
});