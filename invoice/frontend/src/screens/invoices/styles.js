import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Button } from "components/lib";

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
  ${mediaQueries.medium} {
    margin: 56px 0;
  }
`;

export const CreateBtn = styled(Button)`
  padding: 14px !important;
  ${mediaQueries.medium} {
    padding: 16px 24px !important;
  }
`;

export const InvoiceOperations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 24px;
  ${mediaQueries.small} {
    font-size: 32px;
    line-height: 36px;
  }
`;
