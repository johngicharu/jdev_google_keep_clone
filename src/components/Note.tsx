import React from "react";
import { Card, NoteTitle } from "../styles/GlobalStyles";

const Note = ({ note }: { note: { title: string; content: string } }) => {
  return (
    <Card>
      <NoteTitle>{note.title}</NoteTitle>
      <p>{note.content}</p>
    </Card>
  );
};

export default Note;
