import styled from "styled-components";
import { Content } from "components/lib";
import { Form as FormikForm } from "formik";
import * as mediaQueries from "styles/media-queries";

export const Form = styled(FormikForm)`
  > div {
    margin-bottom: 32px;
  }
`;

export const Column = styled.div`
  ${mediaQueries.medium} {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    &>div {
      width: 100%;
      &:nth-child(2) {
        margin-left: 23px;
      }
    }
  }
}
`;

export const FormError = styled.p`
  margin-top: 32px;
`;

// to keep the content width the same as
// side modal content. style copied form side modal
export const FormFooter = styled(Content)`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 12px;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 21px;
  background-color: var(--body-bg);
  ${mediaQueries.iphone} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    padding-left: 56px;
    padding-right: 56px;
    width: 80%;
  }
  ${mediaQueries.large} {
    left: 84px;
    padding-left: 76px;
    max-width: 768px;
  }
`;
