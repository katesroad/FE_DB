import styled from "styled-components";
import { AppMain } from "components/layout";
import * as mediaQueries from "styles/media-queries";
import { colors } from "styles/colors";

export const Wrapper = styled.div`
	max-width: 730px;
	margin-left: auto;
	margin-right: auto;
	h4 {
		font-size: 20px;
		color: var(--title-color);
		text-transform: capitalize;
	}
	a {
		color: inherit;
	}
	& > div {
		padding-left: 24px;
		padding-right: 24px;
		border-radius: 6px;
		background-color: var(--element-background);
	}
	${mediaQueries.small} {
		> div {
			padding-left: 32px;
			padding-right: 32px;
		}
	}
	${mediaQueries.medium} {
		> div {
			padding-left: 48px;
			padding-right: 48px;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.btn-link {
		min-width: 140px;
		width: 100%;
		color: ${colors.p01};
	}
	${mediaQueries.small} {
		flex-direction: row;
		align-items: center;
		.btn-link {
			max-width: 160px;
		}
	}
`;

/*--------------------------About company section---------------------------------*/
export const AboutCompany = styled.div`
	position: relative;
	${mediaQueries.small} {
		display: flex;
		padding-left: 0 !important;
		height: 140px;
		padding-bottom: 0;
	}
	.content {
		padding-top: 49px;
		padding-bottom: 32px;
		align-items: center;
		h4 {
			margin-bottom: 13px;
		}
		.btn-link {
			margin-top: 27px;
			width: 160px;
		}
		${mediaQueries.small} {
			flex-grow: 1;
			padding: 42px 0 42px 40px;
			text-align: left;
			.job-owner {
				flex-grow: 1;
			}
			.btn-link {
				margin-top: 0;
			}
		}
	}
`;

export const CompanyLogo = styled.img`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	border-radius: 15px;
	${mediaQueries.small} {
		position: relative;
		left: 0;
		height: 100%;
		width: auto;
		transform: translate(0, 0);
	}
`;

/*---------------------Job description section-----------------------------------------**/

export const JobDesc = styled.div`
	padding-top: 40px;
	padding-bottom: 32px;
	margin-top: 32px;
	margin-bottom: 32px;
	${mediaQueries.small} {
		.content {
			margin-bottom: 32px;
		}
	}
	${mediaQueries.medium} {
		padding-top: 48px;
		padding-bottom: 48px;
	}
	.job-role {
		margin: 8px 0 12px 0;
		line-height: 1.625;
	}
	.job-location {
		font-size: 14px;
		font-weight: bold;
		color: var(--button-background);
	}
	.btn-link {
		margin: 32px 0;
	}
	${mediaQueries.small} {
		margin-bottom: 40px;
		.btn-link {
			margin: 0;
		}
	}
	.job-desc {
		p {
			line-height: 26px;
			margin-bottom: 16px;
		}
	}
`;

/*----------------------------How to apply----------------------------------*/

export const HowToApply = styled.div`
	padding-top: 24px;
	padding-bottom: 24px;
	margin-bottom: 30vw;
	color: var(--title-color);
	h4 {
		margin-bottom: 28px;
	}
	a {
		display: block;
		margin-top: 16px;
		font-weight: bold;
		word-break: break-all;
	}
	${mediaQueries.small} {
		padding-top: 32px;
		padding-bottom: 32px;
	}
	${mediaQueries.medium} {
		margin-bottom: 200px;
		padding-top: 40px;
		padding-bottom: 40px;
	}
`;

/*----------------------Fixed footer--------------------*/

export const FixedFooter = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding-top: 16px;
	padding-bottom: 16px;
	padding-left: 0 !important;
	padding-right: 0 !important;
	border-raidus: 0 !important;
	.content {
		width: 89%;
		max-width: 730px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 0important;
		padding-right: 0 !important;
		.jd {
			display: none;
		}
		${mediaQueries.small} {
			padding-top: calc(16px + 0.5vw);
			padding-bottom: calc(16px + 0.5vw);
			h4 {
				padding-bottom: 12px;
			}
			.jd {
				display: block;
			}
		}
	}
`;
