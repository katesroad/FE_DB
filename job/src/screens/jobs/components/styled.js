import { Content } from "components/lib";
import * as mediaQueries from "styles/media-queries";
import styled from "styled-components";

export const Main = styled(Content).attrs(() => ({ as: "main" }))`
  position: relative;
  flex-grow: 10;
  padding-top: calc(4.5rem + 0.5vw);

  ${mediaQueries.medium} {
    padding-top: calc(6.875rem + 0.2vw);
  }
  ${mediaQueries.large} {
    padding-top: 7.6875rem;
  }

  .box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner {
    font-size: 4rem;
    color: #5964e0;
  }
`;
