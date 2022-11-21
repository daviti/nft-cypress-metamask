const homePage = {
      signInBtnHeader: ".header-main-navigation__avatar",
      appSwitcher: ".app-switcher"
}

const login = {
      email: "input[name=emailSignIn]",
      password: "input[name=passwordSignIn]",
      loginBtn: "button[type=submit]",
}

const createAccount = {
      createAnAccount: "Create Account"
}

const metaMaskConnect = {
      metaMaskConnect: "MetaMask",
      wallet: "Wallet",
      greenDotWalletConnected: "span[class='connectionDot online']"
}

const profile = {
      imgAvatar: "#profile",
      myProfileMenu: "My Profile",
      changeusername: "Change Username",
      inputfieldusernameDrpDwn: "input[id='newUsername']",
      usernameSuperNice: "supernice",
      confirm: "CONFIRM",
      classP: "p",
      success: "SUCCESS!",
      usernameupdateDrpDwn: "div[class='intro']",
      closeX: "[data-testid='CloseIcon']"
}

const navigationMainSite = {
      superworld: "superworld",
      hamburger: "[class='hamburger-lines blue']",
      mainSections: "Main sections",
      subSections: "Sub Sections",
      contact: "Contact",
      mainMenu: "[class='section-header-menu']",
      menuRoot: "MENU",
      maintitle: "[data-w-id='5e987df8-7c60-cb27-0ae5-7edd3df5eee3']",
      subTitle: "div[class='heading_ultra-small white-font font-caps']",
      contactUs: "Contact US",
      socialMediaButtons: "[class='social-media-btn w-inline-block']",
      home: "Home",
      vrEstate: "Virtual Real Estate",
      arMobileApp: "AR Mobile App",
      nftSalon: "NFT Salon",
      howItWorks: "How it Works",
      aboutUs: "About Us", 
      contentHub: "Content Hub",
      starChamber: "Star Chamber",
      nftDrops: "NFT Drops",
      store: "Store",
      events: "Events",
      faq: "FAQ",
      ar: "Augmenting your Super Reality",
      metaVerse: "IN THE METAVERSE",
      sectionHeadings: "[class='hero-section-headings']" 
}

const marketPLace = {
      marketPlacetab: "Marketplace",
      marketPlaceCartbtn: "[class='marketPlaceBtn']",
      recentPurchased: "Recently Purchased",
      forSale: "Top Listings",
      expandMap: "[class='expand-map-icon']",
      sortBy: "Sort by",
      dateOldNew: "Date: Old to new",
      dateNewOld: "Date: New to old",
      priceHigLow: "Price: High to low",
      priceLowHigh: "Price: Low to high",
      expandMarketplace: "[class='close-map-icon']",
      btnWrapper: "[class='btn-wrapper']",
      share: "[target='share']"
}

const editPlot = {
      cardMenu: "div[class='card_menu_']",
      plotThreeDots: "div.option-item.edit-item",
      editplotEditField: "div.edit-modal-section.title-section > input",
      save: "Save",
      successComponentEdit: "div[class='p']",
      successMessageEdit: "Please allow SuperWorld team some time to review your property details before they are published."
}

const enter = {
      enterMap: "ENTER map"
}

const selling = {
      myProfile: "My Profile",
      propertiesList: ".left-side.remove-item-on-mobile div:nth-of-type(2)",
      listingList: ".left-side.remove-item-on-mobile div:nth-of-type(3)",
      properties: "Properties ",
      listings: "Listings ",
      sellButton: "[class='pricing']",
      sell: "Sell",
      buy: "Buy",
      sellInput: "[id='standard-basic']",
      sellPrice: "0.3",
      confirmBtn: "Confirm"
}


export const locators = {
             enter,
             homePage,
             login,
             metaMaskConnect,
             marketPLace,
             profile,
             navigationMainSite,
             selling,
             editPlot,
             createAccount
}