import styled from "styled-components";

export const TitleInput = styled.input<{ display: boolean; active: boolean }>`
	border: none;
	width: 100%;
	display: ${({ display }) => (display ? "block" : "none")};
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	background-color: transparent;
	padding: 0.5em 0.5em 0.5em 0;
	font-weight: 400;
	font-size: 1.1em;
	pointer-events: ${({ active }) => (active ? "all" : "none")};
	/* outline: none; */
/* 
	&:focus,
	&:active {
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	} */
`;
