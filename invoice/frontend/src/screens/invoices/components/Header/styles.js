import styled from "styled-components";
import { buttonStyle } from "components/lib/button";
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
export const InvoiceText = styled.span`
  display: none;
  ${mediaQueries.small} {
    display: inline;
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-left: 16px;
  }
`;

export const DiscardButton = styled.span`
  ${buttonStyle}
`;
