import styled from "styled-components";
import { Button, ButtonBase } from "components/lib";
import * as mediaQueries from "styles/media-queries";

/*-----------------------Styles for Item-----------------------------------------*/
export const Item = styled.div`
  margin-bottom: 16px;
  ${mediaQueries.medium} {
    display: flex;
    margin-bottom: 18px;
  } ;
`;
export const Column = styled.div`
  position: relative;
  display: flex;
  justify-content: space-betweem;
  align-items: flex-start;
  flex-wrap: nowrap;
  > div {
    &:nth-child(2) {
      margin-left: 23px;
    }
  }
  ${mediaQueries.medium} {
    &:nth-child(2) {
      margin-left: 23px;
    }
  }
  .del-btn {
    label {
      visibility: hidden;
    }
  }
`;

export const ItemCost = styled.span`
  display: block;
  min-width: 64px;
  /* the input element height is 48px */
  height: 48px;
  line-height: 48px;
`;

export const DelBtn = styled(ButtonBase)`
  width: 16px;
  background-color: transparent;
`;

/*----------------------Styles for ItemList------------------------------*/

export const Wrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: var(--color-primary);
}`;

export const AddItemBtn = styled(Button)`
  width: 100%;
`;
