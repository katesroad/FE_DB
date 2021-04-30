import * as React from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "components/lib";
import Header from "components/header";
import {
  OuterLink,
  LinkButton,
  AboutCompany,
  CompanyLogo,
  ComapnyDesc,
  JobDesc,
  JobContent,
  MdContent,
  HowToApply,
  ApplyNow,
  Main,
  Footer,
} from "./components/styled";
import { useGetJob } from "hooks/job.hooks.";

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
      <Header>
        {status === "success" ? (
          <AboutCompany>
            <CompanyLogo
              style={{ backgroundImage: `url(${job.company_logo})` }}
            />
            {/* compnay name, company url */}
            <ComapnyDesc>
              <div className="job-owner">
                <h4>{job.company}</h4>
                <OuterLink href={job.company_url}>{job.company}</OuterLink>
              </div>
              <LinkButton href={job.company_url}>Company Site</LinkButton>
            </ComapnyDesc>
          </AboutCompany>
        ) : status === "error" ? (
          <p>Failed to load job</p>
        ) : (
          <Spinner />
        )}
      </Header>
      <Main>
        {status === "success" ? (
          <>
            <JobDesc>
              {/* use wapper to avoid adding too much content inside of JobDesc */}
              <JobContent>
                <div>
                  <p>
                    <span>{new Date(job.created_at).toLocaleDateString()}</span>
                    <span className="job-type">{job.type}</span>
                  </p>
                  <h4 className="job-role">{job.title}</h4>
                  <span className="job-location">{job.location}</span>
                </div>
                <LinkButton href={job.company_url} className="apply-now">
                  Apply Now
                </LinkButton>
              </JobContent>
              {/* Job description, requirements, etc */}
              {/* splitted content inside JobDesc to a separate one */}
              <MdContent
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </JobDesc>
            <HowToApply>
              <h4>How to apply</h4>
              <MdContent
                dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
              ></MdContent>
            </HowToApply>
          </>
        ) : status === "error" ? (
          <Card>{JSON.stringify(error)}</Card>
        ) : (
          <Card>
            <Spinner />
          </Card>
        )}
      </Main>
      {/* the fixed footer at page bottom */}
      {status === "success" ? (
        <Footer>
          <ApplyNow>
            <div className="job-role">
              <h4>{job.title}</h4>
              <OuterLink href={job.company_url}>{job.company}</OuterLink>
            </div>
            <LinkButton href={job.company_url}>Apply Now</LinkButton>
          </ApplyNow>
        </Footer>
      ) : null}
    </>
  );
}
