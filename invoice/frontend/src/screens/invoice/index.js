import * as React from "react";
import Operations from "./components/Operations";
import { useParams } from "react-router-dom";
import invoices from "./data";
import { Header, StatusLabel, Wrapper, Footer } from "./styles";
import StatusValue from "components/InvoiceStatus";
import InvoiceInfo from "./components/InvoiceInfo";
import InvoiceBillItems from "./components/InvoiceBillItems";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const handleEdit = () => {};
  const handleMark = () => {};
  const [invoice] = React.useState(invoices[0]);
  return (
    <>
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          <StatusValue status={invoice.status} />
        </p>
        <p className="operations tablet">
          <Operations
            id={invoice.id}
            handleEdit={handleEdit}
            handleMark={handleMark}
          />
        </p>
      </Header>
      <Wrapper>
        <InvoiceInfo {...invoice} />
        <InvoiceBillItems items={invoice.items} total={invoice.total} />
      </Wrapper>
      <Footer>
        <Operations
          id={invoice.id}
          handleEdit={handleEdit}
          handleMark={handleMark}
        />
      </Footer>
    </>
  );
}
