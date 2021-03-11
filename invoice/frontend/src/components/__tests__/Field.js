import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "components/Field";

const renderUI = ({ ele, ...props }) => {
  render(
    <Formik {...props}>
      <Form>
        {ele}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

test("render <TextField /> without form validation", async () => {
  const initialValues = { street: "Plymouth" };
  const name = "street";
  const label = "street";
  const ele = <TextField label={label} name={name} />;
  renderUI({ ele, initialValues });

  expect(screen.getByText(label)).toHaveTextContent(label);
  const inputEle = screen.getByRole(/textbox/);

  await act(async () => {
    await userEvent.clear(inputEle);
  });
  expect(inputEle).toHaveValue("");

  await act(async () => {
    // https://github.com/testing-library/user-event/issues/539
    await userEvent.type(inputEle, "Link", { delay: 1 });
  });
  expect(inputEle).toHaveValue("Link");
});

test("render <Textfield /> with form validation ", async () => {
  const FormSchema = Yup.object().shape({
    street: Yup.string().required("Street is required."),
  });
  const name = "street";
  const label = "street";
  const ele = <TextField label={label} name={name} />;
  renderUI({
    ele,
    initialValues: { street: "" },
    validationSchema: FormSchema,
  });

  await act(async () => {
    await userEvent.click(screen.getByRole("button"));
  });
  expect(screen.getByText("Street is required.")).toBeInTheDocument();
});
