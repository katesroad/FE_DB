// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Input, Label, Button } from "components/lib";
import PropTypes from "prop-types";
import {
  Title,
  ItemName,
  ItemQty,
  ItemPrice,
  ItemCost,
  DelBtn,
  Wrapper,
} from "./styles";

const billItemShape = {
  name: PropTypes.string,
  qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
function BillItem({ onChange, ...item }) {
  React.useEffect(() => {
    const billTotal = +item.price * +item.quantity;
    if (!isNaN(billTotal)) {
      onChange({ total: parseFloat(billTotal).toFixed(3) });
    }
  }, [item.price, item.quantity, onChange]);

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
BillItem.propTypes = { ...billItemShape };

function ItemList({ items, onAddItem, onEditItem }) {
  const handleClick = () => {
    onAddItem({ key: Date.now() });
  };
  return (
    <>
      <Title>Item List</Title>
      <ul>
        {items.map((item, index) => (
          <li key={item.key}>
            <BillItem {...item} onChange={onEditItem} index={index} />
          </li>
        ))}
      </ul>
      <Button
        onClick={handleClick}
        css={`
          width: 100%;
        `}
      >
        + add new item
      </Button>
    </>
  );
}

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(billItemShape)),
  onAddItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export { billItemShape };

export default ItemList;
