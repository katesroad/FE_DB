import * as React from "react";
import { Title, Text, Wrapper, Image } from "./styles";
import imgSrc from "./illustration-empty.svg";

export default function () {
  return (
    <Wrapper>
      <Image src={imgSrc} alt="No invoices" />
      <Title>There is nothing here</Title>
      <Text>
        Create a new invoice by clicking the <br />
        <b>New Invoice</b> button and get started
      </Text>
    </Wrapper>
  );
}
