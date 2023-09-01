describe('Cinemas', () => {
  beforeEach(() => cy.visit('/cinemas'));

  it('should display the page name', () => {
    cy.get('h2').contains('Cinemas');
  });
});
