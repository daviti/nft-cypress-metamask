/// <reference types="cypress" />
import { login } from './helper/common_functions'
import { metaMaskConnect } from './helper/common_functions'
import { locators } from './helper/locators'
import { credentials } from './helper/credentials'


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
    
        it('C3233 C3234 C3235 Navigate to Home Page', () => {
            cy.visit('/')
            cy.get(locators.homePage.appSwitcher)
                .should('be.visible')
   
            login(credentials.user.email, credentials.user.password)
            metaMaskConnect(metaMaskConnect)
            
            cy.acceptMetamaskAccess().then(connected => {
                expect(connected).to.be.true;
        });
     });
   });
});