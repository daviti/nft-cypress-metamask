/// <reference types="cypress" />

import { metaMaskConnect } from './helper/common_functions'
import { login } from './helper/common_functions'
import { locators } from './helper/locators'
import { credentials } from './helper/credentials'
import { errors } from './helper/errors'


describe ('Login Test list plot to sell', () => {
     context('Test Login Module', () => {
        it('Connect Set up MetaMask', () => {
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
    
        //Navigate to main page SuperWorldapp
        it('C6450 Selling a plot', () => {
            cy.visit('/')
            cy.wait(3000)
            cy.contains(locators.enter.enterMap).click({ force: true })
            
            cy.wait(3000)
            //user logs in
            login(credentials.user.email, credentials.user.password)
            //user connect metamask wallet
            metaMaskConnect(metaMaskConnect)
            const cond = document.getElementsByClassName('[class="skip"]') 
            if (cond) {
                cy.click()
            } else {
                //does not
            }
            //user navigates to update username and edit 
            //From avatar dropdown
            cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

            //Navigate to edit profile page to sell
            cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
            cy.get(locators.selling.propertiesList).should('contain', locators.selling.properties).click()
            cy.get(locators.selling.sellButton).should('contain', locators.selling.sell).last().click()
            cy.contains(locators.selling.sell).click({ force: true })
            cy.get(locators.selling.sellInput).clear()
            //Validate error
            cy.get(errors.listingPrice.errorfield).should('contain', errors.listingPrice.listingsPriceValidation)
            cy.get(locators.selling.sellInput).type(locators.selling.sellPrice)
            cy.contains(locators.selling.confirmBtn).click({ force: true })
            
            //confirms metamask button from extension
            cy.confirmMetamaskTransaction().then(confirmed => {
                expect(confirmed).to.be.true;
            }) 

        
       })
    });
});