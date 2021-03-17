import styled from "styled-components";

export const FormControl = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	svg {
		margin-right: 16px;
	}
`;

export const Input = styled.input`
	flex-grow: 1;
	height: 46px;
	border-radius: 6px;
	line-height: 46px;
	background-color: transparent;
	transition: all 0.25s ease;
	color: var(--title-text-color);
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	width: 100%;
`;
