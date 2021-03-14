import styled from "styled-components";
import * as mediaQuries from "styles/media-queries";
import { flexBettween } from "styles/styles";

export const Wrapper = styled.div`
  padding: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

// item list wrapper for mobile version
export const MobileView = styled.div`
  width: 100%;
  ${flexBettween}
  ${mediaQuries.medium} {
    display: none;
  }
`;
// item wrapper for mobile view
export const ItemWrapper = styled.div`
  ${flexBettween}
  width: 100%;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  .name {
    display: block;
    margin-bottom: 8px;
  }
  .qty {
    color: var(--button-text-color);
  }
  .total-cost {
    text-align: right;
  }
`;

// item list wrapper for tablet and above version
export const MediumView = styled.table`
  display: none;
  width: 100%;
  th,
  td {
    padding-bottom: 32px;
    text-align: right;
    &:first-child {
      text-align: left;
    }
    &:nth-child(2) {
      text-align: center;
    }
  }
  ${mediaQuries.medium} {
    display: table;
    margin-bottom: -24px;
  }
`;

// grand total for items
export const GrandTotal = styled.div`
  ${flexBettween}
  padding: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  span {
    font-size: 14px;
    color: var(--color-white);
  }
  strong {
    font-size: 20px;
    color: var(--color-white);
  }
  ${mediaQuries.medium} {
    strong {
      font-size: 24px;
    }
  }
`;
