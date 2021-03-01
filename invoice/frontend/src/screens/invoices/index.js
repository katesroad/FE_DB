import styled from "styled-components/macro";
import * as React from "react";
import invoiceList from "./data";
import Invoice from "./components/Invoice";

// Invoice list page
export default function InvoicesScreen() {
  return (
    <>
      <ul>
        {invoiceList.reverse().map((invoice) => (
          <li
            key={invoice.id}
            css={`
              margin-bottom: 16px;
            `}
          >
            <Invoice {...invoice} />
          </li>
        ))}
      </ul>
    </>
  );
}
