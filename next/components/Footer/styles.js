import { Content } from 'components/lib';
import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

export const Wrapper = styled.div`
  padding-bottom: 6.25rem;
  padding-top: 6.25rem;
  background-color: var(--white);
  ${mediaQueries.medium} {
    padding-top: 4.375rem;
  }
  ${mediaQueries.large} {
    position: relative;
    padding-top: 7.5rem
    padding-bottom: 7.1875rem;
    background-image: url(assets/desktop/bg-pattern-wave-red.svg);
    background-position: -95px center;
    background-repeat: no-repeat;
  }
`;

export const FooterContent = styled(Content)`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 2rem;
    line-height: 1.25;
  }
  .btn--red {
    height: 4rem;
    width: 12.5rem;
    padding: 1.5rem 0;
    margin-top: 3rem;
  }
  ${mediaQueries.medium} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .btn--red {
      margin-top: 0;
    }
  }
`;
