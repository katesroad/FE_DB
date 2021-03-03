import styled from "styled-components";
import { Card } from "components/lib";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled(Card)`
  ${mediaQueries.medium} {
    padding: 32px;
  }
`;
