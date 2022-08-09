/// <reference types="cypress" />
import { locators } from './locators'
import { credentials } from './credentials'

const login = (email, password) => {
    cy
        .get(locators.homePage.signInBtnHeader)
        .should('be.visible')
        .click()
    cy 
        .get(locators.login.email)
        .should('be.visible')
        .clear()
        .type(email)
    cy 
        .get(locators.login.password)
        .should('be.visible')
        .clear()
        .type(password)
    cy
        .get(locators.login.loginBtn)
        .should('be.visible')
        .click()
}

const metaMaskConnect = (email, password) => {
    cy  
    .contains("MetaMask")
    .should("be.visible")
    .click()
}

const loginAndConnectMetaMask = () => {
    // Setup Metamask
    cy.setupMetamask(
        credentials.metaMask.secretCode, 
        credentials.metaMask.network, 
        credentials.metaMask.password
    ).then(setupFinished => {
        expect(setupFinished).to.be.true
    })
    cy.changeMetamaskNetwork(credentials.metaMask.network).then(networkChanged => {
        expect(networkChanged).to.be.true
    })

    // Visit Homepage and Login
    cy.visit('/')
    cy.get(locators.homePage.appSwitcher)
        .should('be.visible')
   
    login(credentials.user.email, credentials.user.password)
    metaMaskConnect(metaMaskConnect)
}

module.exports = {
    login,
    metaMaskConnect,
    loginAndConnectMetaMask
}