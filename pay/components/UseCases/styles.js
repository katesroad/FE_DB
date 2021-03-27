import { Content } from 'components/lib';
import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

export const UseCaseWrap = styled.li`
  margin-top: 3rem;
  img {
    margin-bottom: -0.25rem;
  }
  .intro-text {
    margin-top: 2rem;
    margin-bottom: 0;
    h4 {
      margin-bottom: 1rem;
      font-size: 1.125rem;
      word-spacing: 0.5rem;
    }
  }
  ${mediaQueries.medium} {
    &:nth-child(2) {
      margin-left: 0.625rem;
      margin-right: 0.625rem;
    }
    .intro-text {
      flex-direction: column;
    }
  }
`;

export const Wrapper = styled(Content).attrs(() => ({ as: 'ul' }))`
  margin-bottom: 5rem;
  text-align: center;
  ${mediaQueries.medium} {
    margin-bottom: calc(5rem + 0.26vw);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  ${mediaQueries.xlarge} {
    margin-bottom: 6rem;
  }
`;
