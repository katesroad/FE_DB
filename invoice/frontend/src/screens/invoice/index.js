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
  const [data] = React.useState(invoices[1]);
  const { items = [], total, ...invoice } = data;
  return (
    <>
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          <StatusValue status={invoice.status} />
        </p>
        <p className="operations tablet">
          <Operations id={id} handleEdit={handleEdit} handleMark={handleMark} />
        </p>
      </Header>
      <Wrapper>
        <InvoiceInfo {...invoice} />
        <InvoiceBillItems items={items} total={total} />
      </Wrapper>
      <Footer>
        <Operations id={id} handleEdit={handleEdit} handleMark={handleMark} />
      </Footer>
    </>
  );
}
