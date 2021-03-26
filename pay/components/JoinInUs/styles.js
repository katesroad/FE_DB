import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

export const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  h4 {
    margin: 0 auto -0.5rem auto;
    font-size: 1.5rem;
    line-height: 1.3333;
  }
  .clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      width: 50%;
      margin-top: 2.5rem;
    }
  }
  ${mediaQueries.medium} {
    h4 {
      width: 62.1%;
      text-align: center;
    }
    .clients {
      span {
        width: 33.33%;
      }
    }
  }
  ${mediaQueries.xlarge} {
    width: 80%;
  }
`;
