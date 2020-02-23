import styled from "styled-components";

export const TitleInput = styled.input<{ display: boolean; active: boolean }>`
	border: none;
	width: 100%;
	display: ${({ display }) => display ? "block" : "none"};
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	background-color: transparent;
	padding: 0.5em 0.5em 0.5em 0;
	font-weight: 400;
	color: ${({theme}) => theme.colors.cardTextColor};
	font-size: 1.1em;
	pointer-events: ${({ active }) => (active ? "all" : "none")};
`;
