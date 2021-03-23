import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Content = styled.div`
  width: 100%;
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  // based on mobile version design guide
  padding-left: calc(12px + 3.2vw);
  padding-right: calc(12px + 3.2vw);
  //based on tablet, ipad version
  ${mediaQueries.medium} {
    padding-left: 0;
    padding-right: 0;
    width: 89.6%;
  }
`;

export const Button = styled("button")`
  padding: 0.875rem 0;
  text-align: center;
  color: var(--white);
  background-color: var(--black);
  transition: background-color color 0.25s ease;
  &:hover {
    color: var(--black);
    background-color: var(--gray);
  }
`;
