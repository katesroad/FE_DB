import styled from "styled-components";
import { Button } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const FormError = styled.p`
  margin-top: 32px;
`;

export const ButtonGroup = styled.p`
  margin-top: 64px;
`;

export const SaveButton = styled(Button)`
  margin-right: 8px;
`;

export const FormFooter = styled.div``;

export const Column = styled.div`
    ${mediaQueries.medium} {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      &>div {
        width: 100%;
        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }
}
`;
