import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UserAddress from "components/UserAddress";

const renderUI = ({ type, ...props }) => {
  render(
    <Formik
      {...props}
      render={({ values }) => (
        <Form>
          <UserAddress type={type} address={values[type]} />
          <button type="submit">submit</button>
        </Form>
      )}
    ></Formik>
  );
};

test(`render <UserAddress /> with sender address`, () => {
  const street = "sender address";
  const city = "sender city";
  const postcode = "sender postcode";
  const country = "sender country";
  const senderAddress = { street, city, postcode, country };
  const type = "senderAddress";
  const initialValues = { senderAddress };
  renderUI({ initialValues, type });
  expect(
    screen.getByRole("heading", { name: /bill from/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: /street/i })).toHaveValue(street);
  expect(screen.getByRole("textbox", { name: /city/i })).toHaveValue(city);
  expect(screen.getByRole("textbox", { name: /post code/i })).toHaveValue(
    postcode
  );
  expect(screen.getByRole("textbox", { name: /country/i })).toHaveValue(
    country
  );
});

test(`render <UserAddress /> with validation schema`, async () => {
  const type = "clientAddress";
  const streetRequired = "Street address is required.";
  const cityRequired = "City is required.";
  const postcodeRequired = "Postcode is required.";
  const countryRequired = "Country is required.";

  const AddressSchema = Yup.object().shape({
    street: Yup.string()
      .min(2, "Street address is too short.")
      .max(50, "Street address is too long.")
      .required(streetRequired),
    city: Yup.string()
      .min(2, "City is too short.")
      .max(50, "City is too long.")
      .required(cityRequired),
    postcode: Yup.string()
      .min(2, "Postcode is too short.")
      .max(50, "Postcode is too long.")
      .required(postcodeRequired),
    country: Yup.string()
      .min(2, "Country is too short.")
      .max(50, "Country is too long.")
      .required(countryRequired),
  });
  const initialValues = {
    [type]: { street: "", city: "", postcode: "", country: "" },
  };
  renderUI({
    initialValues,
    type,
    validationSchema: Yup.object().shape({
      [type]: AddressSchema,
    }),
  });
  expect(screen.getByRole("heading", { name: /bill to/i })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: /street/i })).toHaveValue("");
  expect(screen.getByRole("textbox", { name: /city/i })).toHaveValue("");
  expect(screen.getByRole("textbox", { name: /post code/i })).toHaveValue("");
  expect(screen.getByRole("textbox", { name: /country/i })).toHaveValue("");

  await act(async () => {
    await userEvent.click(screen.getByRole("button", { name: "submit" }));
  });

  expect(screen.getByText(streetRequired)).toBeInTheDocument();
  expect(screen.getByText(cityRequired)).toBeInTheDocument();
  expect(screen.getByText(postcodeRequired)).toBeInTheDocument();
  expect(screen.getByText(countryRequired)).toBeInTheDocument();
});
