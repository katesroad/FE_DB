import styled from 'styled-components/macro';
import { Error } from 'components/lib';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function FormField({ type, ...props }) {
  const component = type === 'textarea' ? 'textarea' : 'input';
  const fieldProps = { ...props, component };
  if (type !== 'textarea') fieldProps.type = type;
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
          opacity: 0.5;
          border-bottom: 1px solid var(--c10);
          &:focus {
            opacity: 1;
          }
        }
        textarea {
          min-height: 5.625rem;
        }
        .error-msg {
          display: block;
          margin-top: 0.5rem;
        }
      `}>
      <Field {...fieldProps} />
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
