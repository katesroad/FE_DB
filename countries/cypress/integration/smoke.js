import { waitFor, findByRole } from "@testing-library/react";
describe("smoke", () => {
	it.only("should visit home page", () => {
		cy.visit("/");
		cy.findByLabelText("loading");
	});
});
