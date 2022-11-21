/// <reference types="cypress" />

import { metaMaskConnect } from './helper/common_functions'
import { login } from './helper/common_functions'
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
        it('C24 Profile edit', () => {
            // cy.visit('/')
            // cy.contains(locators.enter.enterMap).click({ force: true })
            
            // cy.wait(3000)
            //user logs in
            login(credentials.user.email, credentials.user.password)
            //user connect metamask wallet
            metaMaskConnect(metaMaskConnect)
           
            //user navigates to update username and edit 
            //From avatar dropdown
            cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })

            cy.contains('Change Username').should('be.visible').click({ force: true })
            cy.get('input[id="newUsername"]').clear()
            cy.get('input[id="newUsername"]').type('supernices')
            cy.contains('CONFIRM').click({ force: true })
            cy.get('p').should('contain','SUCCESS!')
            cy.get('div[class="intro"]').should('contain', 'supernices')
            cy.get('[data-testid="CloseIcon"]').click({ force: true })
            cy.get('[class="user-panel-header"]').should('contain', 'supernices')

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
            cy.get('p').should('contain', '@superworldapp')


            //TODO TO VALIDATE PROFILE PAGE PROPERTIES AND LISTINGS
            //Validate on new test list plot to sell
            
       })
     });
    });