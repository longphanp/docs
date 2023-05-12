describe("Visit home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/about");
  });

  it("It should visit about page", () => {
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });

  it("Click on button should change text", () => {
    cy.get("button").click();
    cy.get("button").should("have.text", "Oh no");
  });

  it("Request api should return name", () => {
    cy.intercept({ method: "GET", url: "/api/hello" }, { name: "Hee" }).as(
      "hello"
    );
    cy.wait("@hello").should(({ response }) => {
      return response?.body.name === "Hee";
    });
  });
});

export {};

