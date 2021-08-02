import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
  padding: 8px 16px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #6772e5;
  border: 1px solid #6772e5;

  &:hover {
    background-color: #5469d4;
  }
`;

export default function App() {
  return <StyledButton>I'm a StyledButton</StyledButton>;
}
