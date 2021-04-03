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
	max-height: 77vh;

	h1 {
		color: var(--titlte-text-color);
		padding: 0 0 2rem 0;
	}

	form {
		width: 100%;
	}
`;

export const RedirectWrap = styled.div`
	color: var(--element-text-color);
	padding: 2em 0 0 0;
	text-align: center;
	font-size: 0.9rem;

	a {
		text-decoration: underline;
		white-space: pre;
	}
`;

export const ErrorWrap = styled.div`
	color: red;
	height: 2rem;
	text-align: center;
	font-size: 1.2rem;
	width: 100%;
`;
