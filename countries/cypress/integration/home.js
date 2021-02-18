describe("home page", () => {
	it.only("search existing country by name", () => {
		cy.visit("/");

		// show loading spinner
		cy.findByLabelText("loading");

		// search an existing country
		cy.findByRole("textbox").type("China");
		cy.get("form").within((form) => {
			form.find("button").click();
		});
		cy.findByRole("heading", "China");
	});
	it.only("search not existing country", () => {
		cy.visit("/");
		cy.findByLabelText("loading");
		cy.findByRole("textbox").type("Unknown country");
		cy.get("form").within((form) => {
			form.find("button").click();
		});
		cy.findByText(/not found/i);
	});
});
