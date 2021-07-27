import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [count, setCount] = useState(localStorage.getItem("count") || 0);

  useEffect(() => {
    localStorage.setItem("text", text);
    localStorage.setItem("count", count);
  }, [text, count]);

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
