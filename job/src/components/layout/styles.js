import styled, { css } from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";
import { colors } from "styles/colors";
import HeaderBgSmall from "./bg.header.small.svg";
import HeaderBgMedium from "./bg.header.medium.svg";
import HeaderBgDesktop from "./bg.header.desktop.svg";

const flexCenter = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

/*-----------------Styles for App Header------------------------------*/
export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 136px;
	border-radius: 0 0 0 100px;
	background-image: url(${HeaderBgSmall});
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	z-index: 1000;
	.content {
		padding-top: 32px;
		padding-bottom: 32px;
		${flexCenter};
	}
	.children {
		position: absolute;
		left: 0;
		right: 0;
		top: 100%;
		transform: translate(0, -50%);
	}
	${mediaQueries.medium} {
		height: 160px;
		border-radius: 0px 0px 0 100px;
		background-image: url(${HeaderBgMedium});
		.content {
			padding-top: 44px;
			padding-bottom: 44px;
		}
	}
	${mediaQueries.large} {
		background-image: url(${HeaderBgDesktop});
	}
`;

export const Switch = styled.p`
	${flexCenter}
	.pill {
		position: relative;
		margin: 0 16px;
		width: 48px;
		height: 24px;
		padding: 5px;
		border-radius: 12px;
		background-color: #fff;
	}
	.circle {
		position: absolute;
		top: 5px;
		left: 5px;
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: ${colors.p00};
		transition: all 0.25s ease;
	}
	&.on {
		.circle {
			left: 29px;
		}
	}
`;

/*-----------------Styles for App Main------------------------------*/
export const Main = styled(Content)`
	padding-top: 208px;
	flex-grow: 10;

	${mediaQueries.medium} {
		padding-top: 245px;
	}
	${mediaQueries.large} {
		padding-top: 208px;
	}
`;
