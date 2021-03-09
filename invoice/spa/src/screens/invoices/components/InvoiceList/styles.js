import { ButtonBase, LinkCard } from "components/lib";
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled(LinkCard)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

export const InvoiceAmount = styled.strong`
  font-size: 16px;
`;

export const Column = styled.div`
  position: "relative";
  display: flex;
  flex-direction: column;
  ${mediaQueries.small} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-right: 24px;
  }
`;

export const ClientName = styled.span`
  margin-bottom: 18px;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  ${mediaQueries.small} {
    margin-bottom: 0;
  }
`;

export const InvoiceId = styled.span`
  margin-bottom: 18px;
  font-size: 14px;
  ${mediaQueries.small} {
    margin-bottom: 0;
  }
`;

export const DueDate = styled.span`
  font-size: 14px;
  line-height: 20px;
  ${mediaQueries.small} {
    margin-bottom: 0;
  }
`;

export const InvoiceTotal = styled.h3`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;

export const ArrowButton = styled(ButtonBase)`
  align-self: flex-end;
  display: none;
  padding: 16px 0;
  border-radius: 0;
  background-color: transparent;
  ${mediaQueries.small} {
    display: flex;
  }
`;
