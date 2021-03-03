import styled from "styled-components";
import { Button } from "components/lib";

export const CofirmContent = styled.p`
  margin: 12px 0 16px 0;
  font-size: 16px;
  line-height: 22px;
  em {
    margin-right: 4px;
    font-size: 120%;
  }
`;

export const ModalFooter = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 8px;
  }
`;

export const DeleteBtn = styled(Button)`
  margin: 0 8px;
`;
