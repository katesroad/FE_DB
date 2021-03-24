import styled from "styled-components";
import { Content } from "components/lib";
import NavItems from "components/NavItems";
import * as mediaQueries from "styles/media-queries";
import ButtonArrow from "components/ButtonArrow";

/*-------------------------- We are in beta----------------------------------------*/

export const BetaWrap = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: var(--white);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  background-image: url(/shared/mobile/bg-beta.jpg);
  ${mediaQueries.medium} {
    background-image: url(/shared/tablet/bg-beta.jpg);
  }
  ${mediaQueries.large} {
    background-image: url(/shared/desktop/bg-beta.jpg);
  }
`;

export const BetaContent = styled(Content)`
  .title {
    margin-bottom: 1.25rem;
    font-size: 2rem;
    line-height: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.20625rem;
  }
  .btn {
    font-size: 0.75rem;
    span {
      margin-right: 1rem;
      transition: margin-right 0.25s ease;
    }
    &:hover {
      span {
        margn-right: 1.5rem;
      }
    }
  }
  ${mediaQueries.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

/*--------------------Footer element--------------------------------*/

export const Footer = styled.footer`
  align-self: flex-end;
  padding: 3.5rem 0;
  background-color: var(--black);
  width: 100%;
  color: var(--white);
  ${mediaQueries.medium} {
    padding: 4rem 0;
  }
`;

export const FooterContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries.medium} {
    flex-direction: row;
    align-items: center;
  }
`;
/*----------------Wrap for social media icons and logo------------------------------*/
export const IconsWrap = styled.div`
  text-align: center;
  ${mediaQueries.medium} {
    display: flex;
    align-items: center;
    flex-grow: 1;
    text-align: left;
  }
`;

export const SocialIcons = styled.p`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  span {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
    cursor: pointer;
  }
`;
/*---------------the navigation-------------------------------*/
export const PageLinks = styled(NavItems)`
  padding-bottom: 6.25rem;
  width: 100%;
  font-size: 0.75rem;
  a {
    padding-bottom: 1.1875rem;
  }
  ${mediaQueries.medium} {
    width: auto;
    padding-bottom: 0;
    padding-left: 6.8125rem;
  }
`;

export const CopyrightWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 172px;
  .copyright {
    margin-top: 2.125rem;
    color: var(--gray);
  }
  ${mediaQueries.medium} {
    min-width: 220px;
  }
`;

export const InviteButton = styled(ButtonArrow)`
  flex-grow: 1;
  margin-bottom: 2.125rem;
  max-width: 13.75rem;
  font-size: 0.75rem;
`;
