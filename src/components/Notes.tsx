import React from "react";
import Note from "./Note";
import { NotesList } from "../styles/NotesStyles";

const notes = [
  {
    title: "Note 1",
    content: "Note content"
  },
  {
    title: "Note 2",
    content: "Note content"
  },
  {
    title: "Note 3",
    content: "Note content"
  },
  {
    title: "Note 4",
    content: "Note content"
  },
  {
    title: "Note 5",
    content: "Note content"
  },
  {
    title: "Note 6",
    content: "Note content"
  },
  {
    title: "Note 7",
    content: "Note content"
  },
  {
    title: "Note 8",
    content: "Note content"
  },
  {
    title: "Note 9",
    content: "Note content"
  },
  {
    title: "Note 10",
    content: "Note content"
  },
  {
    title: "Note 11",
    content: "Note content"
  }
];

const Notes = () => {
  return (
    <NotesList>
      {notes.map(note => (
        <Note note={note} />
      ))}
    </NotesList>
  );
};

export default Notes;
