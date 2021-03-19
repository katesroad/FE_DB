// eslint-disable-next-line
import styled from "styled-components/macro";
import { AppHeader, AppMain } from "components/layout";
import * as React from "react";
import JobFilter from "components/JobFilter";
import JobList from "components/JobList";
import { useGetJobs } from "hooks/useGetJobs";

// Invoice detail page
export default function JobsScreen() {
	const [filter, setFilter] = React.useState({
		description: "",
		location: "",
		full_time: false,
	});

	// job search happens after form submmiting triggered
	const [doSearch, setDoSearch] = React.useState(true);
	const [params, setParams] = React.useState({});
	React.useEffect(() => doSearch && setParams(filter), [filter, doSearch]);

	const { status, data: jobs, error } = useGetJobs(params);

	const handleChange = (update) => {
		setDoSearch(false);
		setFilter({ ...filter, ...update });
	};
	const handleSubmit = () => setDoSearch(true);
	return (
		<>
			<AppHeader>
				<JobFilter
					{...filter}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
			</AppHeader>
			<AppMain>
				{status === "success" ? (
					<JobList jobs={jobs} />
				) : (
					<>
						{status === "error" ? (
							<p>{JSON.stringify(error)}</p>
						) : (
							<p>Loading...</p>
						)}
					</>
				)}
			</AppMain>
		</>
	);
}
