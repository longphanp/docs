import React from "react";
import About from "./about";

describe("<About />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About />);
    cy.get("button").click().should("have.text", "Oh no");
  });
});

