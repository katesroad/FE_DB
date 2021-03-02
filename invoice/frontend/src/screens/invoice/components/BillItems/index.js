// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import { Wrapper, ItemName, ItemQty, ItemTotal, ItemWrapper } from "./styles";
import { THEME_MODE, useTheme } from "context/theme.context";
function BillItem({ ...item }) {
  return (
    <ItemWrapper>
      <p>
        <ItemName>{item.name}</ItemName>
        <ItemQty>
          {item.quantity} x ${item.price}
        </ItemQty>
      </p>
      <ItemTotal>$ {item.quantity * item.price}</ItemTotal>
    </ItemWrapper>
  );
}

BillItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default function BillItems({ items }) {
  const [themeMode] = useTheme();
  const bgColor =
    themeMode === THEME_MODE.dark
      ? "var( --button-background-color)"
      : "#F9FAFE";
  return (
    <Wrapper
      css={`
        background-color: ${bgColor};
      `}
    >
      <div className="items">
        {items.map((item) => (
          <BillItem {...item} key={item.name} />
        ))}
      </div>
      <table className="table">
        <thead>
          <th width="35%">Item Name</th>
          <th width="15%">QTY.</th>
          <th width="20%">Price</th>
          <th width="35%%">Total</th>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>
                <strong>{item.name}</strong>
              </td>
              <td>
                <strong>{item.quantity}</strong>
              </td>
              <td>
                <strong>{item.price}</strong>
              </td>
              <td>
                <strong>${item.price * item.quantity}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}
