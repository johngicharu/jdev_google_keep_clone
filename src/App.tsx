import React from "react";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import { GlobalStyles, Container } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <AddNote />
      <Notes />
    </Container>
  );
};

export default App;
