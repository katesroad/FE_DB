import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "styles/colors";

export const Wrapper = styled(Link)`
	position: relative;
	display: block;
	padding: 32px;
	margin-top: 24px;
	border-radius: 6px;
	color: inherit;
	background: var(--element-background);
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	.title {
		margin-top: 11px;
		margin-bottom: 10px;
	}
	.company {
		margin-bottom: 36px;
	}
	.dot {
		margin-left: 12px;
		margin-right: 12px;
	}
	.location {
		justify-self: flex-end;
		font-size: 14px;
		line-height: 18px;
		color: ${colors.p00};
	}
`;

export const Logo = styled.div`
	position: absolute;
	top: -25px;
	left: 32px;
	border-radius: 15px;
	height: 50px;
	width: 50px;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;
