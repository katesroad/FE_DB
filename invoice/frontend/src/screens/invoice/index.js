// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useGetInvoice } from "hooks/invoice-hooks";
import { Link, useParams } from "react-router-dom";
import InvocieStatus from "components/InvoiceStatus";
import { Card, Spinner } from "components/lib";
import { PageHeader as Header } from "components/layout";
import GobackBtn from "components/GobackBtn";
import ItemList from "./components/ItemList";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const { status, data: invoice } = useGetInvoice(id);
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
      {status === "success" ? (
        <ItemList
          items={invoice?.items}
          total={invoice?.total}
          invoiceStatus={invoice?.status}
        />
      ) : null}
    </>
  );
}
