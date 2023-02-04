describe("home", () => {
  it("works", () => {
    cy.visit("/");

    cy.contains(/acme sprocket co/i);
  });
});
