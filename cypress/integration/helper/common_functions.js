/// <reference types="cypress" />

import { locators } from './locators'



const login = (email, password) => {
    cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })
    cy.get(locators.login.email).should('be.visible').type(email)
    cy.get(locators.login.password).should('be.visible').type(password)
    cy.get(locators.login.loginBtn).should('be.visible').click()
}

const metaMaskConnect = () => {
    cy.contains('MetaMask').should('be.visible').click({ force: true })
}

const createAccount = (username, email, pasword) => {
    cy.get(locators.homePage.signInBtnHeader).should('be.visible').click({ force: true })
    cy.contains('Create Account').should('be.visible').click({ force: true })
}

const confirmTransaction = () => {
cy.confirmMetamaskTransaction().then(confirmed => {
    expect(confirmed).to.be.true;
  }) 
}
//TODO to add closing componeets after and before a sale to be reuse
// cy.get('[data-testid="CloseRoundedIcon"]').then(($ele) => {
//     if ($ele.find('[data-testid="CloseRoundedIcon"]')) {
//         cy.get('[data-testid="CloseRoundedIcon"]').click()
//     } else {
//         //Do Nothing
//     }
// })


module.exports = {
    login,
    metaMaskConnect,
    createAccount,
    confirmTransaction
}