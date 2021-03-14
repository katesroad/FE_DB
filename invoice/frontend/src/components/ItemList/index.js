// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import Field from "components/Field";
import { Label, FormControl } from "components/lib/form";
import { IconDelete } from "components/Icon";
import PropTypes from "prop-types";
import { ItemCost, DelBtn, Item, Title, AddItemBtn, Column } from "./styles";

export function BillItem({ onDelete, index, ...item }) {
  return (
    <Item>
      <Column>
        <Field name={`items[${index}].name`} label="Name" />
        <Field name={`items[${index}].quantity`} label="Qty." />
      </Column>
      <Column>
        <Field name={`items[${index}].price`} label="Price" />
        <FormControl>
          <Label>Total</Label>
          <ItemCost>{+item.price * +item.quantity}</ItemCost>
        </FormControl>
        <FormControl className="del-btn">
          <Label>Del</Label>
          <DelBtn onClick={onDelete}>
            <IconDelete width="25" />
          </DelBtn>
        </FormControl>
      </Column>
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
  qty: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function ItemList({ onAddItem, children }) {
  return (
    <div>
      <Title>Item List</Title>
      <ul>{children}</ul>
      <AddItemBtn as="span" onClick={onAddItem}>
        + Add new Item
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
