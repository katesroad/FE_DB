import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

/*-------------Story Item--------------------*/
export const StoryWrap = styled.li`
  position: relative;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: translate 0.25s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  @media only screen {
    &:hover {
      transform: translate3d(0, -1.5vw, 0) scale(1.01);
    }
  }
`;

export const StoryIntro = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 2.5rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0.27%,
    rgba(0, 0, 0, 0.661222) 100%
  );
  .created-at {
    font-size: 0.8125rem;
  }
  .topic {
    margin: 0.25rem 0;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  .author {
    font-size: 0.8125rem;
  }
  .gray-line {
    height: 1px;
    margin-bottom: 1.25rem;
    margin-top: 0.9375rem;
    background-color: var(--white);
    opacity: 0.25;
  }
  .read-story {
    width: 100%;
    font-size: 0.75rem;
    letter-spacing: 0.125rem;
  }
`;

/*---------------------Story List----------------*/
export const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: minmax(320px, auto);
  ${mediaQueries.small} {
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    grid-auto-rows: minmax(375px, auto);
  }
  ${mediaQueries.medium} {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: minmax(24rem, auto);
  }
  ${mediaQueries.xlarge} {
    grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
    grid-auto-rows: minmax(22.5rem, auto);
  }
`;
