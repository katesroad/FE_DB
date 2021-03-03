// eslint-disable-next-line
import { THEME_MODE, useTheme } from "context/theme.context";
import PropTypes from "prop-types";
import * as React from "react";
import { ItemName, ItemQty, ItemTotal, ItemWrapper, Wrapper } from "./styles";

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

const { dark } = THEME_MODE;
export default function BillItems({ items }) {
  const [theme] = useTheme();
  const bgColor =
    theme === dark ? "var( --button-background-color)" : "#f9fafe";
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
