import styled from "styled-components";
import { Card } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  small {
    font-size: 90%;
    line-height: 1.12;
    width: 290px;
  }
  ${mediaQueries.medium} {
    padding: 32px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 50%;
  &.client-email {
    width: 100%;
  }
  &.invoice-date {
    width: 100%;
  }
`;

export const InvoiceTopic = styled(InfoItem)`
  width: 100%;
  margin-bottom: 0;
  ${mediaQueries.medium} {
    display: flex;
    flex-direction: row;
  }
`;

export const InfoItemName = styled.span`
  margin-bottom: 12px;
`;
export const InfoItemValue = styled.strong`
  display: block;
  font-size: 120%;
`;

export const ClientName = styled(InfoItemValue)`
  margin-bottom: 12px;
`;

export const InvoiceId = styled(InfoItemValue)`
  margin-bottom: 4px;
`;
