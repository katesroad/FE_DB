import styled from "styled-components";
import { Content } from "components/lib";

/*-----------------Styles for App Header------------------------------*/
export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 72px;
	width: 100vw;
`;

/*-----------------Styles for App Main------------------------------*/
export const Main = styled(Content)`
	flex-grow: 10;
`;
