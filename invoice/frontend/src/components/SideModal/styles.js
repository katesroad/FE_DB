import styled from "styled-components";
import { ModalContentBase } from "components/lib";
import * as mediaQueries from "styles/media-queries";
import { ButtonBase } from "components/lib";

export const ModalContent = styled(ModalContentBase)`
  position: fixed;
  left: 0;
  top: 72px;
  padding: 0 12px;
  margin: 0 auto;
  width: 100%;
  max-width: 730px;
  height: 100vh;
  background-color: var(--body-bg);
  ${mediaQueries.iphone} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    padding-left: 56px;
    padding-right: 56px;
    width: 80%;
  }
  ${mediaQueries.large} {
    top: 0;
    left: 84px;
    padding-left: 76px;
    max-width: 768px;
  }
`;
export const Title = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  h3 {
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.5px;
    text-transform: capitalize;
  }
  ${mediaQueries.medium} {
    font-size: 32px;
    padding-top: 56px;
    padding-bottom: 56px;
    width: 80%;
  }
`;
export const CloseBtn = styled(ButtonBase)`
  padding: 0;
  margin-bottom: 24px;
  text-align: left;
  background-color: transparent;
  ${mediaQueries.medium} {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  overflow: scroll;
`;
