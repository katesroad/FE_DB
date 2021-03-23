import * as React from "react";
import {
  IconFacebook,
  IconPinerest,
  IconTwitter,
  IconYoutube,
  IconInstgram,
} from "components/Icons";
import {
  SocialIcons,
  PageLinks,
  InviteButton,
  BetaWrap,
  BetaContent,
  Footer,
  FooterContent,
  IconsWrap,
  CopyrightWrap,
} from "./styles";
import ButtonArrow from "components/ButtonArrow";

export default function PageFooter() {
  return (
    <>
      <BetaWrap>
        <BetaContent>
          <h2 className="title">
            We're in beta.
            <br /> get your invitation
            <br /> today!
          </h2>
          <ButtonArrow className="btn">
            <span>GET INVITED</span>
          </ButtonArrow>
        </BetaContent>
      </BetaWrap>

      <Footer>
        <FooterContent>
          <IconsWrap>
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
            {/* the navigation link at footer */}
            <PageLinks />
          </IconsWrap>
          <CopyrightWrap>
            <InviteButton>get invited</InviteButton>
            <p className="copyright">
              <small>Copyright 2019. All rights Reserved</small>
            </p>
          </CopyrightWrap>
        </FooterContent>
      </Footer>
    </>
  );
}
