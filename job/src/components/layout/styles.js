import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";
import HeaderBgSmall from "./bg.header.small.svg";
import HeaderBgMedium from "./bg.header.medium.svg";
import HeaderBgDesktop from "./bg.header.desktop.svg";

/*-----------------Styles for App Header------------------------------*/
export const Header = styled.header`
	height: 136px;
	border-radius: 0 0 0 100px;
	background-image: url(${HeaderBgSmall});
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	z-index: 1000;
	${mediaQueries.medium} {
		height: 160px;
		border-radius: 0px 0px 0 100px;
		background-image: url(${HeaderBgMedium});
	}
	${mediaQueries.large} {
		background-image: url(${HeaderBgDesktop});
	}
`;

/*-----------------Styles for App Main------------------------------*/
export const Main = styled(Content)`
	flex-grow: 10;
	padding-top: calc(72px + 0.5vw);

	${mediaQueries.medium} {
		padding-top: calc(110px + 0.2vw);
	}
	${mediaQueries.large} {
		padding-top: 123px;
	}
`;
