import locators from '../support/locators'


describe('Login', () => {
  it('Should create a user', () => {

    const timestamp = new Date().getTime();

    cy.visit('http://localhost:3001/sign-up')
    cy.get(locators.signUp.name).type('user teste')
    cy.get(locators.signUp.email).type(`vosiji4996${timestamp}@storypo.com`)
    cy.get(locators.signUp.password).type('12345678')
    cy.get(locators.signUp.signUpButton).click()
    cy.get('.Toastify__toast-body').should('contain','Your account has been successfully created')
  })

  it('Should not create a user', () => {

    const timestamp = new Date().getTime();

    cy.visit('http://localhost:3001/sign-up')
    cy.get(locators.signUp.name).type('user teste')
    cy.get(locators.signUp.email).type('vanessamfc@outlook.com')
    cy.get(locators.signUp.password).type('12345678')
    cy.get(locators.signUp.signUpButton).click()
    cy.get('.Toastify__toast-body').should('contain','Failed to create account')
  })

})