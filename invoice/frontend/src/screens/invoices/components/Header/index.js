import * as React from "react";
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
