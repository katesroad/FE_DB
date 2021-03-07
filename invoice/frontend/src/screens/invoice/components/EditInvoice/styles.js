import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { ModalContentBase } from "components/lib";

export const ModalContent = styled(ModalContentBase)`
  position: fixed;
  left: 0;
  top: 72px;
  max-width: 616px;
  width: 100vw;
  padding: 24px 24px 40vh 24px;
  margin: 0;
  max-height: 100vh;
  overflow: scroll;
  background-color: var(--body-bg);
  ${mediaQueries.medium} {
    top: 80px;
    padding: 56px;
    padding-bottom: 20vw;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;

export const GoBackBtn = styled.strong`
  display: block;
  margin-bottom: 24px;
  cursor: pointer;
  ${mediaQueries.medium} {
    display: none;
  }
`;

export const ModalFooter = styled.p`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  max-width: 616px;
  padding: 21px 24px;
  text-align: right;
  background-color: var(--element-background-color);
  button {
    margin-left: 8px;
  }
`;
