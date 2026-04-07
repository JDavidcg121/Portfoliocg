describe("Valid Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Should log in successfully with valid credentials", () => {
    cy.fixture("users").then((data) => {
      cy.get("#username").type(data.validUser.username);
      cy.get("#password").type(data.validUser.password);
      cy.get("button[type='submit']").click();

      cy.get("#flash").should("contain", "You logged into a secure area!");
    });
  });
});
