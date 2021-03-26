import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';
import { Content } from 'components/lib';

export const Wrapper = styled(Content)`
  margin-bottom: 3rem;
  ${mediaQueries.small} {
    margin-bottom: calc(3rem + 3.125vw);
  }
  .content {
    margin-top: 4rem;
  }
`;

export const OurStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  margin: 3rem 0;
  border-top: 1px solid rgba(54, 83, 107, 0.25);
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);
  text-align: center;
  p {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    display: block;
    opacity: 0.7;
    font-size: 1rem;
    color: var(--c10);
    line-height: 1.75;
  }
  strong {
    color: var(--c00);
    font-size: 3.5rem;
    line-height: 1.2857;
  }
  ${mediaQueries.medium} {
    flex-direction: row;
    justify-content: center;
    margin: calc(3rem + 2.08vw);
    padding: 2.75rem 0;
    p {
      width: 33.333%;
      padding: 0;
      margin-bottom: 0;
    }
    strong {
      line-height: 1;
    }
  }
  ${mediaQueries.xlarge} {
    margin: 4.5rem 0;
  }
`;
