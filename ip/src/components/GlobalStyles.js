import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    min-height: 100%
  }
  :root {
    --weight-bolder: 900;
    --weight-bold: 500;
    --weight-normal: 400;
    --shadow:hsl(0,0%,10%);
  }
  body {
    font-family: "Nunito Sans", sans-serif;
  }
  body, ul, li, h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding:0
  }
  body[data-theme="light"] {
    --shadow: hsl(0,0%,90%);
    --colors-text: hsl(200,15%,8%);
    --elements-background:hsl(0,0%,100%);
    background-color: white;
    color: hsl(200,15%,8%)
  }
  body[data-theme="dark"] {
    --shadow: hsl(0,0%,10%);
    --elements-background:hsl(209,23%,22%);
    --colors-text: hsl(0,0%, 100%);
    background-color: hsl(207,26%,17%);
    color: hsl(0,0%,100%)
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  input::placeholder {
    color: var(--colors-text);
  }
  a,img, button, input, select {
    outline:none;
    border: 0;
  }
  a, button {
    cursor: pointer;
  }
  a {
    text-decoration:none;
  }
  ul,li {
    list-style:none;
  }
`;

export default GlobalStyles;
