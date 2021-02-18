describe("home page integration testing", () => {
	it("search country by country name", () => {
		cy.visit("/");

		// show loading spinner
		cy.findByLabelText("loading");

		// search an existing country
		cy.findByRole("textbox").type("China");
		cy.get("form").within((form) => {
			form.find("button").click();
		});
		cy.findByRole("heading", "China");

		cy.findByRole("textbox").clear().type("Unknown country");
		cy.get("form").within((form) => {
			form.find("button").click();
		});
		cy.findByText(/not found/i);
	});
	it("search country by region", () => {
		cy.visit("/");

		// search country by region name
		cy.findByRole("button", { name: /filter by region/i }).click();
		cy.findByRole("option", { name: /africa/i }).click();
		cy.findByText(/Algeria/i);

		// reset country region as all
		cy.findByRole("button", { name: /africa/i }).click();
		cy.findByRole("option", { name: /filter by region/i }).click();
		cy.findByRole("heading", { name: /Afghanistan/i });
	});

	it.only("page navigation", () => {
		cy.visit("/");
		cy.findByRole("heading", { name: /China/i }).click();
		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/country/China");
		});

		cy.findByText(/back/i).click();
		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/");
		});
	});
});
