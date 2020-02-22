import React from "react";
import { NoteActionsStyles, CustomNoteButton } from "../styles/NotesStyles";

type AddNoteActionsProps = {
	active: boolean;
	saveHandler: () => void;
};

const AddNoteActions = ({ active, saveHandler }: AddNoteActionsProps) => {
	const handleSave = (e: React.MouseEvent) => {
		e.preventDefault();
		saveHandler();
	};

	return active ? (
		<NoteActionsStyles>
			<CustomNoteButton
				className="ignore"
				onClick={handleSave}
				position={"right"}
				filled
			>
				Add Note
			</CustomNoteButton>
		</NoteActionsStyles>
	) : null;
};

export default AddNoteActions;
