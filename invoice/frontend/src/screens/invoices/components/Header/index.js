import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "components/lib";
import { Wrapper } from "./styles";

export default function Header({ children }) {
  return (
    <Wrapper>
      {children}
      <Button variant="primary">+new</Button>
    </Wrapper>
  );
}

Header.propTypes = {
  onFilter: PropTypes.func.isRequired,
  status: PropTypes.oneOf(["draft", "pending", "paid", "all"]).isRequired,
};
