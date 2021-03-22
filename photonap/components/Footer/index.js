
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import * as React from "react";
import { Content } from "components/lib";
import {
  IconFacebook,
  IconPinerest,
  IconTwitter,
  IconYoutube,
  IconInstgram,
} from "components/Icons";
import { SocialIcons, PageLinks, InviteButton } from "./styles";
import ButtonArrow from "components/ButtonArrow";

export default function Footer() {
  return (
    <>
      <div
        css={`
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
        `}
      >
        <Content
          css={`
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
          `}
        >
          <h2 className="title">
            We're in beta.
            <br /> get your invitation
            <br /> today!
          </h2>
          <ButtonArrow className="btn">
            <span>GET INVITED</span>
          </ButtonArrow>
        </Content>
      </div>

      <footer
        css={`
          align-self: flex-end;
          padding: 3.5rem 0;
          background-color: var(--black);
          width: 100%;
          color: var(--white);
          ${mediaQueries.medium} {
            padding: 4rem 0;
          }
        `}
      >
        <Content
          css={`
            display: flex;
            flex-direction: column;
            align-items: center;
            ${mediaQueries.medium} {
              flex-direction: row;
              align-items: center;
            }
          `}
        >
          <div
            css={`
              text-align: center;
              ${mediaQueries.medium} {
                display: flex;
                align-items: center;
                flex-grow: 1;
                text-align: left;
              }
            `}
          >
            <div>
              <span className="logo">logo</span>
              <SocialIcons>
                <span>
                  <IconFacebook />
                </span>
                <span>
                  <IconYoutube />
                </span>
                <span>
                  <IconTwitter />
                </span>
                <span>
                  <IconPinerest />
                </span>
                <span>
                  <IconInstgram />
                </span>
              </SocialIcons>
            </div>
            <PageLinks />
          </div>
          <div
            css={`
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
            `}
          >
            <InviteButton>get invited</InviteButton>
            <p className="copyright">
              <small>Copyright 2019. All rights Reserved</small>
            </p>
          </div>
        </Content>
      </footer>
    </>
  );
}
