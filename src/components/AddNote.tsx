import React, { Component } from "react";
import { AddNoteCard } from "../styles/AddNoteCard";
import Title from "./Title";
import NoteContent from "./NoteContent";
import AddNoteActions from "./AddNoteActions";
import textAreaAutoHeight from "../utils/textareaHeight";
import uuid from "uuid/v4";
import { NoteType } from "../global";

type AddNoteProps = {
	setAddingNote: (addingNote: boolean) => void;
	addingNote: boolean;
	addNote: (note: NoteType) => void;
};

class AddNote extends Component<AddNoteProps> {
	state = {
		isActive: false,
		title: "",
		content: ""
	};

	setActive = () => {
		this.props.setAddingNote(true);
	};

	saveNote = () => {
		const note = {
			title: this.state.title,
			content: this.state.content
		};
		if (note.title.trim() !== "" || note.content.trim() !== "") {
			this.props.addNote({ id: uuid(), ...note });
			this.setState({ title: "", content: "" });
		}
	};

	handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
		if (e.target.name === "content") {
			textAreaAutoHeight(e.target as HTMLTextAreaElement, 5, 10);
		}
	};

	render() {
		const { addingNote }: AddNoteProps = this.props;
		const { title, content } = this.state;

		return (
			<AddNoteCard onClick={this.setActive} className="ignore addNote">
				<Title
					onChangeHandler={this.handleChange}
					noteTitle={title}
					active={addingNote}
				/>
				<NoteContent
					onChangeHandler={this.handleChange}
					noteContent={content}
					active={addingNote}
				/>
				<AddNoteActions active={addingNote} saveHandler={this.saveNote} />
			</AddNoteCard>
		);
	}
}

export default AddNote;
