# Install cypress

```
    npm i -D cypress
```

# Open cypress cli

```
    // package.json
    scripts: {
        test: "cypress open"
    }

    npm run test
```

# Cypress E2E testing

Create .spec.cy.ts file in /cypress/e2e folder

```js
describe("Test template", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it("test case 1", () => {
    // Test
  });
});
```

# Cypress component testing

Create component.spec.cy.tsx next to component

```js
import React from "react";
import Compontent from "./compontent.tsx";
describe("Test template", () => {
  beforeEach(() => {
    cy.mount(<Compontent />);
  });

  it("test case 1", () => {
    // Test
  });
});
```

- Test React component
  [https://docs.cypress.io/guides/component-testing/react/overview](https://docs.cypress.io/guides/component-testing/react/overview)

# Query dom

[https://docs.cypress.io/api/commands/get](https://docs.cypress.io/api/commands/get)

# Assertions

[https://docs.cypress.io/guides/references/assertions](https://docs.cypress.io/guides/references/assertions)

# Actions

[https://docs.cypress.io/guides/core-concepts/interacting-with-elements](https://docs.cypress.io/guides/core-concepts/interacting-with-elements)
