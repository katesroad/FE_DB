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
    font-weight: var(font-weight-bold);
    display: none;
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

export const Wrapper = styled(Card)`
  padding-top: 32px;
  padding-bottom: 64px;
  ${mediaQueries.medium} {
    padding: 48px;
  }
`;

export const Footer = styled.p`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: 24px;
  padding: 21px 0;
  background: #1e2139;
  box-shadow: 0px 10px 10px -10px rgb(72 84 159 / 10%);
  text-align: center;
  ${mediaQueries.small} {
    display: none;
  }
`;
