import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.div`
  position: relative;
`;

export const HeroImg = styled.div`
  width: 100%;
  height: 78.4vw;
  background-size: cover;
  background-repeat: no-repeat;
  backgroun-position: center;
  background-image: url(/stories/mobile/moon-of-appalacia.jpg);
  ${mediaQueries.medium} {
    height: 64.97vw;
    background-image: url(/stories/tablet/moon-of-appalacia.jpg);
  }
  ${mediaQueries.xlarge} {
    height: 42.375rem;
    background-image: url(/stories/desktop/moon-of-appalacia.jpg);
    background-size: cover;
  }
`;

/*-------------The text content-------------------------*/

export const StoryIntro = styled.div`
  padding-left: 1.75rem;
  padding-right: 1.74rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  color: var(--white);
  background-color: var(--black);
  ${mediaQueries.medium} {
    position: absolute;
    top: 50%;
    left: 5.2vw;
    transform: translate(0, -50%);
    max-width: 24.1875rem;
    background: transparent;
  }
  ${mediaQueries.large} {
    left: 7.77vw;
  }
  ${mediaQueries.xlarge} {
    left: 17.77vw;
    font-size: 20px;
    max-width: 26em;
  }
`;

export const IntroTitle = styled.header`
  color: var(--white);
  text-transform: uppercase;
  h6 {
    letter-spacing: 0.125rem;
    font-size: 0.75em;
  }
  h2 {
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-size: 2em;
    line-height: 1.25;
  }
`;

export const IntroStamp = styled.p`
  font-size: 0.8125em;
  line-height: 1.3;
  .date {
    margin-right: 0.5em;
    color: var(--white);
    opacity: 0.6;
  }
`;

export const IntroContent = styled.p`
  padding: 1.5rem 0;
  font-size: 0.9375em;
  line-height: 1.667;
  color: var(--white);
  opacity: 0.6;
`;
