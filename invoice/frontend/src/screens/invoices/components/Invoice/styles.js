import styled from "styled-components";
import { Card } from "components/lib";
import * as mediaQueries from "styles/media-queries";
import * as colors from "styles/colors";

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
`;

export const ClientName = styled.span`
  margin-bottom: 24px;
  text-align: right;
`;

export const InvoiceId = styled.span`
  margin-bottom: 24px;
`;

export const DueDate = styled.span`
  margin-bottom: 8px;
`;
