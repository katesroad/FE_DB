import * as React from 'react';
import Link from 'next/link';
import { NavItem, BtnPrimary } from 'components/lib';
import { Content, Header, NavItems, NavBar } from './styles';
import { Logo, MenuOpen, MenuClose } from 'components/Icons';

export default function PageHeader() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  return (
    <Header>
      <Content>
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>

        <NavBar className={menuIsOpen ? 'is-open' : ''}>
          {/* menu close button for mobile version */}
          <p className="header" onClick={() => setMenuIsOpen(false)}>
            <span className="btn-menu--close">
              <MenuClose />
            </span>
          </p>
          <NavItems>
            <NavItem href="/pricing">pricing</NavItem>
            <NavItem href="/about">about</NavItem>
            <NavItem href="/contact">contact</NavItem>
          </NavItems>
          <BtnPrimary>Schedule a Demo</BtnPrimary>
        </NavBar>

        {/* the menu open button for small devices */}
        <span className="btn-menu--open" onClick={() => setMenuIsOpen(true)}>
          <MenuOpen />
        </span>
      </Content>
    </Header>
  );
}
