Most important part, where we put our test file

1. https://testing-library.com/docs/cypress-testing-library/intro/

- features

  > 1.  Auto wait query and assertion to be resolved with a default timeout 4000
  > 2.  cypress.task: excute js on the system(outside of the brower)

  ```ts
  module.exports = (on, config) => {
  	on("task"),
  		{
  			"clear:db": () => {
  				return clearDatases();
  			},
  		};
  };
  beforeEach(() => {
  	cy.task("clear:db");
  });
  ```

  > 3.  command custmizable

```js
Cypress.Commands.ad("login", (email, password) => {
	return cy.window.then((win) => {
		email, password;
	});
});
```

- cy.server and fixtures

Limit boundary to the third partty API interaction

```js
cy.server();
cy.route("GET", "/tweets*", "fixture:tweets");
```

mock data using fixtures
