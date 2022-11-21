/// <reference types="cypress" />

import { locators } from './locators'
import { login } from './common_functions'
import { credentials } from './credentials'
import { metaMaskConnect } from './common_functions'



const marketPlace = () => {
    cy.visit('/')
    cy.contains(locators.enter.enterMap).click({ force: true })
    login(credentials.user.email, credentials.user.password)
    metaMaskConnect(metaMaskConnect)

       //TODOs convert to AppActions or Cy.Commands Tours
       cy.get('body').then(($ele) => {
        if ($ele.find('[data-testid="CloseRoundedIcon"]')) {
            cy.get('[data-testid="CloseRoundedIcon"]').click()
            } else {
            //Do Nothing
            }
        })

    //opens marketplace from side window
    cy.get(locators.marketPLace.marketPlaceCartbtn).should('be.visible').click()
    cy.contains(locators.marketPLace.recentPurchased).should('be.visible').click({ force: true })
    cy.contains(locators.marketPLace.forSale).click({force: true})
    cy.get(locators.marketPLace.expandMap).should('be.visible').click()
    //sort by
    cy.contains(locators.marketPLace.sortBy).should('be.visible').click()
    cy.contains(locators.marketPLace.dateOldNew).click({ force: true })
    cy.contains(locators.marketPLace.sortBy).should('be.visible').click()
    cy.contains(locators.marketPLace.dateNewOld).should('be.visible').click()
    cy.contains(locators.marketPLace.sortBy).should('be.visible').click()
    cy.contains(locators.marketPLace.priceHigLow).should('be.visible').click()
    cy.contains(locators.marketPLace.sortBy).should('be.visible').click()
    cy.contains(locators.marketPLace.priceLowHigh).should('be.visible').click()
    
    //Open and close from menu
    cy.MultiClickWord('Marketplace', 2).eq(0)

    //validate whislist, my properties and referrals
    cy.get(locators.marketPLace.btnWrapper).eq(0).should('be.visible').click({ force: true })
    cy.get('[class="dropdown-item"]').eq(0).should('not.contain.text', "You don't own any properties. Search the map and start your collection!")
    
    cy.get(locators.marketPLace.btnWrapper).eq(1).should('contain', 'Wishlist').click({ force: true })
    cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]').should('not.contain.text', "You don't have any whislisted properties. Go to the map to wishlist some.")
    cy.get(locators.marketPLace.btnWrapper).eq(2).should('contain', 'Earn FREE Plots!').click({ force: true })
    cy.get('[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]').eq(2).should('contain', 'Share SuperWorld with friends using your custom link for a FREE plot with their first time property purchase. ')
    cy.get('[class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways tss-1gtxkj5-details css-qjclid"]').should('have.attr', 'href', 'https://www.superworldapp.com/superreferral?showreferrallink=true&utm_channel=referral&utm_source=swmap&utm_medium=dropdown&utm_campaign=navigation')
    //cy.get(locators.marketPLace.share).eq(0).should('have.attr', 'href', 'https://www.facebook.com/sharer/sharer.php?u=https://www.superworldapp.com/b/?r=gC_yQD68&utm_channel=referral&utm_source=fb&utm_medium=dropdown&utm_campaign=fbbutton')
    //cy.get(locators.marketPLace.share).eq(1).should('have.attr', 'href', 'https://twitter.com/intent/tweet?text=SuperWorld%20AR%20Real%20Estate&url=https://superworldapp.com/b/?r=gC_yQD68&utm_channel=referral&utm_source=twitter&utm_medium=dropdown&utm_campaign=twitterbutton')
    //cy.get(locators.marketPLace.share).eq(2).should('have.attr', 'href', 'https://www.linkedin.com/shareArticle?url=https://superworldapp.com/b/?r=gC_yQD68&utm_channel=referral&utm_source=linkedin&utm_medium=dropdown&utm_campaign=linkedinbutton&title=SuperWorld%20AR%20Real%20Estate')
    //cy.get(locators.marketPLace.share).eq(3).should('have.attr', 'href', 'mailto:?subject=SuperWorld%20AR%20Real%20Estate&body=Here is my referral for a free plot on SuperWorld: %0Dhttps://superworldapp.com/b/?r=gC_yQD68%26utm_channel=referral%26utm_source=email%26utm_medium=dropdown%26utm_campaign=emailbutton')


}


 const tourOffersMap = () => {
    cy.visit('/')
    cy.contains(locators.enter.enterMap).click({ force: true })
            
    //login to the app
    login(credentials.user.email, credentials.user.password)
    //user connect metamask wallet, wallet should be connected by this time
    // we are only selecting the metamask wallet connect
    metaMaskConnect(metaMaskConnect)
      //TODOs convert to AppActions or Cy.Commands Tours
      cy.get('[data-testid="CloseRoundedIcon"]').then(($ele) => {
        if ($ele.find('[data-testid="CloseRoundedIcon"]')) {
            cy.get('[data-testid="CloseRoundedIcon"]').click()
        } else {
            //Do Nothing
        }
    })

    cy.get('span[class="connectionDot online"]').should('have.css', 'background-color', 'rgb(7, 148, 79)')

    cy.get('[class="header-main-navigation__item"]').eq(0).click()

    cy.get('[class="guideTourHelper"]').should('be.visible').click()

    cy.get('#simple-popover div:nth-of-type(3) > div:nth-of-type(2)').should('be.visible').click()
    cy.contains('Get Started!').should('be.visible').click({ force: true })
    cy.wait(9000)
    //Next two times while navigating the  tour
    cy.MultiClick('[class="nextBtn"]', 2)
    cy.get('button[class="messagesNextBtn"]').should('be.visible').click({ force: true })
    cy.wait(3000)
    cy.MultiClick('button[class="nextBtn"]', 4)
    cy.wait(3000)
    cy.contains('Mission Complete').should('be.visible').click()
    cy.wait(3000)
    cy.get('[class="header-main-navigation__item"]').eq(0).click()
    cy.get('[class="guideTourHelper"]').should('be.visible').click()
    cy.get('#simple-popover div:nth-of-type(3) > div:nth-of-type(3)').should('be.visible').click()
    cy.MultiClickWord('Next', 5)
    cy.wait(3000)
    cy.contains('What Can I Do With My Property?').should('be.visible').click()
    cy.wait(3000)
    cy.MultiClickWord('Next', 3)
    cy.wait(3000)
    cy.contains('Start Exploring').should('be.visible').click()

 }



 module.exports = {
    marketPlace,
    tourOffersMap
}