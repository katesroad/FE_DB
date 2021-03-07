// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import { Input, Label, FormControl } from "components/lib";
import { Column, Title } from "./styles";

function UserAddress({ userAddress, type, onChange, children }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const field = name.replace(type, "").toLowerCase();
    onChange({ [field]: value, type });
  };
  return (
    <>
      <Title>Bill {type == "sender" ? "From" : "To"}</Title>
      {children}
      <FormControl>
        <Label>Street Address</Label>
        <Input
          name={type + "Street"}
          onChange={handleChange}
          value={userAddress.address}
        />
      </FormControl>
      <Column>
        <FormControl>
          <Label>City</Label>
          <Input
            name={type + "City"}
            onChange={handleChange}
            value={userAddress.city}
          />
        </FormControl>
        <FormControl className="code">
          <Label>Post Code</Label>
          <Input
            name={type + "PostCode"}
            onChange={handleChange}
            value={userAddress.postCode}
          />
        </FormControl>
        <FormControl>
          <Label>Country</Label>
          <Input
            name={type + "Country"}
            onChange={handleChange}
            value={userAddress.country}
          />
        </FormControl>
      </Column>
    </>
  );
}

export const userAddressShape = {
  address: PropTypes.string,
  city: PropTypes.string,
  postCode: PropTypes.string,
  country: PropTypes.string,
};
UserAddress.propTypes = {
  type: PropTypes.oneOf(["sender", "client"]).isRequired,
  onChange: PropTypes.func.isRequired,
  userAddress: PropTypes.shape(userAddressShape).isRequired,
};

export default UserAddress;
