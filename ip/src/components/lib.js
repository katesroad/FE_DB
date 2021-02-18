import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import * as mediaQueries from "styles/media-queries";

const spin = keyframes`
  0% {
	transform: rotate(0deg)
  }
  100% {
	transform: rotate(360deg)
  }
`;

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;
Spinner.defaultProps = {
  "aria-label": "loading",
};
Spinner.displayName = "Spinner";

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  ${mediaQueries.medium} {
    padding-left: 32px;
    padding-right: 32px;
  }
  ${mediaQueries.large} {
    padding-left: 64px;
    padding-right: 64px;
  }
  ${mediaQueries.xlarge} {
    width: 88%;
    max-width: 1560px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
Content.displayName = "Content";

const Image = styled.img`
  max-width: 100%;
`;
Image.displayName = "Image";

export { Content, Image, Spinner };
