import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  primary: "aliceblue",
  color: "blue",
  background: "white",
};

const darkTheme = {
  primary: "rebeccapurple",
  color: "white",
  background: "black",
};

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button onClick={() => setTheme(lightTheme)}>Use Light Theme</Button>
        <Button onClick={() => setTheme(darkTheme)}>Use Dark Theme</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  padding: 16px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background: ${props => props.theme.background};
  width: 80%;
  height: 300px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  display: grid;
  place-items: center;
`;
