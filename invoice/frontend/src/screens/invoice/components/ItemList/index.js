// eslint-disable-next-line
import styled from "styled-components/macro";
import { THEME_MODE, useTheme } from "context/theme.context";
import PropTypes from "prop-types";
import * as React from "react";
import {
  MobileView,
  MediumView,
  GrandTotal,
  Wrapper,
  ItemWrapper,
} from "./styles";

const ItemPropTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
function Item({ ...item }) {
  return (
    <ItemWrapper>
      <p>
        <strong className="name">{item.name}</strong>
        <strong className="qty">
          {item.quantity} x ${item.price}
        </strong>
      </p>
      <strong className="total-cost">$ {item.quantity * item.price}</strong>
    </ItemWrapper>
  );
}
Item.propTypes = ItemPropTypes;

const { dark } = THEME_MODE;
function ItemList({ items, total, invoiceStatus }) {
  const [theme] = useTheme();
  let wrapBgColor;
  let totalBgColor;
  if (theme === dark) {
    wrapBgColor = "var(--button-background-color)";
    totalBgColor = "#0C0E16";
  } else {
    wrapBgColor = "#f9fafe";
    totalBgColor = "#373b53";
  }
  return (
    <>
      <Wrapper
        css={`
          background-color: ${wrapBgColor};
        `}
      >
        {/* item list for mobile version */}
        <MobileView>
          {items.map((item) => (
            <Item {...item} key={item.name + item.quantity + item.price} />
          ))}
        </MobileView>
        {/* item list for tablet and desktop version */}
        <MediumView>
          <thead>
            <tr>
              <th width="35%">Item Name</th>
              <th width="15%">QTY.</th>
              <th width="20%">Price</th>
              <th width="35%%">Total</th>
            </tr>
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
        </MediumView>
      </Wrapper>
      {/* grand total */}
      <GrandTotal
        css={`
          background-color: ${totalBgColor};
        `}
      >
        <span className="type">
          {invoiceStatus === "pending" ? "Amount Due" : "Grand Total"}
        </span>
        <strong>$ {total}</strong>
      </GrandTotal>
    </>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes)).isRequired,
  total: PropTypes.number.isRequired,
  invoiceStatus: PropTypes.oneOf(["draft", "pending", "paid"]),
};

export default ItemList;
