import { Link } from "react-router-dom";
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { themeStyles } from "styles/styles";

const Button = styled.button`
  ${themeStyles}
`;
Button.displayName = "Button";

const LinkButton = styled(Link)`
  ${themeStyles}
`;
LinkButton.displayName = "LinkButton";

const NavLink = styled(Link)`
  ${themeStyles}
`;
NavLink.displayName = "NavLink";

const ThemedElement = styled.div`
  ${themeStyles}
`;
ThemedElement.displayName = "ThemedElement";

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  ${mediaQueries.medium} {
    padding-left: 32px;
    padding-right: 32px;
  }
  ${mediaQueries.large} {
    padding-left: 64px;
    padding-right: 64px;
  }
  ${mediaQueries.xlarge} {
    width: 88%;
    max-width: 1560px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
Content.displayName = "Content";

const Image = styled.img`
  max-width: 100%;
`;
Image.displayName = "Image";

export { Button, LinkButton, NavLink, Content, Image, ThemedElement };
export * from "./spinner";
