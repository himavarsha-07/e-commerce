/* eslint-disable no-undef */
describe("Men user Journey", ()=> {
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it("a user selects the men category, redirects to the mens products page and checkout through cart", () => {
        cy.getByData("Mens").find("button").contains("Men's").click()
        cy.location("pathname").should("eq","/men")
        cy.getByData("Product").find("button").contains("Buy Now").click()
        cy.location("pathname").should("eq","/cart")
        cy.getByData("checkout-btn").click()
        cy.location("pathname").should("eq","/")
    })
})