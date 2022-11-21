/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'
import { confirmTransaction } from './common_functions'
import { errors } from './errors'


const sell = () => {
        // cy.wait(3000)
         cy.visit('/')
        // cy.wait(3000)
         cy.contains(locators.enter.enterMap).click({ force: true })

        // cy.wait(3000)
        //user logs in
        login(credentials.user.email, credentials.user.password)
        //user connect metamask wallet
        metaMaskConnect(metaMaskConnect)
 
        //TODOs convert to AppActions or Cy.Commands Tours
        cy.get('body').then(($ele) => {
        if ($ele.find('[data-testid="CloseRoundedIcon"]')) {
            cy.get('[data-testid="CloseRoundedIcon"]').click()
            } else {
            //Do Nothing
            }
        })
        //user navigates to update username and edit 
        //From avatar dropdown
        cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

        //Navigate to edit profile page to sell
        cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
        cy.get(locators.selling.propertiesList).should('contain', locators.selling.properties).click()
        //selects the last plot on the list
        cy.get(locators.selling.sellButton).should('contain', locators.selling.sell).last().click()

        cy.contains(locators.selling.sell).click({ force: true })

        cy.get(locators.selling.sellInput).clear()
        //Validate error
        cy.get(errors.listingPrice.errorfield).should('contain', errors.listingPrice.listingsPriceValidation)
        //Enter Sell price
        cy.get(locators.selling.sellInput).type(locators.selling.sellPrice)
        cy.contains(locators.selling.confirmBtn).click({ force: true })

        //confirms metamask button from extension
        confirmTransaction()

        cy.get(locators.profile.closeX).click({ force: true })
        cy.get(locators.marketPLace.btnWrapper).eq(0).should('be.visible').click({ force: true })

        //TODO TO VALIDATE PROFILE PAGE PROPERTIES AND LISTINGS
        //Validate once the plot is set for sale should it alwasy be at the top of the list on the dropdown list on my properties?? 

        }


    module.exports = {
            sell
        }
    