import * as React from "react";
import PropTypes from "prop-types";
import { Formik, FieldArray } from "formik";
import { FieldError } from "components/lib";
import UserAddress, { AddressShape } from "components/UserAddress";
import Datepicker from "components/Datepicker";
import Select, { Option } from "components/Select";
import Field from "components/Field";
import ItemList, { BillItem } from "components/ItemList";
import { getItem, InvoiceSchema, PAYMENT_TERMS } from "./invoice.helper";
import { FormError, FormFooter, Column, Form } from "./styles";
function InvoiceForm({ children, onSubmit, ...invoice }) {
  const [itemsError, setItemsError] = React.useState(null);
  return (
    <Formik
      initialValues={invoice}
      validationSchema={InvoiceSchema}
      onSubmit={(values) => {
        if (values.items.length > 0) {
          const { paymentDue, ...data } = values;
          onSubmit({ paymentDue: new Date(paymentDue).getTime(), ...data });
        } else {
          setItemsError(`An item must be added.`);
        }
      }}
    >
      {({ values, setFieldValue, errors }) => (
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
          {/* project/description */}
          <Field
            name="description"
            label="Project/Description"
            value={values.descritpion}
          />
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
          {itemsError ? (
            <FormError>
              <FieldError>- An Item must be added.</FieldError>
            </FormError>
          ) : null}
          {/* to place custmized button group based on need */}
          <FormFooter>{children}</FormFooter>
        </Form>
      )}
    </Formik>
  );
}
InvoiceForm.propTypes = {
  senderAddress: PropTypes.shape(AddressShape),
  clientAddress: PropTypes.shape(AddressShape),
  clientName: PropTypes.string,
  clientEmail: PropTypes.string,
  descritpion: PropTypes.string,
  paymentDue: PropTypes.string,
  paymentTerms: PropTypes.oneOf(["", "1", "7", "14", "30"]),
};

export default InvoiceForm;
