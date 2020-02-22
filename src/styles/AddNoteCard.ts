import styled from "styled-components";
import { Card } from "./GlobalStyles";

export const AddNoteCard = styled(Card)`
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 150px;
	max-height: 250px;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;
