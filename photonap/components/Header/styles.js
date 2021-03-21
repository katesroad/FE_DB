import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Content, Button } from "components/lib";
import NavItems from "components/NavItems";

/*-------------styling for nav list-----------------------------*/

export const Nav = styled.nav`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	${mediaQueries.medium} {
		position: static;
	}
`;

export const NavButton = styled(Button)`
	position: absolute;
	top: 0;
	height: 4.5rem;
	right: calc(12px + 3.2vw);
	padding-left: 2rem;
	color: var(--black);
	background-color: var(--white);
	${mediaQueries.medium} {
		display: none;
	}
`;

export const NavList = styled(NavItems)`
	&.open {
		display: flex;
	}
	&.close {
		display: none;
	}
	position: absolute;
	top: 4.5rem;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2rem calc(12px + 3.2vw); // the margin to body for content
	text-transform: uppercase;
	font-size: 0.9375rem;
	font-weight: var(--weight-bold);
	text-align: center;
	background-color: var(--white);

	a {
		padding-bottom: 1.25rem;
	}

	button,
	a {
		letter-spacing: 2.5px;
	}

	.gray-line {
		height: 1px;
		background-color: var(--black);
		opacity: 0.25;
	}

	${mediaQueries.medium} {
		position: static;
		top: 0;
		width: auto;
		display: flex !important;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-top: 0;
		padding-bottom: 0;
		font-size: 0.875rem;

		.gray-line {
			display: none;
		}

		a {
			height: 4.5rem;
			padding: 0 2.3125rem 0 0;
			line-height: 4.5rem;
		}

		button {
			min-width: 11.375rem;
			height: 2.5rem;
		}
	}
`;
