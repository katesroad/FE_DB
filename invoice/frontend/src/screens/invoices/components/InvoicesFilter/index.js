import * as React from "react";
import PropTypes from "prop-types";
import { Disclosure, DisclosureButton } from "@reach/disclosure";
import { IconArrowDown, IconCheck } from "components/Icon";
import { Wrapper, StatusList, StatusItem } from "./styles";

const STATUS_LIST = ["draft", "pending", "paid"];

function InvoicesFilter({ onSelect, statusList }) {
  return (
    <Wrapper>
      <Disclosure>
        <DisclosureButton>
          <strong>Filter By Status</strong>
          <IconArrowDown color="red" />
        </DisclosureButton>
        <StatusList>
          {STATUS_LIST.map((status) => (
            <StatusItem
              key={status}
              onClick={() => onSelect(status)}
              className={statusList.includes(status) ? "checked" : ""}
              aria-label={status}
            >
              <span className="checkbox">
                {statusList.includes(status) ? <IconCheck /> : null}
              </span>
              {status}
            </StatusItem>
          ))}
        </StatusList>
      </Disclosure>
    </Wrapper>
  );
}
InvoicesFilter.defaultProps = {
  statusList: [],
};
InvoicesFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  statusList: PropTypes.arrayOf(PropTypes.oneOf(["draft", "pending", "paid"])),
};
export default React.memo(InvoicesFilter);
