import styled from "styled-components";
import { themeStyles } from "styles/styles";

const OuterLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noreferrer",
}))`
  display: "inline-block";
  ${themeStyles}
`;

const Paragraph = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80px;
  margin-left: auto;
  margin-right: auto;
`;

export { OuterLink, Paragraph };
