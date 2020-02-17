import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
} 
html, body {
  font-weight: 300;
  line-height: 1.3;
  font-size: 16px;
  margin: 0;
  font-family: Sf Pro Display, 'Roboto', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const NoteTitle = styled.h4`
  font-size: 1.1em;
  font-weight: 400;
`;
