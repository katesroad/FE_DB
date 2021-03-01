import Invoice from "../Invoice";
import { screen, render } from "test/render-utils";
import { INVOICE_LIST } from "test/data";

test("invoice status button", () => {
  const invoice = INVOICE_LIST[0];
  render(<Invoice {...invoice} />);

  const { clientName, total, status, id, paymentDue } = invoice;

  expect(screen.getByText(id)).toBeInTheDocument();
  expect(screen.getByText(clientName)).toBeInTheDocument();
  expect(screen.getByText(total)).toBeInTheDocument();
  expect(screen.getByText(status)).toBeInTheDocument();
  expect(screen.getByText(`Due ${paymentDue}`)).toBeInTheDocument();
});
