/* eslint-disable no-undef */
describe("Men user Journey", ()=> {
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it("a user selects the men category, redirects to the mens products page and checkout through cart", () => {
        cy.getByData("Kids").find("button").contains("Kids").click()
        cy.location("pathname").should("eq","/kids")
        cy.getByData("Product").find("button").contains("Buy Now").click()
        cy.location("pathname").should("eq","/cart")
        cy.getByData("checkout-btn").click()
        cy.location("pathname").should("eq","/")
    })
})