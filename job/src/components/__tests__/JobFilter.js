import * as React from "react";
import { render, screen } from "test/render-utils";
import { act } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import JobFilter from "components/JobFilter";

test("<JobFitler />", async () => {
	const onChange = jest.fn();
	const onSubmit = jest.fn();
	const filter = { title: "", location: "", full_time: false };
	render(<JobFilter onChange={onChange} {...filter} onSubmit={onSubmit} />);

	// test description search
	const [mobileDescInput, tabletDescInput] = screen.getAllByPlaceholderText(
		/Filter by description/i
	);
	const description = "React";
	act(() => {
		userEvent.type(mobileDescInput, description);
	});
	expect(onChange).toBeCalledWith({ description });

	// click filter button
	userEvent.click(screen.getByLabelText(/filter/));

	// dialog have the
	const dialog = screen.getByLabelText("filter-dialog");
	expect(dialog).toBeInTheDocument();
	expect(
		within(dialog).getByPlaceholderText(/Filter by location/i)
	).toBeInTheDocument();
	expect(within(dialog).getByText("Fulltime only")).toBeInTheDocument();

	// click fulltime checkbox
	const fulltimeCheck = within(dialog).getByText(/fulltime only/i);
	userEvent.click(fulltimeCheck);
	expect(onChange).toBeCalledWith({ full_time: !filter.full_time });

	// @todo a testing bug has not be solved yet
	const locationInput = within(dialog).getByPlaceholderText(
		/Filter by location.../i
	);
	userEvent.type(locationInput, "nyv");
});
