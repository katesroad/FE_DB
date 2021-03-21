import styled from "styled-components";

const Wrapper = styled.div`
	padding: 4.5rem calc(12px + 3.2vw);
	${mediaQueries.medium} {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
