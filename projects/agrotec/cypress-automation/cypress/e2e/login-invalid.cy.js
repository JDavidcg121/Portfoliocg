describe("Invalid Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Should show error message with invalid password", () => {
    cy.fixture("users").then((data) => {
      cy.get("#username").type(data.invalidUser.username);
      cy.get("#password").type(data.invalidUser.password);
      cy.get("button[type='submit']").click();

      cy.get("#flash").should("contain", "Your password is invalid!");
    });
  });
});
