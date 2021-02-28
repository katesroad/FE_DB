import styled from "styled-components";
import { variant } from "styled-system";
import * as mediaQueries from "styles/media-queries";
import * as colors from "styles/colors";

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
  height: 48px;
  padding: 16px 24px;
  border-radius: 24px;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  ${"" /* edit button has this style */}
  background-color: var(--button-background-color);
  color: var(--button-text-color);
`;

export const Button = styled(ButtonBase)(
  {},
  variant({
    variants: {
      danger: { bg: colors.redDeeper, color: colors.colorWhite },
      primary: { bg: colors.colorPrimary, color: colors.colorWhite },
    },
  })
);
