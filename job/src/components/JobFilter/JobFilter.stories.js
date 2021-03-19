import * as React from "react";
import JobFilter from ".";

export default {
	title: "components/JobFilter",
	component: JobFilter,
};

const Template = (args) => <JobFilter {...args} />;

export const Example = Template.bind({});
Example.args = {
	title: "",
	location: "",
	fulltime: true,
	onChange: (update) => {
		console.log(update);
	},
	onSubmit: (data) => {
		console.log(data);
	},
};
