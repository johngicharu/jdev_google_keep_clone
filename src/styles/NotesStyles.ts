import styled from "styled-components";

export const NotesList = styled.div`
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.5em;
  padding: 0.5em;
  margin: 0 auto;
`;
