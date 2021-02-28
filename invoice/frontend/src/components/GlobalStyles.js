import { createGlobalStyle } from "styled-components";
import * as colors from "styles/colors";
import * as fonts from "styles/fonts";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height:1;
    box-sizing:border-box;
  }

  a,
  button,
  input,
  select,
  textarea,
  img {
    outline: none
  }

  ul,
  li {
    list-style: none
  }

  a,
  button {
    cursor: pointer
  }

  button[disabled] {
    cursor: not-allowed;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html, body {
    height: 100%;
  }

  html {
    --font-weight-normal: ${fonts.fontWeightNormal};
    --font-weight-bold: ${fonts.fontWeightBold};
    --font-font-bolder: ${fonts.fontWeightBolder}
  }
 
  body[data-theme="dark"] {
    --element-text-color: ${colors.elementColorDark};
    --element-background-color: ${colors.elementBgDark};
    --title-text-color: ${colors.titColorDark};
    color: ${colors.elementColorDark};
    background-color: ${colors.bodyBgDark};
  }
  body[data-theme="light"] {
    --element-text-color: ${colors.elementColorLight};
    --element-background-color:${colors.elementBgLight};
    --title-text-color: ${colors.titColorLight};
    --text-color: ${colors.elementColorLight};
    color: ${colors.elementColorLight};
    background-color: ${colors.bodyBgLight};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: var(---font-weight-bolder);
    color: var(--title-text-color);
  }
`;
export default GlobalStyles;
