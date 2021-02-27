import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Content = styled.section`
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  ${mediaQueries.iphone} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    padding-left: 40px;
    padding-right: 40px;
  }
  ${mediaQueries.large} {
    width: 730px;
    margin-left: auto;
    margin-right: auto;
  }
`;
