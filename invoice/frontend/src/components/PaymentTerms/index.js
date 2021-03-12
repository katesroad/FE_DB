import * as React from "react";
import PropTypes from "prop-types";
import Field from "components/Field";
import { IconArrowDown } from "components/Icon";
import { ErrorMessage } from "formik";
import { FieldError } from "components/lib/form";
// https://reach.tech/listbox
import {
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxButton,
  ListboxPopover,
} from "@reach/listbox";
import "./style.css";

const PAYMENT_TERMS = [
  { value: "1", label: "Net 1 Day" },
  { value: "7", label: "Net 7 Days" },
  { value: "14", label: "Net 14 Days" },
  { value: "30", label: "Net 30 Days" },
];

const PaymentTerms = ({ value, onChange }) => {
  const handleChange = (value) => {
    console.log(onChange);
    onChange({ target: { name: "paymentTerms", value } });
  };
  return (
    <Field label="Payment Terms" name="paymentTerms">
      <ListboxInput
        aria-labelledby={"payment-terms"}
        value={value}
        onChange={(value) => handleChange(value)}
        portal={false}
      >
        <ListboxButton arrow={<IconArrowDown />} />
        <ListboxPopover>
          <ListboxList>
            {PAYMENT_TERMS.map(({ value, label }) => (
              <ListboxOption value={value} key={value}>
                {label}
              </ListboxOption>
            ))}
          </ListboxList>
        </ListboxPopover>
      </ListboxInput>
      <FieldError>
        <ErrorMessage name="paymentTerms" />
      </FieldError>
    </Field>
  );
};
PaymentTerms.propTypes = {
  value: PropTypes.oneOf(["1", "7", "14", "30"]),
  onChange: PropTypes.func.isRequired,
};

export default React.memo(PaymentTerms);
