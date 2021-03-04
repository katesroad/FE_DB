import { FormControl } from "components/lib";
import styled from "styled-components";

export const ItemName = styled(FormControl)`
  widtth: 100%;
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
