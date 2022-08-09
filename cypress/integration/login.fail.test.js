/// <reference types="cypress" />
import { login } from './helper/common_functions'
import { locators } from './helper/locators'
import { credentials } from './helper/credentials'
import { errors } from './helper/errors'

describe ('Login Test', () => {
    context('Test Login Module', () => {
        it('Connect Set up MetaMask', () => {
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
    
        it('Navigate to Home Page', () => {
            cy.visit('/')
            cy.get(locators.homePage.appSwitcher)
                .should('be.visible')
        });
        
        it('Login with invalid credentials', () => {
           login(credentials.user.invalid_email, credentials.user.invalid_password)
            cy.contains(errors.signIn.invalid_creds_error)
                .should('be.visible')
        });
    });
})