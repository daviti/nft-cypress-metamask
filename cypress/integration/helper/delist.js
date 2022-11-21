/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'
import { confirmTransaction } from './common_functions'

const delist = () => {
        //Navigate to main page SuperWorldapp
            cy.wait(3000)
            cy.visit('/')
            cy.wait(3000)
            cy.contains(locators.enter.enterMap).click({ force: true })
            cy.wait(3000)
            //user logs in
            login(credentials.user.email, credentials.user.password)
            //user connect metamask wallet
            metaMaskConnect(metaMaskConnect)
              //TODOs convert to AppActions or Cy.Commands 
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

            //Navigate to edit profile page to delist listings
            cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
            cy.get(locators.selling.listingList).should('contain', locators.selling.listings).click()

            cy.get(locators.selling.sellButton).last().click()

            //Validate error
            cy.contains('Delist').click({ force: true })
            
            //confirms metamask button from extension
            confirmTransaction(confirmTransaction)
    }

    module.exports = {
        delist
    }