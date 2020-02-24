import React, { useState } from "react";
import { ActiveNoteCard } from "../styles/NotesStyles";
import Title from "./Title";
import NoteContent from "./NoteContent";
import NoteActions from "./NoteActions";
import { NoteType } from "../global";

type ActiveNoteProps = {
	selectedNote: NoteType;
	saveNoteChanges: (note: NoteType) => void;
	setNoteActive: (note: NoteType | null) => void;
	deleteNote: (id: string) => void;
};

const ActiveNote = ({
	selectedNote,
	setNoteActive,
	saveNoteChanges,
	deleteNote
}: ActiveNoteProps) => {
	const [note, setNote] = useState({ ...selectedNote });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		if (e.target.name === "title") {
			setNote({ ...note, title: e.target.value });
		} else if (e.target.name === "content") {
			setNote({ ...note, content: e.target.value });
		}
	};

	const handleDoneEdit = () => {
		setNoteActive(null);
		saveNoteChanges(note);
	};

	const handleDelete = () => {
		setNoteActive(null);
		deleteNote(note.id);
	};

	return (
		<ActiveNoteCard className="ignore">
			<Title
				onChangeHandler={handleChange}
				noteTitle={note.title}
				active={true}
			/>
			<NoteContent
				noteContent={note.content}
				active={true}
				onChangeHandler={handleChange}
			/>
			<NoteActions
				handleDelete={handleDelete}
				handleDoneEdit={handleDoneEdit}
				active={true}
			/>
		</ActiveNoteCard>
	);
};

export default ActiveNote;
