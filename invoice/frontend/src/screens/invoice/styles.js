import { Card } from "components/lib";
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Header = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  margin-bottom: 16px;
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }
  .operations {
    display: none;
    font-weight: var(font-weight-bold);
  }
  ${mediaQueries.small} {
    padding: 20px 32px;
    margin-bottom: 24px;
    .status {
      max-width: 160px;
    }
    .operations {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }
`;

export const StatusLabel = styled.span`
  font-weight: 500;
`;
