import * as React from "react";
import { useParams } from "react-router-dom";
import { Button } from "components/lib";
import {
	Wrapper,
	FlexContent,
	AboutCompany,
	CompanyLogo,
	JobDesc,
	HowToApply,
	FixedFooter,
} from "./styles";
import { AppHeader } from "components/layout";
import { useGetJob } from "hooks/useGetJobs";

// Job detail information page
export default function JobScreen() {
	const { id } = useParams();
	const { status, data: job, error } = useGetJob(id);
	React.useEffect(() => {
		if (job?.title) document.title = "Role | " + job.title;
		return () => (document.title = "Jobs");
	}, [job]);
	return (
		<>
			<AppHeader>
				{status === "success" ? (
					<AboutCompany>
						<CompanyLogo
							style={{ backgroundImage: `url(${job.company_logo})` }}
						/>
						<FlexContent className="content">
							<div className="job-owner">
								{/* compnay name, company url */}
								<h4>{job.company}</h4>
								<a
									href={job.company_url}
									target="_blank"
									rel="noreferrer"
									className="company-link"
								>
									{job.company}
								</a>
							</div>
							<Button
								as="a"
								href={job.company_url}
								target="_blank"
								rel="noreferrer"
								className="btn-link"
							>
								Company Site
							</Button>
						</FlexContent>
					</AboutCompany>
				) : null}
			</AppHeader>
			<Wrapper>
				{status === "success" && job ? (
					<>
						<JobDesc>
							<FlexContent className="content">
								<div>
									<p>
										<span>{new Date(job.created_at).toLocaleDateString()}</span>
										<span>{job.type}</span>
									</p>
									<h4 className="job-role">{job.title}</h4>
									<p className="job-location">{job.location}</p>
								</div>
								<Button
									as="a"
									href={job.company_url}
									target="_blank"
									className="btn-link"
								>
									Apply Now
								</Button>
							</FlexContent>
							{/* Job description, requirements, etc */}
							<div
								dangerouslySetInnerHTML={{ __html: job.description }}
								className="job-desc"
							/>
						</JobDesc>
						<HowToApply>
							<h4>How to apply</h4>
							<p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>
						</HowToApply>
						{/* the apply button, role at page bottom */}
						<FixedFooter>
							<FlexContent className="content">
								<div className="jd">
									<h4>{job.title}</h4>
									<strong>{job.company}</strong>
								</div>
								<Button
									as="a"
									target="_blank"
									href={job.company_url}
									rel="noreferrer"
									className="btn-link"
								>
									Apply Now
								</Button>
							</FlexContent>
						</FixedFooter>
					</>
				) : status === "error" ? (
					<p>{JSON.stringify(error)}</p>
				) : (
					<p>Loading...</p>
				)}
			</Wrapper>
		</>
	);
}
