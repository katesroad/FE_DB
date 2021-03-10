import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 20px;
  letter-spacing: -0.63px;
  ${mediaQueries.medium} {
    margin-bottom: 8px;
    font-size: 30px;
    letter-spacing: -1px;
  }
`;

export const Wrapper = styled.div`
  justify-self: flex-start;
  small {
    font-weight: 500;
  }
`;
