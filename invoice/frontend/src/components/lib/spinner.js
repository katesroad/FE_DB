import styled from "styled-components";
import * as React from "react";

const Wrapper = styled.span`
  &.size-small {
    font-size: 12px;
  }
  &.size-large {
    font-size: 32px;
  }
`;

export function Spinner({ children, size, ...props }) {
  return <Wrapper {...props}>{children ? children : "Loading..."}</Wrapper>;
}
