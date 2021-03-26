import styled from 'styled-components/macro';
import * as mediaQueries from 'styles/media-queries';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Check } from 'components/Icons';
import { useField } from 'formik';

export default function Checkbox({ children, name, value }) {
  const [field] = useField({ name, value });
  const handleClick = () => field.onChange({ target: { name, value: !value } });
  return (
    <label
      css={`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1.5rem;
        input {
          display: none;
        }
        .desc {
          line-height: 1.6667;
          font-size: 0.9375rem;
          color: var(--c10);
          ${mediaQueries.medium} {
            max-width: 24.6875rem;
          }
        }
        .icon-check {
          display: inline-block;
          min-width: 1.5rem;
          height: 1.5rem;
          margin-right: 1.5rem;
          background-color: rgba(54, 83, 107, 0.25);
          cursor: pointer;
          svg {
            display: none;
          }
          &.checked {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--c00);
            svg {
              display: block;
            }
          }
        }
      `}>
      <span className={value ? 'icon-check checked' : 'icon-check'} onClick={handleClick}>
        <Check />
      </span>
      <span className="desc">{children}</span>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};
