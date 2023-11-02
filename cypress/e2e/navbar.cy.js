/* eslint-disable no-undef */
describe('Navbar', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
    it("Check if Website name is clickable or not", () =>{
        cy.getByData("Websitename").contains("Shopping Hub").click()
        cy.location("pathname").should("eq", "/")
    })
    it("Check if home tag is clickable and is redirecting to correct path", () =>{
        cy.getByData("home").contains("Home").click()
        cy.location("pathname").should("eq", "/")
    })
    it("Check if men tag is clickable and is redirecting to correct path", () =>{
        cy.getByData("men").contains("Men's").click()
        cy.location("pathname").should("eq", "/men")
    })
    it("Check if women tag is clickable and is redirecting to correct path", () =>{
        cy.getByData("women").contains("Women's").click()
        cy.location("pathname").should("eq", "/women")
    })
    it("Check if kids tag is clickable and is redirecting to correct path", () =>{
        cy.getByData("kids").contains("Kids").click()
        cy.location("pathname").should("eq", "/kids")
    })
    it("Check if wishlist icon is clickable and is redirecting to correct path", () =>{
        cy.getByData("wishlist").click()
        cy.location("pathname").should("eq", "/wishlist")
    })
    it("Check if cart icon is clickable and is redirecting to correct path", () =>{
        cy.getByData("cart").click()
        cy.location("pathname").should("eq", "/cart")
    })
    it("Check if login icon is clickable and is redirecting to correct path", () =>{
        cy.getByData("login").click()
        cy.location("pathname").should("eq", "/")
    })
})