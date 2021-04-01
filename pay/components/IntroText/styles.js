import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

export const Wrapper = styled.div.attrs(() => ({ className: 'intro-text' }))`
  margin-bottom: 2rem;
  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.333;
    color: var(--c10);
    text-align: center;
    text-transform: capitalize;
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
  ${mediaQueries.xlarge} {
    margin-bottom: 3.5rem;
    p {
      max-width: 48rem;
    }
  }
`;
