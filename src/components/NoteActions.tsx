import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import { NoteActionsStyles, CustomNoteButton } from "../styles/NotesStyles";

type NoteActionsProps = {
	id: string;
	active: boolean;
	handleDelete?: (e: React.MouseEvent) => void;
	handleDoneEdit?: (e: React.MouseEvent) => void;
	handleStartEdit?: (e: React.MouseEvent) => void;
};

const NoteActions = ({
	id,
	active,
	handleDelete,
	handleDoneEdit,
	handleStartEdit
}: NoteActionsProps) => {
	return (
		<NoteActionsStyles className="ignore">
			{active ? (
				<>
					<DeleteIcon eventHandler={handleDelete!} />
					<CustomNoteButton onClick={handleDoneEdit!} position={"right"} filled>
						Done
					</CustomNoteButton>
				</>
			) : (
				<EditIcon eventHandler={handleStartEdit!} />
			)}
		</NoteActionsStyles>
	);
};

export default NoteActions;
