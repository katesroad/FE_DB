// eslint-disable-next-line
import styled from "styled-components/macro";
import { THEME_MODE, useTheme } from "context/theme.context";
import PropTypes from "prop-types";
import * as React from "react";
import {
  MobileView,
  MediumView,
  GrandTotal,
  BillItems,
  ItemWrapper,
  ItemName,
  ItemQty,
  ItemCost,
} from "./styles";

const ItemPropTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
function BillItem({ ...item }) {
  return (
    <ItemWrapper>
      <p>
        <ItemName>{item.name}</ItemName>
        <ItemQty>
          {item.quantity} x ${item.price}
        </ItemQty>
      </p>
      <ItemCost>$ {item.quantity * item.price}</ItemCost>
    </ItemWrapper>
  );
}

BillItem.propTypes = ItemPropTypes;

const { dark } = THEME_MODE;
function InvoiceBillItems({ items, total }) {
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
      <BillItems
        css={`
          background-color: ${wrapBgColor};
        `}
      >
        {/* item list for mobile version */}
        <MobileView>
          {items.map((item) => (
            <BillItem {...item} key={item.name} />
          ))}
        </MobileView>
        {/* item list for tablet and desktop version */}
        <MediumView>
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
        </MediumView>
      </BillItems>
      {/* grand total */}
      <GrandTotal
        css={`
          background-color: ${totalBgColor};
        `}
      >
        <span>Amount Due</span>
        <strong>$ {total}</strong>
      </GrandTotal>
    </>
  );
}

InvoiceBillItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes)).isRequired,
  total: PropTypes.number.isRequired,
};

export default InvoiceBillItems;
