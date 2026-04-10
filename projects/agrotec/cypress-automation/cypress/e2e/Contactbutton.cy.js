describe('Contact Button', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('https://agroteccr.com/');
  });

  it('This leads to the contact section', () => {
      cy.wait(2000);
    cy.contains('a, button', /contacto/i)
      .should('be.visible')
      .click({ force: true });

    cy.get('form, #contact, .contact, .contact-section')
      .should('exist');
  });
});
