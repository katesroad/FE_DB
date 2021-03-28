import styled, { css } from 'styled-components';
import * as mediaQueries from 'styles/media-queries';
import { Content } from 'components/lib';

export const Flexbox = css`
  text-align: center;
  img {
    transform: translate(4.5%, 0);
  }
  ${mediaQueries.medium} {
    margin-bottom: calc(3rem + 2.6vw);
    width: 74vw;
    margin-left: auto;
    margin-right: auto;
    img {
      transform: translate(3%, 0);
    }
  }
  ${mediaQueries.xlarge} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      transform: translate(0, 0);
    }
  }
`;

export const IntroText = styled.div.attrs(() => ({ className: 'intro-text' }))`
  margin-top: -2rem;
  text-align: center;
  .title {
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
    line-height: 1;
    color: var(--c10);
  }
  .content {
    font-size: 0.9375rem;
    line-height: 1.86;
    color: var(--c20);
  }
  ${mediaQueries.xlarge} {
    width: 27.81rem;
    text-align: left;
  }
`;

export const EasyWrap = styled(Content)`
  margin-top: calc(2rem + 2vw);
  ${Flexbox}
  ${mediaQueries.medium} {
    margin-top: calc(2rem + 2vw);
    img {
      transform: translate(5%, 0);
    }
  }
  ${mediaQueries.xlarge} {
    img {
      max-width: 30.8125rem !important;
      transform: translate(-8%, 0);
    }
    .intro-text {
      max-width: 24.81rem;
    }
  }
`;

export const SimpleUI = styled(Content)`
  margin-top: 2rem;
  ${Flexbox}
  flex-direction: row-reverse;
  ${mediaQueries.medium} {
    .intro-text {
      margin-top: -1rem;
    }
  }
  ${mediaQueries.xlarge} {
    margin-top: -7rem;
    margin-bottom: 1rem;
    img {
      max-width: 34rem !important;
    }
  }
`;
