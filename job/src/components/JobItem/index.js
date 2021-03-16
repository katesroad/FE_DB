import { Typography } from "components/lib";
import * as React from "react";
import { Wrapper, Logo, Content } from "./styles";

const JobItem = ({ ...job }) => (
	<Wrapper to={`job/${job.id}`}>
		<Logo style={{ backgroundImage: `url(${job.company_logo})` }} />
		<Content>
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
	</Wrapper>
);

export default React.memo(JobItem);
