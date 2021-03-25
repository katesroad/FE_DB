import styled from 'styled-components';
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
  // padding: 1.5rem 2.5rem; customize button width and height at the place use it
  text-align: center;
  font-size: 1rem;
  font-weight: var(--font-bolder);
  color: var(--white);
  transition: all color 0.25s ease;
  ${mediaQueries.medium} {
    font-size: 1.125rem;
  }
`;

export const RedButton = styled(Button).attrs(() => ({
  className: 'btn--red'
}))`
  background-color: var(--red);
  &:hover {
    background-color: #ff9393;
  }
`;

export const BlackButton = styled(Button).attrs(() => ({
  className: 'btn btn--black'
}))`
  background-color: var(--bg-black);
  &:hvoer {
    background-color: #434356;
  }
`;

export const NavItem = styled('span').attrs(() => ({ className: 'nav-item' }))`
  font-size: 1rem;
  line-height: 2;
  color: var(--white);
  cursor: pointer;
  &:hover {
    font-weight: var(--font-bold);
  }
`;
