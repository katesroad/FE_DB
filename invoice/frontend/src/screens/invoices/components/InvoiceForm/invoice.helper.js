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
  paymentTerms: "",
  paymentDue: new Date(),
  items: [],
};

export const getItem = () => ({ id: uuid(), name: "", quantity: "", price: 0 });

const AddressSchema = Yup.object().shape({
  street: Yup.string()
    .min(2, "Street address is too short")
    .min(50, "Street address is too long")
    .required("Street address is required"),
  city: Yup.string()
    .min(2, "City is too short")
    .min(50, "City is too long")
    .required("City is required"),
  postcode: Yup.string()
    .min(2, "Postcode is too short")
    .min(50, "Postcode is too long")
    .required("Postcode is required"),
  country: Yup.string()
    .min(2, "Country is too short")
    .min(50, "Country is too long")
    .required("Country is required"),
});

export const InvoiceSchema = Yup.object().shape({
  senderAddress: AddressSchema,
  clientName: Yup.string()
    .min(2, "Client name is too short")
    .max(50, "Client name is too long")
    .required("Client name is required."),
  clientEmail: Yup.string()
    .email("Client email is invalid.")
    .required("Client email is required."),
  clientAddress: AddressSchema,
  description: Yup.string()
    .min(2, "The description/project is too short")
    .required("The description/project is required."),
  paymentDue: Yup.date().required("Payment due date is required."),
  paymentTerms: Yup.number().required("Payment terms is required."),
});
