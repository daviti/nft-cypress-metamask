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
        it('C7708 Forgot Password', () => {
            cy.visit('/')
            cy.contains(locators.enter.enterMap).click({ force: true })
            cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })
            cy.contains('Forgot Password?').should('be.visible').click({ force: true })
            cy.get('#emailRecover').type('addresshere@db1ot4pnqg7p.mailisk.net')
            cy.contains('Send the code').should('be.visible').click({ force: true })
            //Validate you get the new page to enter the passcode
            cy.get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-filledSuccess MuiAlert-filled css-slrmtu"]').should('have.css', 'background-color', 'rgb(46, 125, 50)')

        //user rest password with passcode from email
        //Test is partially on hold,, only half the test is done automatic and the other half is done manually until we sest up api email read
 
   })
  });
});