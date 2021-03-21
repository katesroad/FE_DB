import styled from "styled-components/macro";

export default function ButtonArrow({ children }) {
	return (
		<button
			css={`
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-transform: uppercase;
				background-color: transparent;
				color: var(--white);
				letter-spacing: 2px;
			`}
		>
			{children}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="42"
				height="14"
				viewBox="0 0 42 14"
				fill="none"
			>
				<path d="M0 7H41.864" stroke="white" />
				<path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
			</svg>
		</button>
	);
}
