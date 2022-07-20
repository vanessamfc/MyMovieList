describe('Login', () => {
  it('Should create a user', () => {

    const timestamp = new Date().getTime();

    cy.visit('http://localhost:3001/sign-up')
    cy.get('[data-cy="signUp-name-input"]').type('user teste')
    cy.get('[data-cy="signUp-email-input"]').type(`vosiji4996${timestamp}@storypo.com`)
    cy.get('[data-cy="signUp-password-input"]').type('12345678')
    cy.get('[data-cy="signUp-button"]').click()
    cy.get('.Toastify__toast-body').should('contain','Your account has been successfully created')
  })

})