/// <reference types="cypress" />

import { locators } from './locators'

const mainSiteNavigation = () => {
    cy.visit('/')
     //Main Menu
     window.onbeforeunload = function () {
        return true;
      }
      
     //cy.get('h1').should('contain', locators.navigationMainSite.superworld)
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     cy.get(locators.navigationMainSite.mainMenu).should('contain', locators.navigationMainSite.menuRoot)
    //Menu
     cy.get(locators.navigationMainSite.subTitle).eq(0).should('contain', locators.navigationMainSite.mainSections)
     cy.get(locators.navigationMainSite.subTitle).eq(1).should('contain', locators.navigationMainSite.subSections)
     cy.get(locators.navigationMainSite.subTitle).eq(2).should('contain', locators.navigationMainSite.contact)
     //VR
     cy.get('a').contains(locators.navigationMainSite.vrEstate).should('be.visible').click({ force: true })
     cy.url().should('include', '/virtual-real-estate')
     cy.get('p').should('contain', locators.navigationMainSite.metaVerse)
     cy.get('[data-w-id="9e55f55d-d11f-ee01-18f0-e0267e79b495"]').click({ force: true })
     //AR
     cy.wait(3000)
     cy.get('a').contains(locators.navigationMainSite.arMobileApp).should('be.visible').click({ force: true })
     cy.get('p').should('contain', locators.navigationMainSite.ar)
     cy.url().should('include', '/ar-mobile-app')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //NFT Salon
     cy.get('a').contains(locators.navigationMainSite.nftSalon).should('be.visible').click({ force: true })
     cy.url().should('include', '/nft-salon')
     cy.get('p').should('contain', 'buy and sell your favorite nfts')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //How It works
     cy.get('a').contains(locators.navigationMainSite.howItWorks).should('be.visible').click({ force: true })
     cy.url().should('include', '/how-it-works')
     cy.get('p').should('contain', 'the science of superworld')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //About Us
     cy.get('a').contains(locators.navigationMainSite.aboutUs).should('be.visible').click({ force: true })
     cy.url().should('include', '/about-us')
     cy.get('p').should('contain', 'Create, Discover and ')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //content Hub
     cy.get('a').contains(locators.navigationMainSite.contentHub).should('be.visible').click({ force: true })
     cy.url().should('include', '/content-hub')
     cy.get('[class="dynamic-hero-content"]').eq(0).should("exist");
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //Star Chamber
     cy.get('a').contains(locators.navigationMainSite.starChamber).should('be.visible').click({ force: true })
     cy.get('[class="heading_small font-caps"]').should('contain','Featured Artists')
     cy.url().should('include', '/star-chamber')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //NFT Drops
     cy.get('a').contains(locators.navigationMainSite.nftDrops).should('be.visible').click({ force: true })
     cy.url().should('include', '/nft-drops')
     cy.get('[class="article-title-container drops"]').eq(0).should('contain', "Ecocapsule Queen ")
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //Store
     cy.get('a').contains(locators.navigationMainSite.store).should('have.attr', 'href', 'https://superworld-store.myshopify.com/')
     //Events
     cy.get('a').contains(locators.navigationMainSite.events).should('be.visible').click({ force: true })
     cy.url().should('include', '/events')
     cy.get('h1').should('contain', 'Latest Events')
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //FAQ
     cy.get('a').contains(locators.navigationMainSite.faq).should('be.visible').click({ force: true })
     cy.url().should('include', '/faq')
     cy.get('h1').should('contain', "WE'RE HERE TO HELP")
     cy.get(locators.navigationMainSite.hamburger).click({ force: true })
     //outreach
     //TODO validate page
     // cy.get('[class="contact-info"]').eq(0).should('contain','outreach@superworldapp.com')
     // cy.get('[class="paragraph-small white-font"]').should('contain','tel: +1 (212) 362-2637')
     //linkedin
     cy.get('[class="social-media-footer margin-top-small"] > a')
     .should('have.attr',
     "href",
     "https://www.linkedin.com/company/superworldapp/")
     //twitter
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(1).should('have.attr', 'href', 'https://twitter.com/superworldapp')
     //facebook
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(2)
     .should('have.attr', 'href', 'https://m.facebook.com/superworldapp')
     //instagram
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(3).should('have.attr',
     'href',
     'https://www.instagram.com/superworldapp/?hl=en')
     //discord
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(4)
     .should('have.attr', 'href', 'https://discord.com/invite/ZUMJjrg4nx')
     //sw token
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(5)
     .should('have.attr', 'href', 'https://t.me/superworldtoken')
     //youtube
     cy.get('[class="social-media-footer margin-top-small"] > a').eq(6)
     .should('have.attr',
         'href',
         'https://www.youtube.com/channel/UCqkWtBF9d5Xtj11cCtUiBiw')

 }

 module.exports = {
    mainSiteNavigation
}