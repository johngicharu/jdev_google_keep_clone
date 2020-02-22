import React from "react";
import Note from "./Note";
import { NotesList } from "../styles/NotesStyles";
import { NoteType } from "../global";

type NotesProps = {
  setNoteActive: (note: NoteType) => void;
  notes: NoteType[];
};

const Notes = ({ setNoteActive, notes }: NotesProps) => {
  return (
    <NotesList>
      {notes.map(note => (
        <Note setNoteActive={setNoteActive} key={note.id} note={note} />
      ))}
    </NotesList>
  );
};

export default Notes;
