import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  ${mediaQueries.medium} {
    margin-bottom: 56px;
  }
`;
