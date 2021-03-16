import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "styles/colors";
import * as mediaQueries from "styles/media-queries";

/*--------------------styling for job item--------------------------*/
export const JobWrap = styled(Link)`
	position: relative;
	display: block;
	padding: 32px;
	margin-bottom: 1.5rem;
	border-radius: 6px;
	color: inherit;
	background: var(--element-background);
	${mediaQueries.medium} {
		margin-bottom: 2.5rem;
	}
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
