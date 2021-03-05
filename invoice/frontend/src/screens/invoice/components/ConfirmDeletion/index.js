import * as React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalCloseBtn,
  ModalOpenBtn,
  Button,
} from "components/lib";
import { CofirmContent, ModalFooter, DeleteBtn, InvoiceTag } from "./styles";

function ComfirmDeletion({ id, tag }) {
  const handleDelete = () => {
    console.log(`Delete invoice #${id}`);
    return false;
  };
  return (
    <Modal>
      <ModalOpenBtn>
        <DeleteBtn variant="danger">delete</DeleteBtn>
      </ModalOpenBtn>
      <ModalContent title="Comfirm Deletetion" aria-label="modal">
        <CofirmContent>
          Are you sure you want to delete invoice
          <InvoiceTag>#{tag}</InvoiceTag>? This action cannot be undone.
        </CofirmContent>
        <ModalFooter>
          <ModalCloseBtn>
            <Button>Cancle</Button>
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

ComfirmDeletion.propTypes = {
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ComfirmDeletion;
