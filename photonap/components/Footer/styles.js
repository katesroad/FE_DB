import styled from "styled-components";
import NavItems from "components/NavItems";
import * as mediaQueries from "styles/media-queries";
import ButtonArrow from "components/ButtonArrow";

export const SocialIcons = styled.p`
	display: flex;
	align-items: center;
	padding-top: 2rem;
	padding-bottom: 3rem;
	span {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.75rem;
		cursor: pointer;
	}
`;

export const PageLinks = styled(NavItems)`
	padding-bottom: 6.25rem;
	width: 100%;
	font-size: 0.75rem;
	a {
		padding-bottom: 1.1875rem;
	}
	${mediaQueries.medium} {
		width: auto;
		padding-bottom: 0;
		padding-left: 6.8125rem;
	}
`;

export const InviteButton = styled(ButtonArrow)`
	flex-grow: 1;
	margin-bottom: 2.125rem;
	width: 13.75rem;
	max-width: 13.75rem;
	font-size: 0.75rem;
`;
