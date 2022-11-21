/// <reference types="cypress" />

import { locators } from './helper/locators'
import { credentials } from './helper/credentials'


describe ('Login Test', () => {
     context('Test Login Module', () => {
        it('Connect Set up MetaMask', () => {
            Cypress.on('uncaught:exception', () => {
                // returning false here prevents Cypress from
                // failing the test     
                return false;
              });
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

        //Navigate to main page SuperWorldapp
        it('C5828 Create account', () => {
            cy.visit('/')
            cy.contains(locators.enter.enterMap).click({ force: true })
            cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })
            cy.contains('Create Account').should('be.visible').click({ force: true })
        //user creates an account
        //Test on hold as it is done manually becuse once the account is cretaed then it is delted right away from the mobile app
 
   })
  });
});