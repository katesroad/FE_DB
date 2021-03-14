import styled from "styled-components";
import * as mediaQuries from "styles/media-queries";

export const Wrapper = styled.div`
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 104px;
  color: var(--element-text-color);
  background-color: var(--element-background-color);
  overflow-x: hidden;
  ${mediaQuries.medium} {
    padding: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${mediaQuries.medium} {
    flex-direction: row;
  }
  &.row2 {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 40px;
    ${mediaQuries.medium} {
      margin-bottom: 0;
    }
  }
`;

export const Item = styled.div`
  margin-bottom: 32px;
  span {
    display: block;
    font-size: 14px;
    &.invoice-desc {
      margin-top: 8px;
    }
  }
  strong {
    font-size: 16px;
    display: block;
    margin-top: 12px;
    &.invoice-tag {
      display: inline;
    }
    &.client-name {
      margin-bottom: 8px;
    }
  }
`;
// user address wrapper
export const Address = styled.p`
  span {
    margin-bottom: 5px;
  }
`;
