// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import { Formik, Form, FieldArray } from "formik";
import { Button, FieldError } from "components/lib";
import UserAddress from "components/UserAddress";
import Datepicker from "components/Datepicker";
import Select, { Option } from "components/Select";
import Field from "components/Field";
import ItemList, { BillItem } from "components/ItemList";
import {
  invoice,
  getItem,
  InvoiceSchema,
  PAYMENT_TERMS,
} from "./invoice.helper";
import {
  FormError,
  ButtonGroup,
  SaveButton,
  FormFooter,
  Column,
} from "./styles";

const AddressTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};

function InvoiceForm({ children, onSubmit, ...invoice }) {
  const [itemsError, setItemsError] = React.useState(null);
  return (
    <Formik
      initialValues={invoice}
      validationSchema={InvoiceSchema}
      onSubmit={(values) => {
        if (values.items.length === 0) {
          setItemsError(`An item must be added.`);
        } else {
          const { paymentDue, ...data } = values;
          onsubmit({ paymentDue: new Date(paymentDue).getTime(), ...data });
        }
      }}
      render={({ values, setFieldValue, errors }) => (
        <Form>
          {/* sender address */}
          <UserAddress type="senderAddress" address={values.senderAddress} />
          {/* client address, client name, and client email */}
          <UserAddress type="clientAddress" address={values.clientAddress}>
            <Field label="client name" name="clientName" />
            <Field label="client email" name="clientEmail" />
          </UserAddress>
          <Column>
            {/* invoice date */}
            <Datepicker
              label="Invoice Date"
              name="paymentDue"
              onChange={setFieldValue}
              value={values.paymentDue}
            />
            {/* payment terms */}
            <Select
              name="paymentTerms"
              value={values.paymentTerms}
              label="payment terms"
            >
              {PAYMENT_TERMS.map(({ value, label }) => (
                <Option value={value} key={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Column>
          {/* item list */}
          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <ItemList
                onAddItem={() => {
                  arrayHelpers.push(getItem());
                  setItemsError("");
                }}
              >
                {values.items?.map((item, index) => (
                  <li key={index}>
                    <BillItem
                      {...item}
                      index={index}
                      onDelete={() => arrayHelpers.remove(index)}
                    />
                  </li>
                ))}
              </ItemList>
            )}
          />
          <FormError>
            {itemsError ? (
              <FieldError>- An Item must be added</FieldError>
            ) : null}
          </FormError>
          {/* to place discard button */}
          <FormFooter>
            {children}
            <ButtonGroup>
              <SaveButton>save</SaveButton>
              <Button type="submit" variant="primary">
                Send
              </Button>
            </ButtonGroup>
          </FormFooter>
        </Form>
      )}
    />
  );
}
InvoiceForm.propTypes = {
  senderAddress: PropTypes.shape(AddressTypes),
  clientAddress: PropTypes.shape(AddressTypes),
  clientName: PropTypes.string,
  clientEmail: PropTypes.string,
  descritpion: PropTypes.string,
  paymentDue: PropTypes.string,
  paymentTerms: PropTypes.oneOf(["1", "7", "14", "30"]),
};

export default InvoiceForm;
