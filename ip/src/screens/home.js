// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import * as geoServices from "utils/geo-services";
import { Spinner } from "components/lib";
import { useAsync } from "utils/use-async";

// as soon as browser all done, loading evertyhing when you are not doing busy stuff
const loadMap = () => import(/* webpackPrefetch: true */ "components/map");
const Map = React.lazy(loadMap);

const LoadingLocation = () => (
  <p
    css={`
      display: flex;
      align-items: center;
    `}
  >
    <strong
      css={`
        margin-right: 4px;
      `}
    >
      Location:
    </strong>{" "}
    <Spinner />
  </p>
);

export default function HomeScreen() {
  const { data: info, run } = useAsync();

  React.useEffect(() => {
    run(geoServices.getMyIp());
  }, [run]);

  React.useEffect(() => {
    if (info?.ip) {
      run(geoServices.getGeoInfo(info.ip, "ipAddress"));
      // once get ip address,start loading map dependencies
      loadMap();
    }
  }, [run, info?.ip]);

  return (
    <section>
      <p>
        <strong>IP:</strong>
        {info?.ip ? <span>{info?.ip}</span> : <Spinner />}
      </p>
      {/* Suspence replaces all its children with fallback before child/children is/are loaded */}
      <React.Suspense fallback={<Spinner />}>
        {info?.location ? <Map {...info?.location} /> : <LoadingLocation />}
      </React.Suspense>
    </section>
  );
}
