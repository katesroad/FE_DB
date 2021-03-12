import styled from "styled-components";

export const ArrowDown = styled.span`
  position: absolute;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  &.with-value {
    flex-grow: 0;
  }
`;
