import * as React from "react";
import JobList from ".";

const job = {
	company: "You Need A Budget (YNAB)",
	company_logo:
		"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcStjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f1e50b660e33b469d44f3e0056bfb0dbc3ec1826/photo5945096832545830307.jpg",
	company_url: "https://www.youneedabudget.com/",
	created_at: "Tue Mar 16 03:08:28 UTC 2021",
	description: "<p><strong>About Us and Why We’re Hiring</strong><p>",
	how_to_apply: `<p>Follow this link to apply: <a href="https://ynab.recruiterbox.com/jobs/fk0u7tc">https://ynab.recruiterbox.com/jobs/fk0u7tc</a></p>`,
	id: "4ca744df-5a54-4dc7-9f54-8dc571dbfbdb",
	location: "Remote",
	title: "Humbly Confident Senior iOS Developer ",
	type: "Full Time",
	url: "https://jobs.github.com/positions/4ca744df-5a54-4dc7-9f54-8dc571dbfbdb",
};
export default {
	title: "components/JobList",
	component: JobList,
};

const Template = (args) => <JobList jobs={args.jobs} />;

export const Example = Template.bind({});
Example.args = {
	jobs: [job, job, job],
};
