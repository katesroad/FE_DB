// eslint-disable-next-line
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import * as React from "react";
import { useParams } from "react-router-dom";
import { Content, Card } from "components/lib";
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
} from "./styles";
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
          <p>Loading..</p>
        )}
      </Header>
      <Content
        as="main"
        css={`
          max-width: 730px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 156px;
          ${mediaQueries.small} {
            padding-top: 98px;
          }
        `}
      >
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
                <LinkButton href={job.company_url}>Apply Now</LinkButton>
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
          <Card>Loading...</Card>
        )}
      </Content>
      {/* the fixed footer at page bottom */}
      {status === "success" ? (
        <div
          css={`
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            padding-top: 16px;
            padding-bottom: 16px;
            background-color: var(--element-background);
            ${mediaQueries.small} {
              padding-top: calc(16px + 0.5vw);
              padding-bottom: calc(16px + 0.5vw);
            }
          `}
        >
          <ApplyNow>
            <div className="job-role">
              <h4>{job.title}</h4>
              <OuterLink href={job.company_url}>{job.company}</OuterLink>
            </div>
            <LinkButton href={job.company_url}>Apply Now</LinkButton>
          </ApplyNow>
        </div>
      ) : null}
    </>
  );
}
