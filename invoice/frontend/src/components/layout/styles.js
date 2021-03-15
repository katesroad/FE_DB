import styled from "styled-components";
import { Button, Content } from "components/lib";
import * as mediaQueries from "styles/media-queries";

/*-----------------Styles for App Header------------------------------*/
export const Header = styled(Content)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 72px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #373b53;
  z-index: 999;
  ${mediaQueries.medium} {
    height: 80px;
  }
  ${mediaQueries.large} {
    flex-direction: column;
    padding: 0;
    width: 104px;
    bottom: 0;
    height: 100vh;
    border-top-right-radius: 32px;
  }
`;

export const ModeBtn = styled(Button)`
  padding: 0 26px 0 0;
  height: 100%;
  border-radius: 0;
  border-right: 1px solid #494e6e;
  background-color: transparent;
  svg {
    max-width: 20px;
  }
  ${mediaQueries.medium} {
    padding: 0 30px 0 0;
  }
  ${mediaQueries.large} {
    height: auto;
    padding: 24px;
    border-right: 0;
  }
`;

export const Avatar = styled.div`
  padding-left: 20px;
  img {
    width: 20px;
    border-radius: 50%;
  }
  ${mediaQueries.medium} {
    padding-left: 32px;
    img {
      width: 32px;
    }
  }
  ${mediaQueries.large} {
    border-top: 1px solid #494e6e;
    width: 100%;
    padding: 24px;
    text-align: center;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  ${mediaQueries.large} {
    height: auto;
    width: 100%;
  }
`;

/*-----------------Styles for App Main------------------------------*/
export const Main = styled(Content)`
  padding-top: 72px;
  ${mediaQueries.medium} {
    padding-top: 80px;
  }
  ${mediaQueries.large} {
    padding-top: 0;
  }
`;
