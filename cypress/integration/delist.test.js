/// <reference types="cypress" />

import { metaMaskConnect } from './helper/common_functions'
import { login } from './helper/common_functions'
import { locators } from './helper/locators'
import { credentials } from './helper/credentials'


describe ('Login Test list plot to sell', () => {
     context('Test Login Module', () => {
        it('Connect Set up MetaMask', () => {
            Cypress.on('uncaught:exception', () => {
                // returning false here prevents Cypress from
                // failing the test     
                return false;
              })
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
        })
    
        //Navigate to main page SuperWorldapp
        it('C20 Delist a plot', () => {
            cy.wait(3000)
            cy.visit('/')
            cy.wait(3000)
            cy.contains(locators.enter.enterMap).click({ force: true })
            cy.wait(3000)
            //user logs in
            login(credentials.user.email, credentials.user.password)
            //user connect metamask wallet
            metaMaskConnect(metaMaskConnect)
            // const cond = document.getElementsByClassName('[class="skip"]') 
            // if (cond) {
            //     cy.click()
            // } else {
            //     //does not
            // }
            //user navigates to update username and edit 
            //From avatar dropdown
            cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

            //Navigate to edit profile page to delist listings
            cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
            cy.get(locators.selling.listingList).should('contain', locators.selling.listings).click()

            cy.get("[class='pricing']").last().click()

            //Validate error
            cy.contains('Delist').click({ force: true })
            
            //confirms metamask button from extension
            cy.confirmMetamaskTransaction().then(confirmed => {
                expect(confirmed).to.be.true;
            }) 
       })
    });
});