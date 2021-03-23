import * as React from "react";
import { Button } from "components/lib";
import Link from "next/link";
import { Wrapper, Nav, NavList, NavButton } from "./styles";

export default function Header() {
	const [menuIsOpen, setMenuIsOpen] = React.useState(false);
	const handleClick = (e) => setMenuIsOpen(!menuIsOpen);
	return (
		<Wrapper as="header">
			<Link href="/">
				<img
					src="https://fem-photosnap-app-g8glvjkbv-asaulters.vercel.app/assets/shared/desktop/logo-black.svg"
					alt="photonap"
					style={{ cursor: "pointer" }}
				/>
			</Link>
			<Nav>
				<NavButton onClick={handleClick}>{menuIsOpen ? "x" : "="}</NavButton>
				<NavList className={menuIsOpen ? "open" : "close"}>
					<li className="gray-line"></li>
					<li>
						<Button>GET AN INVITATION</Button>
					</li>
				</NavList>
			</Nav>
		</Wrapper>
	);
}
