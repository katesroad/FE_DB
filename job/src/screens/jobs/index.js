// eslint-disable-next-line
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import Header from "components/header";
import * as React from "react";
import JobFilter from "components/JobFilter";
import JobList from "components/JobList";
import { useGetJobs } from "hooks/useGetJobs";
import { Content } from "components/lib";

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
      <Header>
        <JobFilter
          {...filter}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Header>
      <Content
        as="main"
        css={`
          flex-grow: 10;
          padding-top: calc(72px + 0.5vw);
          ${mediaQueries.medium} {
            padding-top: calc(110px + 0.2vw);
          }
          ${mediaQueries.large} {
            padding-top: 123px;
          }
        `}
      >
        {status === "success" ? (
          <JobList jobs={jobs} />
        ) : (
          <p>
            {status === "error" ? (
              <p>{JSON.stringify(error)}</p>
            ) : (
              <p>Loading...</p>
            )}
          </p>
        )}
      </Content>
    </>
  );
}
