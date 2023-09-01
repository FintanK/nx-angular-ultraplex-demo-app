describe('Movies', () => {
  beforeEach(() => cy.visit('/movies'));

  it('should display the page name', () => {
    cy.get('h2').contains('Movies');
  });
});
