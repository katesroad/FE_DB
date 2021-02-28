import styled from "styled-components";
import { Dialog as DialogBase } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { cardStyle } from "styles/styles";
import * as mediaQueries from "styles/media-queries";

const Dialog = styled(DialogBase)`
  padding: 48px;
  max-width: 480px;
  color: var(--element-text-color);
  ${cardStyle}
`;

const DialogTitle = styled.h3`
  margin-bottom: 13px;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.42px;
  color: var(--title-text-color);
  ${mediaQueries.medium} {
    font-size: 24px;
    letter-spacing: -0.5px;
  }
`;

export { Dialog, DialogTitle };
