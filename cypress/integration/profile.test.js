/// <reference types="cypress" />
import { loginAndConnectMetaMask } from './helper/common_functions'
import { locators } from './helper/locators'


describe ('Profile Test', () => {
     context('Test Profile Module', () => {
        it('Navigate, Login and Connect Metamask', () => {
            loginAndConnectMetaMask()
        })

        // it('C30 Profile Test', () => {
        //     cy.get(locators.profile.imgAvatar)
        //         .should('be.visible')
        //         .click()
        //     cy.contains(locators.profile.myProfileMenu)
        //         .should('be.visible')
        //         .click()
        // })
  })
})