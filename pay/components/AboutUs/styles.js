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
