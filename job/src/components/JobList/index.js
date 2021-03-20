// eslint-disable-next-line
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Typography, Card } from "components/lib";
import * as React from "react";
import { JobWrap, Logo, Content } from "./styles";

export const JobType = {
	id: PropTypes.string.isRequired,
	company_logo: PropTypes.string,
	created_at: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

export const JobItem = React.memo(({ ...job }) => (
	<JobWrap to={`/job/${job.id}`}>
		<Logo style={{ backgroundImage: `url(${job.company_logo})` }} />
		<Content>
			{/* lesson  learned, we don't care about the line height */}
			{/* we care about the position, margin, group elements */}
			<Typography variant="body" as="p">
				<span>{new Date(job.created_at).toLocaleDateString()}</span>
				<span className="dot">.</span>
				<span>{job.type}</span>
			</Typography>
			<Typography variant="h3" as="h3" className="title">
				{job.title}
			</Typography>
			<Typography variant="body" as="p" className="company">
				<span>{job.company}</span>
			</Typography>
			<p className="location">{job.location}</p>
		</Content>
	</JobWrap>
));
JobItem.propTypes = { ...JobType };

const NoJobs = () => (
	<Card>
		<p>No data with given search filter.</p>
	</Card>
);

const JobList = ({ jobs }) => {
	if (jobs.length) {
		return (
			<div
				css={`
					width: 100%;
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(286px, 1fr));
					grid-auto-rows: minmax(228px, auto);
					gap: 1.5rem;
				`}
			>
				{jobs.map((job) => (
					<JobItem {...job} key={job.id} />
				))}
			</div>
		);
	}
	return <NoJobs />;
};
JobList.defaultProps = {
	jobs: [],
};
JobList.propTypes = {
	jobs: PropTypes.arrayOf(PropTypes.shape(JobType)),
};

export default JobList;
