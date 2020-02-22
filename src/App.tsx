import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import { GlobalStyles, Container, Backdrop } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { GlobalState, NoteType } from "./global";
import ActiveNote from "./components/ActiveNote";

class App extends React.Component {
	state: GlobalState = {
		activeNote: null,
		addingNote: false,
		notes: [
			{
				id: "1",
				title: "Note 1",
				content: "Note content"
			}
		]
	};

	componentDidMount() {
		window.addEventListener("click", e => {
			if (!(e.target as HTMLElement).classList.contains("ignore")) {
				!(e.target as HTMLElement).classList.contains("addNote") &&
					this.setState({ ...this.state, addingNote: false, activeNote: null });
			}
		});
	}

	setNoteActive = (note: NoteType | null) => {
		this.setState({ ...this.state, activeNote: note });
	};

	setAddingNote = (addingNote: boolean) => {
		this.setState({ ...this.state, addingNote: addingNote });
	};

	addNote = (note: NoteType) => {
		this.setState({ notes: this.state.notes.push(note), addingNote: false });
	};

	saveNote = (note: NoteType) => {
		this.setState({
			notes: this.state.notes.map(n => {
				if (n.id === note.id) {
					return note;
				} else {
					return n;
				}
			})
		});
	};

	deleteNote = (id: string) => {
		this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
	};

	render() {
		const { notes, activeNote, addingNote } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Container>
					<GlobalStyles />
					<Header />
					<AddNote
						setAddingNote={this.setAddingNote}
						addingNote={addingNote}
						addNote={this.addNote}
					/>
					<Notes notes={notes} setNoteActive={this.setNoteActive} />
					{this.state.activeNote && (
						<>
							<ActiveNote
								setNoteActive={this.setNoteActive}
								deleteNote={this.deleteNote}
								saveNoteChanges={this.saveNote}
								selectedNote={activeNote!}
							/>
							<Backdrop />
						</>
					)}
				</Container>
			</ThemeProvider>
		);
	}
}

export default App;
