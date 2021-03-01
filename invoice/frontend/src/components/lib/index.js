import styled from "styled-components";
import { variant } from "styled-system";
import * as mediaQueries from "styles/media-queries";
import { red, colors } from "styles/colors";
import { cardStyle } from "styles/styles";

export * from "./modal";

export const Content = styled.section`
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  ${mediaQueries.iphone} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    padding-left: 40px;
    padding-right: 40px;
  }
  ${mediaQueries.large} {
    width: 730px;
    margin-left: auto;
    margin-right: auto;
  }
`;

// inherit the color from body element by default
export const ButtonBase = styled.button`
  display: inline-block;
  padding: 16px 24px;
  border-radius: 24px;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  font-weight: var(--font-weight-normal);
  ${"" /* edit button has this style */}
  background-color: var(--button-background-color);
  color: var(--button-text-color);
`;

export const Button = styled(ButtonBase)(
  {},
  variant({
    variants: {
      danger: { bg: red.normal, color: colors.white },
      primary: { bg: colors.primary, color: colors.white },
    },
  })
);

export const Card = styled.div`
  padding: 24px;
  ${cardStyle}
`;
