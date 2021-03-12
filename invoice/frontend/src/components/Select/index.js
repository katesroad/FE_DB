import * as React from "react";
import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { IconArrowDown } from "components/Icon";
import { FormControl, Label, FieldError } from "components/lib/form";
// https://reach.tech/listbox
import {
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxButton,
  ListboxPopover,
} from "@reach/listbox";
import { ArrowDown } from "./styles";
import "./style.css";

export const Option = React.memo(({ children, ...props }) => (
  <ListboxOption {...props}>{children}</ListboxOption>
));
Option.propTypes = {
  value: PropTypes.any.isRequired,
  chidlren: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node.isRequired),
  ]),
};

const Arrow = ({ value, placeholder }) => {
  if (value)
    return (
      <ArrowDown className="with-value">
        <i></i> <IconArrowDown />
      </ArrowDown>
    );
  return (
    <ArrowDown>
      <span>{placeholder}</span>
      <IconArrowDown />
    </ArrowDown>
  );
};

const Select = ({ name, value, label, placeholder, children }) => {
  const [field] = useField({ name, value });
  return (
    <FormControl>
      <Label>{label || name}</Label>
      <ListboxInput
        aria-labelledby={name}
        value={value}
        onChange={(value) => field.onChange({ target: { name, value } })}
      >
        <ListboxButton
          arrow={<Arrow value={value} placeholder={placeholder} />}
          aria-label="select button"
        />
        <ListboxPopover>
          <ListboxList>
            {/* to place options for select */}
            {children}
          </ListboxList>
        </ListboxPopover>
      </ListboxInput>
      <input {...field} className="select-value" />
      <FieldError>
        <ErrorMessage name={name} />
      </FieldError>
    </FormControl>
  );
};
Select.defaultProps = {
  placeholder: "Please select",
};
Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  chidlren: PropTypes.arrayOf([PropTypes.node.isRequired]),
  placeholder: PropTypes.string,
};

export default React.memo(Select);
