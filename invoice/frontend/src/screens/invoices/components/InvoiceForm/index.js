// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import UserAddress from "components/UserAddress";
import Datepicker from "components/Datepicker";
import { FormControl, Label, Input, FieldError, Button } from "components/lib";
import ItemList, { BillItem } from "../ItemList";
import { invoice, getItem, InvoiceSchema } from "./invoice.helper";

const InvoiceBasic = ({ values }) => (
  <>
    <UserAddress type="senderAddress" address={values.senderAddress} />
    <UserAddress type="clientAddress" address={values.clientAddress}>
      <FormControl>
        <Label>Client Name</Label>
        <Input name="clientName" />
        <FieldError>
          <ErrorMessage name="clientName" />
        </FieldError>
      </FormControl>
      <FormControl>
        <Label>Client Email</Label>
        <Input name="clientEmail" />
        <FieldError>
          <ErrorMessage name="clientEmail" as="small" />
        </FieldError>
      </FormControl>
    </UserAddress>
  </>
);

function InvoiceForm({ children }) {
  return (
    <Formik
      initialValues={invoice}
      validationSchema={InvoiceSchema}
      onSubmit={(values) => console.log(values)}
      render={({ values, setFieldValue, errors, ...rest }) => (
        <Form>
          <InvoiceBasic values={values} />
          <Datepicker
            label="Invoice Date"
            name="paymentDue"
            onChange={setFieldValue}
            value={values.paymentDue}
          />
          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <ItemList onAddItem={() => arrayHelpers.push(getItem())}>
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
          {/* to place discard button */}
          <p>
            {children}
            <Button type="submit">Save and Send</Button>
          </p>
        </Form>
      )}
    />
  );
}

export default InvoiceForm;
