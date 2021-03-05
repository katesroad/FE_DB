import * as React from "react";
import { Spinner } from "components/lib";
import Operations from "./components/Operations";
import { useParams } from "react-router-dom";
import StatusValue from "components/InvoiceStatus";
import InvoiceInfo from "./components/InvoiceInfo";
import InvoiceBillItems from "./components/InvoiceBillItems";
import { useInvoice } from "hooks/invoice-hooks";
import { Header, StatusLabel, Wrapper, Footer } from "./styles";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const { data: invoice, status, error } = useInvoice(id);
  const handleEdit = () => {};
  const handleMark = () => {};
  return (
    <>
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          {/* add loading spinner when loading invoice data */}
          {status === "loading" ? (
            <Spinner />
          ) : status === "success" ? (
            <StatusValue status={invoice?.status} />
          ) : status === "error" ? (
            <p>{JSON.stringify(error)}</p>
          ) : null}
        </p>
        <p className="operations tablet">
          {/* we can only know if the invoice is a valid one after data has been loaded */}
          {status === "success" && invoice?.status ? (
            <Operations
              id={id}
              handleEdit={handleEdit}
              handleMark={handleMark}
            />
          ) : null}
        </p>
      </Header>
      <Wrapper>
        {/* show loading spinner for invoice information section */}
        {status === "loading" ? <Spinner /> : null}
        {/* show information  after loading invocie successfully */}
        {status === "success" && invoice ? (
          <>
            <InvoiceInfo {...invoice} />
            <InvoiceBillItems items={invoice?.items} total={invoice?.total} />
          </>
        ) : null}
        {status === "error" ? <p>{JSON.stringify(error)}</p> : null}
      </Wrapper>
      {/* render operation buttons for mobile version after loading invoice successfully*/}
      {status === "success" && invoice ? (
        <>
          <Footer>
            <Operations
              id={id}
              handleEdit={handleEdit}
              handleMark={handleMark}
            />
          </Footer>
        </>
      ) : null}
    </>
  );
}
