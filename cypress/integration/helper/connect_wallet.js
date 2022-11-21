/// <reference types="cypress" />

import { locators } from './locators'
import { credentials } from './credentials'
import { errors } from './helper/errors'
import { metaMaskConnect } from './common_functions'
import { login } from './common_functions'


const connectWallet = () => {

    cy.visit('/')
    window.onbeforeunload = function () {
        return true;
    }
    cy.contains(locators.enter.enterMap).click({ force: true })
    cy.wait(3000)
    login(credentials.user.invalid_email, credentials.user.invalid_password)
    cy.contains(errors.signIn.invalid_creds_error).should('be.visible')
    cy.reload()
    login(credentials.user.email, credentials.user.password)
    
    metaMaskConnect()

    cy.acceptMetamaskAccess().then(connected => {
        expect(connected).to.be.true;
    })
    
    cy.get(locators.metaMaskConnect.greenDotWalletConnected).should('have.css', 'background-color', 'rgb(7, 148, 79)')

}

module.exports = {
    connectWallet
}