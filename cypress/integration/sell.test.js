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
        it('C70 Sell a plot', () => {
            cy.wait(3000)
        cy.visit('/')
        cy.wait(3000)
        cy.contains(locators.enter.enterMap).click({ force: true })

        cy.wait(3000)
        //user logs in
        login(credentials.user.email, credentials.user.password)
        //user connect metamask wallet
        metaMaskConnect(metaMaskConnect)
  //convert to AppActions or Cy.Commands Tours
//   const cond = cy.get('div[class="skip"]') || true
//   if (cond) {
//       cy.click()
//   } else {
//      return;
//   }
        //user navigates to update username and edit 
        //From avatar dropdown
        cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

        //Navigate to edit profile page to sell
        cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
        cy.get(locators.selling.propertiesList).should('contain', locators.selling.properties).click()
        //selects the last plot on the list
        cy.get(locators.selling.sellButton).should('contain', locators.selling.sell).last().click()
        
        cy.get('[class="button-wrapper"]').click({ force: true })
        cy.get(locators.selling.sellInput).clear()
        //Validate error
        cy.get(errors.listingPrice.errorfield).should('contain', errors.listingPrice.listingsPriceValidation)
        //Enter Sell price
        cy.get(locators.selling.sellInput).type(locators.selling.sellPrice)
        cy.contains(locators.selling.confirmBtn).click({ force: true })

        //confirms metamask button from extension
        cy.confirmMetamaskTransaction().then(confirmed => {
            expect(confirmed).to.be.true;
        }) 

        cy.get(locators.profile.closeX).click({ force: true })
        cy.get(locators.marketPLace.btnWrapper).eq(0).should('be.visible').click({ force: true })

        //TODO TO VALIDATE PROFILE PAGE PROPERTIES AND LISTINGS
        //Validate once the plot is set for sale should it alwasy be at the top of the list on the dropdown list on my properties?? 

       })
    });
});