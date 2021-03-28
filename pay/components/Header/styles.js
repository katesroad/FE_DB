import { Content as HeaderContent, NavItems as HeaderNavItems } from 'components/lib';
import * as mediaQueries from 'styles/media-queries';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  // 48 px
  margin-bottom: calc(2.5rem + 2.1vw);
  ${mediaQueries.medium} {
    // 75px
    margin-bottom: calc(3rem + 3.515vw);
  }
  ${mediaQueries.xlarge} {
    // 82px for pricing, about, contact pages
    // for home page, 75px
    margin-bottom: 5.125rem;
  }
`;
export const Content = styled(HeaderContent)`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
  .logo {
    cursor: pointer;
  }
  ${mediaQueries.medium} {
    .btn-menu--open {
      display: none !important;
    }
  }
`;

export const NavBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 18.75rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--c11);
  transform: translate(100%, 0);
  &.is-open {
    transform: translate(0%, 0);
    z-index: 2004;
  }
  .header {
    width: 100%;
    padding: 3rem 0 1.5rem;
    text-align: right;
    border-bottom: 1px solid rgba(251, 252, 253, 0.15);
  }
  .btn--primary {
    margin-top: 1rem;
    padding: 1rem 1.625rem;
    border-radius: 1.625rem;
  }
  ${mediaQueries.medium} {
    position: static;
    transform: translate(0, 0);
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 4rem;
    align-items: center;
    height: auto;
    width: auto;
    padding: 0;
    background-color: transparent;
    .header {
      display: none !important;
    }
    .btn--primary {
      margin-top: 0;
    }
  }
`;

export const NavItems = styled(HeaderNavItems)`
  display: flex;
  flex-direction: column;
  margin-top: 1.6875rem;
  color: var(--c10);
  text-align: center;
  a {
    padding: 1rem 0;
  }
  ${mediaQueries.medium} {
    flex-direction: row;
    margin-top: 0;
    a {
      padding: 0 1.25rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
