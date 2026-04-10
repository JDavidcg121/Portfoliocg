describe('Edits menu', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('https://agroteccr.com/');
  });

  it('allows access to the Edits menu and scrolls twice', () => {
    cy.contains('a', /ediciones/i)
      .should('be.visible');

    cy.wait(2000);

    cy.contains('a', /ediciones/i)
      .click({ force: true });

    cy.url().then((url) => {
      expect(url.toLowerCase()).to.match(/ediciones|revista|agrotec/);
    });
      cy.wait(500); 
      cy.scrollTo(0, 200);
        cy.wait(500);
    
    cy.scrollTo(0, 400);
    cy.wait(500); 
    cy.scrollTo(0, 600);
     cy.wait(500); 
    cy.scrollTo(0, 900);
     cy.wait(500); 
    cy.scrollTo(0, 1500);
  });
});
