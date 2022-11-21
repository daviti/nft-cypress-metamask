/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'
import { confirmTransaction } from './common_functions'


const buy = () => {
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
      //TODOs convert to AppActions or Cy.Commands Tours
    cy.get('body').then(($ele) => {
        if ($ele.find('[data-testid="CloseRoundedIcon"]')) {
            cy.get('[data-testid="CloseRoundedIcon"]').click()
        } else {
            //Do Nothing
        }
    })

    cy.get(locators.metaMaskConnect.greenDotWalletConnected).should('have.css', 'background-color', 'rgb(7, 148, 79)')

    //opens marketplace from side window
    cy.get(locators.marketPLace.marketPlaceCartbtn).should('be.visible').click()
    cy.contains(locators.marketPLace.recentPurchased).should('be.visible').click({ force: true })
    cy.contains(locators.marketPLace.forSale).click({force: true})

    // Buy
    cy.get(locators.selling.sellButton).last().click()
    
    //confirms metamask button from extension
    confirmTransaction()
  }

module.exports = {
            buy
        }
    