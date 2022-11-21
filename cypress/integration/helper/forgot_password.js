
/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'



const forgotPassword = () => {
    cy.visit('/')
    window.onbeforeunload = function () {
        return true;
    }
    cy.contains(locators.enter.enterMap).click({ force: true })
    cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })
    cy.contains('Forgot Password?').should('be.visible').click({ force: true })
    cy.get('#emailRecover').type('addresshere@db1ot4pnqg7p.mailisk.net')
    cy.contains('Send the code').should('be.visible').click({ force: true })
    //Validate you get the new page to enter the passcode
    cy.get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-filledSuccess MuiAlert-filled css-slrmtu"]').should('have.css', 'background-color', 'rgb(46, 125, 50)')

//user rest password with passcode from email
//Test is partially on hold,, only half the test is done automatic and the other half is done manually until we sest up api email read
}
module.exports = {
    forgotPassword
}