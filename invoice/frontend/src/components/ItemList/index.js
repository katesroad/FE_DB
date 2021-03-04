import styled from "styled-components/macro";
import * as React from "react";
import AddBillItem from "../AddBillItem";
import { useTheme, THEME_MODE } from "context/theme.context";
import { Title } from "./styles";
import { Button } from "components/lib";
import PropTypes from "prop-types";

const { dark } = THEME_MODE;
function ItemList({ items, onAddItem }) {
  const [theme] = useTheme();
  const onChange = (e) => {};
  const handleClick = () => {
    onAddItem({ key: Date.now() });
  };
  return (
    <>
      <Title>Item List</Title>
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            <AddBillItem {...item} onChange={onChange} />
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
  items: PropTypes.array,
  onAddItem: PropTypes.func.isRequired,
};

export default ItemList;
