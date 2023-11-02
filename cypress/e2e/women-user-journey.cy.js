/* eslint-disable no-undef */
describe("Women user Journey", ()=> {
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it("a user selects the women category, redirects to the womens products page and checkout through cart", () => {
        cy.getByData("Womens").find("button").contains("Women's").click()
        cy.location("pathname").should("eq","/women")
        cy.getByData("Product").find("button").contains("Buy Now").click()
        cy.location("pathname").should("eq","/cart")
        cy.getByData("checkout-btn").click()
        cy.location("pathname").should("eq","/")
    })
})