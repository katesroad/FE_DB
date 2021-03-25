import { createGlobalStyle } from 'styled-components';
import { colors } from 'styles/colors';
import { FONT_WEIGHT } from 'styles/font';

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
    min-width: 280px;
    font-family: "Commissioner", Roboto,Helvetica Neue,sans-serif;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  :root {
    --red: ${colors.red};
    --white: ${colors.white};
    --text-black:${colors.black};
    --bg-black: ${colors.bgBlack};
    --font-bold: ${FONT_WEIGHT.bold};
    --font-bolder:${FONT_WEIGHT.bolder}
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
  h1,h2,h3,h4,h5,h6, strong {
    font-weight:var(--font-bolder);
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
