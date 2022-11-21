/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'


const profile = () => {
    cy.visit('/')
    cy.contains(locators.enter.enterMap).click({ force: true })

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
    cy.contains(locators.profile.changeusername).should('be.visible').click({ force: true })
    cy.get(locators.profile.inputfieldusernameDrpDwn).clear()
    cy.get(locators.profile.inputfieldusernameDrpDwn).type(locators.profile.usernameSuperNice)
    cy.contains(locators.profile.confirm).click({ force: true })
    cy.get(locators.profile.classP).should('contain', locators.profile.success)
    cy.get(locators.profile.closeX).click({ force: true })
    cy.get(locators.profile.usernameupdateDrpDwn).should('contain', locators.profile.usernameSuperNice)
    //cy.get('[class="user-panel-header"]').should('contain', 'supernices')

    //Navigate to edit profile page  
    cy.contains('My Profile').should('be.visible').click({ force: true })
    cy.get('[id="pencil"]').should('be.visible').click({ force: true })
    cy.get('[class="adorment"]').should('be.visible').click({ force: true })
    cy.get('[id="standard-adornment-password"]').clear()
    cy.get('[id="standard-adornment-password"]').type('superworldapp')
    
    cy.get('[class="with-icon-block-bio"]').clear()
    cy.get('[class="with-icon-block-bio"]').type('SuperWorld is a virtual world in augmented reality (AR), digitally mapped over Earth. Every plot of virtual real estate in SuperWorld is a non-fungible token.')
    //saving update
    cy.contains('Save').click({ force: true })
    //validate users name is displayed 
    cy.get(locators.profile.classP).should('contain', '@superworldapp')

    //TODO TO VALIDATE PROFILE PAGE PROPERTIES AND LISTINGS

}


module.exports = {
        profile
    }
