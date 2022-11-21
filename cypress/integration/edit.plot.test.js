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
        it('C72 Edit a plot', () => {
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
            
            //Edit a plot
            cy.get(locators.selling.listingList).should('contain', locators.selling.listings).click()

            cy.get("[class='card_menu_']").last().click()

            //Validate error
            cy.contains('Edit').click({ force: true })
            
//TODO to work on making this on a way where the test is synchronized in order to make sure that the correct card is being edited. 
//mostly test will be performed manually
            cy.contains('Save').click({ force: true })
            //Validate the success component is displayed
       })
    })
})