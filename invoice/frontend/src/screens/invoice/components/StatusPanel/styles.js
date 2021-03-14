import styled from "styled-components";
import { Card } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  ${mediaQueries.medium} {
    display: flex;
    justify-content: flex-start;
    .status {
      margin-left: 16px;
    }
  }
`;

export const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  button {
    margin-left: 8px;
  }
  .operations {
    display: none;
  }
  ${mediaQueries.medium} {
    .operations {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 2;
    }
  }
`;
