import * as React from "react";
import { useAsync, ASYNC_STATUS } from "utils/use-async";
import CountryList from "./country-list";
import { useCountrySearch } from "screens/home/context";
import { Spinner } from "components/lib";

export default function SearchResult() {
  const { status, data: countries, error, run } = useAsync();
  const { search } = useCountrySearch();
  const { service } = search;
  React.useEffect(() => {
    run(service);
  }, [service, run]);
  return (
    <section>
      {status === ASYNC_STATUS.pending ? <Spinner /> : null}
      {status === ASYNC_STATUS.rejected ? <p>{JSON.stringify(error)}</p> : null}
      {status === ASYNC_STATUS.resovled ? (
        <CountryList countries={countries} />
      ) : null}
    </section>
  );
}
