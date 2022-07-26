import locators from '../support/locators'


describe('Movie Search', () => {

  before(() => { 
    cy.visit('/sign-in')
    cy.get(locators.login.email).type('vanessamfc@outlook.com')
    cy.get(locators.login.password).type('12345678')
    cy.get(locators.login.loginButton).click()
  })

  it('Should search for a movie', () => {

   cy.get('[data-cy="home-search-input"]').type('spirited')
   cy.get('[href="/movie/tt0245429"] > h1').should('contain','Spirited')
    
   
  })

})