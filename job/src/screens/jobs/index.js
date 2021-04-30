import Header from "components/header";
import * as React from "react";
import JobFilter from "components/JobFilter";
import JobList from "components/JobList";
import { useGetJobs } from "hooks/job.hooks.";
import { Spinner, Error } from "components/lib";
import { Main } from "./components/styled";

// Job list page
export default function JobsScreen() {
  const [filter, setFilter] = React.useState({
    description: "",
    location: "",
    full_time: false,
  });

  // job search happens after form submitting triggered
  const [doSearch, setDoSearch] = React.useState(true);
  const [params, setParams] = React.useState({});
  React.useEffect(() => doSearch && setParams(filter), [filter, doSearch]);

  const { status, data: jobs } = useGetJobs(params);

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
      <Main>
        {status === "success" ? (
          <JobList jobs={jobs} />
        ) : status === "error" ? (
          <div className="box">
            <Error>Loading Job list failed</Error>
          </div>
        ) : (
          <div className="box">
            <Spinner />
          </div>
        )}
      </Main>
    </>
  );
}
