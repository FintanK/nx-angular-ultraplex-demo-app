describe('ultraplex', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the application name', () => {
    cy.get('a.logo').contains('Ultraplex Cinemas');
  });

  it('should display the cards', () => {
    cy.get('.card').should( 'have.length', 4);
  });
});
