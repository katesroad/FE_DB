import * as React from "react";
import { Dialog } from "@reach/dialog";
import "./style.css";

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

export function ModalContent(props) {
	const [isOpen, setIsOpen] = React.useContext(ModalContext);
	const handleDismiss = () => setIsOpen(false);
	return <Dialog isOpen={isOpen} onDismiss={handleDismiss} {...props} />;
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
