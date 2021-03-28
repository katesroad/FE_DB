import { Content } from 'components/lib';
import styled from 'styled-components';
import { Form } from 'formik';
import * as mediaQueries from 'styles/media-queries';

export const ReadyToStart = styled(Content)`
  flex-grow: 0;
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.125;
    text-align: center;
  }
  ${mediaQueries.medium} {
    max-width: 27.8125rem;
    margin-left: auto;
    margin-right: auto;
  }
  ${mediaQueries.large} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // reset to content width
    max-width: 1110px;
    h2 {
      margin-bottom: 0;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 5rem;
  padding-top: 2.56rem;
  padding-bottom: 3.4375rem;
  background-color: var(--c11);
  background-image: url(/shared/desktop/bg-pattern-circle.svg);
  background-position: center -39%;
  background-repeat: no-repeat;
  ${mediaQueries.medium} {
    margin-top: calc(5rem + 2.6vw);
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
    background-position: center right;
    background-size: 56%;
    background-position: 110% -40%;
  }
  ${mediaQueries.xlarge} {
    margin-top: 6rem;
  }
`;

export const FooterContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries.medium} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries.medium} {
    flex-direction: row;
  }
`;

export const NavItems = styled.p.attrs(() => ({ className: 'nav-items' }))`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  a {
    font-size: 0.9375rem;
    text-transform: capitalize;
    color: #fbfcfe;
    opacity: 0.7;
    font-weight: var(--font-bold);
    &:hover {
      opacity: 1;
    }
    &:nth-child(2n) {
      margin-bottom: 1.875rem;
      margin-top: 1.875rem;
    }
  }
  ${mediaQueries.medium} {
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 4rem;
    flex-direction: row;
    a:nth-child(2n) {
      margin: 0 2.5rem;
    }
  }
`;

export const SocialIcons = styled.p.attrs(() => ({ className: 'social-icons' }))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
    &:nth-child(2n) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }
`;
