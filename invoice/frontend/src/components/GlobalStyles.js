import { createGlobalStyle } from "styled-components";
import { dark, light, colors } from "styles/colors";
import * as fonts from "styles/fonts";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height:1;
    box-sizing:border-box;
  }
  body::-webkit-scrollbar {
    width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  a,
  button,
  input,
  select,
  textarea,
  img {
    outline: none;
    border:none;
    appearance:none;
  }

  ul,
  li {
    list-style: none
  }

  a,
  button {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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
    --font-weight-bolder: ${fonts.fontWeightBolder};
    --color-white: ${colors.white};
    --color-primary: ${colors.p00}
  }
 
  body[data-theme="dark"] {
    --element-text-color: ${dark.element.color};
    --element-background-color: ${dark.element.bg};
    --button-text-color: ${dark.button.color};
    --button-background-color: ${dark.button.bg};
    --title-text-color: ${dark.title.color};
    --input-background-color: ${dark.element.bg};
    --input-text-color: ${dark.title.color};
    --input-border-color: ${dark.input.border};
    --body-bg: ${dark.body.bg};
    color: ${dark.element.color};
    background-color: ${dark.body.bg};
  }
  body[data-theme="light"] {
   --element-text-color: ${light.element.color};
    --element-background-color: ${light.element.bg};
    --button-text-color: ${light.button.color};
    --button-background-color: ${light.button.bg};
    --title-text-color: ${light.title.color};
    --input-background-color: ${light.element.bg};
    --input-text-color: ${light.title.color};
    --input-border-color: ${light.input.border};
    color: ${light.element.color};
    --body-bg: ${light.body.bg};
    background-color: ${light.body.bg};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: var(--font-weight-bolder);
    color: var(--title-text-color);
  }
`;
export default GlobalStyles;
