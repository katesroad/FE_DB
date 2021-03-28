import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';
import { Content } from 'components/lib';

export const Wrapper = styled(Content)`
  margin-top: calc(-3rem + 3vw);
  margin-bottom: 6.25rem;
  ${mediaQueries.small} {
    margin-bottom: calc(3rem + 3.125vw);
  }
  img {
    display: block;
    width: 74%;
    max-width: 430px;
    margin-left: auto;
    margin-right: auto;
    transform: translate(5.6%, 0);
  }
  ${mediaQueries.small} {
    img {
      width: 50%;
    }
  }
  ${mediaQueries.large} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-top: calc(-3.8rem);
    img {
      margin-bottom: -8em;
    }
  }
`;

export const ContentText = styled.div`
  margin-top: calc(-3rem + 3vw);
  .schedule-demo {
    margin: 1.5rem auto;
  }
  .title {
    font-size: 2rem;
    line-height: 1.125;
  }
  .contact-us {
    padding-left: 1.85rem;
    font-size: 0.9375rem;
    line-height: 1.175;
    color: var(--c20);
  }
  ${mediaQueries.small} {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  ${mediaQueries.medium} {
    width: 74.3%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3rem;
    .title {
      font-size: calc(2rem + 2.08vw);
    }
    .schedule-demo {
      margin: 1.375rem auto 1rem auto;
    }
  }
  ${mediaQueries.large} {
    .title {
      font-size: 4rem;
    }
  }

  ${mediaQueries.xlarge} {
    padding-bottom: 4.8rem;
    width: 34.125rem;
    margin-left: 0;

    .title {
      font-size: 4.5rem;
      line-height: 1;
    }
    .schedule-demo {
      margin: 2.375rem auto 1rem auto;
    }
    .contact-us {
      text-align: left;
      padding-left: 5rem;
    }
  }
`;
