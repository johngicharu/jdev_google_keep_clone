import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import { GlobalStyles, Container, Backdrop } from "./styles/GlobalStyles";
import {darkTheme, lightTheme} from "./styles/theme";
import { GlobalState, NoteType } from "./global";
import ActiveNote from "./components/ActiveNote";

class App extends React.Component {
	state: GlobalState = {
		activeNote: null,
		addingNote: false,
		darkThemeActive: false,
		notes: [
		]
	};

	componentDidMount() {
		const appData = localStorage.getItem("jdev-google-keep");

		if (appData) {
			this.setState({...JSON.parse(appData)})
		} else {
			localStorage.setItem("jdev-google-keep", JSON.stringify({darkThemeActive: this.state.darkThemeActive, notes: this.state.notes}));
		}

		window.addEventListener("click", e => {
			if (!(e.target as HTMLElement).classList.contains("ignore")) {
				!(e.target as HTMLElement).classList.contains("addNote") &&
					this.setState({ ...this.state, addingNote: false, activeNote: null });
			}
		});
	}

	componentDidUpdate() {
		const stringifiedState = JSON.stringify({
			darkThemeActive: this.state.darkThemeActive,
			notes: this.state.notes
		});
		const appData = localStorage.getItem("jdev-google-keep");
		if (!appData || stringifiedState.length !== appData.length) {
			localStorage.setItem("jdev-google-keep", stringifiedState);
		}
	}

	setNoteActive = (note: NoteType | null) => {
		this.setState({ ...this.state, activeNote: note, addingNote: false });
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

	switchTheme = () => {
		this.setState({darkThemeActive: !this.state.darkThemeActive})
	}

	render() {
		const { notes, activeNote, addingNote, darkThemeActive } = this.state;

		return (
			<ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
				<Container>
					<GlobalStyles />
					<Header switchTheme={this.switchTheme} darkThemeActive={darkThemeActive} />
					<AddNote
						setAddingNote={this.setAddingNote}
						addingNote={addingNote}
						addNote={this.addNote}
					/>
					{
						notes.length > 0 ?
						<Notes notes={notes} setNoteActive={this.setNoteActive} />
						: <p>Your Notes will appear here</p>

					}
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
