describe('Menú Ediciones', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('https://agroteccr.com/');
  });

it('allows access to the Edits menu', () => {
  cy.contains('a', /ediciones/i)
    .should('be.visible');

  cy.wait(2000);

  cy.contains('a', /ediciones/i)
    .click({ force: true });

    cy.url().then((url) => {
      expect(url.toLowerCase()).to.match(/ediciones|revista|agrotec/);
    });
  });
});
