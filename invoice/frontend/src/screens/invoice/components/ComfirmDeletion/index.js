// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import {
  Modal,
  ModalContent,
  ModalCloseBtn,
  ModalOpenBtn,
} from "components/lib/modal";
import { CofirmContent, ModalFooter } from "./styles";

export default function ComfirmDeletion({ id }) {
  const handleDelete = () => {
    console.log(`Delete invoice #${id}`);
    return false;
  };
  return (
    <Modal>
      <ModalOpenBtn>
        <Button
          variant="danger"
          css={`
            margin: 0 8px;
          `}
        >
          delete
        </Button>
      </ModalOpenBtn>
      <ModalContent title="Comfirm Deletetion" arial-label="modal">
        <CofirmContent>
          Are you sure you want to delete invoice <span>#{id}? </span>
          This action cannot be undone.
        </CofirmContent>
        <ModalFooter>
          <ModalCloseBtn>
            <Button onClick={() => console.log("clsoe")}>Cancle</Button>
          </ModalCloseBtn>
          <ModalCloseBtn>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </ModalCloseBtn>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
