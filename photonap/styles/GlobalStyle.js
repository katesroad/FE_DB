import { createGlobalStyle } from "styled-components";
import { colors } from "styles/colors";
import { FONT_WEIGHT } from "styles/font";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
    box-sizing: border-box;
    transition: all .25s ease;
  }

  html {
    height: 100vh;
  }

  body {
    min-height: 100vh;
    font-weight:${FONT_WEIGHT.normal};
    overflow-y: scroll;
  }

  :root {
    --black: ${colors.black};
    --white: ${colors.white};
    --gray:${colors.gray};
    --font-bold: ${FONT_WEIGHT.bold};
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
    outline: none
  }
  ul,li {
    list-style:none;
  }

  a,
  button,
  .button {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
