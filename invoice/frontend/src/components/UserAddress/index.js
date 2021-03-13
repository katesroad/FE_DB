import * as React from "react";
import PropTypes from "prop-types";
import Field from "components/Field";
import { Title, Column } from "./styles";
function UserAddress({ address, type, children }) {
  return (
    <div>
      <Title>bill {type === "senderAddress" ? "from" : "to"}</Title>
      {children}
      <Field
        label="street address "
        name={type + ".street"}
        value={address.street}
      />
      <Column>
        <Field label="city" name={type + ".city"} value={address.city} />
        <Field
          label="post code"
          name={type + ".postcode"}
          value={address.postcode}
          className="code"
        />
        <Field
          label="country"
          name={type + ".country"}
          value={address.country}
        />
      </Column>
    </div>
  );
}
UserAddress.defaultProps = {
  address: {
    street: "",
    city: "",
    postcode: "",
    country: "",
  },
};
export const AddressShape = {
  address: PropTypes.string,
  city: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};
UserAddress.propTypes = {
  type: PropTypes.oneOf(["senderAddress", "clientAddress"]).isRequired,
  address: PropTypes.shape(AddressShape),
};

export default React.memo(UserAddress);
