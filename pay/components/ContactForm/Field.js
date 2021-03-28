import styled from 'styled-components/macro';
import { Error } from 'components/lib';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Field, ErrorMessage, useField } from 'formik';

export default function FormField({ type, ...props }) {
  const component = type === 'textarea' ? 'textarea' : 'input';
  const fieldProps = { ...props, component };
  if (type !== 'textarea') fieldProps.type = type;
  const [, meta] = useField({ type, ...props });
  const hasError = meta.error && meta.touched;
  return (
    <label
      css={`
        margin-bottom: 1.5rem;
        input,
        textarea {
          width: 100%;
          padding-left: 1.25rem;
          height: 2.625rem;
          line-height: 2.625rem;
          font-size: 0.9375rem;
          color: var(--c10);
          border-bottom: 1px solid var(--c10);
          &.has-error {
            color: red;
            border-bottom: 1px solid red;
            ::-webkit-input-placeholder {
              /* Edge */
              color: red;
            }

            :-ms-input-placeholder {
              /* Internet Explorer 10-11 */
              color: red;
            }

            ::placeholder {
              color: red;
            }
          }
        }
        textarea {
          min-height: 5.625rem;
        }
        .error-msg {
          display: block;
          padding-left: 1.25rem;
          margin-top: 0.5rem;
        }
      `}>
      <Field {...fieldProps} className={hasError ? 'has-error' : ''} />
      <Error className="error-msg" as="small">
        <ErrorMessage name={props.name} />
      </Error>
    </label>
  );
}
FormField.defaultProps = {
  type: 'text'
};
FormField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['textarea', 'text'])
};
