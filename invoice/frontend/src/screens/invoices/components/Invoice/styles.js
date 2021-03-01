import styled from "styled-components";
import { Card } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;

export const InvoiceAmount = styled.strong`
  font-size: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries.medium} {
    flex-direction: row;
    align-items: center;
    span {
      margin-right: 24px;
    }
  }
`;

export const ClientName = styled.span`
  margin-bottom: 24px;
  text-align: right;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const InvoiceId = styled.span`
  margin-bottom: 24px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const DueDate = styled.span`
  margin-bottom: 8px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;
