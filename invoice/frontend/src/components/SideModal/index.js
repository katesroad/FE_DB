import * as React from "react";
import PropTypes from "prop-types";
import { ModalCloseBtn, Modal, ModalOpenBtn } from "components/lib";
import GobackBtn from "components/GobackBtn";
import {
  Title,
  CloseBtn,
  ModalContent as ModalContentBase,
  Content,
} from "./styles";
export {
  ModalCloseBtn,
  Modal,
  ModalOpenBtn,
  ModalContentBase,
} from "components/lib";

export const ModalContent = ({ title, children, ...props }) => (
  <ModalContentBase aria-label={title} {...props}>
    <Title>
      <ModalCloseBtn>
        <CloseBtn>
          <GobackBtn />
        </CloseBtn>
      </ModalCloseBtn>
      <h3>{title}</h3>
    </Title>
    <Content>{children}</Content>
  </ModalContentBase>
);

const SideModal = ({ title, children, openBtn }) => (
  <Modal>
    <ModalOpenBtn>{openBtn}</ModalOpenBtn>
    <ModalContent aria-label={title} title={title}>
      {children}
    </ModalContent>
  </Modal>
);
SideModal.propTypes = {
  title: PropTypes.string.isRequired,
  openBtn: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
// define children using prop-types
// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

export default SideModal;
