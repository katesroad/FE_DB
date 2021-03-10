import { v4 as uuid } from "uuid";
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
