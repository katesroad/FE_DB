import { Content, ThemedElement } from "components/lib";
// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { OuterLink, Paragraph } from "./styles";

export default function Footer() {
  return (
    <ThemedElement
      as="footer"
      css={`
        padding: 2rem 0;
        align-self: flex-end;
        width: 100vw;
        box-shadow: 0 2px 5px var(--shadow);
      `}
    >
      <Content>
        <Paragraph>
          <OuterLink href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">
            About
          </OuterLink>
          <OuterLink href="https://github.com/katesroad/frontendmentor/countries">
            <FaGithubAlt />
          </OuterLink>
        </Paragraph>
      </Content>
    </ThemedElement>
  );
}
