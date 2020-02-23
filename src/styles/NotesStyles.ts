import styled from "styled-components";
import { Card, Button } from "./GlobalStyles";

export const NotesList = styled.div`
	display: grid;
	min-width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 0.5em;
	padding: 0.5em;
	margin: 1.2em auto;
`;

export const NoteCard = styled(Card)`
	cursor: pointer;
	position: relative;
	max-height: 150px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

export const ActiveNoteCard = styled(NoteCard)`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 1000;
	transform: translate(-50%, -80%);
	max-width: 600px;
	height: 30vh;
	max-height: 50vh;
	width: 90%;

	@media screen and (max-width: 750px) {
		max-width: 400px;
	}

	@media screen and (max-width: 450px) {
		max-width: 320px;
	}
`;

export const NoteActionsStyles = styled.div`
	width: 100%;
	position: relative;
	padding: 0;
	padding-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2.5em;
`;

export const CustomNoteButton = styled(Button)<{ position: string }>`
	position: absolute;
	left: ${({ position }) => position === "left" && "5%"};
	right: ${({ position }) => position === "right" && "5%"};
	bottom: 0;
`;

export const Icon = styled.a<{ position?: string; darkThemeActive?: boolean; }>`
	position: ${({position}) => position ? "absolute" : "static"};
	left: ${({ position }) => (position === "left" ? "5%" : position === "center" ? "50%" : "")};
	right: ${({ position }) => (position === "right" ? "5%" : position === "center" ? "50%" : "")};
	${({position}) => position === "center" && `transform: translate(-50%, -50%);`}
	bottom: 0;
	text-decoration: none;
	color: inherit;

	&.offIcon {
		display: ${({darkThemeActive}) => darkThemeActive ? "none" : "block"};
	}

	&.onIcon {
		display: ${({darkThemeActive}) => darkThemeActive ? "block" : "none"};
	}

	svg {
		fill: ${({ theme }) => theme.colors.cardTextColor};
	}

	&:hover {
		svg {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`;
