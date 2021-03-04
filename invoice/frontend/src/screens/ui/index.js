// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button, Card } from "components/lib";
import {
  Modal,
  ModalContent,
  ModalCloseBtn,
  ModalOpenBtn,
} from "components/lib/modal";
import BillItem from "components/AddBillItem";
import ItemList from "components/ItemList";

// this screen is for testing ui lib components purpose

export default function UILibScreen() {
  const [mode, setMode] = React.useState("light");
  const handleClick = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  React.useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);
  const [newItem, setNewItem] = React.useState({});
  const onChange = (update) => {
    setNewItem((newItem) => ({ ...newItem, ...update }));
  };
  const [items, setItems] = React.useState([]);
  const onAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <Button onClick={handleClick}>mode</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="primary"> mark as paid</Button>
      <Button>Edit</Button>
      <Card>this is card</Card>
      <BillItem {...newItem} onChange={onChange} />
      <ItemList items={items} onAddItem={onAddItem} />
      <Modal>
        <ModalOpenBtn>
          <Button onClick={() => console.log("open")}>Edit</Button>
        </ModalOpenBtn>
        <ModalContent title="Comfirm Deletetion" aria-label="modal">
          <section
            css={`
              margin-bottom: 16px;
              font-size: 16px;
              line-height: 22px;
            `}
          >
            Yes
          </section>
          <p>
            <ModalCloseBtn>
              <Button onClick={() => console.log("clsoe")}>Cancle</Button>
            </ModalCloseBtn>
            <ModalCloseBtn>
              <Button variant="danger" onClick={() => console.log("close")}>
                Delete
              </Button>
            </ModalCloseBtn>
          </p>
        </ModalContent>
      </Modal>
    </div>
  );
}
