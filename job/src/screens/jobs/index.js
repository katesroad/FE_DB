// eslint-disable-next-line
import styled from "styled-components/macro";
import { AppHeader, AppMain } from "components/layout";
import ThemeSwitcher from "components/ThemeSwitcher";
import * as mediaQueries from "styles/media-queries";
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
      <AppHeader>
        <Content>
          <ThemeSwitcher
            css={`
              paddint-top: 32px;
              padding-bottom: 32px;
              ${mediaQueries.medium} {
                padding-top: 42px;
                padding-bottom: 46px;
              }
              ${mediaQueries.large} {
                padding-top: 45px;
                padding-bottom: 45px;
              }
            `}
          />
          <JobFilter
            {...filter}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Content>
      </AppHeader>
      <AppMain>
        <div
          css={`
            padding-top: 32px;
            ${mediaQueries.small} {
              margin-top: calc(40px + 1vw);
            }
            ${mediaQueries.large} {
              margin-top: 56px;
            }
          `}
        >
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
        </div>
      </AppMain>
    </>
  );
}
