// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useGetInvoice } from "hooks/invoice-hooks";
import { Link, useParams } from "react-router-dom";
import InvocieStatus from "components/InvoiceStatus";
import { Card, Spinner, Error } from "components/lib";
import { PageHeader as Header } from "components/layout";
import GobackBtn from "components/GobackBtn";
import InvoiceInfo from "./components/InvoiceInfo";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const { status, data: invoice, error } = useGetInvoice(id);
  return (
    <>
      <Header>
        <Link
          to="/"
          css={`
            text-decoration: none;
          `}
        >
          <GobackBtn />
        </Link>
      </Header>
      <Card>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <span>Status</span>
          {status === "success" ? (
            <InvocieStatus status={invoice?.status} />
          ) : (
            <Spinner />
          )}
        </div>
      </Card>
      {["loading", "idle"].includes(status) ? (
        <Spinner />
      ) : status === "error" ? (
        <Error>{JSON.stringify(error.message)}</Error>
      ) : (
        <InvoiceInfo {...invoice} />
      )}
    </>
  );
}
