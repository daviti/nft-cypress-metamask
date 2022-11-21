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
                cy.get('span[class="connectionDot online"]').should('have.css', 'background-color', 'rgb(9, 198, 62)')
                cy.get('.header-main-navigation > ul > li:nth-of-type(6)').click()
                cy.get('[class="guideTourHelper"]').should('be.visible').click()
                cy.get('#simple-popover div:nth-of-type(3) > div:nth-of-type(2)').should('be.visible').click()
                cy.contains('Get Started!').should('be.visible').click()
                //Next two times while navigating the  tour
                cy.MultiClick('[class="nextBtn"]', 2)
                cy.get('button[class="messagesNextBtn"]').should('be.visible').click({ force: true })
                cy.wait(3000)
                cy.MultiClick('button[class="nextBtn"]', 4)
                cy.wait(3000)
                cy.contains('Mission Complete').should('be.visible').click()
                cy.wait(3000)
                cy.get('.header-main-navigation > ul > li:nth-of-type(6)').click()
                cy.get('[class="guideTourHelper"]').should('be.visible').click()
                cy.get('#simple-popover div:nth-of-type(3) > div:nth-of-type(3)').should('be.visible').click()
               
               
                cy.MultiClickWord('Next', 5)
                cy.wait(3000)
                cy.contains('What Can I Do With My Property?').should('be.visible').click()
                cy.wait(3000)
                cy.MultiClickWord('Next', 3)
                cy.wait(3000)
                cy.contains('Start Exploring').should('be.visible').click()
        }); 
    });
});