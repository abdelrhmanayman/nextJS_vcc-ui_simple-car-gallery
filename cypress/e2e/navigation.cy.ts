describe('Navigation', () => {
  it('should navigate to learn and shop pages', () => {
    cy.visit('/')

    cy.get('li[id*="0-learn"]').click()

    cy.url().should('include', '/learn')

    cy.visit('/')

    cy.get('li[id*="0-shop"]').click()

    cy.url().should('include', '/shop')

  })
})

export {}