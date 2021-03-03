import styled, { css } from "styled-components";
import * as mediaQuries from "styles/media-queries";

// shared styles in this file
const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  ${flexBetween}
  ${"" /* item list for mobile version */}
  .items {
    width: 100%;
  }
  ${"" /* item list for tablet and above version */}
  .table {
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
  }
  ${mediaQuries.medium} {
    padding: 32px 32px 0 32px;
    .items {
      display: none;
    }
    .table {
      display: table;
    }
  }
`;

export const ItemName = styled.strong`
  display: block;
  margin-bottom: 8px;
`;

export const ItemQty = styled.span`
  color: var(--button-text-color);
`;

export const ItemTotal = styled.strong`
  text-align: right;
`;

export const ItemWrapper = styled.div`
  ${flexBetween}
  margin: 24px;
`;
