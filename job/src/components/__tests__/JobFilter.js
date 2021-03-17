import * as React from "react";
import { render, screen } from "test/render-utils";
import JobFilter from "components/JobFilter";

test("<JobFitler />", () => {
	const onChange = jest.fn();
	const filter = { title: "", location: "", type: "" };
	render(<JobFilter onChange={onChange} {...filter} />);
});
