import * as React from "react";
import PropTypes from "prop-types";
import { FormControl, Label, Input } from "components/lib";
import { Title, Column } from "./styles";

function UserAddress({ address, type, children }) {
  return (
    <>
      <Title>Bill {type === "senderAddress" ? "From" : "To"}</Title>
      {children}
      <FormControl>
        <Label>Street Address</Label>
        <Input name={type + ".street"} value={address.address} />
      </FormControl>
      <Column>
        <FormControl>
          <Label>City</Label>
          <Input name={type + ".city"} value={address.city} />
        </FormControl>
        <FormControl className="code">
          <Label>Post Code</Label>
          <Input name={type + ".postCode"} value={address.postCode} />
        </FormControl>
        <FormControl>
          <Label>Country</Label>
          <Input name={type + ".country"} value={address.country} />
        </FormControl>
      </Column>
    </>
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
  postCode: PropTypes.string,
  country: PropTypes.string,
};
UserAddress.propTypes = {
  type: PropTypes.oneOf(["senderAddress", "clientAddress"]).isRequired,
  address: PropTypes.shape(AddressShape),
};

export default UserAddress;
