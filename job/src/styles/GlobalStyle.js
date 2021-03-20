import { createGlobalStyle } from "styled-components";
import { dark, light, colors } from "styles/colors";
import * as fonts from "styles/fonts";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
    box-sizing: border-box;
    transition: all .25s ease;
  }
  html {
   height:100%;
  }
  body {
    min-height:100%;
    overflow-y:scroll;
  }
  body {
    min-height:100%;
    font-family:Kumbh Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 16px;
    font-weight: ${fonts.FONT_WEIGHT.normal};
    line-height: 1.625;
    color: ${colors.p31};
  }
  body {
    --title-color: ${light.title.color};
    --element-background: ${light.element.bg};
    --element-color: ${dark.element.color};
    --button-background: ${light.button.bg};
    --button-color: ${light.button.color};
    background-color: ${light.body.bg};
  }
  body[data-theme="dark"] {
    --title-color: ${dark.title.color};
    --element-background: ${dark.element.bg};
    --element-color: ${dark.element.color};
    --button-background: ${dark.button.bg};
    --button-color: ${dark.button.color};
    background-color: ${dark.body.bg};
     color: ${colors.p31};
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
    border: none;
    appearance: none;
  }
  img {
    max-width:100%;
  }

  ul,
  li {
    list-style: none
  }

  a,
  button {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  button[disabled] {
    cursor: not-allowed;
  }
  h1, h2, h3,h4, h5, h6, strong, em, b {
    color: var(--title-color);
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.p31};
    font-size: 16px;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${colors.p31};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${colors.p31};
  }
`;
export default GlobalStyle;
