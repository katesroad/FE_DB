import * as React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import { Sidebar, MapContainer } from "./styles";

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function Map({ lat, lng, zoom }) {
  const mapContainerRef = React.useRef(null);
  const [mapState, setMapState] = React.useState({
    lat,
    lng,
    zoom,
  });

  // Initialize map when component mounts
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.lng, mapState.lat],
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.on("move", () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Sidebar>
        <p>
          Longitude: {mapState?.lng} | Latitude: {mapState?.lat} | Zoom:
          {mapState?.zoom}
        </p>
      </Sidebar>
      <MapContainer ref={mapContainerRef} />
    </>
  );
}

Map.defaultProps = { zoom: 12 };
Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Map;
