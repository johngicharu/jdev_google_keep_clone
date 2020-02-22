export type NoteType = {
  id: string;
  title: string;
  content: string;
};

export type GlobalState = {
  activeNote: null | NoteType;
  notes: NoteType[];
  addingNote: boolean;
};
