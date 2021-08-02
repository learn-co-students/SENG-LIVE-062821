import styled from "styled-components";

const Button = styled.button`
  background: dodgerblue;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms ease;
  color: white;
  text-decoration: none;
  font: 1rem sans-serif;

  &:hover {
    background: blueviolet;
    color: white;
  }

  &:focus {
    background: hotpink;
    color: white;
  }
`;

export default function NavBar() {
  // ✅ update the <a> elements to use the Button component instead, with the "as" prop
  // they should still also have the href prop (since we want them to be links)
  return (
    <Wrapper>
      <a href="#home">Home</a>
      <a href="#login">Login</a>
      <a href="#signup">Signup</a>
      <Button>Logout</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 80%;
  margin: 0 auto;
  padding: 16px;
`;
