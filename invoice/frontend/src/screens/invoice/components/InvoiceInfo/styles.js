import styled from "styled-components";
import * as mediaQuries from "styles/media-queries";

export const Wrapper = styled.div`
  margin-top: 24px;
  padding: 24px;
  color: var(--element-text-color);
  background-color: var(--element-background-color);
  overflow-x: hidden;
  strong {
    font-size: 15px;
    line-height: 20px;
    ${mediaQuries.medium} {
      font-size: 16px;
    }
  }
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
    > div {
      width: 50%;
    }
    ${mediaQuries.medium} {
      margin-bottom: 0;
      > div {
        width: 33.33%;
      }
    }
  }
`;

// 32px
export const Item = styled.div`
  margin-bottom: 32px;
  span {
    display: block;
    margin-top: 4px;
  }
  .date-value,
  .client-name,
  .client-email {
    display: block;
    margin-top: 12px;
  }
`;
