describe('Login', () => {

  beforeEach(() => {
    cy.visit('/sign-in')
    cy.get('[type="text"]').type('vanessamfc@outlook.com')
    cy.get('[type="password"]').type('12345678')
    cy.get('.MuiButton-label').click()
  })

  it('Should Login', () => {
    cy.get('#exitButton').should(() => {
    
      const credentials = JSON.parse(JSON.parse(localStorage.getItem('persist:myMovieList')).user)
      expect(credentials).to.have.property('token')
      expect(credentials.token).to.not.eq('')
      console.log(credentials)
    })

  })

  it('Should Logout', () => {

    cy.get('#exitButton').click().should(() => {
    
      const credentials = JSON.parse(JSON.parse(localStorage.getItem('persist:myMovieList')).user)

      expect(credentials.token).to.be.eq('')
      console.log(credentials)
    })
    cy.url().should('include', '/sign-in')

  })
})

