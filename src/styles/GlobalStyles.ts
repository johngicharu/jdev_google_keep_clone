import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
* {
  box-sizing: border-box;
  margin: 0;
} 

html, body {
  font-weight: 300;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.fonts.fontSize};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background-color: ${({ theme }) => theme.colors.backgroundColor};
	color: ${({theme}) => theme.colors.textColor};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
	text-align: center;
	margin: 1em auto;
	font-weight: 300;
	opacity: 0.8;
	font-size: 0.9em;
	color: ${({theme}) => theme.colors.cardTextColor};
}
`;

export const Button = styled.button<{ filled?: boolean }>`
	padding: 0.5em 0.8em;
	border-radius: 4px;
	color: ${({ filled, theme }) => (filled ? "#fffffe" : theme.colors.dark)};
	background-color: ${({ theme, filled }) =>
		filled ? theme.colors.primary : "none"};
	border: ${({ filled, theme }) =>
		filled ? "none" : `1px solid ${theme.colors.primary}`};
	margin: 0.2em 0.3em;
	font-family: ${({ theme }) => theme.fonts.fontFamily};
	cursor: pointer;
`;

export const Container = styled.div`
	max-width: 1300px;
	width: 90%;
	margin: 0 auto;
	position: relative;
`;

export const Card = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 0.5em 1em;
	color: ${({theme}) => theme.colors.cardTextColor};
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.cardBackground};

	&:hover {
		box-shadow: ${({ theme }) => theme.boxShadow};
	}
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0%;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8);
`;
