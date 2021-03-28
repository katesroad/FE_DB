import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

export const Wrapper = styled.div`
  // 6rem - 2.5rem
  padding-top: 3.5rem;
  padding-bottom: 6rem;
  background-color: var(--c11);
  .clients {
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      width: 50%;
      margin-top: 2.5rem;
    }
  }
  ${mediaQueries.medium} {
    padding-top: 3rem;
    padding-bottom: 5.5rem;
    .clients {
      width: 32.75rem;
      margin-left: auto;
      margin-right: auto;
      span {
        width: 33.33%;
      }
    }
  }
  ${mediaQueries.xlarge} {
    // 100px
    padding: 6.25rem 0;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
    .clients {
      width: 33.5rem;
      margin: 0;
      span {
        margin-top: 0;
        margin-bottom: 2.5rem;
      }
    }
  }
`;

export const IntroText = styled.div`
  margin-top: 3.5rem;
  color: #fbfcfe;
  text-align: center;
  .title {
    margin-bottom: 1rem;
    color: inherit;
    font-size: 2rem;
    line-height: 1.125;
    ${mediaQueries.medium} {
      margin-bottom: 1.5rem;
      font-size: 3rem;
    }
  }
  .text {
    font-size: 0.9375rem;
    line-height: 1.8666;
    color: #fafefc;
    opacity: 0.7;
  }
  button {
    // 60px;
    margin-top: 3.75rem;
    height: 3rem;
    width: 8.125rem;
    color: #fafefc !important;
    border-color: #fbfcfe;
    background-color: transparent;
    &:hover {
      background-color: #fbfcfe;
      color: var(--c10) !important;
    }
  }
  ${mediaQueries.medium} {
    width: 60.5%;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(3.5rem + 1.04vw);
    .title {
      margin-bottom: 1.5rem;
    }
    button {
      margin-top: 2rem;
    }
  }
  ${mediaQueries.xlarge} {
    width: 27.8125rem;
    margin: 0;
    text-align: left;
  }
`;
