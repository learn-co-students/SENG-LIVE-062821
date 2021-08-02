import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Sans MS", sans-serif;
    color: red;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: blue;
  }

  h1 {
    color: blue;
  }

  p {
    color: purple;
  }

  /* ✅ try adding a global style to all the h1 and p tags */
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <NavBar>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </NavBar>
        <MainContent>
          <Section id="home">
            <h1>Home</h1>
          </Section>
          <Section id="about">
            <h1>About</h1>
            <p>About Me</p>
          </Section>
        </MainContent>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  width: 80%;
  height: 80%;
  min-height: 500px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: lavender;
  padding: 16px;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-rows: 50% 50%;
  background: aliceblue;
`;

const Section = styled.section`
  display: grid;
  place-content: center;
  text-align: center;
`;
