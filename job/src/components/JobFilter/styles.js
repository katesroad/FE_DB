import styled, { css } from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";

const flexCenter = css`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
`;

const Wrapper = styled.div`
	${flexCenter}
	justify-content: space-between;
	border-radius: 6px;
	background-color: var(--element-background);
	button {
		${flexCenter}
	}
`;

export const ButtonGroup = styled.div`
	${flexCenter}
	justify-content: space-between;
`;

export const Fulltime = styled.div`
	${flexCenter}
	margin-right: 28px;
	color: var(--title-color);
	cursor: pointer;
	.only-text {
		display: none;
	}
	// checkbox icon
	.checkbox {
		${flexCenter}
		justify-content:center;
		width: 24px;
		height: 24px;
		margin-right: 16px;
		border-radius: 3px;
		background-color: #313743;
		cursor: pointer;
		svg {
			display: none;
		}
		&.checked {
			background-color: #5964e0 !important;
			svg {
				display: block;
			}
		}
	}
	${mediaQueries.large} {
		.only-text {
			display: inline;
		}
	}
`;

/*-------------------styling for mobile device----------------------------*/
export const MobileView = styled(Wrapper)`
	padding: 16px;
	.job-title {
		max-width: 160px;
	}
	.button-filter {
		padding-left: 16px;
		padding-right: 16px;
		background-color: transparent;
	}
	button {
		&.button-search {
			min-width: 48px;
			justify-content: center;
			span {
				display: none;
			}
		}
	}
	${mediaQueries.iphone} {
		padding-left: 24px;

		button {
			&.button-filter {
				padding-left: 24px;
				padding-right: 24px;
			}
		}
	}
	${mediaQueries.small} {
		.job-title {
			max-width: none;
		}
		button.button-search {
			width: 80px;
			svg {
				display: none;
			}
			span {
				display: inline;
			}
		}
	}
	${mediaQueries.medium} {
		display: none;
	}
`;

/*-------------------The popup modal--------------------------*/
export const Popup = styled(Content)`
	padding: 5.5vw;
	border-radius: 6px;
	background-color: var(--element-background);
	button {
		margin-top: 5.5vw;
		width: 100%;
	}
	.line {
		height: 1px;
		margin: 5.5vw auto;
		background-color: var(--element-color);
	}
	.job-location {
		margin-bottom: 5.5vw;
	}
	${mediaQueries.medium} {
		display: none !important;
	}
`;

/**--------------------------styling for tablet version----------------------- */
export const MediumView = styled(Wrapper)`
	display: none;
	padding: 16px 16px 16px 24px;
	input {
		width: calc(100% - 36px);
	}
	button {
		&.button-search {
			display: block;
			width: 80px;
		}
	}
	${mediaQueries.medium} {
		display: flex;
	}
	${mediaQueries} {
		padding-left: 32px;
	}
`;
