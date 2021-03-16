import styled from "styled-components";

// style guide: button
export const Button = styled.button`
	border-radius: 5px;
	font-weight: bold;
	font-size: 16px;
	text-align: center;
	text-transform: capitalize;
	color: var(--button-color);
	background-color: var(--button-background);
	&:hover {
		background-color: var(--button-background-hover);
		background-color: var(--button-color-hover);
	}
`;
