const signIn = {
    invalid_creds_error: "The email you have entered is not associated with an existing account."
}

const listingPrice = {
    errorfield: "[class='listing-price-error']",
    listingsPriceValidation: "Listing amount must be greater than 0.1 eth"

}
module.exports.errors = {
    listingPrice,
    signIn
}