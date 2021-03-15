import { DialogTitle, Dialog } from "./styles";
import * as React from "react";

const callAll = (...fns) => (...args) =>
  fns.forEach((fn) => {
    try {
      fn && fn(...args);
    } catch (e) {
      console.log(e);
    }
  });

const ModalContext = React.createContext();
ModalContext.displayName = "ModalContext";

export function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const value = [isOpen, setIsOpen];
  return <ModalContext.Provider value={value} {...props} />;
}

export function ModalContentBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);
  const handleDismiss = () => setIsOpen(false);
  return <Dialog isOpen={isOpen} onDismiss={handleDismiss} {...props} />;
}

export function ModalContent({ title, children, ...props }) {
  return (
    <ModalContentBase {...props}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </ModalContentBase>
  );
}

export function ModalCloseBtn({ children: child, ...props }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
    ...props,
  });
}

export function ModalOpenBtn({ children: child, ...props }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
    ...props,
  });
}

export function useModal() {
  return React.useContext(ModalContext);
}
