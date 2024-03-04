// eslint-disable-next-line import/no-extraneous-dependencies
const baseUrl = 'http://localhost:3001'

describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit(baseUrl)
    cy.contains('Phonebook')
    cy.contains('Numbers')
  })
})
