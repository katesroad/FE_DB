import { LinkCard } from "components/lib";
import styled from "styled-components";
import { IconArrawRight, IconEmpty } from "components/Icon";
import * as mediaQueries from "styles/media-queries";

/*---------------------Invoice Item related style-------------------- */

export const InvoiceWrap = styled(LinkCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--color-primary);
  }
`;
export const InvoiceAmount = styled.strong`
  font-size: 16px;
`;

export const Column = styled.div`
  position: "relative";
  display: flex;
  flex-direction: column;
  ${mediaQueries.medium} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    &:nth-child(2) {
      margin-left: 24px;
      width: 40%;
    }
  }
`;

export const ClientName = styled.span`
  margin-bottom: 18px;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const InvoiceId = styled.span`
  margin-bottom: 18px;
  font-size: 14px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const DueDate = styled.span`
  font-size: 14px;
  margin-bottom: 8px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const InvoiceTotal = styled.h3`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;

export const ArrowButton = styled(IconArrawRight)`
  display: none;
  ${mediaQueries.medium} {
    display: block;
  }
`;

/*-----------------------No Invoice------------------*/

export const NoInvoice = styled.div`
  padding: 10vh 0;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.6px;
  ${mediaQueries.medium} {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const EmptyImage = styled(IconEmpty)`
  display: inline-block;
  width: 46%;
  min-width: 194px;
  margin-bottom: 40px;
`;
