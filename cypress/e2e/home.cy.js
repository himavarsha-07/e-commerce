/* eslint-disable no-undef */
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context("Main home", () => {
    it('Homepage heading', () => {
      cy.getByData("Mainheading").find("h1").contains("CLOTHING MADE FOR YOU!!")
    })
    it('Homepage subheading', () => {
      cy.getByData("Mainheading").find("p").contains("Trending collections for everyone")
    })
    it('shopnow button', () => {
      cy.getByData("Mainheading").find("button").contains("Shop Now")
    })
    it("Main image", () => {
      cy.getByData("Mainimage").should('have.attr', 'alt', 'homeimage')
    })
  })
  context("Categories", ()=>{
    it("Mens Category", () => {
      cy.getByData("Mens").find("img").should('have.attr', 'alt', 'menimage')
      cy.getByData("Mens").find("button").contains("Men's").click()
    })
    it("Womens Category", () => {
      cy.getByData("Womens").find("img").should('have.attr', 'alt', 'womenimage')
      cy.getByData("Womens").find("button").contains("Women's").click()
    })
    it("Kids Category", () => {
      cy.getByData("Kids").find("img").should('have.attr', 'alt', 'kidimage')
      cy.getByData("Kids").find("button").contains("Kids").click()
    })
  })
})