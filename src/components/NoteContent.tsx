import React from "react";
import { NoteContentStyles } from "../styles/NoteContentStyles";

type NoteContentProps = {
	noteContent: string;
	active: boolean;
	displayedNote?: boolean;
	onChangeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const NoteContent = ({
	noteContent,
	onChangeHandler,
	displayedNote,
	active
}: NoteContentProps) => {
	return (
		<NoteContentStyles
			name="content"
			active={active}
			placeholder={
				noteContent.trim() !== ""
					? noteContent
					: displayedNote
					? ""
					: "Take a note"
			}
			
			defaultValue={noteContent.trim() !== "" ? noteContent : ""}
			
			onChange={onChangeHandler}
			className="ignore"
		/>
	);
};

export default NoteContent;
