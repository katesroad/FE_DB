import styled from "styled-components";
import { FormControl } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const ItemName = styled(FormControl)`
  widtth: 100%;
  ${mediaQueries.medium} {
    max-width: 214px;
    margin-right: 16px;
  }
`;

export const ItemQty = styled(FormControl)`
  min-width: 64px;
  flex-grow: 1;
`;

export const ItemPrice = styled(FormControl)`
  min-width: 100px;
  flex-grow: 2;
`;

export const ItemCost = styled(FormControl)`
  min-width: 64px;
  flex-grow: 1;
  input {
    text-align: left;
    padding-left: 0;
    font-size: 14px;
  }
`;

export const DelBtn = styled.span`
  width: 16px;
  height: 16px;
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
  overflow: hidden;
  ${mediaQueries.medium} {
    display: flex;
    margin-bottom: 18px;
  }
`;
