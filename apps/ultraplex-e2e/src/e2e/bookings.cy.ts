describe('Bookings', () => {
  beforeEach(() => cy.visit('/bookings'));

  it('should display the page name', () => {
    cy.get('h2').contains('Bookings');
  });
});
