import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { variant } from "styled-system";
import * as mediaQueries from "styles/media-queries";
import { red, colors } from "styles/colors";
import { cardStyle } from "styles/styles";

export const buttonStyle = css`
  display: inline-block;
  padding: 14px;
  border-radius: 24px;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  font-weight: var(--font-weight-normal);
  ${"" /* edit button has this style */}
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  cursor: pointer;
  ${mediaQueries.medium} {
    padding: 16px 24px;
  }
`;
// inherit the color from body element by default
export const ButtonBase = styled.button`
  ${buttonStyle}
`;

export const Button = styled(ButtonBase)(
  {},
  variant({
    variants: {
      danger: { bg: red.normal, color: colors.white },
      primary: { bg: colors.primary, color: colors.white },
      cancel: { bg: colors.white, color: colors.p12 },
    },
  })
);

export const Card = styled.div`
  padding: 24px;
  ${cardStyle}
`;

export const LinkCard = styled(Link)`
  padding: 24px;
  ${cardStyle};
  color: inherit;
`;

export const Error = styled.div`
  color: ${red.normal};
`;
