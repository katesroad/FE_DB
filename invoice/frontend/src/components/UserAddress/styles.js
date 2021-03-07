import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: 100%;
  }
  ${mediaQueries.small} {
    flex-wrap: nowrap;
    div {
      width: 33.333%;
    }
    .code {
      margin-left: 23px;
      margin-right: 23px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  color: var(--color-primary);
`;
