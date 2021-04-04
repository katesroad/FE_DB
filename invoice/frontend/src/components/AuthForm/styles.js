import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 6px;
	padding: 2.3em 2em;
	width: 100%;
	max-width: 400px;
	height: auto;
	background-color: var(--element-background-color);

	h1 {
		color: var(--titlte-text-color);
		padding: 0 0 2rem 0;
	}

	form {
		width: 100%;
	}
	.footer {
		width: 100%;
		text-align: center;
	}
`;

export const RedirectWrap = styled.div`
	width: 100%;
	padding-top: 2em;
	text-align: center;
	font-size: 0.9rem;
	color: var(--element-text-color);

	a {
		text-decoration: underline;
		white-space: pre;
		color: var(--element-text-color);
		&:hover {
			color: var(--color-primary);
		}
	}
`;

export const ErrorWrap = styled.div`
	height: 2rem;
	width: 100%;
	text-align: center;
	font-size: 1.2rem;
	color: red;
`;
