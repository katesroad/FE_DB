// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Input, Label } from "components/lib";
import {
  ItemName,
  ItemQty,
  ItemPrice,
  ItemCost,
  DelBtn,
  Wrapper,
} from "./styles";
import PropTypes from "prop-types";

function BillItem({ onChange, ...item }) {
  console.log(item);
  React.useEffect(() => {
    const billTotal = +item.price * +item.quantity;
    if (!isNaN(billTotal)) {
      onChange({ total: parseFloat(billTotal).toFixed(3) });
    }
  }, [item.price, item.quantity]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    onChange({ [name]: value });
  };
  return (
    <Wrapper>
      <ItemName className="item-name">
        <Label>Item Name</Label>
        <Input value={item.name} name="name" onChange={handleChange} />
      </ItemName>
      <div
        css={`
          display: flex;
          align-items: center;
          flex-wrap: no-wrap;
          p {
            margin-right: 16px;
          }
        `}
      >
        <ItemQty>
          <Label>Qty.</Label>
          <Input
            value={item.quantity}
            name="quantity"
            onChange={handleChange}
          />
        </ItemQty>
        <ItemPrice>
          <Label>Price</Label>
          <Input value={item.price} name="price" onChange={handleChange} />
        </ItemPrice>
        <ItemCost>
          <Label>Total</Label>
          <Input value={item.total} disabled onChange={handleChange} />
        </ItemCost>
        <DelBtn>Del</DelBtn>
      </div>
    </Wrapper>
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
  onChange: PropTypes.func.isRequired,
};

export default BillItem;
