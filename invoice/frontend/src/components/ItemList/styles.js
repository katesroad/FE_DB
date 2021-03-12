import styled from "styled-components";
import { FormControl, Button } from "components/lib";
import * as mediaQueries from "styles/media-queries";
import { IconDelete } from "components/Icon";

/*-----------------------Styles for Item-----------------------------------------*/

export const ItemName = styled(FormControl)`
  widtth: 100%;
  ${mediaQueries.medium} {
    max-width: 214px;
    margin-right: 16px;
  } ;
`;

export const ItemQty = styled(FormControl)`
  min-width: 64px;
  flex-grow: 1; ;
`;

export const ItemPrice = styled(FormControl)`
  min-width: 100px;
  flex-grow: 2; ;
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

export const DelBtn = styled(IconDelete)`
  width: 16px;
  height: 16px; ;
`;

export const Item = styled.div`
  margin-bottom: 16px;
  ${mediaQueries.medium} {
    display: flex;
    margin-bottom: 18px;
  } ;
`;

/*----------------------Styles for ItemList------------------------------*/

export const Wrapper = styled.div``;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
}`;

export const AddItemBtn = styled(Button)`
  width: 100%;
`;
