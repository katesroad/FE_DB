import { Facebook, Logo, Twitter, Linkedin } from 'components/Icons';
import { NavItem } from 'components/lib';
import * as React from 'react';
import { Footer, SocialIcons, NavItems, FooterContent, Column } from './styles';

export default function PageFooter() {
  return (
    <Footer>
      <FooterContent>
        <Column>
          <Logo />
          <NavItems>
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/about">about</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </NavItems>
        </Column>
        <SocialIcons>
          <Facebook />
          <Twitter />
          <Linkedin />
        </SocialIcons>
      </FooterContent>
    </Footer>
  );
}
