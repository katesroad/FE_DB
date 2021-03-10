// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Input, Label } from "components/lib";
import PropTypes from "prop-types";
import {
  ItemName,
  ItemQty,
  ItemPrice,
  ItemCost,
  DelBtn,
  Item,
  Title,
  AddItemBtn,
} from "./styles";

export function BillItem({ onDelete, index, ...item }) {
  return (
    <Item>
      <ItemName className="item-name">
        <Label>Item Name</Label>
        <Input value={item.name} name={`items[${index}].name`} />
      </ItemName>
      <div
        css={`
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
        `}
      >
        <ItemQty>
          <Label>Qty.</Label>
          <Input value={item.quantity} name={`items[${index}].quantity`} />
        </ItemQty>
        <ItemPrice>
          <Label>Price</Label>
          <Input value={item.price} name={`items[${index}].price`} />
        </ItemPrice>
        <ItemCost>
          <Label>Total</Label>
          <Input value={+item.price * +item.quantity} disabled />
        </ItemCost>
        {<DelBtn onClick={onDelete} />}
      </div>
    </Item>
  );
}
BillItem.defaultProps = {
  quantity: 1,
  name: "",
  price: 0,
  total: 0,
};
BillItem.propTypes = {
  name: PropTypes.string,
  qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDelete: PropTypes.func.isRequired,
};

export default function ItemList({ onAddItem, children }) {
  return (
    <div>
      <Title>Item List</Title>
      <ul>{children}</ul>
      <AddItemBtn as="span" onClick={onAddItem}>
        Add new Item
      </AddItemBtn>
    </div>
  );
}
ItemList.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
