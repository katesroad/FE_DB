import styled from 'styled-components';
import { Form } from 'formik';
import * as mediaQueries from 'styles/media-queries';

export const FillForm = styled(Form)`
  input {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    padding-left: 1.6875rem;
    font-size: 0.9375rem;
    color: var(--c10);
    background: #fbfcfe;
    box-shadow: 0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25);
    border-radius: 1.5rem;
  }
  .btn--primary {
    height: 3rem;
    width: 100%;
    border-radius: 1.5rem;
    max-width: ;
  }
  ${mediaQueries.medium} {
    position: relative;
    input {
      margin-bottom: 0;
    }
    .btn--primary {
      position: absolute;
      right: 0;
      width: 10.8125rem;
    }
  }
  ${mediaQueries.large} {
    width: 27.8125rem;
  }
`;
