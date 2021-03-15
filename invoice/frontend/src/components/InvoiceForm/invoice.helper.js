import { v4 as uuid } from "uuid";
import * as Yup from "yup";

export const invoice = {
  clientAddress: {
    street: "",
    city: "",
    postcode: "",
    country: "",
  },
  senderAddress: {
    street: "",
    city: "",
    postcode: "",
    country: "",
  },
  clientEmail: "",
  clientName: "",
  description: "",
  paymentTerms: "default",
  paymentDue: "",
  items: [],
  status: "",
};

export const getItem = () => ({ id: uuid(), name: "", quantity: 1, price: 0 });

const AddressSchema = Yup.object().shape({
  street: Yup.string()
    .min(2, "Street address is too short.")
    .max(50, "Street address is too long.")
    .required("Street address is required."),
  city: Yup.string()
    .min(2, "City is too short.")
    .max(50, "City is too long.")
    .required("City is required."),
  postcode: Yup.string()
    .min(2, "Postcode is too short.")
    .max(50, "Postcode is too long.")
    .required("Postcode is required."),
  country: Yup.string()
    .min(2, "Country is too short.")
    .max(50, "Country is too long.")
    .required("Country is required."),
});

export const InvoiceSchema = Yup.object().shape({
  senderAddress: AddressSchema,
  clientName: Yup.string()
    .min(2, "Client name is too short.")
    .max(50, "Client name is too long.")
    .required("Client name is required."),
  clientEmail: Yup.string()
    .email("Client email is invalid.")
    .required("Client email is required."),
  clientAddress: AddressSchema,
  description: Yup.string()
    .min(2, "Description/project is too short.")
    .max(20, "Description/project is too long.")
    .required("Description/project is required."),
  paymentDue: Yup.date().required("Payment due is required."),
  paymentTerms: Yup.string()
    .required("Payment terms is required")
    .oneOf(["1", "7", "14", "30"], "Payment terms is required"),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(50, "Name is too long.")
          .required(`Name is required.`),
        price: Yup.number()
          .positive("Price is invalid.")
          .required("Price is required."),
        quantity: Yup.number()
          .positive(`Quantity should be positive.`)
          .integer("Quantity must be integer.")
          .required("Quantity is required."),
      })
    )
    .required("Items is required."),
});

export const PAYMENT_TERMS = [
  { value: 1, label: "Net 1 Day" },
  { value: 7, label: "Net 7 day" },
  { value: 14, label: "Net 14 day" },
  { value: 30, label: "Net 30 day" },
];
