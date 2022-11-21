/// <reference types="cypress" />

import { metaMaskConnect } from './helper/common_functions'
import { login } from './helper/common_functions'
import { mainSiteNavigation } from './helper/mainsite'
import { errors } from './helper/errors'
import { credentials } from './helper/credentials'
import { locators } from './helper/locators'
import { marketPlace } from './helper/marketplace'
import { tourOffersMap } from './helper/marketplace'
import { profile } from './helper/profile'
import { sell } from './helper/sell'
import { delist } from './helper/delist'
import { buy } from './helper/buy'
import { editAplot } from './helper/edit_plot'
import { forgotPassword } from './helper/forgot_password'

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
    
        //Navigate to main page SuperWorldapp
        it('C3233 C3234 C3235 C3236 C3237 C3238 C3239 C3240 C3241 C3242	C3243 C3244 C3245 C3246  Navigate to Home Page Superworldapp', () => {
            mainSiteNavigation()
        });

        //Login connect wallet validate login
        it('C27 Navigate to sign in validate and connect wallet', () => {
            cy.visit('/')
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
        });
      
        //Account Set up 
        it('C5828 Account Set up', () => {
            AccountSetUp()
         });

        //Resets Password
        it('C7708 Forgot password', () => {
            forgotPassword()
         });

        //Marketplace
        // it('C18 Navigate over the Marketplace', () => {
        //     marketPlace()
        //  });

        //Profile
        it('C24 C25 C52 Add, Edit profile', () => {
           profile()
        });

        //Guide Tour Marketplace
        it('C75 C76 Tour, Offers and Marketplace', () => {
           tourOffersMap()
        });

        //Selling  a plot
        it('C6450 Selling a plot', () => {
            sell()
        });
      
        it('C20 Delist a plot', () => {
            delist()
        });

        it('C70 Buying a plot', () => {
            buy()
        });

        it('C72 Edit a plot', () => {
            editAplot()
        });
    });
});

