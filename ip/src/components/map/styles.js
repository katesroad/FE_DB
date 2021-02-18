import styled from "styled-components";

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Sidebar = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  background-color: #404040;
  color: #ffffff;
  z-index: 1 !important;
  padding: 6px;
  font-weight: bold;
`;

export { MapContainer, Sidebar };
