import styled from 'styled-components';
import Link from 'next/link';
import * as mediaQueries from 'styles/media-queries';

export const Content = styled.div`
  width: 100%;
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  // based on mobile version design guide
  padding-left: calc(12px + 3.2vw);
  padding-right: calc(12px + 3.2vw);
  //based on tablet, ipad version
  ${mediaQueries.medium} {
    padding-left: 0;
    padding-right: 0;
    width: 89.5%;
  }
  ${mediaQueries.large} {
    width: 77.08%;
  }
`;

export const Button = styled('button').attrs(() => ({ className: 'btn' }))`
  // setup button width and height at using place
  text-align: center;
  font-size: 0.9375rem;
  font-weight: var(--font-bold);
  color: #fbfcfe !important;
  transition: all color 0.25s ease;
`;

export const BtnPrimary = styled(Button).attrs(() => ({
  className: 'btn--primary'
}))`
  background-color: var(--c00);
  &:hover {
    background-color: var(--c12);
  }
  &[disabled] {
    opacity: 0.5;
  }
`;

export const BtnSecondary = styled(Button).attrs(() => ({ className: 'btn--secondary' }))`
  color: var(--c10) !important;
  border-radius: 1.5rem;
  border: 1px solid var(--c10);
  background-color: #edf3f8;
  &:hover {
    border: 1px solid transparent;
    color: rgba(251, 252, 254, 1) !important;
    background-color: var(--c10);
  }
`;

// nav item wrapped using next/link
export const NavItem = styled(Link)`
  // color defined at the place using it
  color: inherit;
  font-size: 0.9375rem;
  line-height: 1.2;
  font-weight: var(--font-bold);
  text-transform: capitalize;
`;

export const NavItems = styled.p.attrs(() => ({ className: 'nav-items' }))`
  a {
    // color defined at the place using it
    color: inherit;
    font-size: 0.9375rem;
    line-height: 1.2;
    font-weight: var(--font-bold);
    text-transform: capitalize;
  }
`;

export const Error = styled.div.attrs(() => ({ className: 'is-error' }))`
  color: rgba(255, 0, 0, 0.5);
  &:empty {
    display: none;
  }
`;
