import styled from "styled-components";
import { Content } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled(Content)`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 12px;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 21px;
  background-color: var(--body-bg);
  ${mediaQueries.iphone} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    display: none;
  }
  button {
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 8px;
  }
`;
