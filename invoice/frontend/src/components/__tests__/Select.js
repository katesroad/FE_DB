import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select, { Option } from "components/Select";

const name = "paymentTerms";
const label = "payment terms";

const terms = [
  { value: "1", label: "Net 1 Day" },
  { value: "7", label: "Net 7 Days" },
  { value: "14", label: "Net 14 Days" },
  { value: "30", label: "Net 30 Days" },
];

const renderUI = ({ name, label, ...props }) => {
  render(
    <Formik
      {...props}
      onSubmit={(props) => {
        alert(JSON.stringify({ props }));
      }}
      render={({ values }) => (
        <Form>
          <Select name={name} value={values[name]} label={label}>
            {terms.map((term) => (
              <Option key={term.label} value={term.value}>
                <span>{term.label}</span>
              </Option>
            ))}
          </Select>
          <button type="submit">submit</button>
        </Form>
      )}
    />
  );
};

test("Render <Select /> with not required field", async () => {
  renderUI({ initialValues: { [name]: "" }, name, label });
  expect(screen.getByRole("textbox")).toHaveValue("");

  /**
   * Why use fireEvent here
   * Reach UI binds trigger event on mouseDown:https://github.com/reach/reach-ui/issues/617
   * Considerations for fireEvent: https://testing-library.com/docs/guide-events/
   *  */

  fireEvent.mouseDown(screen.getByLabelText("select button"));

  const { value, label: content } = terms[2];
  await act(async () => {
    await userEvent.click(screen.getByText(content));
  });
  expect(screen.getByLabelText("select button")).toHaveTextContent(value);
});

test("Render <Select /> with required field", async () => {
  const errorMsg = "Payment terms is required";
  const FormSchema = Yup.object().shape({
    [name]: Yup.string().required(errorMsg),
  });
  renderUI({
    initialValues: { [name]: "" },
    validationSchema: FormSchema,
    name,
    label,
  });
  expect(screen.getByRole("textbox")).toHaveValue("");

  await act(async () => {
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  });
  expect(screen.getByText(errorMsg)).toBeInTheDocument();
});
