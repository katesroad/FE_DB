import { createGlobalStyle } from 'styled-components'

/**
 * -1. CSS reseting styles
 * -2. Application styles
 */
const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
a {
  color: inherit;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
  outline: none;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  appearance: none;
  border: none;
}

button,
[role='button'] {
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
a {
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

/* Remove border-spacing for table*/
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/*
 * Application styles
*/
html, body {
    min-height: 100%
}

:root {
  --weight-normal: 400;
  --weight-bold: 700;
  --weight-bolder: 900;
  --colors-red: red;
  --colors-fancy: rgb(89, 100, 224);
  --colors-white: #fff;
}

body[data-theme='light'] {
  --shadow: hsl(0, 0%, 90%);
  --colors-text: hsl(200, 15%, 8%);
  --elements-background: hsl(0, 0%, 100%);
  --colors-border: hsl(0, 0%, 90%);
  background-color: white;
  color: hsl(200, 15%, 8%);
}
body[data-theme='dark'] {
  --shadow: hsl(0, 0%, 10%);
  --elements-background: hsl(209, 23%, 22%);
  --colors-text: hsl(0, 0%, 100%);
  --colors-border: #9c9c9c;
  background-color: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
}
`

export default GlobalStyles
