import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.div`
  padding: 10vh 0;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.6px;
  ${mediaQueries.medium} {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const Image = styled.img`
  display: inline-block;
  width: 46%;
  min-width: 194px;
  margin-bottom: 40px;
`;
