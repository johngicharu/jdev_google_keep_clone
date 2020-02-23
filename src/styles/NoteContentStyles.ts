import styled from "styled-components";

export const NoteContentStyles = styled.textarea<{ active: boolean }>`
	width: 100%;
	border: none;
	min-width: 100%;
	background-color: transparent;
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	font-weight: 300;
	font-size: 1em;
	resize: none;
	padding: 0.5em 0.5em 0.5em 0.5em;
	pointer-events: ${({ active }) => (active ? "all" : "none")};
	min-height: 30px;
	height: auto;
	color: ${({theme}) => theme.colors.cardTextColor};
`;
