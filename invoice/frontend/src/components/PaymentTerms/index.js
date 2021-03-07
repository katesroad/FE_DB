// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import { Label, FormControl, Input } from "components/lib";
import {
  DropdownInput,
  DropdownButton,
  DropdownOption,
  DropdownList,
  DropdownPopover,
  DropdownArrow,
} from "components/Select";

const PAYMENT_TERMS = [
  { value: "1", label: "Net 1 Day" },
  { value: "7", label: "Net 7 Days" },
  { value: "14", label: "Net 14 Days" },
  { value: "30", label: "Net 30 Days" },
];

function PaymentTerms({ value, onChange }) {
  const handleChange = (e) => onChange(e);
  return (
    <>
      <FormControl>
        <Label>Payment Terms</Label>
        {/* styling copied from the Input element of the lib.js */}
        <div
          css={`
            width: 100%;
            padding: 8px 16px;
            height: 48px;
            border: 1px solid;
            border-color: var(--input-border-color);
            box-sizing: border-box;
            border-radius: 4px;
            font-size: 16px;
            color: var(--input-text-color);
            background-color: var(--input-background-color);
          `}
        >
          <DropdownInput
            aria-labelledby={"payment-terms"}
            value={value}
            onChange={(value) => handleChange(value)}
          >
            <DropdownButton arrow={<DropdownArrow />} />
            <DropdownPopover>
              <DropdownList>
                {PAYMENT_TERMS.map(({ value, label }) => (
                  <DropdownOption value={value} key={value}>
                    {label}
                  </DropdownOption>
                ))}
              </DropdownList>
            </DropdownPopover>
          </DropdownInput>
          {/* to pass value to form */}
          <Input
            name="paymentTerms"
            value={value}
            onChange={handleChange}
            disabled
            css={`
              display: none;
            `}
          />
        </div>
      </FormControl>
    </>
  );
}
PaymentTerms.defaultProps = {
  value: "1",
};
PaymentTerms.propTypes = {
  value: PropTypes.oneOf(["1", "7", "14", "30"]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentTerms;
