import styled, { ThemeProvider } from "styled-components";
import { useState } from 'react';

const lightTheme = {
  primary: "aliceblue",
  color: "blue",
  background: "white",
};

// ✅ uncomment the darkTheme ⬇️
// const darkTheme = {
//   primary: "rebeccapurple",
//   color: "white",
//   background: "black",
// };

export default function App() {
  // ✅ use the useState hook to make a state variable for theme
  const [theme, setTheme] = useState(lightTheme);

  // ✅ add click handlers to each button, and set state to change the theme
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button>Use Light Theme</Button>
        <Button>Use Dark Theme</Button>
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
