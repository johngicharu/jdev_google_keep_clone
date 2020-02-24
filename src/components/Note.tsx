import React from "react";
import { NoteCard } from "../styles/NotesStyles";
import NoteContent from "./NoteContent";
import Title from "./Title";
import NoteActions from "./NoteActions";
import { NoteType } from "../global";

type NoteProps = {
	note: NoteType;
	setNoteActive: (note: NoteType) => void;
};

const Note = ({ note, setNoteActive }: NoteProps) => {
	const makeActive = (note: NoteType) => {
		 setNoteActive(note);
	};

	return (
		<NoteCard onClick={() => makeActive(note)} className="ignore">
			<Title noteTitle={note.title} active={false} />
			<NoteContent active={false} displayedNote noteContent={note.content} />
			<NoteActions
				handleStartEdit={() => makeActive(note)}
				active={false}
			/>
		</NoteCard>
	);
};

export default Note;
