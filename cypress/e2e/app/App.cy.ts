describe("home", () => {
  it("works", () => {
    cy.visit("/");

    cy.contains(/app/i);
  });
});
