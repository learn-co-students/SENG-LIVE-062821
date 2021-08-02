import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  gap: 16px;
  place-content: center;
  background: skyblue;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  background: dodgerblue;
  padding: 16px;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
`;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
    </Box>
  );
}
