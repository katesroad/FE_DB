import * as React from "react";
import { Button } from "components/lib";
import {
	Wrapper,
	Content,
	AboutCompany,
	CompanyLogo,
	JobDesc,
	HowToApply,
	FixedFooter,
} from "./styles";
import { AppHeader } from "components/layout";

// Job detail information page
export default function JobScreen() {
	const jobData = {
		company: "You Need A Budget (YNAB)",
		company_logo:
			"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcStjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f1e50b660e33b469d44f3e0056bfb0dbc3ec1826/photo5945096832545830307.jpg",
		company_url: "https://www.youneedabudget.com/",
		created_at: "Tue Mar 16 03:08:28 UTC 2021",
		description:
			"<p>About Verse</p>↵<p>Verse are a vibrant team with a focus on research-driven design and user experience supported by outstanding technical capability. We’re looking for an accomplished Senior Full Stack Developer to join our growing team.</p>↵<p>Our developers are responsible for bringing digital experiences to life, and innovating on digital experiences. Working on everything from basic landing pages right through to huge international e-commerce solutions.</p>↵<p>We promote a culture of learning and autonomy, so that our teams can help to shape the future of Verse. Therefore we really value individuals who bring an eye for detail, a willingness to learn, as well as being self-motivated to streamline processes and add real value to the role.</p>↵<p>Job description</p>↵<p>We are looking for a Developer who has a track record of successfully delivering development projects within an agency environment. You will be a team player with a solutions-based approach. You will be bang up to date with latest industry developments and be a stickler for abiding by coding standards and best practices.</p>↵<p>We want you to be able to see the bigger picture, not just your immediate task list in front of you to ensure projects are running smoothly, proactively looking to innovate, streamline processes and push the boundaries for both Verse and our clients alike.</p>↵<p>We are an agile team that is rapidly expanding. For you, this means there is the opportunity to make the role your own and really grow with us!</p>↵<p>Role and responsibilities</p>↵<ul>↵<li>The development of industry-leading websites and digital experiences.</li>↵<li>Taking designs and converting them into Craft CMS and Shopify sites.</li>↵<li>Innovation; constantly looking for better ways to do things by keeping up to date with the latest developments in the industry and applying this to client work.</li>↵<li>Championing process across the team, ensuring coding standards and best practices are followed.</li>↵<li>Ensuring all development work is fully tested before client review.</li>↵<li>Liaising with the management team to give progress updates and escalating any issues.</li>↵<li>Working as part of a wider team with project managers, designers, customer success and support desk analysts.</li>↵<li>Managing other resources to ensure the team is hitting wider client deadlines.</li>↵<li>Perform any other reasonable duties as required</li>↵</ul>↵<p>Skills and experience↵Required</p>↵<ul>↵<li>Must have development experience with Craft CMS and Shopify</li>↵<li>A proven track record in web development</li>↵<li>A great working knowledge of PHP, HTML, CSS &amp; SASS</li>↵<li>Well versed in Twig/Liquid templating languages</li>↵<li>A great working knowledge of JavaScript (including jQuery framework)</li>↵<li>Good communication skills and interpersonal skills</li>↵<li>Appreciation for clean and readable code</li>↵<li>Experienced in GIT and version control systems</li>↵<li>Strong team player who has the ability to use their initiative and self-manage</li>↵<li>Experience working with PHP frameworks such as Symfony/Yii</li>↵<li>Demonstrable skills implementing responsive websites</li>↵</ul>↵<p>Desirable experience</p>↵<ul>↵<li>Knowledge of setting up and maintaining CI/CD pipelines</li>↵<li>Test driven development skills</li>↵<li>Agile methodologies</li>↵<li>DevOps - Deployment / testing / monitoring</li>↵<li>API integration / development</li>↵<li>GraphQL experience</li>↵<li>Additional knowledge of languages such as XML, CSV and JSON.  Used in creating, extracting and manipulation data</li>↵<li>NodeJS development experience</li>↵<li>React/NextJS development experience</li>↵<li>Experience in either Photoshop / Sketch / Figma</li>↵<li>A passion for knowledge with a strong desire to learn and deploy new skills</li>↵<li>Accessibility best practices</li>↵<li>Experience of using project management software and tools – (Jira and or Trello)</li>↵<li>Knowledge of SEO best practices and the importance of ensuring this is fully considered from the onset of a project.</li>↵<li>Good understanding of software design and architecture</li>↵</ul>↵<p>What we’re offering↵Salary</p>↵<p>Competitive</p>↵<p>Other Perks</p>↵<p>But that’s not all, we also have some lovely perks:</p>↵<ul>↵<li>Holiday allowance - 33 days including Bank Holidays</li>↵<li>Workplace pension scheme</li>↵<li>Flexible working and working from home</li>↵</ul>↵<p>Impressive wellbeing package including:</p>↵<ul>↵<li>access to a GP over the phone or video conferencing  with prescriptions capability,</li>↵<li>healthcare cash plan to claim back a number of medical expenses such as dental, optical, physiotherapy, chiropractor, podiatry, overnight stays in hospital as well as many more...</li>↵<li>24/7 confidential helpline or bookable face-to-face sessions with qualified counsellors, trauma specialists and Cognitive Behavioural Therapists...</li>↵<li>free initial legal advice with a leading law firm.</li>↵<li>Money Management advice, including help with budgeting to negotiating payment arrangements on debt.</li>↵<li>Free tea and coffee in the offices, sometimes biscuits….</li>↵<li>Lots of super discounts at restaurants,  shops and gyms.</li>↵<li>Company Away Day and Socials.</li>↵<li>Verse contribute to (Bi-)Monthly team social night.</li>↵<li>£100 headphones budget once successfully completed probation period.</li>↵</ul>↵<p>Location</p>↵<p>Office-based or remote.</p>↵<p>We have two office locations which you can work out of in Birmingham or Kendal (at present the company is fully remote). From time to time we might require you to attend in-person meetings at either office. There is a requirement to travel with this role to meet with clients on occasion.</p>↵<p>Type</p>↵<p>Full time - 8:30 to 17:00 with 1 hour for lunch.  At Verse we do practice flexible working.</p>↵<p>Monday to Friday total 37.5 hours a week. Part time considered.</p>>",
		how_to_apply: `<p>Follow this link to apply: <a href="https://ynab.recruiterbox.com/jobs/fk0u7tc">https://ynab.recruiterbox.com/jobs/fk0u7tc</a></p>`,
		id: "4ca744df-5a54-4dc7-9f54-8dc571dbfbdb",
		location: "Remote, NYC",
		title: "Humbly Confident Senior iOS Developer ",
		type: "Full Time",
		url:
			"https://jobs.github.com/positions/4ca744df-5a54-4dc7-9f54-8dc571dbfbdb",
	};
	const [job] = React.useState(jobData);
	React.useEffect(() => {
		if (job?.title) document.title = job.title;
		return () => (document.title = "Jobs");
	}, [job]);
	return (
		<>
			<AppHeader />
			<Wrapper>
				<AboutCompany>
					<CompanyLogo
						alt={job.company}
						src={job.company_logo}
						className="company-logo"
					/>
					<Content className="content">
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
					</Content>
				</AboutCompany>
				<JobDesc>
					<Content className="content">
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
					</Content>
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
					<Content className="content">
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
					</Content>
				</FixedFooter>
			</Wrapper>
		</>
	);
}
