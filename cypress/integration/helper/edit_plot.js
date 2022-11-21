/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'


const editAplot = () => {
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

    //opens profile 
    cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

    //Navigate to edit profile page to sell
    cy.contains(locators.selling.myProfile).should('be.visible').click({ force: true })
    cy.get(locators.selling.propertiesList).should('contain', locators.selling.properties).click()

    // Edit the plot
    cy.get(locators.editPlot.cardMenu).first().click()
    cy.get(locators.editPlot.plotThreeDots).click()
    cy.get(locators.editPlot.editplotEditField).clear()
    cy.get(locators.editPlot.editplotEditField).type('Tulum Adora')
    cy.contains(locators.editPlot.save).click({ force : true })
    cy.get(locators.editPlot.successComponentEdit).should('contain', locators.editPlot.successMessageEdit)
  }

module.exports = {
    editAplot
        }
    