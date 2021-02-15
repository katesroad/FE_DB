import styled from "styled-components";
import { Button } from "components/lib";

const Brand = styled.h1`
  height: 76px;
  margin: 0;
  line-height: 76px;
  font-size: 1.3rem;
`;
const ModeButton = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: var(--weight-bolder);
  text-transform: capitalize;
  > span {
    padding-top: 2px;
    margin-left: 4px;
    font-size: 0.9rem;
  }
`;

export { Brand, ModeButton };
