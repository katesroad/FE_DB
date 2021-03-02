import * as React from "react";
import PropTypes from "prop-types";
import {
  DropdownInput,
  DropdownButton,
  DropdownOption,
  DropdownList,
  DropdownPopover,
  DropdownArrow,
  Wrapper,
} from "./styles";

const STATUS_LIST = ["paid", "pending", "draft"];

function InvoiceFilter({ value, onChange }) {
  const handleChange = (value) => onChange(value);
  return (
    <Wrapper>
      {value !== "all" ? "Status:" : null}
      <DropdownInput
        aria-labelledby={"status"}
        value={value}
        onChange={(value) => handleChange(value)}
      >
        <DropdownButton arrow={<DropdownArrow />} />
        <DropdownPopover>
          <DropdownList>
            <DropdownOption value="all" key="blank">
              Fitler by status
            </DropdownOption>
            {STATUS_LIST.map((status) => (
              <DropdownOption value={status} key={status}>
                {status}
              </DropdownOption>
            ))}
          </DropdownList>
        </DropdownPopover>
      </DropdownInput>
    </Wrapper>
  );
}

InvoiceFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InvoiceFilter;
