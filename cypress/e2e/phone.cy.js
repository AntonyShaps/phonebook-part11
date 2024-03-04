const baseUrl = 'http://localhost:3001'

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit(baseUrl)
    cy.contains('Phonebook')
    cy.contains('Numbers')
  })
})