import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';
import { Content } from 'components/lib';

export const Wrapper = styled(Content)`
  margin-bottom: 4.75rem;
  h3 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
    line-height: 1.125;
    color: var(--c10);
    letter-spacing: -0.015rem;
    ${mediaQueries.medium} {
      margin-bottom: calc(2.5rem + 1.8vw);
      font-size: 3rem;
      letter-spacing: -0.023rem;
    }
  }
  ${mediaQueries.medium} {
    margin-bottom: calc(4.75rem + 2vw);
  }
  ${mediaQueries.xlarge} {
    margin-bottom: 6.25rem;
  }
`;

export const IntroText = styled.div`
  margin-bottom: 2rem;
  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.333;
    color: var(--c10);
    letter-spacing: -0.1rem;
    text-align: center;
  }
  p {
    font-size: 0.9375rem;
    line-height: 1.8666;
    color: var(--c20);
  }
  ${mediaQueries.medium} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    h4 {
      font-size: 2rem;
    }
    p {
      max-width: 51.05vw;
    }
  }
`;
